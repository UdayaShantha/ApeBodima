package org.ApeBodima.webApp_backend.service.IMPL;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.ApeBodima.webApp_backend.DTO.userManagement.UserManagementDTO;
import org.ApeBodima.webApp_backend.config.security.PasswordEncoder;
import org.ApeBodima.webApp_backend.entity.WebApp_User;
import org.ApeBodima.webApp_backend.repository.WebAppUserRepo;
import org.ApeBodima.webApp_backend.service.serviceInterFaces.UserAccountManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UserAccountManagementIMPL implements UserAccountManagementService {
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private WebAppUserRepo webAppUserRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile(
            "^[\\w!#$%&amp;'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&amp;'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");
    @Autowired
    private WebApp_User webApp_User;
    @Override
    @Transactional
    //get user data
    public UserManagementDTO getAccountUserData() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal1 = authentication.getPrincipal();
        if (principal1 instanceof UserDetails) {
            String userName = ((UserDetails) principal1).getUsername();
            WebApp_User webAppUser = webAppUserRepo.findByUsername(userName).orElse(null);
            return new UserManagementDTO(
                    webAppUser.getWebAppUserNIC(),
                    webAppUser.getName(),
                    webAppUser.getUsername(),
                    webAppUser.getScNUm(),
                    webAppUser.getCurrentLocation(),
                    webAppUser.getEmail(),
                    webAppUser.getProfileImg()
            );
        } else {
            throw new RuntimeException("user not found");
        }
    }

    @Override
    @Transactional
    //update user data
    public String updateUserDetails(UserManagementDTO userManagementDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (webAppUserRepo.existsById(userManagementDTO.getWebAppUserNIC())) {
            WebApp_User webAppUser = webAppUserRepo.getReferenceById(userManagementDTO.getWebAppUserNIC());
            if (emailValidator(userManagementDTO.getEmail())) {
                webAppUser.setName(userManagementDTO.getName());
                webAppUser.setUsername(userManagementDTO.getUsername());
                webAppUser.setEmail(userManagementDTO.getEmail());
                webAppUser.setCurrentLocation(userManagementDTO.getCurrentLocation());
                webAppUserRepo.save(webAppUser);
                getAccountUserData();
                return "user " + userManagementDTO.getWebAppUserNIC() + "updated successful";
            } else {
                return "invailid emailType";
            }
        } else {
            throw new RuntimeException("user not exists");
        }
    }

    @Transactional
    @Override
    public String updateUserPassword(String oldPass, String newPass1, String newPass2) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                String user = ((UserDetails) principal).getUsername();
                WebApp_User webAppUser = webAppUserRepo.findByUsername(user).orElse(null);
                if (passwordEncoder.bCryptPasswordEncoder().matches(oldPass, webAppUser.getPassword())) {
                    if (newPass1.equals(newPass2)) {
                        webAppUser.setPassword(passwordEncoder.bCryptPasswordEncoder().encode(newPass1));
                        webAppUserRepo.save(webAppUser);
                        return "password update success";
                    } else {
                        return "mismatch passwords";
                    }
                } else {
                    throw new BadCredentialsException("Invalid Password");
                }
            }
            return principal.toString();
        }
        return "authentication is null";
    }

    @Override
    @Transactional
    public String uploadProfImage(MultipartFile file) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principle2 = authentication.getPrincipal();
        if (principle2 instanceof UserDetails) {
            String userName = ((UserDetails) principle2).getUsername();
            WebApp_User webAppUser = webAppUserRepo.findByUsername(userName).orElse(null);
            webAppUser.setProfileImg(file.getBytes());
            webAppUserRepo.save(webAppUser);
            return "imageUploaded";
        }
        return "sorry!";
    }

    @Override
    @Transactional
    public String deleteAccount(String userPassword) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                String user = ((UserDetails) principal).getUsername();
                WebApp_User webAppUser = webAppUserRepo.findByUsername(user).orElse(null);
                if (passwordEncoder.bCryptPasswordEncoder().matches(userPassword, webAppUser.getPassword())) {
                        webAppUserRepo.deleteByUsername(user);
                    HttpSession session=request.getSession(false);
                    if(session!=null){
                        session.invalidate();
                    }
                        return "user deleted successful and logout";
                }

            }
        }
        return "your password is incorrect";
    }

    //validate the email address
    private boolean emailValidator(String email) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(email);
        return matcher.matches();
    }


}
