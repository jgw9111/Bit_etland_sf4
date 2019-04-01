package com.bit_et_land.web.cmm;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	
	private int pageNum, count, pageSize, blockSize, startRow, endRow, startPage, endPage, prevBlock, nextBlock,
			rowCount;
	private boolean existPrev, existNext;

	public void carryOut(Map<?, ?> paramMap) {
			System.out.println("==페이지네이션 CarryOut==");
			
			String _pageNum = (String) paramMap.get("page_num");
			pageNum = ((String) paramMap.get("page_num")==null)? 1 : Integer.parseInt(_pageNum); 
			String _pageSize = (String) paramMap.get("page_size");
			pageSize = ((String) paramMap.get("page_size")==null)? 5 : Integer.parseInt(_pageSize);
			//System.out.println("====="+pageSize);
			String _blockSize = (String) paramMap.get("block_size");
			blockSize = ((String) paramMap.get("block_size")==null)? 5 : Integer.parseInt(_blockSize);
			
			System.out.println("pageNum:::"+pageNum);
			System.out.println("pageSize:::"+pageSize);
			System.out.println("blockSize:::"+blockSize);
			
			startRow = (pageNum -1)*pageSize +1;
			endRow = (rowCount > startRow + (pageSize-1) )? startRow + (pageSize-1) : rowCount;
			
			int blockNum = (pageNum-1) / blockSize ;
			
			startPage = blockNum * blockSize + 1 ;
			endPage = startPage + (blockSize-1);
			
			prevBlock = startPage - pageSize;
			nextBlock = startPage + pageSize;

			if(prevBlock < 0) {
			existNext = false;
			existPrev = true;
			}else {
			existNext = true;
			existPrev = false;
			}
		}
}