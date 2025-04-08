package com.example.demo.controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Producto;
import com.example.demo.repositorio.productoRepositorio;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = "http://localhost:4200") 
public class productoControlador {

    @Autowired 
    private productoRepositorio repositorio;
	
    @GetMapping("/buscar")
    public Optional<Producto> vendedor(@RequestParam Long idPro) {  
        return this.repositorio.findById(idPro);
    }
    
    @GetMapping("/buscarPorTipo")
    public List<Producto> buscarPorTipo(@RequestParam String tipo) {
        return repositorio.findByTipo(tipo);
    }

}

