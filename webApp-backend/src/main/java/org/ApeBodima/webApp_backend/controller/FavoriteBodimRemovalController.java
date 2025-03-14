package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.request.FavouriteBodimRemovalDTO;
import org.ApeBodima.webApp_backend.service.FavoriteBodimRemovalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/favourite_bodim")
public class FavoriteBodimRemovalController {
    @Autowired
    private FavoriteBodimRemovalService favoriteBodimRemovalService;

    @DeleteMapping("/remove/")
    public ResponseEntity<String> removeFavouriteBodim(@RequestBody FavouriteBodimRemovalDTO removalDTO) {
        if (!favoriteBodimRemovalService.existsInFavouriteList(removalDTO.getWebAppUserNIC(), removalDTO.getBodimId())) {
            return ResponseEntity.badRequest().body("The boarding place is not in the favourite list.");
        }

        if (!removalDTO.isConfirmed()) {
            return ResponseEntity.ok("Please confirm the removal of the boarding place from your favourite list.");
        }

        boolean removed = favoriteBodimRemovalService.removeFavouriteBodim(removalDTO);
        if (removed) {
            return ResponseEntity.ok("The boarding place has been successfully removed from your favourite list.");
        } else {
            return ResponseEntity.badRequest().body("Failed to remove the boarding place from the favourite list.");
        }
    }

}
