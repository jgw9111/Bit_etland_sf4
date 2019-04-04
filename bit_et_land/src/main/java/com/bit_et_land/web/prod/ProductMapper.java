package com.bit_et_land.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_et_land.web.cmm.Proxy;
import com.bit_et_land.web.emp.Employee;


@Repository
public interface ProductMapper {
	public void insertProduct(Map<?,?> map);
	public List<Employee> selectProductList(Proxy pxy);
	public List<Employee> selectProducts(Map<?,?> map);
	public Employee selectProduct(Product prod);
	public int countProducts(Map<?,?> map);
	public int countAllProducts();
	public boolean exsitProduct(Product prod);
	public void updateProduct(Product prod);
	public void deleteProduct(Product prod);
	
	
}