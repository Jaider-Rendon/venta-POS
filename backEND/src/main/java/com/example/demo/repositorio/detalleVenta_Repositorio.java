package com.example.demo.repositorio;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.detalleVenta;

@Repository
public interface detalleVenta_Repositorio extends JpaRepository<detalleVenta,Long> {



}

