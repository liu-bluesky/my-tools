<template>
	<view class="">
		<block
		v-for="(org,index) in orgs" :key="org.id" 
		>
		<!-- <view class="" @tap="detailORG(org.id)" class="weui-media-box weui-media-box_appmsg">
			
		</view> -->
		<navigator :url="'/pages/org/index?id='+org.id"  class="weui-media-box weui-media-box_appmsg">
			<div class="weui-media-box__hd weui-avatar-circle ">
				<img class="weui-media-box__thumb" :src="org.logoPath" alt="">
			</div>
			<div class="weui-media-box__bd">
				<h4 class="weui-media-box__title">{{org.orgName}}</h4>
				<p class="weui-media-box__desc">活动 &nbsp; {{org.activityCount}} &nbsp;&nbsp;&nbsp;&nbsp; 成员 &nbsp;
					{{org.memberCount}}</p>
				<p class="weui-media-box__desc">活跃度 &nbsp;&nbsp;<span class="weui-rater">
						<em data-num="1" :class="org.activeLevel==1?'on':''"> <span>★</span> </em>
						<em data-num="2" :class="org.activeLevel==2?'on':''"> <span>★</span> </em>
						<em data-num="3" :class="org.activeLevel==3?'on':''"> <span>★</span> </em>
						<em data-num="4" :class="org.activeLevel==4?'on':''"> <span>★</span> </em>
						<em data-num="5" :class="org.activeLevel==5?'on':''"> <span>★</span> </em>
					</span></p>
			</div>
		</navigator>
		
		</block>		
	</view>
</template>

<script>
	export default {
		props:{
			orgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
	  methods:{
		  // detailORG(id){
			 //  console.log(id);
			 //  uni.navigateTo({
			 //  	url:'../index?'+
			 //  })
		  // }
	  }
	}
</script>

<style scoped>
	.sc-bai a.weui-media-box {
		margin-bottom: 0;
	}
	
	.weui-media-box:before {
		left: 0;
	}
	
	.weui-rater {
		display: flex;
	}
</style>
