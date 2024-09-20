package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "bodime_details")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bodime_Detail {
    @Id
    @Column(name = "bodim_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String bodimId;

    @Column(name = "price")
    private double price;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "distance_to_UNI")
    private double distanceToUni;

    @Column(name = "type")
    private String type;

    @Column(name = "num_chairs")
    private int numChairs;

    @Column(name = "num_fans")
    private int numFans;

    @Column(name = "num_tables")
    private int numTables;

    @Column(name = "num_nets")
    private int numNets;

    @Column(name = "kitchen")
    private int kitchen;

    @Column(name = "rating")
    private double rating;

    @Column(name = "location_address", length = 250)
    private String locationAddress;

    @Column(name = "nearestcity")
    private String nearestCity;

    @Column(name = "bodim_place_name", length = 200)
    private String bodimPlaceName;

    @OneToMany(mappedBy = "bodime_details" )
    private List<Bodime_Contact> bodime_contacts;

    @OneToMany(mappedBy = "bodime_details" )
    private List<Bodime_Review> bodime_reviews;

    @OneToMany(mappedBy = "bodime_details",fetch = FetchType.EAGER )
    private List<Bodime_Photos> bodime_photos;

    @OneToOne(mappedBy = "bodime_detail")
    private WebApp_User webApp_user1;

    public String getBodimId() {
        return bodimId;
    }

    public String getBodimPlaceName() {
        return bodimPlaceName;
    }

    public String getLocationAddress() {
        return locationAddress;
    }

    public double getPrice() {
        return price;
    }

    public List<Bodime_Photos> getBodime_photos() {
        return bodime_photos;
    }

    public Bodime_Detail(String bodimId, double price, int capacity, double distanceToUni, String type, int numChairs, int numFans, int numTables, int numNets, int kitchen, String locationAddress, String bodimPlaceName) {
        this.bodimId = bodimId;
        this.price = price;
        this.capacity = capacity;
        this.distanceToUni = distanceToUni;
        this.type = type;
        this.numChairs = numChairs;
        this.numFans = numFans;
        this.numTables = numTables;
        this.numNets = numNets;
        this.kitchen = kitchen;
        this.locationAddress = locationAddress;
        this.bodimPlaceName = bodimPlaceName;
    }


    public Bodime_Detail(String bodimId, double price, int capacity, double distanceToUni, String type, int numChairs, int numFans, int numTables, int numNets, int kitchen, double rating, String locationAddress, String nearestCity, String bodimPlaceName) {
        this.bodimId = bodimId;
        this.price = price;
        this.capacity = capacity;
        this.distanceToUni = distanceToUni;
        this.type = type;
        this.numChairs = numChairs;
        this.numFans = numFans;
        this.numTables = numTables;
        this.numNets = numNets;
        this.kitchen = kitchen;
        this.rating = rating;
        this.locationAddress = locationAddress;
        this.nearestCity = nearestCity;
        this.bodimPlaceName = bodimPlaceName;
    }

}
