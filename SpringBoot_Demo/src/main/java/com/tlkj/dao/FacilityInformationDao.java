package com.tlkj.dao;

import com.tlkj.entity.FacilityInformation;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author Kayle
 * @Date 2018.09.04 17:08 17:08
 *
 **/
@Mapper
public interface FacilityInformationDao {
    @Select("select JD,WD,SBMC as facilitylocation,SBBH as facilitynum from b_sssb_sbxx")
    @Transactional
    public List<FacilityInformation> getFacilityInformation();
}
