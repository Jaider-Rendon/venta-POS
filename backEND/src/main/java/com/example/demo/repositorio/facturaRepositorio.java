package com.example.demo.repositorio;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Factura;

@Repository
public interface facturaRepositorio extends JpaRepository<Factura, Long> {

    @Query(value = "SELECT f.id_factura, c.nombre1, f.cedulac, v.nombre, v.cedulav, p.nombre, d.cantidad, " +
                   "p.precio_compra, f.total FROM factura f " +
                   "JOIN detalle_venta d ON f.id_factura = d.factura_id " +
                   "JOIN producto p ON d.id_producto = p.id_producto " +
                   "JOIN cliente c ON f.cedulac = c.cedulac " +
                   "JOIN vendedor v ON f.cedulav = v.cedulav " +
                   "WHERE f.cedulav = :cedula AND DATE(f.fecha_factura) = :fecha",
           nativeQuery = true)
    List<Map<String, Object>> findVentasPorDiaV(@Param("cedula") Long cedula, @Param("fecha") LocalDate fecha);

    @Query(value = "SELECT f.id_factura, c.nombre1, f.cedulac, v.nombre, v.cedulav, p.nombre, d.cantidad, " +
                   "p.precio_compra, f.total FROM factura f " +
                   "JOIN detalle_venta d ON f.id_factura = d.factura_id " +
                   "JOIN producto p ON d.id_producto = p.id_producto " +
                   "JOIN cliente c ON f.cedulac = c.cedulac " +
                   "JOIN vendedor v ON f.cedulav = v.cedulav " +
                   "WHERE f.cedulac = :cedula AND DATE(f.fecha_factura) = :fecha",
           nativeQuery = true)
    List<Map<String, Object>> findVentasPorDiaC(@Param("cedula") Long cedula, @Param("fecha") LocalDate fecha);
}
