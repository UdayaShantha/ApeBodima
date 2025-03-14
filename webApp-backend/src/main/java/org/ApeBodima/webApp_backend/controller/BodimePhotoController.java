//package org.ApeBodima.webApp_backend.controller;
//
//import org.ApeBodima.webApp_backend.DTO.Response.BodimePhotoDTO;
//import org.ApeBodima.webApp_backend.service.IMPL.BodimePhotoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/bodime/photos")
//public class BodimePhotoController {
//
//    @Autowired
//    private BodimePhotoService bodimePhotoService;
//
//    @GetMapping("/{bodimId}/photos")
//    public ResponseEntity<List<BodimePhotoDTO>> getBodimePhotos(@PathVariable String bodimId) {
//        List<BodimePhotoDTO> photos = bodimePhotoService.getPhotosByBodimId(bodimId);
//        return ResponseEntity.ok(photos);
//    }
//}