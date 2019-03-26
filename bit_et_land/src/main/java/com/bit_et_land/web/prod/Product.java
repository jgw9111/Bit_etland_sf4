package com.bit_et_land.web.prod;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Product {
	private String productId, productName, supplierId, categoryId, unit, price;

	

}