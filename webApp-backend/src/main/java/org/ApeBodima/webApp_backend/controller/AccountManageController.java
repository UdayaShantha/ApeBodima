package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.userManagement.UserManagementDTO;
import org.ApeBodima.webApp_backend.Utill.StandardResponse;
import org.ApeBodima.webApp_backend.service.IMPL.UserAccountManagementIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/api/v1/userAccount")
public class AccountManageController {
    @Autowired
    UserAccountManagementIMPL userAccountManagement;
    @Autowired
    private UserAccountManagementIMPL userAccountManagementIMPL;

    @GetMapping(
            path = "/get-user-data"
    )
    public ResponseEntity<StandardResponse> getUserData() {
        UserManagementDTO userManagementDTO = userAccountManagement.getAccountUserData();
        return new ResponseEntity<>(
                new StandardResponse(200, "success", userManagementDTO), HttpStatus.OK
        );
    }


    @PutMapping(
            path = "/update-user-data"
    )
    public ResponseEntity<StandardResponse> updateUserData(@RequestBody UserManagementDTO userManagementDTO) {
        String message = userAccountManagement.updateUserDetails(userManagementDTO);
        System.out.println("hello");
        return new ResponseEntity<>(
                new StandardResponse(200, "success", message), HttpStatus.OK
        );

    }

    @PutMapping(
            path = "/update-password",
            params = {"oldPass", "newPass1", "newPass2"
            }
    )
    public ResponseEntity<StandardResponse> updatePassword(@RequestParam String oldPass, String newPass1, String newPass2) {
        String message =userAccountManagementIMPL.updateUserPassword(oldPass,newPass1,newPass2);

        return new ResponseEntity<>(
                new StandardResponse(200, "success", message), HttpStatus.OK
        );

    }

    @PutMapping(
            path="/uploade-prof-img"
    )
    public ResponseEntity<StandardResponse> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        String message=userAccountManagementIMPL.uploadProfImage(file);

        return new ResponseEntity<>(
                new StandardResponse(200, "success", message), HttpStatus.OK
        );
    }
    @DeleteMapping(
            path="/delete-account",
            params = "userPassword"

    )
    public ResponseEntity <StandardResponse> deleteAccount(@RequestParam String userPassword) {
        String message=userAccountManagementIMPL.deleteAccount(userPassword);
        return new ResponseEntity<>(
                new StandardResponse(200, "success", message), HttpStatus.OK
        );
    }


}





