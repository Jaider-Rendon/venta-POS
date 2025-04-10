package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Factura;
import com.example.demo.modelo.DetalleVenta;
import com.example.demo.repositorio.detalleVenta_Repositorio;
import com.example.demo.repositorio.facturaRepositorio;

@RestController
@RequestMapping("/Detalle_venta")
@CrossOrigin(origins = "http://localhost:4200")
public class detalleVenta_Controlador {
	
	@Autowired 
	private detalleVenta_Repositorio repositorio;

	
	@PostMapping("/guardar")
    public DetalleVenta guardarDetalle(@RequestBody DetalleVenta nuevoDetalle) { 
        return this.repositorio.save(nuevoDetalle);
    }
}
