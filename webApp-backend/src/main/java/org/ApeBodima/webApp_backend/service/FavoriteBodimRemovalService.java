package org.ApeBodima.webApp_backend.service;


import org.ApeBodima.webApp_backend.DTO.request.FavouriteBodimRemovalDTO;
import org.ApeBodima.webApp_backend.repository.FavouriteBodimListRemovalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FavoriteBodimRemovalService {

    @Autowired
    private FavouriteBodimListRemovalRepo favouriteBodimListRemovalRepo;


    public boolean existsInFavouriteList(String webAppUserNIC, String bodimId) {
        return favouriteBodimListRemovalRepo.findByWebAppUserNICAndBodimId(webAppUserNIC, bodimId).isPresent();
    }

    @Transactional
    public boolean removeFavouriteBodim(FavouriteBodimRemovalDTO removalDTO) {
        if (removalDTO.isConfirmed()) {
            favouriteBodimListRemovalRepo.deleteByWebAppUserNICAndBodimId(removalDTO.getWebAppUserNIC(), removalDTO.getBodimId());
            return true;
        }
        return false;
    }
}
