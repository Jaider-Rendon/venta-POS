package com.example.demo.controlador;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
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

import com.example.demo.dto.FacturaRespuesta;
import com.example.demo.dto.detalleVentaConImpuestos;
import com.example.demo.dto.facturaCompleta;
import com.example.demo.modelo.AsignarImpuesto;
import com.example.demo.modelo.Factura;
import com.example.demo.modelo.Impuesto;
import com.example.demo.modelo.Producto;
import com.example.demo.modelo.PuntoVenta;
import com.example.demo.modelo.DetalleVenta;
import com.example.demo.repositorio.PuntoVentaRepositorio;
import com.example.demo.repositorio.asignarImpuestoRepositorio;
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
    
    @Autowired
    private asignarImpuestoRepositorio repositorioI;
    
    @Autowired
    private PuntoVentaRepositorio repositoriopv;


    @PostMapping("/guardar")
    public ResponseEntity<?> guardarFacturaCompleta(@RequestBody facturaCompleta dto) {
        try {
            float total = 0f;
            List<DetalleVenta> detalles = new ArrayList<>();
            List<detalleVentaConImpuestos> detallesConImpuestos = new ArrayList<>();

            for (DetalleVenta detalleDTO : dto.getDetalles()) {
                Producto producto = detalleDTO.getProducto();

                if (producto.getStock() < detalleDTO.getCantidad()) {
                    return ResponseEntity.badRequest().body("Stock insuficiente para el producto: " + producto.getNombre() + " Actualmente hay " + producto.getStock()+" Quieres comprar los disponibles?");
                }

                // Restar stock
                long nuevoStock = producto.getStock() - detalleDTO.getCantidad();
                producto.setStock(nuevoStock);
                repositorioP.save(producto);
                
                //Crear PuntoVenta
                LocalDate hoy = LocalDate.now();
        	    Date fecha = Date.from(hoy.atStartOfDay(ZoneId.systemDefault()).toInstant());
        	    java.sql.Date sqlFecha = new java.sql.Date(fecha.getTime());
        	    int cantidad = detalleDTO.getCantidad().intValue();
        	    Long idP = producto.getIdProducto();
        	    PuntoVenta pv = new PuntoVenta (sqlFecha,cantidad,idP);
        	    repositoriopv.save(pv);

                // Crear detalleVenta
                DetalleVenta detalle = new DetalleVenta();
                detalle.setProducto(producto);
                detalle.setCantidad(detalleDTO.getCantidad());

                float subtotal = producto.getPrecioCompra() * detalleDTO.getCantidad();
                total += subtotal;

                detalles.add(detalle);

                // Obtener los impuestos asociados a este producto
                List<AsignarImpuesto> asignaciones = repositorioI.findByProducto(producto);
                List<Impuesto> impuestos = asignaciones.stream()
                                                       .map(AsignarImpuesto::getImpuesto)
                                                       .toList();

                // Crear DTO con impuestos
                detalleVentaConImpuestos detalleConImpuesto = new detalleVentaConImpuestos();
                detalleConImpuesto.setProducto(producto);
                detalleConImpuesto.setCantidad(detalleDTO.getCantidad());
                detalleConImpuesto.setImpuestos(impuestos);

                detallesConImpuestos.add(detalleConImpuesto);
            }

            // Crear y guardar la factura
            Factura factura = dto.getFactura();
            factura.setTotal(total);
            factura = repositorio.save(factura);

            for (DetalleVenta detalle : detalles) {
                detalle.setFactura(factura);
            }
            repositorioD.saveAll(detalles);

            // Armar respuesta
            FacturaRespuesta respuesta = new FacturaRespuesta();
            respuesta.setMensaje("Factura guardada exitosamente");
            respuesta.setFactura(factura);
            respuesta.setDetalles(detallesConImpuestos);

            return ResponseEntity.ok(respuesta);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al guardar la factura: " + e.getMessage());
        }
    }


    @GetMapping("/buscar")
    public Optional<Factura> obtenerDetallesPorFactura(@RequestParam Long idF) {  
        return this.repositorio.findById(idF);
    }

    @GetMapping("/reporteDiarioV")
    public ResponseEntity<List<Map<String, Object>>> reporteDiarioV(@RequestParam Long cedula, @RequestParam LocalDate fecha) {  
        List<Map<String, Object>> reporte = this.repositorio.findVentasPorDiaV(cedula, fecha);
        return ResponseEntity.ok(reporte);
    }

    @GetMapping("/reporteDiarioC")
    public ResponseEntity<List<Map<String, Object>>> reporteDiarioC(@RequestParam Long cedula, @RequestParam LocalDate fecha) {  
        List<Map<String, Object>> reporte = this.repositorio.findVentasPorDiaC(cedula, fecha);
        return ResponseEntity.ok(reporte);
    }
    
    @GetMapping("/reporteMensualV")
    public ResponseEntity<List<Map<String, Object>>> reporteMensualV(@RequestParam Long cedula, @RequestParam String fecha) {  
        List<Map<String, Object>> reporte = this.repositorio.findVentasMensualesV(cedula, fecha);
        return ResponseEntity.ok(reporte);
    }
    
    @GetMapping("/reporteMensualC")
    public ResponseEntity<List<Map<String, Object>>> reporteMensualC(@RequestParam Long cedula, @RequestParam String fecha) {  
        List<Map<String, Object>> reporte = this.repositorio.findVentasMensualesC(cedula, fecha);
        return ResponseEntity.ok(reporte);
    }
    
    @GetMapping("/reporteEntreFechas")
    public ResponseEntity<List<Map<String, Object>>> reporteEntreFechas(
    		@RequestParam LocalDate inicio,
    		@RequestParam LocalDate fin) {

        List<Map<String, Object>> reporte = this.repositorio.findVentasEntreFechas(inicio, fin);
        return ResponseEntity.ok(reporte);
    }

    
    
    
}
