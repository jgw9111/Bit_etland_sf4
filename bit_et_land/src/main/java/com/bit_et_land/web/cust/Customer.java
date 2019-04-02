package com.bit_et_land.web.cust;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy // 호출할 때 움직인다 (js와 유사함)
public class Customer {
	private String 
	   customerID, 
	   customerName, 
	   password, 
	   ssn, // 900000-1
	   photo,
	   phone,
	   city, // 지번주소
	   address, // 상세주소 
	   postalCode;


}
