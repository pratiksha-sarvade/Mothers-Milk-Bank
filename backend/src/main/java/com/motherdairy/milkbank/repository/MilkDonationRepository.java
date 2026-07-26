package com.motherdairy.milkbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.motherdairy.milkbank.model.MilkDonation;

public interface MilkDonationRepository extends JpaRepository<MilkDonation, Long> {}
