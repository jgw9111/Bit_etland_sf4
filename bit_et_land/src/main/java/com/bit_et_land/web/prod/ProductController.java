package com.bit_et_land.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_et_land.web.cate.Category;
import com.bit_et_land.web.cate.CategoryMapper;
import com.bit_et_land.web.cmm.IConsumer;
import com.bit_et_land.web.cmm.IFunction;
import com.bit_et_land.web.cmm.ISupplier;
import com.bit_et_land.web.cmm.PrintService;
import com.bit_et_land.web.cmm.Proxy;
import com.bit_et_land.web.supp.Supplier;
import com.bit_et_land.web.supp.SupplierMapper;


@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product prod;
	@Autowired Map<String,Object> map;
	@Autowired Proxy pxy;
	@Autowired PrintService ps;
	@Autowired ProductMapper prdmap;
	@Autowired CategoryMapper catemap;
	@Autowired Category cate;
	@Autowired SupplierMapper suppmap;
	@Autowired Supplier supp;
	
	@Transactional
	@PostMapping("/phones")
	public Map<?,?> register(@RequestBody Product param) {
		logger.info("============ register ============");
		List<String> list = param.getFreebies();
		ps.accept("리스트::"+list);
		System.out.println(param.toString());
		IFunction f = s -> catemap.txCategory((String)s);
		IFunction f2 = s -> suppmap.txSupplier((String)s);
		/*IFunction f = (Object o) -> catemap.txCategory((String) o);*/

		String cateID = (String) f.apply(param.getCategoryId()); // categoryID 에 name 들어있음 
		String suppID = (String) f2.apply(param.getSupplierId());
		param.setCategoryId(cateID);
		param.setSupplierId(suppID);
		
		IConsumer i = (Object o) -> prdmap.insertProduct((Product)o);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	@GetMapping("/phones/{page}")
	public Map<?,?> list(@PathVariable String page) {
		logger.info("============ list ============");
		map.clear();
		map.put("page_num",page);
		map.put("page_size","5");
		map.put("block_size","5");
		ISupplier sup = ()-> prdmap.countAllProducts();
		map.put("row_count", sup.get());
		pxy.carryOut(map);
		IFunction i = (Object o) ->  prdmap.selectProductList(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		
		return map;
	}
	
	@GetMapping("/phones/search/{search}")
	public Map<?,?> select(@PathVariable String search) {
		logger.info("============ search ============");
		String srch = "%"+search+"%";
		
		IFunction i = (Object o)-> prdmap.selectProducts(srch);
		
		List<?> list = (List<?>) i.apply(srch);
		System.out.println(list.toString());
		map.clear();
		map.put("list",list);
		map.put("pxy",pxy);
		return map;
	}
	
	@PutMapping("/phones/{prodid}")
	public void update(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ list ============");
		
	}
	@DeleteMapping("/phones/{prodid}")
	public void delete(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ delete ============");
		
	}
	
}
