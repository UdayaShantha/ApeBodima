package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Collections;

@Entity
@Component
@Table(name="WebApp_user")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class WebApp_User implements UserDetails{
    @Id
    @Column(name = "webAppUserNIC",length = 12)
    private String webAppUserNIC;
    @Column(name = "name",length = 64)
    private String name;
    @Column(name = "email",length = 50)
    private String email;
    @Column(name = "username",length = 24,unique = true,nullable = false)
    private String username;
    @Column(name = "password",length = 64,nullable = false)
    private String password;
    @Column(name="scNum",length = 13)
    private String scNUm;
    @Column(name="currentLocation",length = 24)
    private String currentLocation;
    @Column(name="webAppUserRole",nullable = false)
    @Enumerated(EnumType.STRING)
    private AppUserRoleEnum appUserRole;
    @Lob
    @Column(name="profileImg",nullable = true,columnDefinition = "LONGBLOB")
    private byte[] profileImg;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bodimId",referencedColumnName = "bodim_ID")
    private Bodime_Detail bodime_detail;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority=new SimpleGrantedAuthority(appUserRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
