package com.bit_et_land.web.cmm;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Data @Component @Lazy
public class Image {
	private String imgSeq,imgName,imgExtention,owner;
}
