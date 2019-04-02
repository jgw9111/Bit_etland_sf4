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
		$.getScript(compojs, ()=>{
			// 로그인 폼 디폴트
			$(r_cnt).html(compo.cust_login_form());
			$('form button[type=submit]').click(e=>{
				e.preventDefault(); // 이벤트 버블링을 막는 것 -> 파생되는 액션을 취하지 않음 
				login(); //클릭이벤트 처리
			});
			// 네비게이션
			$(l_cnt+' ul.nav').empty();
			$.each(authNav(),(i,j)=>{
				$('<li><a href="#">'+j.val+'</a></li>').attr('name',j.name)
				.appendTo(l_cnt+' ul.nav')
				.click(function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
					alert(j.val+' 누름');
					switch(that){
					case 'login':
						$(r_cnt).empty();
						$(compo.cust_login_form()).appendTo(r_cnt);
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							
							login(); //클릭이벤트 처리
						});
						/*$('form button[type=submit]').click(()=>{
							alert('로그인 버튼 클릭');
						});*/
						break;
					case 'join':
						$(r_cnt).empty();
						$(compo.cust_join_form()).appendTo(r_cnt);
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							join(); //클릭이벤트 처리
						});
						
						break;
					case 'emp_register': 
						$(r_cnt).empty();
						$(compo.emp_register_form()).appendTo(r_cnt);
						break;
					case 'emp_access': 
						$(r_cnt).empty();
						$(compo.emp_access_form()).appendTo(r_cnt);
						$('#access_btn').click(e=>{
							e.preventDefault();
							alert('접근버튼 클릭');
							access();
						});
						break;
					};
				});
				$('[name=login]').addClass('active');
			});
			
			
		})
		.fail(()=>{
			alert('/component/compo.js 를 찾지 못했습니다.');
		});
	};
	let login =()=>{
		
			let data = {customerID:$('form input[name=uname]').val(),
					password:$('form input[name=psw]').val()};
			$.ajax({
				url: $.ctx()+'/customers/'+data.customerID,
				type: 'POST',
				data:JSON.stringify(data),
				datatype:'json',
				contentType:'application/json',
				success: d=>{
					if(d.customerID!==''){
						alert('로그인 성공 '+d.customerID);
				/*		$(r_cnt).html(compo.cust_my_page());*/
						cust.init(d);
					}else{
						alert('로그인 실패');
					};
				},
				error : e=>{
					alert('error');
				}
			});
	};

	let join =()=>{
		let data = {
				customerID:$('input[name=customerID]').val(),
				customerName:$('input[name=customerName]').val(),
				password:$('input[name=password]').val(),
				ssn:$('input[name=ssn]').val(),
				phone:$('input[name=phone]').val(),
				city:$('input[name=city]').val(),
				address:$('input[name=address]').val(),
				postalCode:$('input[name=postalCode]').val()
		};
		$.ajax({
			url :$.ctx()+'/customers',
			type :'post',
			data:JSON.stringify(data),
			dataType:'json',
			contentType:'application/json',
			success: d=>{
				if(d.customerID!==''){
					alert('회원가입 성공'+d.msg);
					$(r_cnt).html(compo.cust_login_form());
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login(); //클릭이벤트 처리
					});
				}
				else{
					alert('회원가입 실패');
					$(r_cnt).html(compo.cust_join_form());
					join();
				};
				
			},
			error: e=>{
				alert('error');
			}
		});
	};
	let register =()=>{
		let data = {
				employeeId:$('input[name=employeeId]').val(),
				manager:$('input[name=manager]').val(),
				name:$('input[name=name]').val(),
				birthDate:$('input[name=birthDate]').val(),
				notes:$('input[name=notes]').val(),
				photo:$('input[name=photo]').val()
		};
		$.ajax({
			url :$.ctx()+'/employees',
			type :'post',
			data:JSON.stringify(data),
			dataType:'json',
			contentType:'application/json',
			success: d=>{
				if(d.employeeId!==''){
					alert('회원가입 성공'+d.msg);
					$(r_cnt).html(compo.cust_login_form());
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login(); //클릭이벤트 처리
					});
				}
				else{
					alert('회원가입 실패');
					$(r_cnt).html(compo.cust_join_form());
					join();
				};
				
			},
			error: e=>{
				alert('error');
			}
		});
	};
	let access =()=>{
		let ok = confirm('사원입니까?');
		if(ok){
			let emp_no = prompt('사원번호 입력하세요');
			$.getJSON(
				$.ctx()+'/employees',
				d=>{
					alert('success');
					if(emp_no===d.employeeId){
						alert('사원 인증');
						// 이름 입력창
						/*$(r_cnt).empty();*/
						$(r_cnt).html(compo.emp_access_form);
						$('<label for=name><b>NAME</b></label>'+
						'<input type="text" placeholder="Enter name" id="name" name="name" value="김경민" "required">').appendTo('form div#access_input');
						$('form button[type=submit]').click(e=>{
							e.preventDefault();
							if($('#name').val()===d.name){
								//고객명단
								cust.list();
								emp.init();
								alert('이름'+d.name);
							}else{}
						});
						
					}else{
						//사원 번호가 일치하지 않습니다.
					}
				}
			);
			
		}else{
			// 사원 전용 페이지입니다.
			// 되돌아 가기 버튼
		}
	};
	let authNav=()=>{
		return [{name:'login',val:'Login'},
			{name:'join',val:'Join'},
			{name:'emp_access',val:'Emp_access'},
			{name:'emp_register',val:'Emp_register'}];
		
	};
	return {
		init:init
	};
	})();