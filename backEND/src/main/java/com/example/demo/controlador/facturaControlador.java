package com.example.demo.controlador;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.modelo.Factura;

import com.example.demo.repositorio.facturaRepositorio;


@RestController
@RequestMapping("/Factura")
@CrossOrigin(origins = "http://localhost:4200")

public class facturaControlador {

	@Autowired 
	private facturaRepositorio repositorio;
	

	
	@PostMapping("/guardar")
    public Factura guardarUsuario(@RequestBody Factura nuevaFactura) { 
        return this.repositorio.save(nuevaFactura);
    }
	
	@GetMapping("/buscar")
	public Optional<Factura> obtenerDetallesPorFactura(@RequestParam Long idF) {  
	    return this.repositorio.findById(idF);
	}
}
