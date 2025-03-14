package org.ApeBodima.webApp_backend.repository;


import org.ApeBodima.webApp_backend.entity.FavouriteBodimList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface FavouriteBodimListRemovalRepo extends JpaRepository<FavouriteBodimList,Long> {
    Optional<FavouriteBodimList> findByWebAppUserNICAndBodimId(String webAppUserNIC, String bodimId);
    void deleteByWebAppUserNICAndBodimId(String webAppUserNIC, String bodimId);
}
