package com.example.demo.repositorio;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.DetalleVenta;

@Repository
public interface detalleVenta_Repositorio extends JpaRepository<DetalleVenta,Long> {


}

