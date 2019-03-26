package com.bit_et_land.web.cmm;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@GetMapping(value = "/")
	public String home(Locale locale, Model model) {
		logger.info("============ home ============");
		return "index";
	}
}
