package org.ApeBodima.webApp_backend.service.serviceInterFaces;

import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;

import java.util.List;

public interface BodimeDetailsService {
    String save(BodimeDetailsSaveDTO bodimeDetailsSaveDTO,String userId);

    BodimeDetailsSaveDTO getBodimeDetailsById(String bodimId);

    List<BodimeDetailsSaveDTO> getAllBodimeDetails(int page, int size);

    List<BodimeDetailsSaveDTO> getAllBodimeDetailsByCapacity(int page, int size, int capacity);

    List<BodimeDetailsSaveDTO> getAllBodimeDetailsByDistance(int page, int size, double distance);

    String update(BodimeDetailsSaveDTO bodimeDetailsSaveDTO, String bodimId);

    List<BodimeDetailsSaveDTO> getAllBodimeDetailsByNearestCity(int page, int size, String nearestCity);


    List<BodimeDetailsSaveDTO> filterBodimeDetails(int page, int size, String location, Double minPrice, Double maxPrice, Double minDistance, Double maxDistance, Integer capacity);


}

