var auth = auth || {}
auth.permission = (()=>{
	let js = $.js();
	let compojs = $.js()+'/component/compo.js';
	let rightCtnt = $('#right_content');
	
	let init =()=>{
		onCreate();
	};
	let onCreate = ()=>{
		setContentView();
	};
	let setContentView=()=>{};
	
	let login =()=>{
		$.getScript(compojs)
		.done(()=>{
			rightCtnt.html(compo.cust_login_form());
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
						alert('success');
					},
					error : e=>{
						alert('error');
					}
				});
			});
			
			$('#left_content ul.nav').empty();
			let arr =[{name:'login',val:'Login'},
				{name:'join',val:'Join'},
				{name:'emp_access',val:'Emp_access'},
				{name:'emp_register',val:'Emp_register'}];
			$.each(arr,(i,j)=>{
				$('<li><a href="#">'+j.val+'</a></li>').attr('name',j.name)
				.appendTo('#left_content ul.nav')
				.click(function(){
					let that = $(this).attr('name');
					alert(j.val+' 누름');
					switch(that){
					case 'login':
						$('#right_content').empty();
						$(compo.cust_login_form()).appendTo('#right_content');
						$('form button[type=submit]').click(()=>{
							alert('로그인 버튼 클릭');
						});
						break;
					case 'join':
						$('#right_content').empty();
						$(compo.cust_join_form()).appendTo('#right_content');
						break;
					case 'emp_register': 
						$('#right_content').empty();
						$(compo.emp_register_form()).appendTo('#right_content');
						break;
					case 'emp_access': 
						$('#right_content').empty();
						$(compo.emp_access_form()).appendTo('#right_content');
						break;
					};
				});
			});
		})
		.fail(()=>{
			alert('/component/compo.js 를 찾지 못했습니다.');
		});
		
	};
	let join =()=>{};
	let mypage =()=>{};
	return {
		login : login,
		join : join,
		mypage: mypage
	};
})();