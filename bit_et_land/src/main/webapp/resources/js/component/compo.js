var compo = compo ||{};
compo = {
		cust_login_form : ()=>{
			return '<h2>Login Form</h2>'
			+'<form>'
			+'  <div class="imgcontainer">'
			+'    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">'
			+'  </div></br>'
			+'  <div class="container">'
			+'    <label for="uname"><b>Username</b></label> '
			+'    <input type="text" placeholder="Enter Username" name="uname" value="dididi" required> </br>'
			+'    <label for="psw"><b>Password</b></label>'
			+'    <input type="password" placeholder="Enter Password" name="psw" value="1111" required> </br>'	  
			+'    <button type="submit">Login</button></br>'
			+'    <label> '
			+'      <input type="checkbox" checked="checked" name="remember"> Remember me'
			+'    </label>'
			+'  </div>'
			+'  <div class="container" style="background-color:#f1f1f1">'
			+'    <button type="button" class="cancelbtn">Cancel</button>'
			+'    <span class="psw">Forgot <a href="#">password?</a></span></br>'
			+'  </div>'
			+'</form>';
		},
		emp_access_form : ()=>{
			return '<h2>Login Form</h2>'
			+'<form action="/action_page.php">'
			+'  <div class="imgcontainer">'
			+'    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">'
			+'  </div>'
			+'  <div class="container">'
			+'    <label for="employeeId"><b>EmployeeId</b></label>'
			+'    <input type="text" placeholder="Enter employeeId" name="employeeId" "required">'
			+'    <label for="name"><b>Name</b></label>'
			+'    <input type="text" placeholder="Enter name" name="name" "required">'	  
			+'    <button type="submit">ACCESS</button>'
			+'    <label>'
			+'      <input type="checkbox" checked="checked" name="remember"> Remember me'
			+'    </label>'
			+'  </div>'
			+'  <div class="container" style="background-color:#f1f1f1">'
			+'    <button type="button" class="cancelbtn">Cancel</button>'
			+'    <span class="psw">Forgot <a href="#">password?</a></span>'
			+'  </div>'
			+'</form>';
		},
		/*nav :()=>{
			$('#nav').children().eq(0).html('<a href="#" id="login">Login</a>');
			$('#nav').children().eq(1).html('<a href="#" id="Join">Join</a>');
			$('#nav').children().eq(2).html('<a href="#" id="emp_regist">emp_Register</a>');
			$('#nav').children().eq(3).html('<a href="#" id="emp_access">emp_Access</a>');
		},*/
		cust_join_form :()=>{
			 return '<form>'
	            +'  <div class="container">'
	            +'    <h1>Sign Up</h1>'
	            +'    <p>Please fill in this form to create an account.</p>'
	            +'    <hr>'
	            +'	<div id=join_form>'
	            +'    <label for="customerID"><b>아이디</b></label></br>'
	            +'    <input type="text" placeholder="Enter Email" name="customerID" required> </br>'
	        
	            +'    <label for="customerName"><b>이름</b></label></br>'
	            +'    <input type="text" placeholder="Enter Name" name="customerName" required> </br>'
	            
	            +'    <label for="password"><b>비밀번호</b></label></br>'
	            +'    <input type="password" placeholder="Enter Password" name="password" required> </br>'
	    
	            +'    <label for="ssn"><b>주민등록번호</b></label></br>'
	            +'    <input type="text" placeholder="Enter ssn" name="ssn" required> </br>'
	           
	            +'    <label for="phone"><b>핸드폰번호</b></label></br>'
	            +'    <input type="text" placeholder="Enter phone" name="phone" required> </br>'
	          
	            +'    <label for="city"><b>지번 주소</b></label></br>'
	            +'    <input type="text" placeholder="Enter city" name="city" required> </br>'
	            +'    <label for="address"><b>상세 주소</b></label></br>'
	            +'    <input type="text" placeholder="Enter address" name="address" required> </br>'
	            +'    <label for="postalCode"><b>우편번호</b></label></br>'
	            +'    <input type="text" placeholder="Enter postalCode" name="postalCode" required> </br>'
	            
	            +'    <label>'
	            +'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me </br>'
	            +'    </label>'
	            +'	</div>'
	            +'    <div class="clearfix">'
	            +'      <button type="button" class="cancelbtn">CANCEL</button>'
	            +'      <button type="submit" class="signupbtn">REGISTER</button>'
	            +'    </div>'
	            +'  </div>'
	            +'</form>';
	        },
		emp_register_form :()=>{
			 return '<form action="/action_page.php" style="border:1px solid #ccc">'
	            +'  <div class="container">'
	            +'    <h1>Sign Up</h1>'
	            +'    <p>Please fill in this form to create an account.</p>'
	            +'    <hr>'
	            
	            +'    <label for="employeeId"><b>EMPLOYEE ID</b></label>'
	            +'    <input type="text" placeholder="Enter EmployeeId" name="employeeId" required>'
	        
	            +'    <label for="manager"><b>MANAGER</b></label>'
	            +'    <input type="text" placeholder="Enter Manager" name="manager" required>'
	    
	            +'    <label for="name"><b>NAME</b></label>'
	            +'    <input type="text" placeholder="Enter Name" name="name" required>'
	            
	            +'    <label for="birthDate"><b>BIRTHDATE</b></label>'
	            +'      <input type="text" placeholder="Enter BirthDate" name="birthDate" required> '
	            +'    <label for="photo"><b>PHOTO</b></label>'
	            +'      <input type="text" placeholder="Enter Photo" name="photo" required> '
	            +'    <label for="notes"><b>Notes</b></label>'
	            +'      <input type="text" placeholder="Enter Notes" name="notes" required> '
	            
	            +'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
	    
	            +'    <div class="clearfix">'
	            +'      <button type="button" class="cancelbtn">Cancel</button>'
	            +'      <button type="submit" class="signupbtn">Sign Up</button>'
	            +'    </div>'
	            +'  </div>'
	            +'</form>';
		},
		cust_my_page :x=>{
			return '<body class="w3-light-grey">'
			
			+'<!-- Page Container -->'
			+'<div class="w3-content w3-margin-top" style="max-width:1400px;">'
			
			  +'<!-- The Grid -->'
			  +'<div class="w3-row-padding">'
			    +'<!-- Left Column -->'
			    +'<div class="w3-third">'
			      +'<div class="w3-white w3-text-grey w3-card-4">'
			        +'<div class="w3-display-container">'
			          +'<img src="https://pbs.twimg.com/profile_images/992075910324019200/CesIZM-c.jpg">'
			          +'<div class="w3-display-bottomleft w3-container w3-text-black">'
			            +'<h2>'+x.name+'</h2>'
			          +'</div>'
			        +'</div>'
			        +'<div class="w3-container">'
			          +'<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>'+x.id+'</p>'
			          +'<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>'
			          +'<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>'
			          +'<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>'
			          +'<hr>'
			
			          +'<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>'
			          +'<p>Adobe Photoshop</p>'
			          +'<div class="w3-light-grey w3-round-xlarge w3-small">'
			            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>'
			          +'</div>'
			          +'<p>Photography</p>'
			          +'<div class="w3-light-grey w3-round-xlarge w3-small">'
			            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">'
			              +'<div class="w3-center w3-text-white">80%</div>'
			            +'</div>'
			          +'</div>'
			          +'<p>Illustrator</p>'
			          +'<div class="w3-light-grey w3-round-xlarge w3-small">'
			            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>'
			          +'</div>'
			          +'<p>Media</p>'
			          +'<div class="w3-light-grey w3-round-xlarge w3-small">'
			            +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>'
			          +'</div>'
			          +'<br>'
			
			          +'<p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>'
			          +'<p>English</p>'
			          +'<div class="w3-light-grey w3-round-xlarge">'
			            +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>'
			          +'</div>'
			          +'<p>Spanish</p>'
			          +'<div class="w3-light-grey w3-round-xlarge">'
			            +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>'
			          +'</div>'
			          +'<p>German</p>'
			          +'<div class="w3-light-grey w3-round-xlarge">'
			            +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>'
			          +'</div>'
			          +'<br>'
			        +'</div>'
			      +'</div><br>'
			
			    +'<!-- End Left Column -->'
			    +'</div>'
			
			    +'<!-- Right Column -->'
			    +'<div class="w3-twothird">'
			      +'<div class="w3-container w3-card w3-white w3-margin-bottom">'
			        +'<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>'
			        +'<div class="w3-container">'
			          +'<h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>'
			          +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>'
			          +'<p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
			          +'<hr>'
			        +'</div>'
			        +'<div class="w3-container">'
			          +'<h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>'
			          +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>'
			          +'<p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
			          +'<hr>'
			        +'</div>'
			        +'<div class="w3-container">'
			          +'<h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>'
			          +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>'
			          +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>'
			        +'</div>'
			      +'</div>'
			
			      +'<div class="w3-container w3-card w3-white">'
			        +'<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>'
			        +'<div class="w3-container">'
			          +'<h5 class="w3-opacity"><b>W3Schools.com</b></h5>'
			          +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>'
			          +'<p>Web Development! All I need to know in one place</p>'
			          +'<hr>'
			        +'</div>'
			        +'<div class="w3-container">'
			          +'<h5 class="w3-opacity"><b>London Business School</b></h5>'
			          +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>'
			          +'<p>Master Degree</p>'
			          +'<hr>'
			        +'</div>'
			        +'<div class="w3-container">'
			          +'<h5 class="w3-opacity"><b>School of Coding</b></h5>'
			          +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>'
			          +'<p>Bachelor Degree</p><br>'
			        +'</div>'
			      +'</div>'
			
			    +'<!-- End Right Column -->'
			    +'</div>'
			+'    '
			  +'<!-- End Grid -->'
			  +'</div>'
			+'  '
			  +'<!-- End Page Container -->'
			+'</div>'
			
			+'<footer class="w3-container w3-teal w3-center w3-margin-top">'
			  +'<p>Find me on social media.</p>'
			  +'<i class="fa fa-facebook-official w3-hover-opacity"></i>'
			  +'<i class="fa fa-instagram w3-hover-opacity"></i>'
			  +'<i class="fa fa-snapchat w3-hover-opacity"></i>'
			  +'<i class="fa fa-pinterest-p w3-hover-opacity"></i>'
			  +'<i class="fa fa-twitter w3-hover-opacity"></i>'
			  +'<i class="fa fa-linkedin w3-hover-opacity"></i>'
			  +'<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>'
			+'</footer>'
			
			
			+'</body>'},
		carousel : x=> {
			return '<div class="container">'
			  +'<h2>Carousel Example</h2>  '
			  +'<div id="myCarousel" class="carousel slide" data-ride="carousel">'
			    +'<!-- Indicators -->'
			    +'<ol class="carousel-indicators">'
			      +'<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
			      +'<li data-target="#myCarousel" data-slide-to="1"></li>'
			      +'<li data-target="#myCarousel" data-slide-to="2"></li>'
			    +'</ol>'
			
			    +'<!-- Wrapper for slides -->'
			    +'<div class="carousel-inner">'
			      +'<div class="item active">'
			        +'<img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles" style="width:100%;">'
			      +'</div>'
			
			      +'<div class="item">'
			        +'<img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago" style="width:100%;">'
			      +'</div>'
		
			      +'<div class="item">'
			        +'<img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New york" style="width:100%;">'
			      +'</div>'
			    +'</div>'
		
			    +'<!-- Left and right controls -->'
			    +'<a class="left carousel-control" href="#myCarousel" data-slide="prev">'
			      +'<span class="glyphicon glyphicon-chevron-left"></span>'
			      +'<span class="sr-only">Previous</span>'
			    +'</a>'
			    +'<a class="right carousel-control" href="#myCarousel" data-slide="next">'
			      +'<span class="glyphicon glyphicon-chevron-right"></span>'
			      +'<span class="sr-only">Next</span>'
			    +'</a>'
			  +'</div>'
			+'</div>'
		},
		prod_post:()=>{
			return '<div class="form-group">'
			  +'<label for="productName">상품명:</label>'
			  +'<input type="text" class="form-control" id="productName" name="productName">'
			+'</div>'
			+'<div class="form-group">'
			  +'<label for="price">가격:</label>'
			  +'<input type="text" class="form-control" id="price" name="price">'
			+'</div>'
			+'<h3>색상</h3>'
			+'<div class="checkbox">'
			  +'<label><input type="checkbox" value="">블랙</label>'
			+'</div>'
			+'<div class="checkbox">'
			  +'<label><input type="checkbox" value="">화이트</label>'
			+'</div>'
			+'<div class="checkbox disabled">'
			  +'<label><input type="checkbox" value="" disabled>블루</label>'
			+'</div>'
			
			+'<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label>'
			+'<label class="checkbox-inline"><input type="checkbox" value="">Option 2</label>'
			+'<label class="checkbox-inline"><input type="checkbox" value="">Option 3</label>'
			
			+'<div class="radio">'
			  +'<label><input type="radio" name="supplierId" checked>삼성전자</label>'
			+'</div>'
			+'<div class="radio">'
			  +'<label><input type="radio" name="optradio">Option 2</label>'
			+'</div>'
			+'<div class="radio disabled">'
			  +'<label><input type="radio" name="optradio" disabled>Option 3</label>'
			+'</div>'
			
			+'<label class="radio-inline"><input type="radio" name="optradio" checked>Option 1</label>'
			+'<label class="radio-inline"><input type="radio" name="optradio">Option 2</label>'
			+'<label class="radio-inline"><input type="radio" name="optradio">Option 3</label>'
			
			+'<div class="form-group">'
			  +'<label for="sel1">카테고리</label>'
			  +'<select class="form-control" id="sel1">'
			    +'<option>1</option>'
			    +'<option>2</option>'
			    +'<option>3</option>'
			    +'<option>4</option>'
			  +'</select>'
			+'</div>'
			
			+'<p>제조날짜: <input type="text" id="datepicker"></p>'
			
			+'<div class="form-group">'
			  +'<label for="comment">상세설명:</label>'
			  +'<textarea class="form-control" rows="5" id="comment"></textarea>'
			+'</div>';
		}
}