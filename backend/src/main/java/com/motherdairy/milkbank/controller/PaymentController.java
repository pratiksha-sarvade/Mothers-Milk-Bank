package com.motherdairy.milkbank.controller;

import com.motherdairy.milkbank.service.PaymentService;
import com.motherdairy.milkbank.model.Payment;
import com.motherdairy.milkbank.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentRepository paymentRepository;
    private final PaymentService paymentService;

    public PaymentController(PaymentRepository paymentRepository, PaymentService paymentService) {
        this.paymentRepository = paymentRepository;
        this.paymentService = paymentService;
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @PostMapping("/create-order")
    public ResponseEntity<String> createOrder(@RequestParam Double amount, @RequestParam String email) {
        try {
            String orderJson = paymentService.createOrder(amount, email);
            return ResponseEntity.ok(orderJson);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error creating order: " + e.getMessage());
        }
    }
}
