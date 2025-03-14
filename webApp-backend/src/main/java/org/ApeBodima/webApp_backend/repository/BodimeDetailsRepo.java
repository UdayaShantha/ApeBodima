package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository//Repository: This annotation is used to indicate that the class is a repository.
// Spring will automatically detect and manage beans annotated with @Repository.
@EnableJpaRepositories
public interface BodimeDetailsRepo extends JpaRepository<Bodime_Detail, String> {

    Page<Bodime_Detail> findAllByCapacity(Pageable pageable, int capacity);

    Page<Bodime_Detail> findAllByDistanceToUniLessThanEqual(Pageable pageable, double distance);

    Page<Bodime_Detail> findAllByNearestCity(Pageable pageable, String nearestCity);

    @Query("SELECT b FROM Bodime_Detail b WHERE (:nearestCity IS NULL OR b.nearestCity LIKE %:nearestCity%) AND (:minPrice IS NULL OR b.price >= :minPrice) AND (:maxPrice IS NULL OR b.price <= :maxPrice) AND (:minDistance IS NULL OR b.distanceToUni >= :minDistance) AND (:maxDistance IS NULL OR b.distanceToUni <= :maxDistance) AND (:capacity IS NULL OR b.capacity = :capacity)")
    Page<Bodime_Detail> filterByCriteria(Pageable pageable, @Param("nearestCity") String nearestCity, @Param("minPrice") Double minPrice, @Param("maxPrice") Double maxPrice, @Param("minDistance") Double minDistance, @Param("maxDistance") Double maxDistance, @Param("capacity") Integer capacity);

}
