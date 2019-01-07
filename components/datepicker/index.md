---
title: 日期选择
category: 组件
order: 7
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的日期字符串 | `String` | `undefind` |
| clearable | 是否能清空当前值 | `Boolean` | `false` |
| maxDate | 最大可选日期，可以为日期字符串或日期对象 | `String` &#124; `Date` | `undefind` |
| minDate | 最小可选日期，可以为日期字符串或日期对象 | `String` &#124; `Date` | `undefind` |
| placeholder | 占位文字 | `String` | `"请选择日期"` |
| disabled | 是否禁用 | `Boolean` | `false` |
| disabledDate | 该属性值是一个函数，用于定义那些日期被禁止选择，函数参数为日期字符串，返回`true`则表示禁用该日期 | `Function` | `(date) => false` |
| multiple | 是否支持多选 | `Boolean` | `false` |
| size | 组件尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| type | 组件类型：`"date"` 只选择日期；`"datetime"` 选择日期和时间；`"year"` 选择年份；`"month"` 选择月份 | `"date"` &#124; `"datetime"` &#124; `"year"` &#124; `"month"` | `"date"` |
| disabledHours | 禁用小时选择 | `Boolean` | `false` |
| disabledMinutes | 禁用分钟选择 | `Boolean` | `false` |
| disabledSeconds | 禁用秒钟选择 | `Boolean` | `false` |
| shortcuts | 指定快捷方式 | `Array<Object>` | `undefined` |
| range | 是否选择日期范围 | `Boolean` | `false` |
| container | 指定弹出选择层追加的位置，默认：`Dialog`类型的组件会追加到`Dialog`中，其他会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
