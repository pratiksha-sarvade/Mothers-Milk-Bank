package com.motherdairy.milkbank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class MilkInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore // hide ID in API response
    private Long id;

    private double quantityInMl; // store in milliliters

    public MilkInventory() {}

    public MilkInventory(double quantityInMl) {
        this.quantityInMl = quantityInMl;
    }

    public Long getId() {
        return id;
    }

    public double getQuantityInMl() {
        return quantityInMl;
    }

    public void setQuantityInMl(double quantityInMl) {
        this.quantityInMl = quantityInMl;
    }
}
