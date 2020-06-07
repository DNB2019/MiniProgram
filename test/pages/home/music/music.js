// home/music/music.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/community_api.js')
const innerAudioContext0 = wx.createInnerAudioContext();
const innerAudioContext1 = wx.createInnerAudioContext();
const innerAudioContext2 = wx.createInnerAudioContext();
const innerAudioContext3 = wx.createInnerAudioContext();
const innerAudioContext4 = wx.createInnerAudioContext();
const innerAudioContext5 = wx.createInnerAudioContext();
const innerAudioContext6 = wx.createInnerAudioContext();
const innerAudioContext7 = wx.createInnerAudioContext();


Page({
    data:{
        chosen: [0,0,0,0,0,0,0,0],
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
            music_list:["https://isure.stream.qqmusic.qq.com/C400003rS8et2mEYPE.m4a?guid=2383151883&vkey=003EDEEE523FE6BC210062A4CAA686D0D33158EE476C064FF49A6466164BF222FF3073D35482051BC1CC19A74D188E7B6E97728206DADD09&uin=2059&fromtag=66",
            "https://ws.stream.qqmusic.qq.com/C400001qE6ou1U512O.m4a?guid=2383151883&vkey=B7A4832B9F092DCF5BDB7718493D4276849A535D9B7277846F1EB5C5857EBC9E3D81E611B4D6D183DF460232CFEDB3C3B11397CDC0CD01C7&uin=2059&fromtag=66",
            "https://isure.stream.qqmusic.qq.com/C400004BAiuz2fF26h.m4a?guid=2383151883&vkey=EAE108BC2AFBE05BF4137101B4855865E8DCAFA8C79DF399E9CC2A7C28D979DACFE196AF92EA8B8BFB809B8157796D6994A0BAEC606F67D0&uin=2059&fromtag=66",
            "https://isure.stream.qqmusic.qq.com/C400003mjT9909jBL5.m4a?guid=2383151883&vkey=5E45B8A5DB7EFBBCD5CDFED70F6E38526EE8F7DED620BE134A794C13DF99069365AE5A07A4D84408A6F6FF52617E1612F378814A231C4123&uin=2059&fromtag=66",
            "https://ws.stream.qqmusic.qq.com/C400000JpQz818AJte.m4a?guid=2383151883&vkey=C2243773F82CCCCBB642B0F0018AF6EC90B5FBD11F14B648770F07B50BA12172B46C93E1B041400D0EBAAF3B54E3903C8D94A525EEF2909D&uin=2059&fromtag=66",
            "https://isure.stream.qqmusic.qq.com/C400000f6dQ63WCT60.m4a?guid=2383151883&vkey=8BF22E0FDFA5373E37315915EBBBF2D506AA85A954B04F2262A7233C91DEF63660E69BB006BB31C171A443B006804059D2EF4CDCBF20BF85&uin=2059&fromtag=66",
            "https://ws.stream.qqmusic.qq.com/C400004bszc83bUubM.m4a?guid=2383151883&vkey=B7861585A9F74C90B130C6483C91BF6F34583D2233AD1610B389651881D416B30C911812D13CD911B1D08FC1862FA14705627A0FEBA0C425&uin=2059&fromtag=66",
            "https://isure.stream.qqmusic.qq.com/C4000043joDD2oorHO.m4a?guid=2383151883&vkey=130E1B9C938D24BD7DB6D3E7234504B7292C3E023FA45C12C9E92C59C1299AC45CC3B1A17C9EB707846D099A6CC8ED208F4EEC410F8B078A&uin=2059&fromtag=66"],
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
        innerAudioContext0.src = this.data.music_list2[0];
        innerAudioContext1.src = this.data.music_list2[1];
        innerAudioContext2.src = this.data.music_list2[2];
        innerAudioContext3.src = this.data.music_list2[3];
        innerAudioContext4.src = this.data.music_list2[4];
        innerAudioContext5.src = this.data.music_list2[5];
        innerAudioContext6.src = this.data.music_list2[6];
        innerAudioContext7.src = this.data.music_list2[7];
    },
    randomChoose: function(event){
        var that = this;
        console.log("random choose Music");
        let number = Math.floor(Math.random()*7);
        switch(number){
            case 0:
                this.chooseMusic0();
                break;
            case 1:
                this.chooseMusic1();
                break;
            case 2:
                this.chooseMusic2();
                break;
            case 3:
                this.chooseMusic3();
                break;
            case 4:
                this.chooseMusic4();
                break;
            case 5:
                this.chooseMusic5();
                break;
            case 6:
                this.chooseMusic6();
                break;
            default:
                this.chooseMusic7();
                break;
        }
        
    },
    chooseMusic0: function(event){
        var that = this;
        console.log("press 0");
        if(that.data.chosen[0] == 0){
            innerAudioContext0.play();
            console.log("播放0");
            that.setData({
                ['chosen[0]']:1,
                playing: 1,
            })
            innerAudioContext0.onEnded(()=>{
                that.setData({
                    ['chosen[0]']:0,
                })
                that.chooseMusic0()
            })
        }
        else{
            innerAudioContext0.stop();
            console.log("暂停0");
            that.setData({
                ['chosen[0]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic1: function(event){
        var that = this;
        console.log("press 1");
        if(that.data.chosen[1] == 0){
            innerAudioContext1.play();
            console.log("播放1");
            that.setData({
                ['chosen[1]']:1,
                playing: 1,
            })
            innerAudioContext1.onEnded(()=>{
                that.setData({
                    ['chosen[1]']:0,
                })
                that.chooseMusic1()
            })
        }
        else{
            innerAudioContext1.stop();
            console.log("暂停1");
            that.setData({
                ['chosen[1]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic2: function(event){
        var that = this;
        console.log("press 2");
        if(that.data.chosen[2] == 0){
            innerAudioContext2.play();
            console.log("播放2");
            that.setData({
                ['chosen[2]']:1,
                playing: 1,
            })
            innerAudioContext2.onEnded(()=>{
                that.setData({
                    ['chosen[2]']:0,
                })
                that.chooseMusic2()
            })
        }
        else{
            innerAudioContext2.stop();
            console.log("暂停2");
            that.setData({
                ['chosen[2]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic3: function(event){
        var that = this;
        console.log("press 3");
        if(that.data.chosen[3] == 0){
            innerAudioContext3.play();
            console.log("播放3");
            that.setData({
                ['chosen[3]']:1,
                playing: 1,
            })
            innerAudioContext3.onEnded(()=>{
                that.setData({
                    ['chosen[3]']:0,
                })
                that.chooseMusic3()
            })
        }
        else{
            innerAudioContext3.stop();
            console.log("暂停3");
            that.setData({
                ['chosen[3]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic4: function(event){
        var that = this;
        console.log("press 4");
        if(that.data.chosen[4] == 0){
            innerAudioContext4.play();
            console.log("播放4");
            that.setData({
                ['chosen[4]']:1,
                playing: 1,
            })
            innerAudioContext4.onEnded(()=>{
                that.setData({
                    ['chosen[4]']:0,
                })
                that.chooseMusic4()
            })
        }
        else{
            innerAudioContext4.stop();
            console.log("暂停4");
            that.setData({
                ['chosen[4]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic5: function(event){
        var that = this;
        console.log("press 5");
        if(that.data.chosen[5] == 0){
            innerAudioContext5.play();
            console.log("播放5");
            that.setData({
                ['chosen[5]']:1,
                playing: 1,
            })
            innerAudioContext5.onEnded(()=>{
                that.setData({
                    ['chosen[5]']:0,
                })
                that.chooseMusic5()
            })
        }
        else{
            innerAudioContext5.stop();
            console.log("暂停5");
            that.setData({
                ['chosen[5]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic6: function(event){
        var that = this;
        console.log("press 6");
        if(that.data.chosen[6] == 0){
            innerAudioContext6.play();
            console.log("播放6");
            that.setData({
                ['chosen[6]']:1,
                playing: 1,
            })
            innerAudioContext6.onEnded(()=>{
                that.setData({
                    ['chosen[6]']:0,
                })
                that.chooseMusic6()
            })
            
        }
        else{
            innerAudioContext6.stop();
            console.log("暂停6");
            that.setData({
                ['chosen[6]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    chooseMusic7: function(event){
        var that = this;
        console.log("press 7");
        if(that.data.chosen[7] == 0){
            innerAudioContext7.play();
            console.log("播放7");
            that.setData({
                ['chosen[7]']:1,
                playing: 1,
            })
            innerAudioContext7.onEnded(()=>{
                that.setData({
                    ['chosen[7]']:0,
                })
                that.chooseMusic7()
            })
        }
        else{
            innerAudioContext7.stop();
            console.log("暂停7");
            that.setData({
                ['chosen[7]']:0,
            })
            var play_num = that.data.chosen.reduce(getSum);
            if(play_num == 0){
                that.setData({
                    playing:0,
                })
            }
        }
    },
    playMusic:function(event){
        var that = this;
        if (that.data.playing == 0){
            this.randomChoose();
        }
        else{
            that.setData({
                playing: 0,
                chosen:[0,0,0,0,0,0,0,0],
            })
            console.log("pause music");
            innerAudioContext0.stop();
            innerAudioContext1.stop();
            innerAudioContext2.stop();
            innerAudioContext3.stop();
            innerAudioContext4.stop();
            innerAudioContext5.stop();
            innerAudioContext6.stop();
            innerAudioContext7.stop();
            innerAudioContext0.onStop(() => {
                console.log('停止播放');
            })
            innerAudioContext0.onError((res)=>{
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
        innerAudioContext0.stop();
        innerAudioContext1.stop();
        innerAudioContext2.stop();
        innerAudioContext3.stop();
        innerAudioContext4.stop();
        innerAudioContext5.stop();
        innerAudioContext6.stop();
        innerAudioContext7.stop();
        innerAudioContext0.onStop(() => {
            console.log('停止播放');
        })
        that.setData({
            chosen: [0,0,0,0,0,0,0,0],
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
function getSum(total,num){
    return total+num;
}