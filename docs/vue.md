---
title: Vue中使用
order: 1.1
sidebar: doc
---

# 准备工作

在学习使用kpc之前，假设你已经掌握了以下知识：

1. [webpack][2] + [babel][3]
2. [Vue][4]

# 安装

```js
npm install kpc-vue -S
```

# CDN

通过[cdn.jsdelivr.net/npm/kpc/dist/](https://cdn.jsdelivr.net/npm/kpc/dist/)可以直接引入最新版kpc，建议使用锁定版本地址，
例如：[cdn.jsdelivr.net/npm/kpc@0.5.14/dist/](https://cdn.jsdelivr.net/npm/kpc@1.0.0/dist/)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>kpc-demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/kpc/dist/kpc.css" />
    <!-- 将上述kpc.css替换成ksyun.css，可以使用ksyun主题 -->
    <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/kpc/dist/ksyun.css" /> -->
</head>
<body>
    <div id="app">
        <k-button @click="hello">Hello world</k-button>
    </div>

    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/vue"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/kpc/dist/kpc.vue.min.js"></script>
    <script type="text/javascript">
        Vue.use(Kpc);
        new Vue({
            el: '#app',
            methods: {
                hello: function() {
                    this.$message.success('Welcome to kpc world!');
                }
            }
        });
    </script>
</body>
</html>
```

# Vue CLI 3 

推荐使用`@vue/cli@3.3.0`及以上的版本进行项目初始化

## 安装并初始化

```shell
npm install -g @vue/cli
vue create hello-world
cd hello-word
npm install kpc-vue -S
```

> `@vue/cli@3.5.0`如果浏览器运行报: `Cannot assign to read only property...`的错误，可以在
> `babel.config.js`中添加`sourceType: "unambiguous"`解决，详见https://github.com/webpack/webpack/issues/4039

## 引入主题文件

如果你需要引入主题文件，需要安装`stylus`和`stylus-loader`

### 安装

```shell
npm install stylus stylus-loader -D
```

### 新增配置文件`vue.config.js`

kpc-vue需要指向`kpc-vue/@stylus`，下面以内置的主题`ksyun`为例

在项目根目录下创建`vue.config.js`文件，内容如下：

```javascript
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'kpc-vue': 'kpc-vue/@stylus',
            }
        },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: [
                        {
                            loader: 'stylus-loader',
                            options: {
                                'include css': true,
                                'resolve url': true,
                                'import': '~kpc-vue/@stylus/styles/themes/ksyun/index.styl',

                                /* 对于stylus-loader@4 */
                                // stylusOptions: {
                                //     incluceCss: true,
                                //     import: ['~kpc-vue/@stylus/styles/themes/ksyun/index.styl'],
                                // }
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```

> 如果主题没有生效，请检查`resolve.alias['kpc-vue']`是否指向了`kpc-vue/@stylus`

如果采用链式写法，不要直接修改`stylus-loader`配置，可以采用`css`配置项来配置，如下所示：

```js
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('kpc-vue', 'kpc-vue/@stylus')
    },
    css: {
        loaderOptions: {
            stylus: {
                'include css': true,
                'resolve url': true,
                import: `~kpc-vue/@stylus/styles/themes/ksyun/index.styl`
            }
        }
    }
}
```

> `@vue/cli@3.0`版本如果报找不到`babel-types`的错误，可以安装`babel-types`重启项目即可

# Vue CLI 2

## 安装并初始化

```shell
npm install -g vue-cli
vue init webpack hello-world
cd hello-world
npm install kpc-vue -S
```

## 引入主题文件

如果你需要引入主题文件，需要安装`stylus` `stylus-loader`

```shell
npm install stylus stylus-loader -D
```

修改`build/webpack.base.conf.js`

```diff
--- a/build/webpack.base.conf.js
+++ b/build/webpack.base.conf.js
@@ -27,7 +27,7 @@ module.exports = {
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
+      'kpc-vue': 'kpc-vue/@stylus',
     }
   },
```

修改`build/utils.js`

```diff
--- a/build/utils.js
+++ b/build/utils.js
@@ -62,7 +62,11 @@ exports.cssLoaders = function (options) {
     sass: generateLoaders('sass', { indentedSyntax: true }),
     scss: generateLoaders('sass'),
     stylus: generateLoaders('stylus'),
-    styl: generateLoaders('stylus')
+    styl: generateLoaders('stylus', {
+      'include css': true,
+      'resolve url': true,
+      'import': '~kpc-vue/@stylus/styles/themes/ksyun/index.styl',
+    })
   }
 }
```

# 全量引入

全量引入使用vue提供的`use`方法，一次性注册所有组件

```js
import Vue from 'vue';
import Kpc from 'kpc-vue';

Vue.use(Kpc);
```

> Vue不能使用`Switch`作为组件名，所以所有的组件命名为`KComponent`形式，例如：`KButton`，
> 全量安装后，你可以在模板中使用`KButton`或者`k-button`作为元素名

# 按需引入

按需引入只需要在用到该组件才引入，可以最大化减小打包文件的体积

```vue
<template>
    <Button @click="hello">Hello World</Button>
</template>
<script>
import {Button, Message} from 'kpc-vue';

export default {
    components: {
        Button
    },

    methods: {
        hello() {
            Message.success('Welcome to kpc world!');
        }
    }
}
</script>
```

# 语法说明

对于文档中语法从`Vdt`到`Vue`的转换规则如下：

| 类别 | intact写法 | vue写法 |
| --- | --- | --- |
| 事件 | `ev-click` | `@click` |
| 事件回调传参 | `ev-click={{ self.onClick.bind(self, data) }}` | `@click="onClick(data)"` |
| 属性 | `name={{ self.get('name') }}` | `:name="name"` |
| block | `<b:header>header</b:header>` | `<template slot="header">header</template>` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | vue不支持`parent`引用父组件中定义的模板，你需要直接拷贝父组件定义的模板 |
| 带参数的block | `<Transfer><b:label params="data"><div>{{ data.name }}</div></b:label></Transfer>` | `<Transfer><div slot="label" slot-scope="data">{{ data.name }}</div></Transfer>` |
| 双向绑定任意属性 `@since intact-vue@0.3.7` | `v-model:name="name"` | `:name.sync="name"` |

> 对于属性名和事件名，KPC组件支持连字符的形式代替驼峰形式，如：
> 
> `checkType="none" => check-type="none"`
>
> `@$change:checkedKeys="handler" => @change:checked-keys="handler"`

## 不支持的特性

1. 不支持事件的.native修饰符
    ```vue
    <Button @click.native="click">default</Button>
    ```
2. ~~多余的属性不会被自动添加到组件渲染的DOM上，而是被直接忽略~~
3. 不支持 [Multiple values](https://vuejs.org/v2/guide/class-and-style.html#Multiple-Values) style
    ```vue
    <Button v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></Button>
    ```
4. 不要在KPC组件上直接做动画，如果要动画，可以包一层div
    ```vue
    <transition name="fade">
        <Button v-if="show">default</Button>
    </transition>
    ```
    可以包一层div
    ```vue
    <transition name="fade">
        <div v-if="show">
            <Button>default</Button>
        </div>
    </transition>
    ```

另外当需要在js中使用`h()`方法创建vNode，然后作为属性传给kpc组件时，需要使用`Intact.normalize()`
方法将vNode包起来

```vue
<template>
    <Badge :text="text" :children="children" />
</template>
<script>
import Intact from 'intact';
import {Badge} from 'kpc-vue';

export default {
    components: {
        Badge
    },
    data() {
        const h = this.$createElement;
        return {
            text: Intact.normalize(h('i', null, 'test')),
            children: Intact.normalize(h('div', null, 'test'))
        }
    }
}
</script>
```

> `Table`组件的`scheme`属性中`template`字段返回的vNode无需`normalize`，因为组件内部做了兼容，
> 不过多次调用`normalize`也没有问题。


[1]: https://github.com/Javey/intact-vue
[2]: https://webpack.js.org/
[3]: https://babeljs.io/
[4]: https://cn.vuejs.org/index.html
