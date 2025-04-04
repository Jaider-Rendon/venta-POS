package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Factura;

@Repository
public interface facturaRepositorio extends JpaRepository<Factura,Long> {

}
