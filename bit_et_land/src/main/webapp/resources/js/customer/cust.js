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
			$(l_cnt+' ul.nav').empty();
			;
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
		})
	};
	let list=()=>{
		reset();
		$.getJSON(_+'/customers/page/1',d=>{
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
			let html = '<div class="pagination">';
			if(d.pxy.existPrev){
				html += '<a href="">&laquo;</a>';
			}
			let i=0,a=1;
			for(i=0;i<5;i++){
				if(d.pxy.pageNum == a){
					html+='<li><a href="#" class ="page active">'+a+'</a></li>';
					a++;
				}else{
					html+='<li><a href="#" class ="page">'+a+'</a></li>';
					a++;
				}
			}
			if(d.pxy.existNext){
				html += '<a href="">&raquo;</a>';
			}
			html +='</div>';
			$(html).appendTo('#content_2');
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
	return {init:init,list:list}
})();