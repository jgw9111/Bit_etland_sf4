package com.bit_et_land.web.supp;

import java.util.List;
import java.util.Map;

import com.bit_et_land.web.cmm.Proxy;

public interface SupplierMapper {
	public String txSupplier(String supplierID);
	public Supplier selectSupplier(Supplier supp);
	public List<Supplier> selectSuppliersList();
	public List<?> selectSuppliers(Proxy pxy);
	public Supplier selectCustomer(Supplier supp);
	public int countSuppliers(Object o);
	public int countAllSuppliers();

	public void deleteSupplier(Supplier supp);
	public void updateSupplier(Supplier supp);
}
