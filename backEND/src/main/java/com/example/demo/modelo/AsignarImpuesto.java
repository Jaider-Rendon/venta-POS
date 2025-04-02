package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "AsignarImpuesto")


public class AsignarImpuesto {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "idAsg")
	    private Long idAsg;
	 
	 @ManyToOne
	 @JoinColumn(name = "idImpuesto", referencedColumnName = "idImpuesto")
	    private  Impuesto Impuesto;
	 
	 @ManyToOne
	 @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
	    private  Producto Producto;

	public AsignarImpuesto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AsignarImpuesto(Long idAsg, com.example.demo.modelo.Impuesto impuesto,
			com.example.demo.modelo.Producto producto) {
		super();
		this.idAsg = idAsg;
		Impuesto = impuesto;
		Producto = producto;
	}

	public Long getIdAsg() {
		return idAsg;
	}

	public void setIdAsg(Long idAsg) {
		this.idAsg = idAsg;
	}

	public Impuesto getImpuesto() {
		return Impuesto;
	}

	public void setImpuesto(Impuesto impuesto) {
		Impuesto = impuesto;
	}

	public Producto getProducto() {
		return Producto;
	}

	public void setProducto(Producto producto) {
		Producto = producto;
	}
	 


}
