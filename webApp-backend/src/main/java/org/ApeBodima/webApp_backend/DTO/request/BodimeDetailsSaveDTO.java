package org.ApeBodima.webApp_backend.DTO.request;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ApeBodima.webApp_backend.entity.WebApp_User;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class BodimeDetailsSaveDTO {

    private String bodimId;
    private double price;
    private int capacity;
    private double distanceToUni;
    private String type;
    private int numChairs;
    private int numFans;
    private int numTables;
    private int numNets;
    private int kitchen;
    private double rating;
    private String locationAddress;
    private String nearestCity;
    private String bodimPlaceName;
    private List<BodimeContactSaveDTO> contacts;
    private List<BodimeReviewSaveDTO> reviews;

}
