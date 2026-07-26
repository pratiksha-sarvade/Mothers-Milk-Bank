package com.motherdairy.milkbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.motherdairy.milkbank.model.MilkDonation;
import com.motherdairy.milkbank.service.MilkDonationService;

@RestController
@CrossOrigin
@RequestMapping("/api/donations")
public class MilkDonationController {

    @Autowired
    private MilkDonationService donationSer;

    @PostMapping
    public MilkDonation donate(@RequestBody MilkDonation donation) {
    	System.out.println("Received donation: " + donation);
        return donationSer.donateMilk(donation);
    }

    @GetMapping
    public List<MilkDonation> getAll() {
        return donationSer.getAllDonations();
    }

    @PutMapping("/{id}/approve")
    public String approve(@PathVariable Long id) {
        return donationSer.approveDonation(id);
    }
}
