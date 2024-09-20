package org.ApeBodima.webApp_backend.DTO.Response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavouriteBodimResponseDTO {
    private String bodimId;
    private String bodimName;
    private String mainPhotoUrl;
    private String location;
    private double price;
}