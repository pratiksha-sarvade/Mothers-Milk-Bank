package com.motherdairy.milkbank.service;

import com.motherdairy.milkbank.model.Payment;
import com.motherdairy.milkbank.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${razorpay.key_id}")
    private String razorpayKeyId;

    @Value("${razorpay.key_secret}")
    private String razorpayKeySecret;

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public String createOrder(Double amount, String payerEmail) throws RazorpayException {
        RazorpayClient razorpay = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // amount in paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_rcptid_" + System.currentTimeMillis());

        Order order = razorpay.orders.create(orderRequest);

        Payment payment = new Payment();
        payment.setOrderId(order.get("id"));
        payment.setAmount(amount.intValue());
        payment.setStatus(order.get("status")); // usually "created"
        payment.setEmail(payerEmail);

        paymentRepository.save(payment);

        return order.toString(); // send full order info as JSON string
    }
}

