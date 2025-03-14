package org.ApeBodima.webApp_backend.service.serviceInterFaces;

import org.ApeBodima.webApp_backend.DTO.request.FavouriteSaveDTO;
import org.ApeBodima.webApp_backend.DTO.Response.FavouriteBodimResponseDTO;

import java.util.List;

public interface FavouriteService {
    String addFavourite(FavouriteSaveDTO favouriteSaveDTO);
    List<FavouriteBodimResponseDTO> getFavouritesByUserNIC(String userNIC);

    String deleteFavouriteBodime(String bodimeid);
}