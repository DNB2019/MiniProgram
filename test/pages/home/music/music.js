// home/music/music.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/community_api.js')
const innerAudioContext = wx.createInnerAudioContext();

Page({
    data:{
        chosen: -1,
        playing: 0,
        setClock: 0,
        minute:0,
        count_second:0,
        format_count:"0",
        unselected_list:[],
        selected_list:[],
        footer_list:[],
        music_list: [],
        music_list2:[],

        light_rain:"../../../images/light_rain.png",
        heavy_rain:"../../../images/heavy_rain.png",
        wind:"../../../images/wind.png",
        water:"../../../images/water.png",
        bird:"../../../images/bird.png",
        sea:"../../../images/sea.png",
        sun:"../../../images/sun.png",
        wet:"../../../images/wet.png",
        
        light_rain_chosen:"../../../images/light_rain_chosen.png",
        heavy_rain_chosen:"../../../images/heavy_rain_chosen.png",
        wind_chosen:"../../../images/wind_chosen.png",
        water_chosen:"../../../images/water_chosen.png",
        bird_chosen:"../../../images/bird_chosen.png",
        sea_chosen:"../../../images/sea_chosen.png",
        sun_chosen:"../../../images/sun_chosen.png",
        wet_chosen:"../../../images/wet_chosen.png",

        random:"../../../images/random.png",
        play:"../../../images/play.png",
        pause:"../../../images/pause.png",
        clock:"../../../images/clock.png",
    },
    onLoad: function(options){
        console.log("enter music page");
        this.setData({
            unselected_list :["../../../images/light_rain.png","../../../images/heavy_rain.png","../../../images/wind.png","../../../images/water.png",
            "../../../images/bird.png","../../../images/sea.png","../../../images/sun.png","../../../images/wet.png"],
            selected_list : ["../../../images/light_rain_chosen.png","../../../images/heavy_rain_chosen.png","../../../images/wind_chosen.png",
            "../../../images/water.png","../../../images/bird.png","../../../images/sea.png",
            "../../../images/sun_chosen.png","../../../images/wet_chosen.png"],
            music_list:["../../../audios/light_rain.mp3","../../../audios/heavy_rain.mp3","../../../audios/wind.mp3","../../../audios/water.mp3",
            "../../../audios/bird.mp3","../../../audios/sea.mp3","../../../audios/sun.mp3","../../../audios/wet.mp3"],
            music_list2:["https://isure.stream.qqmusic.qq.com/C400003rS8et2mEYPE.m4a?guid=2383151883&vkey=EF5D007E84EAD88B89B7B32255DFFE4D53DBF302C0263AE9F066DF1E6C25BCF252E6A7B0BED0BE9FA5A2D998634B56B7DFDB068ACD770E04&uin=2059&fromtag=66",
        "https://ws.stream.qqmusic.qq.com/C400001qE6ou1U512O.m4a?guid=2383151883&vkey=DF0CF17048D38FDA2211B067E6F37D4347F8A2DE932392EA3678D6B39671CEB62DCD29FF6F856CB911B550C0444F6EEFEA395E5A0DFB2FF9&uin=2059&fromtag=66",
        "https://ws.stream.qqmusic.qq.com/C400000JpQz818AJte.m4a?guid=2383151883&vkey=7B945FA8170EF63087F3FA30885168943EE3D691609B36094637B8E26868E8BD3EAC5DBAB2182EF2891715CAD74DA9864A5F5483F4C1E932&uin=2059&fromtag=66",
        "https://isure.stream.qqmusic.qq.com/C4000003XQkK3vfzeg.m4a?guid=2383151883&vkey=8EA2409A10AE2FBB9D5B8DC35BA0F34D8D69F0B1EEC2D2D02E2F7518EBD534389C3C02562D42398E03D58BADD948B892194B11D8A41716E3&uin=2059&fromtag=66",
        "https://isure.stream.qqmusic.qq.com/C400003XFSuY0RqlxR.m4a?guid=2383151883&vkey=F33EFBD94AA119D3F4D6127618DD2A26CC4DE0C954432606C4488BB3EDA74F62D09C179099AFB458877470F62879B2021F5043ABE414C498&uin=2059&fromtag=66",
        "https://ws.stream.qqmusic.qq.com/C400003o9VQ42LRHm9.m4a?guid=2383151883&vkey=2507A9E56E63E90E74484526ABCC7AEABADB4133F8C778F25C5937F833DFB7B8A7DB0DA088AA5682B9F174DA8BFD57DEF2603127DEB6E0E4&uin=2059&fromtag=66"
    ],
        })
    },
    randomChoose: function(event){
        var that = this;
        console.log("random choose Music");
        let number = Math.floor(Math.random()*7);
        this.setData({
            chosen: parseInt(number),
        })
    },
    chooseMusic: function(event){
        var that = this;
        console.log("choose music");
        let number = event.currentTarget.dataset.index;
        console.log("number is",number);
        this.setData({
            chosen: parseInt(number),
        })
    },
    playMusic:function(event){
        var that = this;
        if (that.data.playing == 0){
            that.setData({
                playing:1,
            })
            console.log("hihi",that.data.chosen);
            innerAudioContext.src = that.data.music_list2[that.data.chosen];
            innerAudioContext.play();
            innerAudioContext.onPlay(() => {
            console.log('开始播放');
            })
            innerAudioContext.onError((res)=>{
                console.log("Error");
                console.log(res.errMsg);
                console.log(res.errCode);
            })
            innerAudioContext.onEnded(()=>{
                that.setData({
                    playing:0,
                })
                that.playMusic();
            })
        }
        else{
            that.setData({
                playing: 0,
            })
            console.log("pause music");
            innerAudioContext.stop();
            innerAudioContext.onStop(() => {
                console.log('停止播放');
            })
            innerAudioContext.onError((res)=>{
                console.log("Error");
                console.log(res.errMsg);
                console.log(res.errCode);
            })
        }
        
    },
    chooseTime:function(event){
        var that = this;
        let time = parseInt(event.currentTarget.dataset.time);
        this.setData({
            minute:time,
            count_second: time*1,
        })
    },
    setTime: function(event){
        var that = this;
        that.setData({
            setClock: 1,
        })
    },
    countTime: function(event){
        var that = this;
        countDown(that);
        that.setData({
            setClock: 0,
            minute: 0,
        })
        if(that.data.count_second==0){
            console.log("计时结束");
            
        }
    },
    closeTime: function(event){
        var that = this;
        that.setData({
            setClock: 0,
            minute: 0,
            count_second:0,
        })
    }
    
})
function countDown(that){
    var time = that.data.count_second
    that.setData({
        format_count:timeFormat(time),
    })
    if(that.data.count_second == 0){
        console.log("计时结束");
        innerAudioContext.stop();
        innerAudioContext.onStop(() => {
            console.log('停止播放');
        })
        that.setData({
            chosen: -1,
            playing: 0,
        })
        return;
    }
    setTimeout(function(){
        time -= 1;
        that.setData({
            count_second:time,
        })
        countDown(that);
    },1000)
}
function timeFormat(sec){
    var minute = Math.floor(sec/60);
    var second = sec - minute*60;
    minute = fillZero(minute);
    second = fillZero(second);
    return minute+":"+second;
}
function fillZero(num){
    return num < 10 ? "0"+num : num;
}