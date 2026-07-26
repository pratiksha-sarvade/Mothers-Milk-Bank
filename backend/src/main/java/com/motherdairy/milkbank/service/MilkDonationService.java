package com.motherdairy.milkbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.motherdairy.milkbank.model.MilkDonation;
import com.motherdairy.milkbank.repository.MilkDonationRepository;

@Service
public class MilkDonationService {

    @Autowired
    private MilkDonationRepository donationRepo;

    // Save a new donation
    public MilkDonation donateMilk(MilkDonation donation) {
        return donationRepo.save(donation);
    }

    // Get all donations
    public List<MilkDonation> getAllDonations() {
        return donationRepo.findAll();
    }

    // Approve a donation by ID
    public String approveDonation(Long id) {
        MilkDonation donation = donationRepo.findById(id).orElseThrow(() -> 
            new RuntimeException("Donation not found with ID: " + id)
        );
        donation.setStatus("APPROVED");
        donationRepo.save(donation);
        return "Donation approved";
    }
}
