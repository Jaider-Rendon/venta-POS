package com.example.demo.controlador;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Cliente;

import com.example.demo.repositorio.registroRepositorio;



@RestController
@RequestMapping("/Cliente")
@CrossOrigin(origins = "http://localhost:4200")
public class clienteControlador {
	@Autowired 
	private registroRepositorio repositorio;
	
	 @GetMapping("/buscar1")
	 public Optional<Cliente> vendedor(@RequestParam Long cedulaC) {	 
		return this.repositorio.findById(cedulaC);
		 
	 }

}
