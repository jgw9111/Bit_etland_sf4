"use strict";
var prod = prod||{};
prod= (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		onCreate();
		reset();
	};
	let reset=()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		r_cnt ='#right_content';
		l_cnt ='#left_content';
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
			$(r_cnt).empty();
			$(compo.carousel()).appendTo(r_cnt);
			
	};
	
let post =()=>{
	reset();
	$(r_cnt).html(compo.prod_regi());
	$('#prd_post_btn').click(e=>{
		e.preventDefault();
		
		let freebies = [];
		$(".checks:checked").each(function(i){ //".checks:checked" 액션형 클래스 (이벤트가 걸린 것)
			freebies.push($(this).val());
		});
		let pname = $('#product_name').val();
		let price = $('#price').val();
		let comment = $('#comment').val();
		let unit = $('#unit').val();
		if($.fn.nullChecker([pname,price,comment])){
			alert('상 품 명 을 입력해주세요 모르겠는데용 널이들어오면 뜨나요');
		}else{
			alert('휴');
		}
		
		/*let check = checkValues[0]+','+checkboxValues[1];*/
		let data = {categoryId:$('#category_id').val(),
				productName:pname,
				price:price,
				unit:unit,
				comment:$('#comment').val(),
				supplierId:$('#supplier_id').val(),
				color:$('input[name=color]:checked').val(),
				freebies:freebies};
		$.ajax({
			url : _+'/phones',
			type : 'post',
			data : JSON.stringify(data),
			dataType : 'json',
			contentType : 'application/json',
			success : d=>{
				alert('유효성 체크 성공');
				
			},
			error : e=>{
				alert('유효성 체크 실패');
				
			}
		});
	});
	$('#img_upload_btn').click(function(e){
		e.preventDefault();
		alert('----------');
		let ok = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
		if(ok){
			/*let fd = new FormData();
			fd.append('file',this.file[0]);*/
			$('#img_upload_frm').attr('action',_+'/phones/files');
			$.ajax({
				url:$('#img_upload_frm').attr('action'),
				type:'post',
				dataType:'text',
				encType:"multipart/form-data",
				beforeSubmit:function(){
					alert('로딩');
				},
				success:d=>{
					alert('파일 업로드 성공');
				}
			}).submit();
		}else{
			alert('gif,png,jpg,jpeg 파일만 업로드 가능합니다');
		}
	});
};
let get =x=>{
	reset();
	$.getJSON(_+'/phones/page/'+x,d=>{
		$(r_cnt).empty();
		$('<div class="grid-item" id="prod_lst">'+'<h2>상품 목록</h2></div>'
				+'<div class="grid-item" id="content_2">').appendTo('#right_content');
		let table = '<table class="table table-bordered"><tr>'
			+'<th>NO.</th>'
			+'<th>상품 이름</th>'
			+'<th>공급자 ID</th>'
			+'<th>카테고리</th>'
			+'<th>UNIT</th>'
			+'<th>가격</th>'
			+'</tr>'
		$.each(d.ls,(i,j)=>{
			table += '<tr><td>'+j.rownum+'</td>'
			+'<td>'+j.productName+'</td>'
			+'<td>'+j.supplierId+'</td>'
			+'<td>'+j.categoryId+'</td>'
			+'<td>'+j.unit+'</td>'
			+'<td>'+j.price+'</td>'
			+'</tr>'
		});
		table += '</table></div>';
		$(table).appendTo('#content_2');
		$('<div style="height: 50px"></div>').appendTo('#prod_lst');
		$('<div class="pagination"></div>').appendTo('#content_2');
		if(d.pxy.existPrev){
			$('<li><a>&laquo;</a></li>')
			/*.attr('href',_+'/phones/page/'+d.pxy.prevBlock)*/
			.appendTo('.pagination')
			.click(()=>{
				get(d.pxy.prevBlock);
			});
		}
		let i=0;
		for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
			if(d.pxy.pageNum == i){
				$('<li><a class ="page active">'+i+'</a></li>')
				/*.attr('href',_+'/phones/page/'+i)*/
				.appendTo('.pagination')
				.click(function(){
					alert('클릭 페이지::'+$(this).text());
					get($(this).text());
				});
			}else{
				$('<li><a class ="page">'+i+'</a></li>')
				/*.attr('href',_+'/customers/page/'+i)*/
				.appendTo('.pagination')
				.click(function(){
					get($(this).text());
				});
			}
		}
		if(d.pxy.existNext){
			$('<li><a>&raquo;</a></li>')
			/*.attr('href',_+'/phones/page/'+d.pxy.nextBlock)*/
			.appendTo('.pagination')
			.click(()=>{
				get(d.pxy.nextBlock);
			});
		}
	
	});
};
let put =()=>{
	
};
let del =()=>{
	
};

return {init:init,get:get,post:post};
})();