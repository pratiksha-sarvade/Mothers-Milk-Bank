package com.motherdairy.milkbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.motherdairy.milkbank.model.MilkRequest;

public interface MilkRequestRepository extends JpaRepository<MilkRequest, Long> {
}
