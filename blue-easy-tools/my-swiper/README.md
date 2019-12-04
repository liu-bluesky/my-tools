## 城市选择器
- 案例介绍
1. 引入文件 按照uniapp的引入组件的方式引入
```vue
import lltSwiperItem from '../../components/llt-swiper-item/llt-swiper-item.vue'
```
2. demo
```vue
 结合swipe-tab-head 可以做新闻轮播图
		<swiper :style="{height:swiperHieght+'px'}" :current="selectTab" @change="swiperIndex">
				<swiper-item v-for="(item,index) in categorys" :key="index">
					<my-swiper-item @istokenUp="istokenUp" :orgname="item.name" :istoken="istoken" :index="item.id" ></my-swiper-item>
				</swiper-item>
			</swiper>
	<llt-swiper-item @istokenUp="istokenUp" :orgname="item.name" :istoken="istoken" :index="item.id" ></llt-swiper-item>
```
3. api方法介绍
```java
	index: Number, // 每个tab页的专属下标 与轮播图 头部索引值对应
```
