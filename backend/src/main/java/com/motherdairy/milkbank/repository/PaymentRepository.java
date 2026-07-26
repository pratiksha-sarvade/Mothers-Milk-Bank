package com.motherdairy.milkbank.repository;

import com.motherdairy.milkbank.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
