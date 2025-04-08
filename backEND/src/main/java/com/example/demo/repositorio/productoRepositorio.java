package com.example.demo.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.modelo.Producto;

public interface productoRepositorio extends JpaRepository<Producto, Long> {
	 List<Producto> findByTipo(String tipo);
}