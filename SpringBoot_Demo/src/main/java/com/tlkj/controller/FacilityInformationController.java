package com.tlkj.controller;

import com.tlkj.entity.FacilityInformation;
import com.tlkj.service.FacilityInformationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Kayle
 * @Date 2018.09.05 09:33 9:33
 **/
@Controller
public class FacilityInformationController {
    @Resource
    private FacilityInformationService facilityInformationService;

    @RequestMapping("/getFacilityInformation")
    @ResponseBody
    public List<FacilityInformation> getFacilityInformation(){
        List<FacilityInformation> facilityInformationList = facilityInformationService.getFacilityInformation();
        return facilityInformationList;
    }
}
