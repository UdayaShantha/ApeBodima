package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.Bodime_Photos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BodimePhotosRepo extends JpaRepository<Bodime_Photos, Long> {
}