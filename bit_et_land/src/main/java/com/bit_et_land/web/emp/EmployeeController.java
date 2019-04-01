package com.bit_et_land.web.emp;

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
import com.bit_et_land.web.cmm.ISupplier;
import com.bit_et_land.web.cmm.PrintService;
import com.bit_et_land.web.cmm.Users;
import com.bit_et_land.web.cust.CustController;

@RestController
public class EmployeeController {
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String,Object> map;
	
	@GetMapping("/employees")
	public Employee access() {
		logger.info("============ access ============");
		ISupplier i = ()-> empMap.findOneEmployees();
		return (Employee) i.get();
	}
	@SuppressWarnings("unchecked")
	@GetMapping("/employees/page/{page}")
	public List<Employee> list(@PathVariable String page,@RequestBody Map<?,?> param) {
		logger.info("============ list ============");
		IFunction i =  (Object o)-> empMap.selectEmployees(param);
		List<Employee> ls = (List<Employee>)i.apply(param);
		ps.accept(ls);
		return ls;
	}
	
	@PostMapping("/employees")
	public Map<?,?> register(@RequestBody Employee param) {
		logger.info("============ join ============");
		IConsumer c =  (Object o)-> empMap.insertEmployee(param);
		c.accept(param);
		System.out.println(param.toString());
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	
	@PutMapping("/employees/{userid}")
	public Map<?,?> update(@PathVariable String userid,@RequestBody Employee param) {
		logger.info("============ update ============");
		IConsumer i = (Object o) -> empMap.updateEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/employees/{userid}")
	public Map<?,?> delete(@PathVariable String userid,@RequestBody Employee param) {
		logger.info("============ delete ============");
		IConsumer i = (Object o) -> empMap.deleteEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}