package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.registration.RegistrationDTO;
import org.ApeBodima.webApp_backend.service.registrationService.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/registration")
public class RegisterController {

    //setter injection for registerService
    private RegisterService registerService;
    @Autowired
    public void setRegisterService(RegisterService registerService) {
        this.registerService = registerService;
    }

    //Define the Endpoint for registration
    @PostMapping("/user")
    public ResponseEntity<String> createUser(@RequestBody RegistrationDTO registrationDTO){
        if(registrationDTO ==null){
            return ResponseEntity.ok("incomplete data");
        }
        return ResponseEntity.ok(registerService.addPublicUser(registrationDTO));
    }


    /*-------------------------------------------------
    * This end point is hidden by basic login.
    * You have login before you send this request.
    * This request change your role to a ADMIN.
    *--------------------------------------------------*/
    @PostMapping("/systemUser")
    public ResponseEntity<String> createSystemUser(){
        return ResponseEntity.ok(registerService.changeToAdmin());
    }
}
