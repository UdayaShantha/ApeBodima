package org.ApeBodima.webApp_backend.service.registrationService;

import lombok.RequiredArgsConstructor;
import org.ApeBodima.webApp_backend.DTO.registration.RegistrationDTO;
import org.ApeBodima.webApp_backend.config.security.PasswordEncoder;
import org.ApeBodima.webApp_backend.entity.AppUserRoleEnum;
import org.ApeBodima.webApp_backend.entity.WebApp_User;
import org.ApeBodima.webApp_backend.repository.WebAppUserRepo;
import org.ApeBodima.webApp_backend.service.loginService.LoginService;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class RegisterService{
    private final WebAppUserRepo webAppUserRepo;
    private final PasswordEncoder passwordEncoder;
    private final LoginService loginService;
    public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile(
            "^[\\w!#$%&amp;'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&amp;'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");
    public static final Pattern VALID_NIC_REGEX = Pattern.compile("^\\d{12}$");


    /*-------------------------------------
     *     Public user adding service
     *------------------------------------*/
    public String addPublicUser(RegistrationDTO registrationDTO) {
        boolean isEmailValid=emailValidator(registrationDTO.getEmail());
        boolean isUserNameValid=userNameValidator(registrationDTO.getUsername());
        boolean isUserNameTaken=userNameUniqueness(registrationDTO.getUsername());
        boolean isNicValid=nicValidator(registrationDTO.getAppUserNIC());
        boolean isNicTaken=nicUniqueness(registrationDTO.getAppUserNIC());

        if(!isEmailValid){
            return "Not a valid email address";
        }
        if(!isUserNameValid){
            return "Sorry! Not a valid username";
        }
        if(isUserNameTaken){
            return "Sorry! User name already taken";
        }
        if(!isNicValid){
            return "Sorry! Not a valid NIC";
        }
        if(isNicTaken){
            return "You have already registered with: "+registrationDTO.getAppUserNIC();
        }
        //TODO: use model mapper to map DTO an web app user
        WebApp_User webApp_user=new WebApp_User(
                registrationDTO.getAppUserNIC(),
                registrationDTO.getName(),
                registrationDTO.getEmail(),
                registrationDTO.getUsername(),
                encodedPassword(registrationDTO.getPassword()),
                registrationDTO.getScNUm(),
                registrationDTO.getCurrentLocation(),
                AppUserRoleEnum.USER,
                registrationDTO.getProfileImg(),
                registrationDTO.getBodime_details()
        );

        //TODO : SEND TOKEN USING JWT

        webAppUserRepo.saveAndFlush(webApp_user);
        return "Success!, Created new user: "+webApp_user.getWebAppUserNIC();
    }

    /*-------------------------------------
     *     WebApp user -> System user
     *------------------------------------*/
    public String changeToAdmin(){
        WebApp_User user=webAppUserRepo.findByUsername(loginService.getCurrentLoggedInUsername()).orElse(null);
        assert user != null;
        user.setAppUserRole(AppUserRoleEnum.ADMIN);
        webAppUserRepo.save(user);
        return "You are now admin";
    }

    private boolean emailValidator(String email){
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(email);
        return matcher.matches();
    }

    private boolean userNameValidator(String userName){
        //TODO: check the username valid or not
        return true;
    }
    private boolean userNameUniqueness(String userName){
       return webAppUserRepo.findByUsername(userName).isPresent();
    }

    private boolean nicValidator(String userNic){
        Matcher matcher = VALID_NIC_REGEX.matcher(userNic);
        return matcher.matches();
    }

    private boolean nicUniqueness(String userNic){
        return webAppUserRepo.findByWebAppUserNIC(userNic).isPresent();
    }

    private String encodedPassword(String password){
        return passwordEncoder.bCryptPasswordEncoder().encode(password);
    }

}
