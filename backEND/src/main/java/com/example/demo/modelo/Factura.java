package com.example.demo.modelo;



import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Factura")

public class Factura {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idFactura")
    private Long idFactura;
	
	 @Temporal(TemporalType.DATE)
	    @DateTimeFormat(pattern = "MM/dd/yyyy")
	 @Column(name = "fechaFactura", nullable = false)
	    private Date fechaFactura;
	 
	 @Column(name = "total")
	    private Long total;
	 
	 @ManyToOne
	 @JoinColumn(name = "cedulaC", referencedColumnName = "cedulaC")
	    private  Cliente Cliente;
	 
	 @ManyToOne
	 @JoinColumn(name = "cedulaV", referencedColumnName = "cedulaV")
	    private  Vendedor vendedor;

	public Factura() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Factura(Long idFactura, Date fechaFactura, Long total, com.example.demo.modelo.Cliente cliente,
			Vendedor vendedor) {
		super();
		this.idFactura = idFactura;
		this.fechaFactura = fechaFactura;
		this.total = total;
		Cliente = cliente;
		this.vendedor = vendedor;
	}

	public Long getIdFactura() {
		return idFactura;
	}

	public void setIdFactura(Long idFactura) {
		this.idFactura = idFactura;
	}

	public Date getFechaFactura() {
		return fechaFactura;
	}

	public void setFechaFactura(Date fechaFactura) {
		this.fechaFactura = fechaFactura;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

	public Cliente getCliente() {
		return Cliente;
	}

	public void setCliente(Cliente cliente) {
		Cliente = cliente;
	}

	public Vendedor getVendedor() {
		return vendedor;
	}

	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}

}