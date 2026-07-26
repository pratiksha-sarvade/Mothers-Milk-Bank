package com.motherdairy.milkbank.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.motherdairy.milkbank.model.MilkRequest;
import com.motherdairy.milkbank.service.MilkRequestService;

@RestController
@CrossOrigin
@RequestMapping("/api/requests")
public class MilkRequestController {

    @Autowired
    private MilkRequestService milkRequestService;

    @PostMapping
    public MilkRequest createRequest(@RequestBody MilkRequest request) {
        return milkRequestService.saveRequest(request);
    }

    @GetMapping
    public List<MilkRequest> getAllRequests() {
        return milkRequestService.getAllRequests();
    }

    @GetMapping("/{id}")
    public Optional<MilkRequest> getRequestById(@PathVariable Long id) {
        return milkRequestService.getRequestById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {
        milkRequestService.deleteRequest(id);
    }
}
