---
title: 异步加载
order: 3
---

和`Tree`异步加载类似，唯一不同的是，所有节点必须存在唯一的`key`

添加`load`数据加载函数即可实现异步加载子节点功能，组件会传入当前节点对象作为参数，函数可以返回
数组或者异步返回数组作为当前异步加载的子节点。如果子节点还可以进一步展开，可以将`children`属性
设为空数组`[]`，否则不指定`children`则表示该节点为叶子节点。

组件默认遇到`children`为`[]`空数组的情况就会去进行异步加载，你可以通过`loaded`属性设为`true`来
标识该子节点已经加载完成，无需再次加载

```vdt
import {TreeSelect} from 'kpc/components/treeSelect';

<TreeSelect data={{ self.get('data') }} 
    load={{ self._loadData }}
/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {
                    label: 'parent',
                    key: '1', 
                    children: [
                        {label: 'first child', children: [], key: '1.1'},
                        {label: 'last child', children: [], loaded: true, key: '1.2'},
                    ],
                },
            ],
        }
    }

    _loadData(node) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {label: `child ${node.key}.1`, children: [], key: `${node.key}.1`},
                    {label: `child ${node.key}.2`, key: `${node.key}.2`},
                ]);
            }, 1000);
        });
    }
}

```
