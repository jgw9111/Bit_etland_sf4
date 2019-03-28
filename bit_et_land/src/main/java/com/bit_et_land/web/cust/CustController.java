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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_et_land.web.cmm.IConsumer;
import com.bit_et_land.web.cmm.IFunction;
import com.bit_et_land.web.cmm.PrintService;
import com.bit_et_land.web.cmm.Users;
import com.bit_et_land.web.emp.Employee;
import com.bit_et_land.web.emp.EmployeeMapper;

@RestController
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String,Object> map;
	
	@PostMapping("/customers/{userid}")
	public Customer login(@PathVariable String userid,@RequestBody Customer param) {
		logger.info("============ login ============");
		IFunction i = (Object o) -> custMap.selectCustomer((Customer)param);
	
		return (Customer)i.apply(param);
	}
	@SuppressWarnings("unchecked")
	@GetMapping("/customers/page/{page}")
	public List<Customer> list(@PathVariable String page,@RequestBody Map<?,?> param) {
		logger.info("============ list ============");
		IFunction i =  (Object o)-> custMap.selectCustomers(param);
		List<Customer> ls = (List<Customer>)i.apply(param);
		ps.accept(ls);
		return ls;
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
