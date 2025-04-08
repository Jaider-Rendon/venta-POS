package com.example.demo.controlador;

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
import com.example.demo.repositorio.impuestoRepositorio;
import com.example.demo.repositorio.productoRepositorio;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = "http://localhost:4200") 
public class productoControlador {

    @Autowired 
    private productoRepositorio repositorio;
    @Autowired 
    private asignarImpuestoRepositorio repositorioI;
    @Autowired 
    private impuestoRepositorio repositorioIm;
	
    @GetMapping("/buscar")
    public Map<String, Object> vendedor(@RequestParam Long id) {  
        return this.repositorio.findByIdC(id);
    }
    
    @GetMapping("/buscarPorTipo")
    public List<Producto> buscarPorTipo(@RequestParam String tipo) {
        return repositorio.findByTipo(tipo);
    }
    

    @GetMapping("/gestionarImpuestos")
    public boolean gestionarImpuestos(@RequestParam Long idProducto, 
                                      @RequestParam Long nuevoImpuesto) {
        List<AsignarImpuesto> asignaciones = repositorioI.findAll();
        boolean cambio = false;

        for (AsignarImpuesto asignacion : asignaciones) {
            if (asignacion.getProducto().getIdProducto().equals(idProducto)) {
            	Impuesto impuesto = asignacion.getImpuesto(); // obtener impuesto actual
                impuesto.setClaveporcentaje(nuevoImpuesto); // cambiar el valor del impuesto
                this.repositorioIm.save(impuesto); // guardar el cambio
                cambio = true;
            }
        }

        return cambio;
    }

    


}

