<template>
	<!-- swiper中的transfrom会使fixed失效,此时需设置fixed为false,而top会自动使用padding-top -->
	<mescroll-uni :fixed="false"  :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
			轮播图内容区域
			<pd-list :orgs="orgs"></pd-list> 
			<load-move :loadtext="loadtext"></load-move>
	</mescroll-uni>
	<!-- 数据列表 -->
	
</template>

<script>
	import MescrollUni from "/mescroll-uni/mescroll-uni.vue";
	import PdList from "./pd-list.vue";
	import loadMove from '/common/load-more.vue'
	export default {
		components: {
			MescrollUni,
			PdList,
			loadMove
		},
		data() {
				return {
				downOption:{
					auto:false,
					use:false
				},
				upOption:{
					auto:false,
					noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					empty:{
						tip: '~ 空空如也 ~', // 提示
						btnText: '去看看'
					}
				},
				mescroll: null, //mescroll实例对象
				 //列表数据
				pageNo:1,//页码
				totalPage:null,
				orgs:[],
				pageSize:10,//页码大小
				loadtext:"上拉加载更多",
				ischushihua:1,
					
			}
			},
			props:{
				isMine:{
					type:Boolean,
					default:false
				},
				orgname:String,
				index: Number, // 每个tab页的专属下标
			},
			created() {
					this.getistokenList()
			},
		methods: {
			  mescrollInit (mescroll) {
			   this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.mescroll.endErr();
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				console.log("===================");
				this.getList()
				mescroll.endErr();
			},
			getistokenList(){
				// this.$emit('getistokenList',this.getList)
				if(!this.$store.state.userInfo){
					uni.showToast({
					    title: '请先登录',
					    duration: 800
					});
					
				}else{
					this.getList(this.isMine)
				}
			},
			getList(data) {
				if(this.loadtext == "没有更多数据" || this.loadtext != "上拉加载更多")return
				this.loadtext = "加载中"
				let _self = this;
				_self.$get(_self.$api.orgList, {
					pageNo: _self.pageNo,
					pageSize: _self.pageSize,
					// orgName:_self.orgname,
					orgType:_self.index==0?'':_self.index,
					isMine:data?data:''
				}).then(res => {
					if (res.code == 0) {
				_self.pageNo = res.page.currPage
					//如果成功返回数据如果页面大小小于总记录数量			orgName:_self.orgname,
					if(_self.pageSize>=res.page.totalCount){
					_self.orgs = _self.orgs.concat(res.page.list)
					_self.loadtext = "没有更多数据"
					}else{
						// 其他情况
						if(_self.pageNo>res.page.totalPage){
							_self.loadtext = "没有更多数据"
						}else{
							_self.pageNo++
								_self.orgs =_self.orgs.concat(res.page.list)//添加数据
							_self.loadtext = "上拉加载更多"
						}
					}				
					} else {
						uni.showModal({
							title: '操作提示',
							content: res.msg,
							showCancel: false
						})
					}
				})
			},
		}
	}
</script>
<style>
	
</style>