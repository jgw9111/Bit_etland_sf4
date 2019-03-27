var auth = auth || {}
auth = (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		r_cnt ='#right_content';
		l_cnt ='#left_content';
		onCreate();
	};
	let onCreate = ()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript(compojs)
		.done(()=>{
			// 로그인 폼 디폴트
			$(r_cnt).empty();
			$(compo.cust_login_form()).appendTo(r_cnt);
			login(); 
			// 네비게이션
			$(l_cnt+' ul.nav').empty();
			let arr =[{name:'login',val:'Login'},
				{name:'join',val:'Join'},
				{name:'emp_access',val:'Emp_access'},
				{name:'emp_register',val:'Emp_register'}];
			$.each(arr,(i,j)=>{
				$('<li><a href="#">'+j.val+'</a></li>').attr('name',j.name)
				.appendTo(l_cnt+' ul.nav')
				.click(function(){
					let that = $(this).attr('name');
					alert(j.val+' 누름');
					switch(that){
					case 'login':
						$(r_cnt).empty();
						$(compo.cust_login_form()).appendTo(r_cnt);
						login(); //클릭이벤트 처리
						/*$('form button[type=submit]').click(()=>{
							alert('로그인 버튼 클릭');
						});*/
						break;
					case 'join':
						$(r_cnt).empty();
						$(compo.cust_join_form()).appendTo(r_cnt);
						break;
					case 'emp_register': 
						$(r_cnt).empty();
						$(compo.emp_register_form()).appendTo(r_cnt);
						break;
					case 'emp_access': 
						$(r_cnt).empty();
						$(compo.emp_access_form()).appendTo(r_cnt);
						break;
					};
				});
			});
		})
		.fail(()=>{
			alert('/component/compo.js 를 찾지 못했습니다.');
		});
	};
	let login =()=>{
		$('form button[type=submit]').click(()=>{
			let data = {customerID:$('form input[name=uname]').val(),
					password:$('form input[name=psw]').val()};
			$.ajax({
				url: $.ctx()+'/cust/login',
				type: 'POST',
				data:JSON.stringify(data),
				datatype:'json',
				contentType:'application/json',
				success: d=>{
					if(d.customerID!==''){
						alert('로그인 성공 '+d.customerID);
					}else{
						alert('로그인 실패');
					};
				},
				error : e=>{
					alert('error');
				}
			});
		});
	};
	
	let join =()=>{};
	let mypage =()=>{};
	return {
		init:init
	};
})();