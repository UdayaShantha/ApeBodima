package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.FavouriteBodimList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteBodimListRepo extends JpaRepository<FavouriteBodimList, Long> {
    List<FavouriteBodimList> findByWebAppUserNIC(String webAppUserNIC);

    boolean existsByBodimId(String bodimId);

    void deleteByBodimId(String bodimId);
}