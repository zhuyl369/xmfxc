(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"15f0":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},"68ba":function(n,t,e){"use strict";e.r(t);var o=e("15f0"),i=e("9adc");for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);e("71ed");var a=e("2877"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"71ed":function(n,t,e){"use strict";var o=e("f20b"),i=e.n(o);i.a},"9adc":function(n,t,e){"use strict";e.r(t);var o=e("c4ce"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=i.a},c4ce:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(e("3b98"));var o=e("2f62");function i(n){return n&&n.__esModule?n:{default:n}}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){a(n,t,e[t])})}return n}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var c=function(){return e.e("components/m-input").then(e.bind(null,"4fdb"))},s={components:{mInput:c},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,o.mapState)(["forcedLogin"]),methods:r({},(0,o.mapMutations)(["login"]),{initProvider:function(){var t=this,e=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var o=0;o<n.provider.length;o++)~e.indexOf(n.provider[o])&&t.providerList.push({value:n.provider[o],image:"../../static/img/"+n.provider[o]+".png"});t.hasProvider=!0}},fail:function(n){console.error("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:73")}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(this.account.length<5)n.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)n.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t={account:this.account,password:this.password},e=this,o=this.webUrl+"/Washapp/Reg/login";n.request({url:o,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},dataType:"json",data:{user:t.account,passwd:t.password},success:function(n){0==n.data.code?e.toMain(e.account):plus.nativeUI.toast(n.data.msg)},fail:function(t){n.showModal({title:"错误",content:JSON.stringify(t)})}})}},oauth:function(t){var e=this;n.login({provider:t,success:function(o){n.getUserInfo({provider:t,success:function(n){e.toMain(n.userInfo.nickName)}})},fail:function(n){console.error("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:169")}})},toMain:function(t){n.setStorage({key:"user",data:t,success:function(){n.reLaunch({url:"../tabbar/tabbar-1/home?login=1"})}})}}),onReady:function(){this.initPosition(),this.initProvider()}};t.default=s}).call(this,e("6e42")["default"])},f20b:function(n,t,e){}},[["c027","common/runtime","common/vendor"]]]);