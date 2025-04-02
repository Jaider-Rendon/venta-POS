package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Vendedor;

public interface VendedorRepositorio extends JpaRepository <Vendedor,Long>{

}
