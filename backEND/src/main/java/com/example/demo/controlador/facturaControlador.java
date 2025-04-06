package com.example.demo.controlador;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.facturaCompleta;
import com.example.demo.modelo.Factura;
import com.example.demo.modelo.Producto;
import com.example.demo.modelo.detalleVenta;
import com.example.demo.repositorio.detalleVenta_Repositorio;
import com.example.demo.repositorio.facturaRepositorio;
import com.example.demo.repositorio.productoRepositorio;


@RestController
@RequestMapping("/Factura")
@CrossOrigin(origins = "http://localhost:4200")

public class facturaControlador {

	@Autowired 
	private facturaRepositorio repositorio;
	
	@Autowired 
	private detalleVenta_Repositorio repositorioD;
	
	@Autowired 
	private productoRepositorio repositorioP;


	@PostMapping("/guardar")
	public ResponseEntity<?> guardarFacturaCompleta(@RequestBody facturaCompleta dto) {
	    try {
	        float total = 0f;
	        List<detalleVenta> detalles = new ArrayList<>();

	        // 1. Calcular el total y construir los detalles
	        for (detalleVenta detalleDTO : dto.getDetalles()) {
	            Producto producto = detalleDTO.getProducto();

	            // Validar stock disponible
	            if (producto.getStock() < detalleDTO.getCantidad()) {
	                return ResponseEntity.badRequest().body("Stock insuficiente para el producto: " + producto.getNombre());
	            }

	            // Actualizar stock del producto
	            long nuevoStock = producto.getStock() - detalleDTO.getCantidad();
	            producto.setStock(nuevoStock);
	            repositorioP.save(producto); // Asegúrate de tener este repositorio inyectado

	            detalleVenta detalle = new detalleVenta();
	            detalle.setProducto(producto);
	            detalle.setCantidad(detalleDTO.getCantidad());

	            float subtotal = producto.getPrecioCompra() * detalleDTO.getCantidad();
	            total += subtotal;

	            detalles.add(detalle);
	        }

	        // 2. Crear factura con el total
	        Factura factura = dto.getFactura();
	        factura.setTotal(total);
	        factura = repositorio.save(factura);

	        // 3. Asociar factura a cada detalle y guardar
	        for (detalleVenta detalle : detalles) {
	            detalle.setFactura(factura);
	        }
	        repositorioD.saveAll(detalles);

	        return ResponseEntity.ok(Map.of("mensaje", "Factura y detalles guardados correctamente"));
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Error al guardar la factura: " + e.getMessage());
	    }
	}


	@GetMapping("/buscar")
	public Optional<Factura> obtenerDetallesPorFactura(@RequestParam Long idF) {  
	    return this.repositorio.findById(idF);
	}
}

