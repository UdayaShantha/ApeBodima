package org.ApeBodima.webApp_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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

    public String getPhotoId() {
        return photoId;
    }

    public void setPhotoId(String photoId) {
        this.photoId = photoId;
    }

    public Bodime_Detail getBodime_details() {
        return bodime_details;
    }

    public void setBodime_details(Bodime_Detail bodime_details) {
        this.bodime_details = bodime_details;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }


}
