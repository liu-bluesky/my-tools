<template>
	<!-- 上拉加载更多 -->
	<view class="load-move">
		{{loadtext}}
	</view>
</template>

<script>
	export default {
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
	.load-move{
		text-align: center;
		color: #aaaaaa;
		padding: 15upx;
	}
</style>
