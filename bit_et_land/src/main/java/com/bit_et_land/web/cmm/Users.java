package com.bit_et_land.web.cmm;

import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.bit_et_land.web.cust.Customer;
import com.bit_et_land.web.emp.Employee;

import lombok.Data;

@Data @Lazy
@Component
public class Users<T> {
	ArrayList<T> list;
	void add(T item) {list.add(item);}
	T get(int i) {return list.get(i);}
	int size() {return list.size();}
	
	public Object user(Object p) {
		Object o = null;
		if(p instanceof Customer) {
			o= new Customer();
		}else if(p instanceof Employee){
			o= new Employee();
		}
		return o;
	}
}
