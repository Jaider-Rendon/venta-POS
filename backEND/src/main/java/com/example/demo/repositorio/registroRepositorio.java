package com.example.demo.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Cliente;


@Repository 
public interface registroRepositorio extends JpaRepository <Cliente,Long>{
	Optional<Cliente> findByCedulaC(Long cedulaC);

}
