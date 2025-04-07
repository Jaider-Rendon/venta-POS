package com.example.demo.dto;

public class reporteDiario {

	public class VentaDiariaDTO {
	    private Long idFactura;
	    private String cliente;
	    private String producto;
	    private int cantidad;
	    private float precio;
	    private float total;

	    public VentaDiariaDTO(Long idFactura, String cliente, String producto, int cantidad, float precio, float total) {
	        this.idFactura = idFactura;
	        this.cliente = cliente;
	        this.producto = producto;
	        this.cantidad = cantidad;
	        this.precio = precio;
	        this.total = total;
	    }

		public Long getIdFactura() {
			return idFactura;
		}

		public void setIdFactura(Long idFactura) {
			this.idFactura = idFactura;
		}

		public String getCliente() {
			return cliente;
		}

		public void setCliente(String cliente) {
			this.cliente = cliente;
		}

		public String getProducto() {
			return producto;
		}

		public void setProducto(String producto) {
			this.producto = producto;
		}

		public int getCantidad() {
			return cantidad;
		}

		public void setCantidad(int cantidad) {
			this.cantidad = cantidad;
		}

		public float getPrecio() {
			return precio;
		}

		public void setPrecio(float precio) {
			this.precio = precio;
		}

		public float getTotal() {
			return total;
		}

		public void setTotal(float total) {
			this.total = total;
		}

	}
}
