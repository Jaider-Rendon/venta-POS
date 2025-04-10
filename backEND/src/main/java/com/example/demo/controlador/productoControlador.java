package com.example.demo.controlador;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.AsignarImpuesto;
import com.example.demo.modelo.Impuesto;
import com.example.demo.modelo.Producto;
import com.example.demo.repositorio.asignarImpuestoRepositorio;
import com.example.demo.repositorio.detalleVenta_Repositorio;
import com.example.demo.repositorio.impuestoRepositorio;
import com.example.demo.repositorio.productoRepositorio;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = "http://localhost:4200") 
public class productoControlador {

    @Autowired 
    private productoRepositorio repositorio;
	@Autowired 
	private detalleVenta_Repositorio repositoriod;
    @Autowired 
    private asignarImpuestoRepositorio repositorioI;
    @Autowired 
    private impuestoRepositorio repositorioIm;
	
    @GetMapping("/buscarC")
    public List<Map<String, Object>> buscar(@RequestParam String id) {
        return this.repositorio.findByIdC(id);
    }

    
    @GetMapping("/buscar")
    public Optional<Producto> buscarProducto(@RequestParam(required = false) Long idPro,
                                             @RequestParam(required = false) String nombre) {
        return repositorio.findByIdN(idPro, nombre);
    }

    
    @GetMapping("/buscarPorTipo")
    public List<Map<String, Object>> buscarPorTipo(@RequestParam String tipo) {
        System.out.println("Buscando productos por tipo: " + tipo);

        List<Object[]> resultadosQuery = repositorio.obtenerProductosVendidosPorTipo(tipo);

        if (resultadosQuery == null || resultadosQuery.isEmpty()) {
            System.out.println("No se encontraron productos para el tipo: " + tipo);
            return new ArrayList<>();
        }

        List<Map<String, Object>> resultado = new ArrayList<>();

        for (Object[] fila : resultadosQuery) {
            if (fila != null && fila.length >= 5) {
                Map<String, Object> productoInfo = new HashMap<>();
                productoInfo.put("idProducto", fila[0] != null ? ((Number) fila[0]).longValue() : null);
                productoInfo.put("nombreProducto", fila[1] != null ? fila[1].toString() : "");
                productoInfo.put("precioUnitario", fila[2] != null ? ((Number) fila[2]).doubleValue() : 0.0);
                productoInfo.put("cantidadVendida", fila[3] != null ? ((Number) fila[3]).longValue() : 0L);
                productoInfo.put("totalGenerado", fila[4] != null ? ((Number) fila[4]).doubleValue() : 0.0);

                resultado.add(productoInfo);
            }
        }
        return resultado;
    }


    @GetMapping("/gestionarImpuestos")
    public boolean gestionarImpuestos(@RequestParam String tipo,
                                      @RequestParam Long nuevoImpuesto) {

        List<AsignarImpuesto> asignaciones = repositorioI.findAll();
        boolean cambio = false;

        for (AsignarImpuesto asignacion : asignaciones) {
            if (asignacion.getProducto().getTipo().equalsIgnoreCase(tipo.toLowerCase())) {
                // Actualizar el impuesto
                Impuesto impuesto = asignacion.getImpuesto();
                impuesto.setClaveporcentaje(nuevoImpuesto);
                repositorioIm.save(impuesto);

                // Calcular nuevo precio de compra con impuesto
                Producto producto = asignacion.getProducto();
                Float precioBase = producto.getPrecioUnitario();
                Float impuestoDecimal = nuevoImpuesto.floatValue() / 100;
                Float precioConImpuesto = precioBase + (precioBase * impuestoDecimal);

                // Actualizar y guardar el nuevo precio
                producto.setPrecioCompra(precioConImpuesto);
                repositorio.save(producto); // Asegúrate de tener este repositorio
                cambio = true;
            }
        }

        return cambio;
    }


    


}

