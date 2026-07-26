package com.motherdairy.milkbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.motherdairy.milkbank.model.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, String> {
    
}