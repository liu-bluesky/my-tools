// /**
//  * 获取当前时间2 1 24 32 = 5072
//  */
// 开始时间
var start = 1573461745
var end = 1573461909
// var 
var xiangcha = end-start
function s(xiangcha){
	
	var day = Math.floor(xiangcha / 60 / 60 / 24).toString()
	
	// 求出天后面的秒
	var sAll1 = xiangcha - (day*24*3600)
	 // var hour =parseInt(xiangcha / 60 / 60 % 24)
	  var hour =Math.floor(sAll1/3600).toString()
	// 求出小时后面的秒
	var sAll2 = sAll1 - (hour*60*60)
	console.log(sAll2);
	var minute =Math.floor(sAll2/60).toString()
	// 求出分钟后面的秒
	var s = sAll2 - (minute*60).toString()
	return (day.length<2?'0'+day:day)+"天"+(hour.length<2?'0'+hour:hour)+"小时"+(minute.length<2?'0'+minute:minute)+"分"+(s.length<2?'0'+s:s)+"秒"
}
 var time =	setInterval(function(){
	 if(xiangcha ==0){
	 	clearInterval(time)
	 }
	s(xiangcha)
	xiangcha--
},50)



