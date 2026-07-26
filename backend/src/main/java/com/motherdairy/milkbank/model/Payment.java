package com.motherdairy.milkbank.model;

import jakarta.persistence.*;

@Entity
@Table(name = "payments") // Set table name
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id") // Custom primary key column name
    private Long id;

    @Column(name = "order_id", nullable = false)
    private String orderId;

    @Column(name = "payment_status", nullable = false)
    private String status;

    @Column(name = "payment_amount", nullable = false)
    private int amount;

    @Column(name = "payer_email", nullable = false)
    private String email;

    // Default constructor
    public Payment() {
    }

    // All args constructor
    public Payment(Long id, String orderId, String status, int amount, String email) {
        this.id = id;
        this.orderId = orderId;
        this.status = status;
        this.amount = amount;
        this.email = email;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getOrderId() {
        return orderId;
    }
    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    // toString
    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", orderId='" + orderId + '\'' +
                ", status='" + status + '\'' +
                ", amount=" + amount +
                ", email='" + email + '\'' +
                '}';
    }
}
