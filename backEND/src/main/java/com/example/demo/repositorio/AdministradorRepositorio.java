package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Administrador;

public interface AdministradorRepositorio  extends JpaRepository <Administrador,Long> {

}
