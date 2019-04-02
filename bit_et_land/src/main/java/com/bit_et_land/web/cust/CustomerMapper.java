package com.bit_et_land.web.cust;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_et_land.web.cmm.Proxy;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cust);
	public List<Customer> selectCustomersList();
	public List<?> selectCustomers(Proxy pxy);
	public Customer selectCustomer(Customer cust);
	public int countCustomers(Object o);

	public Map<String, Object> selectProfile(Map<?,?> map);
	public void deleteCustomer(Customer cust);
	public void updateCustomer(Customer cust);
	public Map<String, Object> selectPhone(Map<?,?> map);
	public Customer selectCustomerOne(Customer cust);
	/*public void updateImage(CustomerDTO cus);*/
}