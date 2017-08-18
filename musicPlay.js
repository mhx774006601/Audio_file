   


	
	function musicPlay(){
		
	}

	/*--------------播放------------------*/
	musicPlay.prototype.play=function(){
		auto.play();
	}
	/*--------------暂停------------------*/
    musicPlay.prototype.pause=function(){

    	auto.pause();
    }
    /*--------------当前播放的时间,(s)------------------*/
    musicPlay.prototype.currentTime=function(){ 
    	//去整数，去掉小数点
    	return parseInt(auto.currentTime);
    }
    /*--------------音量------------------*/
    musicPlay.prototype.volume=function(){
    	return auto.volume;
    }
    /*--------------音频文件的地址------------------*/
    musicPlay.prototype.src=function(){
    	return auto.src;
    }

    musicPlay.prototype.startTime=function(){
    	return auto.startTime;
    }
    /*--------------音频文件的播放时长(s)-----------------*/
    musicPlay.prototype.duration=function(){
    	return 	parseInt(auto.duration);
    }
    /*--------------计算当前播放的进度百分比-----------------*/
    musicPlay.prototype.calProcess=function(){  	
    	//return  (process/allprocess).toFixed(2)*100
    	return  (this.currentTime()/this.duration()).toFixed(2)*100
    }
    /*--------------判断当前音频播放完毕-----------------*/
    musicPlay.prototype.ended=function(){
    		return auto.ended;
    }
    /*--------------返回当前时间进度-----------------*/
    musicPlay.prototype.backTime=function(){
    	var yu=this.currentTime()%60;
    	var shang=parseInt(this.currentTime()/60);
    	return this.addZero(shang)+":"+this.addZero(yu);
    }

     /*--------------返回音频文件总体时间格式-----------------*/
    musicPlay.prototype.backTotTime=function(){
    	var yu=this.duration()%60;
    	var shang=parseInt(this.duration()/60);
    	return this.addZero(shang)+":"+this.addZero(yu);
    }
    /*--------------补全0-----------------*/
    musicPlay.prototype.addZero=function(num){
    	var result;
		num=num.toString();
		if(num.length==1){result="0"+num}
		else{result=num;}
		return result;
    }
  
    
    
    //计算进度条和显示当前播放的时间
    function goPlay(){
    	var timeProcess=setInterval(function(){   		
    		var perPro=myplay.calProcess();

    		$("#time01").text(myplay.backTotTime());
    		$("#time02").text(myplay.backTime());
    		$(".loadint").animate({width:perPro+"%"},500);
    	},1000);
    }
	
var auto=document.getElementById("myMusic");
var myplay=new musicPlay();


//监听音频文件是否加载完成
auto.addEventListener("loadedmetadata", function()
  {
  goPlay()
  }
);
