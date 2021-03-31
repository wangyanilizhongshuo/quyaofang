<template>
	<view class="sale-house">
		<view class="zwTop"></view>
		<view class="zw-instead"></view>
		<view class="search-box">
			<image class="backs" src="../../../static/image/back.png"></image>
			<view class="input-box">
				<view class="left">
					<text class="name">嘉善</text>
					<text class="triangle"></text>
				</view>
				<view class="right" @tap="jumps">
					<image class="img-search" src="../../../static/image/search-search.png"></image>
					<input class="input" placeholder="请输入您想找的地址"  placeholder-style="color:#959BA7;font-size:24rpx;"/>
				</view>
			</view>
		
		</view>
		<view  class="search-box-instead"></view>
		
		<view class="content-list">
			 <city-select
			            @cityClick="cityClick"
			            :formatName="formatName"
			            :obtainCitys="obtainCitys"
			            :isSearch="true"
			            ref="citys"
			        ></city-select>
		</view>
	</view>
</template>
<script>
	// https://ext.dcloud.net.cn/plugin?id=837
	 // import citys from './citys.js'
	 import citySelect from "@/components/city-select/city-select.vue"
	export default {
		data() {
			return {
				  //需要构建索引参数的名称（注意：传递的对象里面必须要有这个名称的参数）
				            formatName: 'title',
				            
				            //显示的城市数据
				            obtainCitys: [
				                {
				                    id: 0,
				                    title: '南京'
				                },
				                {
				                    id: 1,
				                    title: '北京'
				                },
				                {
				                    id: 2,
				                    title: '天津'
				                },
				                {
				                    id: 3,
				                    title: '东京'
				                },
								{
								    id: 4,
								    title:'厦门'
								},
								{
								    id: 5,
								    title:'杭州'
								},
								{
								    id: 6,
								    title:'湖州'
								},
								{
								    id: 7,
								    title:'蚌埠'
								},
								{
								    id: 8,
								    title:'阜阳'
								},
								{
								    id: 9,
								    title:'海南'
								},
								{
								    id: 10,
								    title:'保定'
								},
								{
								    id: 11,
								    title:'洛阳'
								},
								{
								    id: 12,
								    title:'西安'
								},
								{
								    id: 13,
								    title:'象山'
								},
								{
								    id: 14,
								    title:'象河'
								}
				            ]
			}
		},
		components: {
			 citySelect
	    },
		onLoad(){
			   //动态更新数据
			       
			            //修改需要构建索引参数的名称
			            this.formatName = 'title'
			           
			            //修改构建索引数据
			            // this.obtainCitys = citys
			           
		},
		methods: {
			jumps(){
				
				
			},
			cityClick(item) {
				console.log(3125)
				// uni.showToast({
				// 	icon: 'none',
				// 	title: 'item: ' + JSON.stringify(item),
				// 	// #ifdef MP-WEIXIN
				// 	duration: 3000,
				// 	// #endif
				// 	mask: true
				// })
			}
		}
	}
</script>

<style scoped lang="scss">
	// 站头部位置var(--status-bar-height)
   .zwTop{
	  width: 750rpx;
	  height: var(--status-bar-height);
	  position: fixed;
	  top:0rpx;
	  left:0rpx;
	  z-index: 10;
	  background-color: #fff;
	  margin-bottom: 25rpx;
    }
	.zw-instead{
		width: 750rpx;
		height: var(--status-bar-height);
	}
	.search-box-instead{
		width: 750rpx;
		height: 95rpx;
	}
	.search-box{
		width: 750rpx;
		height: 70rpx;
		position: fixed;
		left:0rpx;
		top:var(--status-bar-height);
		display: flex;
		padding-top:25rpx;
		z-index:20;
		background-color: #fff;
		.backs{
			display: block;
			width:23rpx;
			height: 36rpx;
			margin:17rpx 58rpx 17rpx 30rpx;
		}
		.input-box{
			width: 540rpx;
			height: 70rpx;
			background: #FFFFFF;
			border: 2rpx solid #ECEEF5;
			border-radius: 6rpx;
			color: #959BA7;
			display: flex;
			.left{
				width: 125rpx;
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-right:1rpx solid #f1f1f1;
				.name{
					color: #303133;
					font-size: 26rpx;
					font-weight: bold;
				}
				.triangle{
					width: 0;
					height: 0;
					border-left: 10rpx solid transparent;
					border-right: 10rpx solid transparent;
					border-top: 10rpx solid #3466FF;
					position: relative;
					top:5rpx;
					left:10rpx;
				}
			}
			.right{
				display: flex;
				align-items: center;
				width:425rpx;
				
				.img-search{
					display: block;
					width: 23rpx;
					height: 23rpx;
					margin:0 20rpx;
				}
				.input{
					width: 360rpx;
					height: 70rpx;
					
				}
			}

		}
	}	
	
</style>
