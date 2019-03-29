var cust = cust || {}
cust = (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		r_cnt ='#right_content';
		l_cnt ='#left_content';
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView=(x)=>{
		$.getScript(compojs,(x)=>{
			$(r_cnt).html(compo.cust_my_page(x));
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
	
	let mypage =()=>{};
	return {init:init}
})();