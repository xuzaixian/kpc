---
title: 输入框
category: 组件
order: 2
sidebar: doc
---

# 属性

## Input

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 在原生`input`标签的`type`取值的基础上扩展了`textarea`值,当取该值时渲染成`<textarea>` | `String` | `"text"` |
| name | 原生`input`标签的`name`属性 | `String` | `undefined` |
| value | 输入框的值,可用`v-model`进行双向绑定 | `String` | `undefined` |
| defaultValue | `input`的`defaultValue`，首次渲染使用该值 | `String` | `undefined` |
| placeholder | 占位文案 | `String` | `undefined` |
| readonly | 是否只读 | `Boolean` | `false` |
| clearable | 是否展示快速清除按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| rows | 当`type = "textarea"`时，默认展示文本行数 | `Number` &#124; `String` | `2` |
| spellcheck | `textarea`是否进行拼写检查 | `Boolean` | `false` |
| fluid | 是否宽度100% | `Boolean` | `false` |
| autoWidth | 是否宽度随输入的文本的长度变化而变化 | `Boolean` | `false` |
| width | 指定宽度，组件会加上单位`px` | `String`  &#124; `Number` | `undefined` |
| tabindex | 原生`tabindex`属性 | `String` | `undefined` |
| autocomplete | 原生`autocomplete`属性 | `String` | `undefined` |
| nativeProps | 原生`input`或`textarea`上的属性 | `Object` | `undefined` |
| stackClearIcon | 是否将清空按钮覆盖在`suffix`按钮上展示来节省空间 | `Boolean` | `false` |
| frozenOnInput | 是否在输入的过程中冻结`value`更新到视图 | `Boolean` | `false` |


## Search

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 组件输入的值 | `String` | `""` |
| placeholder | 展位文案 | `String` | `"请输入关键字"` |
| type | 类型 | `"default"` &#124; `"line"` | `"default"` |
| size | 尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |

# 扩展点

## Input

| 名称 | 说明 |
| --- | --- |
| prepend | 往`input`前面追加内容 |
| append | 往`input`后面追加内容 |
| prefix | 往`input`头部追加前缀 |
| suffix | 往`input`尾部追加后缀 |


# 事件

## Input

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 点击清除按钮时触发 | - |
| change | 原生`change`事件，绑定在组件内部`input`元素上 | `Event` |
| keydown | 原生`keydown`事件，绑定在组件内部`input`元素上 | `Event` |
| keyup | 原生`keyup`事件，绑定在组件内部`input`元素上 | `Event` |
| keypress | 原生`keypress`事件，绑定在组件内部`input`元素上 | `Event` |
| click | 原生`click`事件，绑定在组件最外层元素上 | `Event` |
| mouseenter | 原生`mouseenter`事件，绑定在组件最外层元素上 | `Event` |
| mouseleave | 原生`mouseleave`事件，绑定在组件最外层元素上 | `Event` |

## Search

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| submit | 表单提交事件 | `keywords` |
