//package org.ApeBodima.webApp_backend.service.IMPL;
//
//import org.ApeBodima.webApp_backend.DTO.Response.BodimePhotoDTO;
//import org.ApeBodima.webApp_backend.entity.Bodime_Photos;
//import org.ApeBodima.webApp_backend.repository.BodimePhotoRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class BodimePhotoService {
//
//    @Autowired
//    private BodimePhotoRepository bodimePhotoRepository;
//
//    public List<BodimePhotoDTO> getPhotosByBodimId(String bodimId) {
//        List<Bodime_Photos> photos = bodimePhotoRepository.findByBodime_detailsBodimId(bodimId);
//        return photos.stream()
//                .map(photo -> new BodimePhotoDTO(photo.getPhotoId(), photo.getPhoto()))
//                .collect(Collectors.toList());
//    }
//}