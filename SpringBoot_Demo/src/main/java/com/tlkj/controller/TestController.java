package com.tlkj.controller;

import com.tlkj.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
public class TestController {
    @Resource
    private UserService userService;

    @RequestMapping("/")
    public String test(){
        return "Hello Springboot";
    }

    @RequestMapping("")
    public List<Map<BigDecimal , BigDecimal >> getJdWd(){
        return null;
    }
}
