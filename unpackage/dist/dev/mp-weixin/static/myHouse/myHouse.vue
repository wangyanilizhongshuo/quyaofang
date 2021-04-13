<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">我的租房</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			 <view class="list-box" v-for="(item,index) in list" :key="index" @tap.stop="jumps(item.m_id,item.m_type,item.m_status,item.m_audit)">
				 <image class="left imgs" :src="item.m_img"></image>
				 <view class="right">
					 <view class="first-line"><text class="flags">出租·{{item.m_charge}}</text><text class="flag" v-if="item.status==1">已出租</text>  <text class="flag" v-if="item.m_status==0">未出租</text>
					 </view>
					 <view class="second-line">{{item.m_architecture}}㎡/{{item.m_orientation}}/{{item.m_fitment}}</view>
					 <view class="third-line">{{item.m_city}}·{{item.m_area}}</view>
					 <view class="fourth-line">
						 <text class="lists" v-for="(item1,index1) in item.m_facility" :key="index1">{{item1}}</text>
					 </view>
					 <view class="fifth-line">{{item.m_money}}<text class="field">元/月</text></view>
				 </view>
			 </view>
		</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				list:[]
				// lists:[{value:'已出租',flag:1},{value:'未出租',flag:0}]
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
		     this.setData(options);		
			this.getList();
		},
		methods: {
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					text = window.android.quit();
				 }else{
					 // alert('重新退出'')
				 }
			     return text;
			  },
			  // types //房子是公寓，毛坯
			jumps(id,types,status,audit){
				
					let flag='';
					if(audit ==1 && status ==1){
						flag=1;
					}else if(audit ==0 && status ==0 ){
						flag=11;
					}else if (audit ==1 && status ==0){
						flag=0;
					}
				// url:'/pages/personData/houseDetail/houseDetail?type='+'renting'+'&flag='+flag+'&id='+id+'&getDataTypes='+type
				// getDataTypes 所属类型 毛坯房 公寓
				uni.navigateTo({
					url:'/pages/personData/houseDetail/houseDetail?type='+'myHouse'+'&id='+id+'&getDataTypes='+types+'&flag='+flag
				})
			},
			getList(){
			  let that=this;
			  that.$h5.post('userhouse/myrent',{
				  type:2
			  },(res)=>{
				  if(res.code ==0){
					  let aa=res.data;
					  aa.map(ress=>{
						  ress.m_img=app.globalData.img+ress.m_img
						  ress.m_facility=ress.m_facility.split('，')
					  })
					  // let aa=that.dataList.house_img.split(',');
					  that.list=aa;
					  console.log(that.list)
				  }
			  })
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	@import "../../../static/scss/font.css";
	// 字体
	// @import "../../../static/scss/font.css";
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
	}
	.zwPosition{
		width: 750rpx;
		height: 75rpx;
		margin-top: var(--status-bar-height);
	}
	.news-title{
		
		 @extend  %title;
		 border-bottom:2rpx solid #eee;
		 .left{
			 width:60rpx;
			 height: 75rpx;
			 line-height: 75rpx;
			  position: absolute;
			  left:30rpx;
			  top:7.5rpx;
		 }
		 .img{
		 	display: block;
		 	width:19rpx;
		 	height: 30rpx;
			margin-top:23rpx;
		 }
		 .field{
			 @extend  %title-field;
		 }
	}
	.contents{
		.list-box{
			 width: 750rpx;
			 height: 200rpx;
			 padding:30rpx 30rpx 0rpx;
			 box-sizing: border-box ;
			 display: flex;
			 margin-bottom:20rpx;
			.left{
				display: block;
				width: 200rpx;
				height: 200rpx;
				margin-right:20rpx ;
                border-radius: 4rpx;
			}
			.right{
				width: 470rpx;
				height: 200rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.first-line{
					color: #141414;
					font-size: 30rpx;
					font-weight: bold;
					width: 470rpx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					.flags{
						width: 360rpx;
						 @include ellipsis(1);
					}
					.flag{
						color: #3466FF;
						font-size: 24rpx;
					}
				}
				.second-line{
					color: #4C4C4C;
					font-size: 20rpx;
				}
				.third-line{
					color: #4C4C4C;
					font-size: 20rpx;;
				}
				.fourth-line{
					display: flex;
					.lists{
						height: 28rpx;
						line-height: 28rpx;
						text-align: center;
						background: #F0F8FF;
						border-radius: 4rpx;
						color: #3466FF;
						font-size: 18rpx;
						margin-right: 10rpx;;
					}
				}
				.fifth-line{
					font-family: wangyibo;
					font-size: 40rpx;
					color:#F9523A;
					.field{
						color: #F9523A;
						font-size: 20rpx;
					}
				}
				
			}
			
		}
		
		
		
		
	}
	
	
  
</style>
