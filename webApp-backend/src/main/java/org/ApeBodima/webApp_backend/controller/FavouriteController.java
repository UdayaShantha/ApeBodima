package org.ApeBodima.webApp_backend.controller;

import jakarta.transaction.Transactional;
import org.ApeBodima.webApp_backend.DTO.request.FavouriteSaveDTO;
import org.ApeBodima.webApp_backend.DTO.Response.FavouriteBodimResponseDTO;
import org.ApeBodima.webApp_backend.service.serviceInterFaces.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/favourite")
public class FavouriteController {

    @Autowired
    private FavouriteService favouriteService;

    @PostMapping("/add")
    public ResponseEntity<String> addFavourite(@RequestBody FavouriteSaveDTO favouriteSaveDTO) {
        String message = favouriteService.addFavourite(favouriteSaveDTO);
        return ResponseEntity.ok(message);
    }

    @GetMapping("/user/{userNIC}")
    public ResponseEntity<List<FavouriteBodimResponseDTO>> getFavouritesByUserNIC(@PathVariable String userNIC) {
        List<FavouriteBodimResponseDTO> favourites = favouriteService.getFavouritesByUserNIC(userNIC);
        return ResponseEntity.ok(favourites);
    }

    @Transactional
    @DeleteMapping("/delete/{bodimeid}")
    public ResponseEntity<String> deleteFavouriteBodime(@PathVariable String bodimeid){
        String message = favouriteService.deleteFavouriteBodime(bodimeid);
        return ResponseEntity.ok(message);
    }
}