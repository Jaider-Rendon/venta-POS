package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
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
    public Cliente guardarUsuario(@RequestBody Cliente nuevoCliente) { 
        return repositorio.save(nuevoCliente);
    }
}
