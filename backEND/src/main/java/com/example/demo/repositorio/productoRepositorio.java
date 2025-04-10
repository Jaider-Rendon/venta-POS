package com.example.demo.repositorio;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.modelo.Producto;

public interface productoRepositorio extends JpaRepository<Producto, Long> {

    List<Producto> findByTipo(String tipo);

    @Query("SELECT p.idProducto, p.nombre, p.precioUnitario, SUM(dv.cantidad), SUM(dv.cantidad * p.precioUnitario) " +
           "FROM DetalleVenta dv " +
           "JOIN dv.producto p " +
           "WHERE p.tipo = :tipo " +
           "GROUP BY p.idProducto, p.nombre, p.precioUnitario")
    List<Object[]> obtenerProductosVendidosPorTipo(@Param("tipo") String tipo);

    @Query(value = "SELECT P.id_producto AS id_producto, P.nombre AS nombre_producto, P.stock AS cantidad, " +
                   "P.precio_compra AS precio_compra, I.nombre AS nombre_impuesto, I.porcentaje AS porcentaje " +
                   "FROM producto P " +
                   "JOIN asignar_impuesto A ON P.id_producto = A.id_producto " +
                   "JOIN impuesto I ON A.id_impuesto = I.id_impuesto " +
                   "WHERE P.tipo = :id",
           nativeQuery = true)
    List<Map<String, Object>> findByIdC(@Param("id") String id);

    @Query(value = "SELECT * from producto P Where P.id_producto = :idPro OR P.nombre = :nombre", nativeQuery = true)
    Optional<Producto> findByIdN(@Param("idPro") Long idPro, @Param("nombre") String nombre);
}
