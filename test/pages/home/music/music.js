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


        random:"http://193.112.179.39:5000/static/img/musicIcon/random.png",
        play:"http://193.112.179.39:5000/static/img/musicIcon/play.png",
        pause:"http://193.112.179.39:5000/static/img/musicIcon/pause.png",
        clock:"http://193.112.179.39:5000/static/img/musicIcon/clock.png",
    },
    onLoad: function(options){
        console.log("enter music page");
        this.setData({
            unselected_list :["http://193.112.179.39:5000/static/img/musicIcon/light_rain.png","http://193.112.179.39:5000/static/img/musicIcon/heavy_rain.png",
            "http://193.112.179.39:5000/static/img/musicIcon/sea.png","http://193.112.179.39:5000/static/img/musicIcon/bird.png",
            "http://193.112.179.39:5000/static/img/musicIcon/wet.png","http://193.112.179.39:5000/static/img/musicIcon/wind.png",
            "http://193.112.179.39:5000/static/img/musicIcon/sun.png","http://193.112.179.39:5000/static/img/musicIcon/water.png"],
            selected_list :["http://193.112.179.39:5000/static/img/musicIcon/light_rain_chosen.png","http://193.112.179.39:5000/static/img/musicIcon/heavy_rain_chosen.png",
            "http://193.112.179.39:5000/static/img/musicIcon/sea_chosen.png","http://193.112.179.39:5000/static/img/musicIcon/bird_chosen.png",
            "http://193.112.179.39:5000/static/img/musicIcon/wet_chosen.png","http://193.112.179.39:5000/static/img/musicIcon/wind_chosen.png",
            "http://193.112.179.39:5000/static/img/musicIcon/sun_chosen.png","http://193.112.179.39:5000/static/img/musicIcon/water_chosen.png"],
            music_list:["../../../audios/light_rain.mp3","../../../audios/heavy_rain.mp3","../../../audios/wind.mp3","../../../audios/water.mp3",
            "../../../audios/bird.mp3","../../../audios/sea.mp3","../../../audios/sun.mp3","../../../audios/wet.mp3"],
            music_list2:["http://193.112.179.39:5000/static/music/smallrain.mp3",
            "http://193.112.179.39:5000/static/music/bigrain.mp3",
            "http://193.112.179.39:5000/static/music/wave.mp3",
            "http://193.112.179.39:5000/static/music/bird.mp3",
            "http://193.112.179.39:5000/static/music/wedland.mp3",
            "http://193.112.179.39:5000/static/music/wind.mp3",
            "http://193.112.179.39:5000/static/music/morning.mp3",
            "http://193.112.179.39:5000/static/music/river.mp3"
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