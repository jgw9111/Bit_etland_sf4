var emp = emp ||{};
emp =(()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let reset = ()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		r_cnt ='#right_content';
		l_cnt ='#left_content';
	};
	let init = ()=>{
		reset();
		onCreate();
	};
	let onCreate = ()=>{
		setContentView();
	};
	let setContentView =()=>{
		$(l_cnt+' ul.nav').empty();
		$(l_cnt+' #nav_title').text('고객목록');
		$.each(empNav(),(i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>').attr('name',j.name)
			.appendTo(l_cnt+' ul.nav').click(function(){
				let that = $(this).attr('name');
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				switch (that) {
				case "custlist": 
					break;
				case "prodregi": 
					$(r_cnt).empty();
					$(compo.prod_regi()).appendTo(r_cnt);
					break;
				case "prodlist":
					break;
				case "prodstatistics":
					break;
				case "prodmodi":
					break;
				case "proddelete": 
					break;
				}
			});
			$('[name=custlist]').addClass('active');
		});
	};
	let empNav =()=>{
		return [
			{name:'custlist',val:'고객목록'},
			{name:'prodregi',val:'상품등록'},
			{name:'prodlist',val:'상품목록'},
			{name:'prodstatistics',val:'상품통계'},
			{name:'prodmodi',val:'상품수정'},
			{name:'proddelete',val:'상품삭제'}
			];
		
	};
	return {init:init};
})();