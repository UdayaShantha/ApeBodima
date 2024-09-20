package org.ApeBodima.webApp_backend.controller;

import lombok.AllArgsConstructor;
import org.ApeBodima.webApp_backend.service.bodimType.BodimTypesServies;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bodimTypes")
@AllArgsConstructor
public class BodimTypeController {

    private final BodimTypesServies bodimTypesServies;
    @GetMapping("/names")
    public List<String> getAllBodimTypesName(){
        return bodimTypesServies.getAllBodimypeNameList();
    }

    @GetMapping("/description")
    public List<String> getAllBodimTypesDescription(){
        return bodimTypesServies.getAllBodimTypeDescription();
    }
}
