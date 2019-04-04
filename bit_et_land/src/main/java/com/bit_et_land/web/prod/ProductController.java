package com.bit_et_land.web.prod;

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

import com.bit_et_land.web.cmm.IFunction;
import com.bit_et_land.web.cmm.ISupplier;
import com.bit_et_land.web.cmm.PrintService;
import com.bit_et_land.web.cmm.Proxy;


@RestController
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product prod;
	@Autowired Map<String,Object> map;
	@Autowired Proxy pxy;
	@Autowired PrintService ps;
	@Autowired ProductMapper prdmap;
	
	@PostMapping("/phones")
	public Map<?,?> register(@RequestBody Product prod) {
		logger.info("============ register ============");
		List<String> list = prod.getFreebies();
		ps.accept("리스트::"+list);
		System.out.println(prod.toString());
		/*IConsumer i = (Object o) -> prdmap.insertProduct(param);
		i.accept(param);*/
		map.clear();
		map.put("s", "s");
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
	@PutMapping("/phones/{prodid}")
	public void update(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ list ============");
		
	}
	@DeleteMapping("/phones/{prodid}")
	public void delete(@PathVariable String prodid,@RequestBody Product param) {
		logger.info("============ delete ============");
		
	}
	
}
