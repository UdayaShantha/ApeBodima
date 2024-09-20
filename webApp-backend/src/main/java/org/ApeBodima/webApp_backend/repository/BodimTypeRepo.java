package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.Bodime_Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface BodimTypeRepo extends JpaRepository<Bodime_Type,String> {

}
