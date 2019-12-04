## 城市选择器
- 案例介绍
1. 引入文件 按照uniapp的引入组件的方式引入
```vue
import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
```
2. demo
```vue
	<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onConfirm="onConfirm"></mpvue-city-picker>
	
```
3. api方法介绍
```java
themeColor：确认按钮颜色
// 城市选择  确认事件
	onConfirm(e) {
		this.pickerText = e.label
			},
    onCancel 取消事件
:pickerValueDefault：默认城市索引值
```
