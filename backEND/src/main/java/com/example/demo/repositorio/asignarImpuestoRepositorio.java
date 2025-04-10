package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.AsignarImpuesto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.modelo.Producto;

public interface asignarImpuestoRepositorio extends JpaRepository<AsignarImpuesto, Long> {
    List<AsignarImpuesto> findByProducto(Producto producto);
}
