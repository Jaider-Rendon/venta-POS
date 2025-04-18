package com.example.demo.modelo;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PuntoVenta")
public class PuntoVenta {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "idPos")
	    private Long idPos;

	    @JsonFormat(pattern = "yyyy-MM-dd")
	    @Column(name = "fechaVenta")
	    private Date fechaVenta;

	    @Column(name = "cantidadVendido")
	    private int cantidadVendido;
	    
	    @Column (name="idProducto")
	    private Long idProducto;
	    
		public PuntoVenta() {
			super();
			// TODO Auto-generated constructor stub
		}

		public PuntoVenta(Date fechaVenta,  int cantidadVendido, Long idProducto) {
			super();
			this.fechaVenta = fechaVenta;
			this.cantidadVendido = cantidadVendido;
			this.idProducto = idProducto;
		}

		public Long getIdPos() {
			return idPos;
		}


		public Date getFechaVenta() {
			return fechaVenta;
		}

		public void setFechaVenta(Date fechaVenta) {
			this.fechaVenta = fechaVenta;
		}



		public int getCantidadVendido() {
			return cantidadVendido;
		}

		public void setCantidadVendido(int cantidadVendido) {
			this.cantidadVendido = cantidadVendido;
		}


}
