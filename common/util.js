import md5 from "@/common/md5.js";
// 加密的方式
import CryptoJS from '../node_modules/crypto-js/crypto-js.js'
// import CryptoJS from './crypto-js.js'

function setData(obj) {
    let that = this;
    let keys = [];
    let val, data;
	if(obj.user_token){
		  // wx.setStorageSync('user_token',obj.user_token)
          wx.setStorageSync('token',obj.user_token)
	}
 
    Object.keys(obj).forEach(function(key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        if(!(keys[0] in data)){
            return
        }
        keys.forEach(function(key2, index) {
            if (index + 1 == keys.length) {
                that.$set(data, key2, val);
            } else {
                if (!data[key2]) {
                    that.$set(data, key2, isNaN(keys[index+1])?{}:[]);
                }
            }
            data = data[key2];
			
        })
    });
}

function encrypt (word,keyStr) {
　　let key =  CryptoJS.enc.Utf8.parse(keyStr)
　　let srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(word))
　　let encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  // return encrypted.ciphertext;
     return encrypted.ciphertext.toString();
}
function bin2Hex(str) {
            var re = /[\u4E00-\u9FA5]/;
            var ar = [];
            for (var i = 0; i < str.length; i++) {
                var a = '';
                if (re.test(str.charAt(i))) { // 中文
                    a = encodeURI(str.charAt(i)).replace(/%/g, '');
                } else {
                    a = str.charCodeAt(i).toString(16);
                }
                ar.push(a);
            }
            str = ar.join("");
            return str;
        }

function createApiToken(){
	let that=this;
	 let client_id = '280150';
	 let client_secret = 'actygbnk67rtchsg';
	 let client_key = 'iumeui786ojwebh4';
	 let timestamps=Math.round(new Date().getTime()/1000).toString();;
	 let chars = ['0','1','2','3','4','5','6','7','8','9',
	             'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h',
				 'j','k','l', 'z','x','c','v','b','n','m',
				 'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H',
				 'J','K','L','Z','X','C','V','B','N','M',];
	 let nums="";
	 for(let i=0;i<32;i++){//这里是几位就要在这里不改变
	     let id = parseInt(Math.random()*61);
	      nums+=chars[id];
	 }
	 var hextoString = function (hex) {
	     var arr = hex.split("")
	     var out = ""
	     for (var i = 0; i < arr.length / 2; i++) {
	         var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1]
	         var charValue = String.fromCharCode(tmp);
	         out += charValue
	     }
	     return out
	 };	 
	 let token=md5.hex_md5(String(timestamps)+String(nums)+client_secret);
	 let str='time_stamp='+timestamps+'&nonce_str='+nums+'&client_id='+client_id+'&token='+token;
	 let encode_str=encrypt(str, client_key);
	    api_token=bin2Hex(encode_str);
	  return api_token
   }
// var userTokens=wx.getStorageSync('token');
var userTokens ='c4a825695b0fe6a179a750b026c4749334ce1129057cfe9e4f62d370e23c3861c0b5599a63ec59a8cc667cc35e0b5b30cc35df2fc885f3a37551d9722dae9557c6c1c617638c6424a1d4622d0baf0279d35d354898b8ad4b9a3115a80769bf05'
module.exports = {
	setData,
	encrypt,
	userTokens,
	createApiToken
}