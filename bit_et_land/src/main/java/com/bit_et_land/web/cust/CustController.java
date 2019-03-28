package com.bit_et_land.web.cust;



import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_et_land.web.cmm.IConsumer;
import com.bit_et_land.web.cmm.IFunction;
import com.bit_et_land.web.cmm.PrintService;

@RestController
@RequestMapping("/cust")
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired Map<String,Object> map;
	@PostMapping("/login")
	public Customer login(@RequestBody Customer param) {
		logger.info("============ login ============");
		IFunction i = (Object o) -> custMap.selectCustomer(param);
		return (Customer) i.apply(param);
	}
	
	@PostMapping("/join")
	public Map<String,Object> join(@RequestBody Customer param) {
		logger.info("============ join ============");
		IConsumer c =  (Object o)-> custMap.insertCustomer(param);
		c.accept(param);
		System.out.println(param.toString());
		map.clear();
		map.put("msg", "success");
		return map;
	}
	
	@PutMapping("/update")
	public Customer update(@RequestBody Customer param) {
		logger.info("============ update ============");
		/*IFunction i = (Object o) -> custMap.updateCustomer(param);*/
		return null;
	}
	
	@DeleteMapping("/delete")
	public Customer delete(@RequestBody Customer param) {
		logger.info("============ delete ============");
		IFunction i = (Object o) -> custMap.selectCustomer(param);
		return (Customer) i.apply(param);
	}
}
