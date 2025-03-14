package org.ApeBodima.webApp_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "bodime_review")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bodime_Review {
    @ManyToOne
    @JoinColumn(name="bodime_id",nullable=false)
    private Bodime_Detail bodime_details;
    @Id
    @Column(name = "comment_id")
    private String commentId;

    @Column(name = "comment")
    private String comment;
}
