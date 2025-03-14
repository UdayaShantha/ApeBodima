package org.ApeBodima.webApp_backend.service.bodimType;

import lombok.RequiredArgsConstructor;
import org.ApeBodima.webApp_backend.entity.Bodime_Type;
import org.ApeBodima.webApp_backend.repository.BodimTypeRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BodimTypesServies {
    private final BodimTypeRepo bodimTypeRepo;

    public List<String> getAllBodimypeNameList(){
        return bodimTypeRepo.findAll().stream().map(Bodime_Type::getTypeName).collect(Collectors.toList());
    }

    public List<String> getAllBodimTypeDescription(){
        return bodimTypeRepo.findAll().stream().map(Bodime_Type::getDescription).collect(Collectors.toList());
    }
}
