<script>
	import Vue from 'vue';
	import crypto_js from 'common/crypto-js.js';
	import common_option from 'common/util.js';
	
	 Object.assign(Vue.prototype, common_option);
	 Object.assign(Vue.prototype, crypto_js);
	export default {
		globalData: {
		    img:'https://yaofangme.hzbixin.cn/'
		}, 
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style >
page{   
	 	/* padding-top: var(--status-bar-height) solid #fff;
	 	box-sizing: border-box; */
 }
	/*每个页面公共css */
</style>
