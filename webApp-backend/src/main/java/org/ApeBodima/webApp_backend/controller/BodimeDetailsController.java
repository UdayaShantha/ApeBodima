package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;
import org.ApeBodima.webApp_backend.service.serviceInterFaces.BodimeDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/bodimeDetails")
public class BodimeDetailsController {
   @Autowired
    private BodimeDetailsService bodimeDetailsService;

    @PostMapping(path = "/save/{userId}")
    public String saveCustomer(@RequestBody BodimeDetailsSaveDTO bodimeDetailsSaveDTO,@PathVariable(value="userId") String userId){
        if (bodimeDetailsSaveDTO == null) {
            throw new IllegalArgumentException("BodimeDetailsSaveDTO cannot be null");
        }
        String message = bodimeDetailsService.save(bodimeDetailsSaveDTO,userId);
        return message;
    }

    @PostMapping("/update/{id}")
    public String updateCustomer(@RequestBody BodimeDetailsSaveDTO bodimeDetailsSaveDTO, @PathVariable(value="id") String bodimId){
        String message = bodimeDetailsService.update(bodimeDetailsSaveDTO,bodimId);
        return message;
    }

    @GetMapping("/get-by-id/{id}")
    public BodimeDetailsSaveDTO getBodimeDetailsById(@PathVariable(value="id") String bodimId){
        BodimeDetailsSaveDTO bodimeDetailsSaveDTO = bodimeDetailsService.getBodimeDetailsById(bodimId);
        return bodimeDetailsSaveDTO;
    }

    @GetMapping(path="/get-all",
                params={"page","size"})
    public List<BodimeDetailsSaveDTO> getAllBodimeDetails(@RequestParam(value="page") int page,
                                                          @RequestParam(value="size") int size){
        List<BodimeDetailsSaveDTO> bodimeSaveDTOList = bodimeDetailsService.getAllBodimeDetails(page,size);
        return bodimeSaveDTOList;
    }

    @GetMapping(path="/get-all",
            params={"page","size","capacity"})
    public List<BodimeDetailsSaveDTO> getAllBodimeDetailsbyCapacity(@RequestParam(value="page") int page,
                                                          @RequestParam(value="size") int size,
                                                          @RequestParam(value="capacity") int capacity){
        List<BodimeDetailsSaveDTO> bodimeSaveDTOList = bodimeDetailsService.getAllBodimeDetailsByCapacity(page,size,capacity);
        return bodimeSaveDTOList;
    }

    @GetMapping(path="/get-all",
            params={"page","size","distance"})
    public List<BodimeDetailsSaveDTO> getAllBodimeDetailsByDistance(@RequestParam(value="page") int page,
                                                          @RequestParam(value="size") int size,
                                                          @RequestParam(value="distance") double distance){
        List<BodimeDetailsSaveDTO> bodimeSaveDTOList = bodimeDetailsService.getAllBodimeDetailsByDistance(page,size,distance);
        return bodimeSaveDTOList;
    }

    @GetMapping(path="/get-all",
            params={"page","size","nearestCity"})
    public List<BodimeDetailsSaveDTO> getAllBodimeDetailsByNearestCity(@RequestParam(value="page") int page,
                                                          @RequestParam(value="size") int size,
                                                          @RequestParam(value="nearestCity") String nearestCity){
        List<BodimeDetailsSaveDTO> bodimeSaveDTOList = bodimeDetailsService.getAllBodimeDetailsByNearestCity(page,size,nearestCity);
        return bodimeSaveDTOList;
    }
    @GetMapping(path="/filter",
    params = {"page","size","nearestCity","minPrice","maxPrice","minDistance","maxDistance","capacity"})
    public List<BodimeDetailsSaveDTO> filterBodimeDetails(
            @RequestParam(value="page") int page,
            @RequestParam(value="size") int size,
            @RequestParam(value="nearestCity")  String location,
            @RequestParam(value="minPrice") Double minPrice,
            @RequestParam(value="maxPrice") Double maxPrice,
            @RequestParam(value="minDistance") Double minDistance,
            @RequestParam(value="maxDistance") Double maxDistance,
            @RequestParam(value="capacity") Integer capacity) {
        return bodimeDetailsService.filterBodimeDetails(page, size, location, minPrice, maxPrice, minDistance, maxDistance, capacity);
    }



}
