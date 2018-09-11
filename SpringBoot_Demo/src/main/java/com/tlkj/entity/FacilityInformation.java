package com.tlkj.entity;

import java.math.BigDecimal;

/**
 * @author Kayle
 * @Date 2018.09.04 17:00
 **/
public class FacilityInformation {
    private BigDecimal JD;             //经度
    private BigDecimal WD;             //纬度
    private String facilitylocation;   //设备位置信息
    private String facilitynum;        //设备编号

    @Override
    public String toString() {
        return "FacilityInformation{" +
                "JD=" + JD +
                ", WD=" + WD +
                ", facilitylocation='" + facilitylocation + '\'' +
                ", facilitynum='" + facilitynum + '\'' +
                '}';
    }

    public BigDecimal getJD() {
        return JD;
    }

    public void setJD(BigDecimal JD) {
        this.JD = JD;
    }

    public BigDecimal getWD() {
        return WD;
    }

    public void setWD(BigDecimal WD) {
        this.WD = WD;
    }

    public String getFacilitylocation() {
        return facilitylocation;
    }

    public void setFacilitylocation(String facilitylocation) {
        this.facilitylocation = facilitylocation;
    }

    public String getFacilitynum() {
        return facilitynum;
    }

    public void setFacilitynum(String facilitynum) {
        this.facilitynum = facilitynum;
    }


}
