package com.bit_et_land.web.cust;



import java.util.List;
import java.util.Map;

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
import com.bit_et_land.web.cmm.IFunction;
import com.bit_et_land.web.cmm.ISupplier;
import com.bit_et_land.web.cmm.PrintService;
import com.bit_et_land.web.cmm.Proxy;
import com.bit_et_land.web.cmm.Users;

@RestController
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired Users<?> user;
	@Autowired Map<String,Object> map;
	@Autowired Proxy pxy;
	
	@PostMapping("/customers/{userid}")
	public Customer login(@PathVariable String userid,@RequestBody Customer param) {
		logger.info("============ login ============");
		IFunction i = (Object o) -> custMap.selectCustomer((Customer)param);
	
		return (Customer)i.apply(param);
	}
	@GetMapping("/customers/page/{page}")
	public Map<?,?> list(@PathVariable String page) {
		logger.info("============ list ============");
		map.clear();
		map.put("page_num",page);
		System.out.println("page:::"+page);
		map.put("page_size","5");
		map.put("block_size","5");
		ISupplier sup = ()-> custMap.countAllCustomers();
		map.put("row_count", sup.get());
		pxy.carryOut(map);
		IFunction i = (Object o)-> custMap.selectCustomers(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.clear();
		map.put("ls",ls);
		map.put("pxy",pxy);
		return map;
	}
	
	@PostMapping("/customers")
	public Map<?,?> join(@RequestBody Customer param) {
		logger.info("============ join ============");
		IConsumer c =  (Object o)-> custMap.insertCustomer(param);
		c.accept(param);
		System.out.println(param.toString());
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	
	@PutMapping("/customers/{userid}")
	public Map<?,?> update(@PathVariable String userid,@RequestBody Customer param) {
		logger.info("============ update ============");
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/customers/{userid}")
	public Map<?,?> delete(@PathVariable String userid,@RequestBody Customer param) {
		logger.info("============ delete ============");
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}
