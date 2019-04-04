"use strict";
$.prototype.nullChecker=x=>{
	let flag = false;
	let i = 0;
	for(i in x){ // int i=0; i<x.length;i++
		if(x[i]===''){
			flag = true ;
		}
	}
	return flag;
}
$.prototype.zeroChecker=x=>{
	let flag =false ;
	let i = 0;
	for (i in x){
		if(x[i]===0){
			flag = true;
		}
	}
	return flag;
};