package org.ApeBodima.webApp_backend.service.IMPL;

import org.ApeBodima.webApp_backend.DTO.request.FavouriteSaveDTO;
import org.ApeBodima.webApp_backend.DTO.Response.FavouriteBodimResponseDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.entity.Bodime_Photos;
import org.ApeBodima.webApp_backend.entity.FavouriteBodimList;
import org.ApeBodima.webApp_backend.repository.BodimeDetailsRepo;
import org.ApeBodima.webApp_backend.repository.BodimePhotosRepo;
import org.ApeBodima.webApp_backend.repository.FavouriteBodimListRepo;
import org.ApeBodima.webApp_backend.service.serviceInterFaces.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FavouriteServiceIMPL implements FavouriteService {

    @Autowired
    private FavouriteBodimListRepo favouriteBodimListRepo;

    @Autowired
    private BodimeDetailsRepo bodimeDetailsRepo;

    @Autowired
    private BodimePhotosRepo bodimePhotosRepo;

    @Override
    public String addFavourite(FavouriteSaveDTO favouriteSaveDTO) {
        FavouriteBodimList favouriteBodimList = new FavouriteBodimList();
        favouriteBodimList.setWebAppUserNIC(favouriteSaveDTO.getWebAppUserNIC());
        favouriteBodimList.setBodimId(favouriteSaveDTO.getBodimId());

        favouriteBodimListRepo.save(favouriteBodimList);

        return "Boarding place added to your favourite list successfully.";
    }

    @Override
    public List<FavouriteBodimResponseDTO> getFavouritesByUserNIC(String userNIC) {
        List<FavouriteBodimList> favourites = favouriteBodimListRepo.findByWebAppUserNIC(userNIC);
        List<FavouriteBodimResponseDTO> responseDTOs = new ArrayList<>();

        for (FavouriteBodimList favourite : favourites) {
            Optional<Bodime_Detail> bodimeDetailOptional = bodimeDetailsRepo.findById(favourite.getBodimId());
            if (bodimeDetailOptional.isPresent()) {
                Bodime_Detail bodimeDetail = bodimeDetailOptional.get();
                String mainPhotoUrl = getMainPhotoUrl(bodimeDetail);

                FavouriteBodimResponseDTO responseDTO = new FavouriteBodimResponseDTO(
                        bodimeDetail.getBodimId(),
                        bodimeDetail.getBodimPlaceName(),
                        mainPhotoUrl,
                        bodimeDetail.getLocationAddress(),
                        bodimeDetail.getPrice()
                );
                responseDTOs.add(responseDTO);
            }
        }

        return responseDTOs;
    }

    @Override
    public String deleteFavouriteBodime(String bodimeid) {
        if(favouriteBodimListRepo.existsByBodimId(bodimeid)){
            favouriteBodimListRepo.deleteByBodimId(bodimeid);
            return "deleted sucessfully";

        }
        else{
            return "failed to delete";
        }


    }

    private String getMainPhotoUrl(Bodime_Detail bodimeDetail) {
        List<Bodime_Photos> photos = bodimeDetail.getBodime_photos();
        if (photos != null && !photos.isEmpty()) {
            // Assuming the first photo is the main photo
            return photos.get(0).getPhoto();
        }
        return null;
    }
}