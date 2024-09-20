package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.WebApp_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface WebAppUserRepo extends JpaRepository<WebApp_User,String> {

    //Return the WebApp_Users according to the username
    Optional<WebApp_User> findByUsername(String username);

    Optional<WebApp_User> findByWebAppUserNIC(String webAppUserNIC);

    //Return the WebApp_Users according to the email
    Optional<WebApp_User> findByUsernameOrEmail(String username,String email);

    void deleteByUsername(String username);

}
