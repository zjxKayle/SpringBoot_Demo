package com.tlkj.serviceImpl;

import com.tlkj.dao.FacilityInformationDao;
import com.tlkj.entity.FacilityInformation;
import com.tlkj.service.FacilityInformationService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Kayle
 * @Date 2018.09.05 09:28 9:28
 **/
@Service
public class FacilityInformationServiceImpl implements FacilityInformationService {

    @Resource
    private FacilityInformationDao facilityInformationDao;

    @Override
    public List<FacilityInformation> getFacilityInformation() {
        List<FacilityInformation> facilityInformationList= facilityInformationDao.getFacilityInformation();
        return facilityInformationList;
    }
}
