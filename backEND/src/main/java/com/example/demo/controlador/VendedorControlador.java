package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repositorio.VendedorRepositorio;



@RestController
@RequestMapping("/Vendedor")
@CrossOrigin(origins = "http://localhost:4200")
public class VendedorControlador {
	@Autowired 
	private VendedorRepositorio repositorio;
	
	 @GetMapping("/login")
	    public boolean loginAdmin(@RequestParam Long usuario1, @RequestParam Long clavead1) {
	        return this.repositorio.findAll().stream()
	            .anyMatch(admin -> admin.getCedulaV().equals(usuario1) 
	                             && admin.getClave().equals(clavead1));
	        
	        
	        
	    }

}
