package org.ApeBodima.webApp_backend.entity;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.util.concurrent.atomic.AtomicInteger;

public class BodimIDGenerator implements IdentifierGenerator {

    private static final AtomicInteger counter = new AtomicInteger(1); // Start from 1

    @Override
    public Object generate(SharedSessionContractImplementor sharedSessionContractImplementor, Object o) {
        // Pad with leading zeros to ensure 3 digits (adjust as needed)
        return "B" + String.format("%03d", counter.getAndIncrement());
    }
}
