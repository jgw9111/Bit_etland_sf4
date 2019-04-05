package com.bit_et_land.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private String search;
	private int pageNum, count, pageSize, blockSize, startRow, endRow, startPage, endPage, prevBlock, nextBlock,
			rowCount;
	private boolean existPrev, existNext;
	@Autowired Image img;
	public void carryOut(Map<?, ?> paramMap) {
			System.out.println("==페이지네이션 CarryOut==");
			search = (String) paramMap.get("srch");
			String _pageNum = (String)paramMap.get("page_num");
			/*System.out.println("1........:::페이지 넘:::" + pageNum+"_pageNum ::: "+_pageNum);*/
			this.pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
			String _pageSize = (String)paramMap.get("page_size");
			this.pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
			//System.out.println("====="+pageSize);
			String _blockSize = (String)paramMap.get("block_size");
			this.blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
			
			System.out.println("pageNum:::"+pageNum);
			System.out.println("pageSize:::"+pageSize);
			System.out.println("blockSize:::"+blockSize);
			
			this.rowCount = (int) paramMap.get("row_count");
			int nmg = rowCount % pageSize;
			int pageCount = (nmg == 0) ? rowCount / pageSize : rowCount / pageSize + 1;
		        
			startRow = (pageNum -1)*pageSize;
			endRow = (startRow + (pageSize - 1) < rowCount) ? startRow + (pageSize - 1) : rowCount;
			/*System.out.println("@@스타트로우@@"+startRow+"\n @@엔드로우@@"+endRow);*/
			
			int blockNum = (pageNum-1) / blockSize ;
			if(existPrev) {
				startPage = blockNum*blockSize+1;
			}else {
				startPage = 1;
			}
			
			endPage = startPage+(blockSize-1);
			startPage = pageNum -((pageNum-1)%blockSize);
			
			if(endPage>pageCount) {
				endPage = pageCount;
			}
			
			System.out.println("@@스타트페이지@@"+startPage+"\n @@엔드페이지@@"+endPage);
			prevBlock = startPage - pageSize;
			nextBlock = startPage + pageSize;

			if(prevBlock < 0) {
				existNext = true;
				existPrev = false;
			}else {
				existNext = false;
				existPrev = true;
			}
			
		}
	
	public void fileUpload(String customerID) {
		System.out.println("-=====이미지프록시 1=====-");
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setFileSizeMax(1024*1024*40); // 40MB
		upload.setSizeMax(1024*1024*50);
		List<FileItem> items = null;
		try {
			File file = null;
			//items = upload.parseRequest(new ServletRequestContext(request));
			Iterator<FileItem> it = items.iterator();
			while(it.hasNext()) {
				FileItem item = it.next();
				if(!item.isFormField()) {
					String fileName = item.getName();
					file = new File(""+fileName);
					item.write(file);
					img = new Image();
					System.out.println("---> 파일명 :: "+ fileName.substring(0,fileName.indexOf(".")));
					img.setImgName(fileName.substring(0,fileName.indexOf(".")));
					System.out.println("---> 확장자 :: "+fileName.substring(fileName.indexOf(".")+1));
					img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
					img.setOwner(customerID);
					System.out.println("---> 이미지 주인 :: "+customerID);
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}