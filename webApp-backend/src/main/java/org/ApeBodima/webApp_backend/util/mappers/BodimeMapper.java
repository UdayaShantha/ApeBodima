package org.ApeBodima.webApp_backend.util.mappers;

import org.ApeBodima.webApp_backend.DTO.request.BodimeContactSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeReviewSaveDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Contact;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.entity.Bodime_Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;


@Mapper(componentModel = "spring")
public interface BodimeMapper {
    BodimeDetailsSaveDTO bodimeDetailToBodimeDetailsSaveDTO(Bodime_Detail bodime_detail);



    BodimeContactSaveDTO contactEntityToDTO(Bodime_Contact bodime_contact);





    BodimeReviewSaveDTO reviewEntityToDTO(Bodime_Review bodime_review);



    List<BodimeContactSaveDTO> entityListToDTOList(List<Bodime_Contact> bodime_contacts);

    List<BodimeReviewSaveDTO> entityListToDTOList2(List<Bodime_Review> bodime_reviews);







    List<BodimeDetailsSaveDTO> entityListToDoList3(List<Bodime_Detail> bodime_details);
    List<BodimeDetailsSaveDTO> pagetoDtoList(Page<Bodime_Detail> bodime_detail);




}


