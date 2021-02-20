---
title: 弹窗
category: 组件
order: 10
sidebar: doc
---

> `Dialog`如果展示遮罩层，那么它会在弹出时给`body`添加`overflow: hidden`样式，以此来阻止`body`
> 滚动，同时会添加`padding-right`来保证页面不闪动，但如果你页面存在`position: fixed`元素，则依然
> 可能会在弹窗弹出时闪动。
> 
> 组件提供了两个全局配置，用来自定义元素的修正逻辑。例如：本文档网站的配置如下
> ```js
> // @code
> import {configure} from 'kpc/components/utils';
>
> configure({
>     onDialogOpen(scrollbarWidth) {
>         document.body.style.backgroundColor = '#f1f1f5';
>         const header = document.querySelector('.header-wrapper');
>         if (header) {
>             header.style.paddingRight = `${scrollbarWidth}px`;
>         }
>         const tableOfContents = document.querySelector('.table-of-contents');
>         if (tableOfContents) {
>             tableOfContents.style.right = `${scrollbarWidth}px`;
>         }
>     },
> 
>     onDialogClose() {
>         const header = document.querySelector('.header-wrapper');
>         if (header) {
>             header.removeAttribute('style');
>         }
>         const tableOfContents = document.querySelector('.table-of-contents');
>         if (tableOfContents) {
>             tableOfContents.removeAttribute('style');
>         }
>     },
> });
> ```

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 弹窗标题 | `String` | `"提示"` |
| overlay | 是否展示遮罩层 | `Boolean` | `true` |
| closable | 点击遮罩层是否可以关闭弹窗 | `Boolean` | `true` |
| value | 弹窗是否展示出来 | `Boolean` | `false` |
| size | 弹窗尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| loading | “确定”按钮是否为加载状态 | `Boolean` | `false` |
| okText | “确定”按钮文案 | `String` | `"确定"` |
| cancelText | “取消”按钮文案 | `String` | `"取消"` |
| disabledOk | “确定”按钮是否为禁用状态 | `Boolean` | `false` |
| ok | “确定”按钮点击后自定义回调函数 | `Function` | `undefined` |
| cancel | “取消”按钮点击后自定义回调函数 | `Function` | `undefined` |
| container | 指定弹层插入的容器，默认会追加到`body`中。你可以传入函数返回一个DOM用来作为插入的容器，或者传入字符串用来给`querySelector`进行查询 | `Function` &#124; `String` | `undefined` |
| hideClose | 是否隐藏右上角关闭按钮 | `Boolean` | `false` |
| escClosable | 是否按ESC时关闭弹窗 | `Boolean` | `true` |
| terminate | 指定在用户点击“关闭”按钮，点击遮罩层或者按ESC键时的回调函数 | `Function` | `undefined` |
| width | 指定弹窗宽度，`Number`类型时，单位为`px`；`String`类型时，需要指定单位 | `Number` &#124; `String` | `undefined` |
| mode | 指定主体元素在关闭状态下的渲染方式，`"destroy"`代表直接销毁，`"hide"`代表只是隐藏 | `"destroy"` &#124; `"hide"` | `"destroy"` |

# 扩展点

| 名称 | 说明 |
| --- | --- |
| header | 扩展弹窗头部 |
| body | 扩展弹窗主体部分 |
| footer | 扩展弹窗底部 |
| footer-wrapper | 扩展弹窗整个底部，上述`footer`是它下面一个子扩展点 |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| show | 弹出弹窗 | - | `Promise` |
| close | 关闭弹窗 | - | `undefined` |
| showLoading | “确定”按钮变为加载状态 | - | `undefined` |
| hideLoading | “确定”按钮变为正常状态 | - | `undefined` |
| disableOk | “确定”按钮变为禁用状态 | - | `undefined` |
| enableOk | “确定”按钮变为正常状态 | - | `undefined` |
| ok | 点击“确定”按钮的回调方法，继承`Dialog`时，可以复写该方法实现自定义需求 | - | `undefined` |
| cancel | 点击“取消”按钮的回调方法，继承`Dialog`时，可以复写该方法实现自定义需求 | - | `undefined` |

# 静态方法

> 如果你在Vue下全局安装KPC，可以通过`this.$dialog`引用到`Dialog`组件，所以你可以这样调用它的
> 静态方法：`this.$dialog.success()`

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| success | 成功提示窗口 | `Options` | `Promise` |
| warning | 警告提示窗口 | `Options` | `Promise` |
| error | 错误提示窗口 | `Options` | `Promise` |
| confirm | 确定提示窗口 | `Options` | `Promise` |

其中`Options`对象常用属性说明如下

> `Dialog`属性大都支持

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 弹窗标题，如果传入标题，则展示样式会有所不同 | `String` | `undefined` |
| content | 弹窗内容 | `String` &#124; `Number` &#124; `VNode` &#124; <code>Array&lt;String &#124; Number &#124; VNode&gt;</code> | `undefined` |
| size | 弹窗尺寸 | `"large"` &#124; `"default"` &#124; `"small"` &#124; `"mini"` | `"default"` |
| okText | “确定”按钮文案 | `String` | `"确定"` |
| cancelText | “取消”按钮文案 | `String` | `"取消"` |
| hideIcon | 是否隐藏提示图标 | `Boolean` | `false` |
| hideFooter | 是否隐藏底部按钮 | `Boolean` | `false` |
| showClose | 是否展示关闭按钮 | `Boolean` | `false` |

其中`Promise`对象会在点击“确定”按钮时`resolve()`，在点击“取消”按钮时`reject()`，你可以在`then()`
中书写用户点击不同按钮的逻辑

> 只有`confirm`类型的提示窗口才有“取消”按钮


# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| cancel | 点击取消按钮时触发 | - |
| ok | 点击确定按钮时触发 | - |
| open | 弹窗打开后触发 | - |
| close | 弹窗关闭后触发，不管是什么原因导致的关闭 | - |
| terminate | 用户强行关闭弹窗时触发，即：点击“关闭”按钮，点击遮罩层，按ESC键 | - |
