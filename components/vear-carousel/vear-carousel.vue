<template>
	<swiper class="image-container" previous-margin="45rpx" next-margin="45rpx" circular autoplay @change="swiperChange">
		<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'" v-for="(item, index) in imgList" :key="item[urlKey]">
			<image :mode="widthFix" @click="clickImg(item)" :class="currentIndex == index ? 'item-img' : 'item-img-side'" :src="item[urlKey]" lazy-load :style="dontFirstAnimation ? 'animation: none;' : ''" ></image>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		props: {
			imgList: {
				type: Array,
				default() {
					return []
				}
			},
			urlKey: {
				type: String,
				default() {
					return ''
				}
			},
		},
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true
			}
		},
		onLoad(){
		     console.log(this.imglist);
			 console.log(3425)
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				this.$emit('selected', item, this.currentIndex)
			}
		}
	}
</script>
<style scoped>
	.image-container {
		width: 750rpx;
		height: 550rpx;
	}

	.item-img {
		width: 630rpx;
		height: 500rpx;
		border-radius: 14rpx;
		animation: to-big .3s;
	}

	.swiper-item {
		width: 630rpx;
		height: 550rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-img-side {
		width: 630rpx;
		height: 460rpx;
		border-radius: 14rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		width: 630rpx;
		height: 460rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@keyframes to-mini
	{
		from {
			height: 500rpx;
		}
		to {
			height: 460rpx;
		}
	}
	@keyframes to-big
	{
		from {
			height: 460rpx;
		}
		to {
			height: 500rpx;
		}
	}
</style>
