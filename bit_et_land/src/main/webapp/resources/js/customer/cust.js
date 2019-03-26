var cust = cust || {}
cust.permission = (()=>{
	let login =()=>{
		$('#left_content ul.nav').empty();
		let arr =[{name:'login',val:'Login'},
			{name:'join',val:'Join'},
			{name:'Emp_register',val:'Emp_register'},
			{name:'Emp_access',val:'Emp_access'}];
		$.each(arr,(i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>').attr('name',j.name)
			.appendTo('#left_content ul.nav')
			.click(function(){
				let that = $(this).attr('name');
				alert(j.val+' 누름');
			});
		});
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			/*$('#left_content').html(compo.nav());*/
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