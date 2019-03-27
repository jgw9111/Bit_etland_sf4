package com.bit_et_land.web.cust;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_et_land.web.cmm.PrintService;

@RestController
@RequestMapping("/cust")
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@PostMapping("/login")
	public Customer login(@RequestBody Customer param) {
		logger.info("============ login ============");
		//cust.setCustomerID(customerID);
		/*System.out.println(param.toString());*/
		ps.accept(param.toString());
		return param;
	}
	
}
