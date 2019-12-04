## 新闻轮播tab头
- 案例介绍
1. 引入文件 按照uniapp的引入组件的方式引入
```vue
import swiperTabHead from '../../components/index/swiper-tab-head.vue'
```
2. demo
```vue
	<swiper-tab-head 
	@tabtap="tabtap"	
	:tabIndex="tabIndex" :tabBars="tabBars">
	</swiper-tab-head>
	
```
3. api方法介绍
```java
	点击tab头事件 返回当前点击的索引值
	tabtap(index) {
				this.tabIndex = index
			}
	scrollStyle tab整体视图样式   scrollStyle="border-bttom:0"
		
	scrollItemStyle 每个tab样式   scrollItemStyle="width:50%"
	tabBars 数组
	tabIndex 当前点击tab索引值
	
```
