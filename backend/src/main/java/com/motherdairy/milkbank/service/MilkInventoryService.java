package com.motherdairy.milkbank.service;

import com.motherdairy.milkbank.repository.MilkInventoryRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class MilkInventoryService {

    private final MilkInventoryRepository repository;
    private static final double BOTTLE_CAPACITY_ML = 200;

    public MilkInventoryService(MilkInventoryRepository repository) {
        this.repository = repository;
    }

    public Map<String, Object> getInventoryDetails() {
        double totalMl = repository.getTotalQuantityInMl();
        int totalBottles = (int) (totalMl / BOTTLE_CAPACITY_ML);

        Map<String, Object> result = new HashMap<>();
        result.put("quantityInMl", totalMl);
        result.put("numberOfBottles", totalBottles);

        return result;
    }
}

