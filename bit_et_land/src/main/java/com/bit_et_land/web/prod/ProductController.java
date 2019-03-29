package com.bit_et_land.web.prod;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_et_land.web.cmm.IConsumer;


@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product prod;
	
	@PostMapping("/phones")
	public Product register(@RequestBody Product param) {
		logger.info("============ register ============");
		IConsumer i = (Object o) -> {};
		return null;
	}
	@GetMapping("/phones/{prodid}")
	public List<Product> list(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ list ============");
		
		return null;
	}
	@PutMapping("/phones/{prodid}")
	public void update(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ list ============");
		
	}
	@DeleteMapping("/phones/{prodid}")
	public void delete(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ delete ============");
		
	}
	
}
