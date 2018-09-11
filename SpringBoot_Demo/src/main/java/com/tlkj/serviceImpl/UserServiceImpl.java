package com.tlkj.serviceImpl;

import com.tlkj.dao.UserDao;
import com.tlkj.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{

   /* @Resource
    private UserDao userDao;

    @Override
    public List<Map<String , BigDecimal >> query() {
        List<Map<String, BigDecimal >> listMap= userDao.queryData();
        return listMap;
    }*/
}
