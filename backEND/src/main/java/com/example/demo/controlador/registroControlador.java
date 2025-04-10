package com.example.demo.controlador;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Cliente;
import com.example.demo.repositorio.registroRepositorio;

@RestController
@RequestMapping("/Registro")
@CrossOrigin(origins = "http://localhost:4200")




public class registroControlador {
	
	@Autowired 
	private registroRepositorio repositorio;
	

	@PostMapping("/guardar")
	public ResponseEntity<?> guardarUsuario(@RequestBody Cliente nuevoCliente) {
	    Optional<Cliente> clienteExistente = repositorio.findById(nuevoCliente.getCedulaC());

	    if (clienteExistente.isPresent()) {
	        // Ya existe un cliente con esa cédula
	        return ResponseEntity.status(HttpStatus.CONFLICT).body("El cliente ya está registrado.");
	    } else {
	        // No existe, lo guardamos
	        Cliente clienteGuardado = repositorio.save(nuevoCliente);
	        return ResponseEntity.ok(clienteGuardado);
	    }
	}


}
