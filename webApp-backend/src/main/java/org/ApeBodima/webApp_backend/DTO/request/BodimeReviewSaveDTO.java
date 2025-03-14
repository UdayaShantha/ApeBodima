package org.ApeBodima.webApp_backend.DTO.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BodimeReviewSaveDTO {

    private String commentId;
    private String comment;
}
