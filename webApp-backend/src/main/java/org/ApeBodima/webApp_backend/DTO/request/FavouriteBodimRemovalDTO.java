package org.ApeBodima.webApp_backend.DTO.request;


import lombok.Data;

@Data
public class FavouriteBodimRemovalDTO
{
    private String webAppUserNIC;
    private String bodimId;
    private boolean confirmed;
}
