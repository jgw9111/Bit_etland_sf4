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
			let arr =[
				{name:'mypage',val:'마이페이지'},
				{name:'shop',val:'쇼핑몰'},
				{name:'modify ',val:'정보수정'},
				{name:'withdraw',val:'회원탈퇴'},
				{name:'purchase',val:'구매내역'},
				{name:'basket',val:'장바구니'}
				];
			$.each(arr,(i,j)=>{
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
			alert('페이지네이션');
			let html = '<h2>사용자 정보</h2><table class="table table-bordered"><tr>'
					+'<th>NO.</th>'
					+'<th>아이디</th>'
					+'<th>이름</th>'
					+'<th>생년월일</th>'
					+'<th>성별</th>'
					+'<th>휴대폰 번호</th>'
					+'<th>주소</th>'
					+'<th>우편번호</th>'
					+'</tr>'
			$.each(d,(i,j)=>{
				html += '<tr><td>'+j.no+'</td>'
				+'<td>'+j.customerID+'</td>'
				+'<td>'+j.customerName+'</td>'
				+'<td>'+j.ssn+'</td>'
				+'<td>'+'여'+'</td>'
				+'<td>'+j.phone+'</td>'
				+'<td>'+j.address+'</td>'
				+'<td>'+j.postalCode+'</td>'
				+'</tr>'
			});
			html += '</table>';
			$(r_cnt).html(html);
		});
	};
	let mypage =()=>{};
	return {init:init,list:list}
})();