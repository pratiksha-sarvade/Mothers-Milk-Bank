package com.motherdairy.milkbank.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.motherdairy.milkbank.model.MilkRequest;
import com.motherdairy.milkbank.repository.MilkRequestRepository;

@Service
public class MilkRequestService {

    @Autowired
    private MilkRequestRepository milkRequestRepository;

    public MilkRequest saveRequest(MilkRequest request) {
        return milkRequestRepository.save(request);
    }

    public List<MilkRequest> getAllRequests() {
        return milkRequestRepository.findAll();
    }

    public Optional<MilkRequest> getRequestById(Long id) {
        return milkRequestRepository.findById(id);
    }

    public void deleteRequest(Long id) {
        milkRequestRepository.deleteById(id);
    }
}
