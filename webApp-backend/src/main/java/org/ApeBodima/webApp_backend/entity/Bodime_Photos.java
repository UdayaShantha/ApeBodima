package org.ApeBodima.webApp_backend.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "bodime_photo")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bodime_Photos {
    @Id
    @Column(name = "photo_id",length = 4)
    private String photoId;

    @ManyToOne
    @JoinColumn(name="bodime_id",nullable=false)
    private Bodime_Detail bodime_details;

    @Column(name = "photo")
    private String photo;


}
