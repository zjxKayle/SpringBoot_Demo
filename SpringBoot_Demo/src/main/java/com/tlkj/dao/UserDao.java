package com.tlkj.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Mapper
public interface UserDao {

   /* @Select("select JD,WD,SBMC from b_sssb_sbxx")
    @Transactional*/
   // public List<Map<String,BigDecimal>> queryData();


}
