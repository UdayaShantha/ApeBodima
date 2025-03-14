package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.apachecommons.CommonsLog;

@Entity
@Table(name = "bodime_contacts")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Bodime_Contact {

    @ManyToOne
    @JoinColumn(name="bodime_id",nullable=false)
    private Bodime_Detail bodime_details;

    @Id
    @Column(name = "contact_number")
    private String contact_num;
}
