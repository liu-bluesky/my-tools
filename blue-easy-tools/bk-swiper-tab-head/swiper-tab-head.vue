<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle">
			<block v-for="(item,index) in tabBars " :key="index">
				<view class="swiper-tab-list" 
				:class="{'active':tabIndex==index}" 
				@tap="tabtap(index)"
				 :style="scrollItemStyle"
				>
					{{item.name}} {{item.num?item.num:''}}
					<view class="swiper-tab-line">
	
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
	
</template>

<script>
	export default {
		methods:{
			tabtap(index) {
				// this.tabIndex = index
				this.$emit('tabtap',index)
			}
		},
		props:{
			tabBars:Array,
			tabIndex:Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
	}
	
	.uni-swiper-tab .active {
		color: #343434;
	}
	
	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}
	
	.active .swiper-tab-line {
		/* 	height: 6upx;
	background-color: #fede33; */
		border-bottom: 6upx solid #fede33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #fede33;
		border-radius: 20upx;
	}
</style>
