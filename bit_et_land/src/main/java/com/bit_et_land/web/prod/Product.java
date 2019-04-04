package com.bit_et_land.web.prod;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Product {
	private String productId, 
	productName, supplierId, categoryId, unit, price,color;
	private List<String> freebies
	;

	

}