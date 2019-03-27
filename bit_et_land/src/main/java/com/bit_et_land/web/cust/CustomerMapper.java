package com.bit_et_land.web.cust;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cust);
	public List<Customer> selectCustomersList(Map<?,?> map);
	public List<Customer> selectCustomers(Map<?,?> map);
	public Customer selectCustomer(Customer cust);
	public int countCustomers(Object o);

	public Map<String, Object> selectProfile(Map<?,?> map);
	public void deleteCustomer(Customer cust);
	public void updateCustomer(Customer cust);
	public Map<String, Object> selectPhone(Map<?,?> map);
	public Customer selectCustomerOne(Customer cust);
	/*public void updateImage(CustomerDTO cus);*/
}