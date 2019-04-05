var cust = cust || {}
cust = (()=>{
	let _,js,compojs,r_cnt,l_cnt,data;
	let init =(x)=>{
		data = x;
		reset();
		onCreate();
	};
	let reset = ()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		r_cnt ='#right_content';
		l_cnt ='#left_content';
	};
	let onCreate =()=>{
		setContentView();
	
	};
	let setContentView=()=>{
		$.getScript(compojs,(x)=>{
			$(r_cnt).html(compo.cust_my_page({
				customerID:data.customerID,
				customerName:data.customerName,
				ssn:data.ssn,
				phone:data.phone,
				city:data.city,
				address:data.address,
				postalCode:data.postalCode
			}));
			$('#srch_btn').on('click',e=>{
				e.preventDefault();
				let search = $('#searchbox').val();
				if($.fn.nullChecker([search])){
					alert('검색어를 입력하세요'+search);
				}else{
					let val = {s:search,p:1};
					srch(val);
				};
			});
			$(l_cnt+' ul.nav').empty();
			$.each(custNav(),(i,j)=>{
				$('<li><a href="#">'+j.val+'</a></li>').attr('name',j.name)
				.appendTo(l_cnt+' ul.nav').click(function(){
					// 버튼 클릭시 색 활성화
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
					alert(j.val+' 누름');
					switch (that) {
					case "mypage": 
						break;
					case "shop": 
						$(r_cnt).empty();
						prod.init();
						break;
					case "modify":
						break;
					case "withdraw":
						break;
					case "purchase": 
						break;
					case "basket": 
						break;
					}
				});
			});
			$('[name=mypage]').addClass('active');
			$('#srch_grp').show();
		})
	};
	let list=x=>{
		reset();
		$.getJSON(_+'/customers/page/'+x,d=>{
			$(r_cnt).empty();
			alert('페이지네이션');
			$('<div class="grid-item" id="cust_lst">'+'<h2>사용자 정보</h2></div>'
					+'<div class="grid-item" id="content_2">').appendTo('#right_content');
			let table =
					'<table class="table table-bordered"><tr>'
					+'<th>NO.</th>'
					+'<th>아이디</th>'
					+'<th>이름</th>'
					+'<th>생년월일</th>'
					+'<th>성별</th>'
					+'<th>휴대폰 번호</th>'
					+'<th>주소</th>'
					+'<th>우편번호</th>'
					+'</tr>'
			$.each(d.ls,(i,j)=>{
				table += '<tr><td>'+j.rownum+'</td>'
				+'<td>'+j.customerID+'</td>'
				+'<td>'+j.customerName+'</td>'
				+'<td>'+j.ssn+'</td>'
				+'<td>'+'여'+'</td>'
				+'<td>'+j.phone+'</td>'
				+'<td>'+j.address+'</td>'
				+'<td>'+j.postalCode+'</td>'
				+'</tr>'
			});
			table += '</table></div>';
			$(table).appendTo('#content_2');
			$('<div style="height: 50px"></div>').appendTo('#cust_lst');
			$('<div class="pagination"></div>').appendTo('#content_2');
			if(d.pxy.existPrev){
				$('<li><a>&laquo;</a></li>')
				.attr('href',_+'/customers/page/'+d.pxy.prevBlock)
				.appendTo('.pagination')
				.click(()=>{
					list(d.pxy.prevBlock);
				});
			}
			let i=0;
			for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
				if(d.pxy.pageNum == i){
					$('<li><a class ="page active">'+i+'</a></li>')
					.attr('href',_+'/customers/page/'+i)
					.appendTo('.pagination')
					.click(function(){
						alert('클릭 페이지::'+$(this).text());
						list($(this).text());
					});
				}else{
					$('<li><a class ="page">'+i+'</a></li>').attr('href',_+'/customers/page/'+i).appendTo('.pagination')
					.click(function(){
						alert('클릭 페이지::'+$(this).text());
						list($(this).text());
					});
				}
			}
			if(d.pxy.existNext){
				$('<li><a>&raquo;</a></li>')
				.attr('href',_+'/customers/page/'+d.pxy.nextBlock)
				.appendTo('.pagination')
				.click(()=>{
					alert('클릭 페이지::'+$(this).text());
					list(d.pxy.nextBlock);
				});
			}
			/*html +='</div>';*/
			/*$(html).appendTo('#content_2');*/
		});
		
	};
	
	let mypage =()=>{};
	let custNav =()=>{
		return [
			{name:'mypage',val:'마이페이지'},
			{name:'shop',val:'쇼핑몰'},
			{name:'modify ',val:'정보수정'},
			{name:'withdraw',val:'회원탈퇴'},
			{name:'purchase',val:'구매내역'},
			{name:'basket',val:'장바구니'}
			];
	};
	
	let srch=x=>{
		$.getJSON(_+'/phones/'+x.s+'/'+x.p,d=>{
			$('#right_content').empty();
			$('<div class="grid-item" id="srch_lst">'+'<h2>상품 검색 리스트</h2></div>'
					+'<button id="grid_btn">그리드로 보기</button>'
					+'<div class="grid-item" id="content_2">').appendTo('#right_content');
			let table =
					'<table class="table table-bordered"><tr>'
					+'<th>NO.</th>'
					+'<th>이름</th>'
					+'<th>공급업체</th>'
					+'<th>카테고리</th>'
					+'<th>수량</th>'
					+'<th>가격</th>'
					+'</tr>'
			$.each(d.list,(i,j)=>{
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
			$('<div style="height: 50px"></div>').appendTo('#srch_lst');
			$('<div class="pagination"></div>').appendTo('#content_2');
			
			if(d.pxy.existPrev){
				$('<li><a>&laquo;</a></li>')
				/*.attr('href',_+'/phones/page/'+d.pxy.prevBlock)*/
				.appendTo('.pagination')
				.click(()=>{
					let val = {s:x.s, p:d.pxy.prevBlock};
					srch(val);
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
						let val = {s:x.s, p:$(this).text()};
						srch($(this).text());
					});
				}else{
					$('<li><a class ="page">'+i+'</a></li>')
					/*.attr('href',_+'/customers/page/'+i)*/
					.appendTo('.pagination')
					.click(function(){
						let val = {s:x.s, p:$(this).text()};
						srch(val);
					});
				}
			}
			if(d.pxy.existNext){
				$('<li><a>&raquo;</a></li>')
				/*.attr('href',_+'/phones/page/'+d.pxy.nextBlock)*/
				.appendTo('.pagination')
				.click(()=>{
					let val = {s:x.s, p:d.pxy.existNext};
					srch(d.pxy.nextBlock);
				});
			}
			$('#grid_btn').click(e=>{
				alert('그리드 보기 클릭');
				grid(x);
			});
			
		});
		
	};
	let grid =x=>{
			$('#right_content').empty();
			$('<div class="grid-item" id="srch_grid">'+'<h2>상품 검색 그리드</h2></div>'
					+'<button id="list_btn">리스트로 보기</button>'
					+'<div class="grid-item" id="content_2">').appendTo('#right_content');
			//페이지네이션 안 된다..
			$.getJSON($.ctx()+'/phones/'+x.s+'/grid/'+x.p,d=>{
				let a = [1,2,3];
				let b=0;
				$('<div id="grid"></div>').appendTo('#right_content');
				$('<div class="row progrid"></div>').appendTo('#grid');
				$.each(a,(x,y)=>{
					$('<div class="col-md-4">'
					+'<div class="thumbnail">'
					+'<a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanydDprvV35nlbHP2RwvjdyPrYgOgjevy7W_efJ2tTEVZvKKF" target="_blank">'
					+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanydDprvV35nlbHP2RwvjdyPrYgOgjevy7W_efJ2tTEVZvKKF" alt="Lights" style="width:100%">'
					+'<div class="caption">'
					+'<p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>'
					+'</div>'
					+'</a>'
					+'</div>'
					+'</div>').appendTo('.progrid');
				});
				if(d.pxy.existPrev){
					$('<li><a>&laquo;</a></li>')
					/*.attr('href',_+'/phones/page/'+d.pxy.prevBlock)*/
					.appendTo('.pagination')
					.click(()=>{
						let val = {s:x.s, p:d.pxy.prevBlock};
						srch(val);
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
							let val = {s:x.s, p:$(this).text()};
							srch($(this).text());
						});
					}else{
						$('<li><a class ="page">'+i+'</a></li>')
						/*.attr('href',_+'/customers/page/'+i)*/
						.appendTo('.pagination')
						.click(function(){
							let val = {s:x.s, p:$(this).text()};
							srch(val);
						});
					}
				}
				if(d.pxy.existNext){
					$('<li><a>&raquo;</a></li>')
					/*.attr('href',_+'/phones/page/'+d.pxy.nextBlock)*/
					.appendTo('.pagination')
					.click(()=>{
						let val = {s:x.s, p:d.pxy.existNext};
						srch(d.pxy.nextBlock);
					});
				}
			//
			});
			
			$('#list_btn').click(e=>{
				alert('리스트 보기 클릭');
				srch(x);
			});
	};
	return {init:init,list:list}
})();