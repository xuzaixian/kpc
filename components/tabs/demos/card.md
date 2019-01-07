---
title: 卡片样式
order: 5
---

改变`type`属性，可以呈现不同的样式，可选取值为：`default` `card` `border-card` `no-border-card`。
其中`no-border-card`适用于具有背景色的场景

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs type="card" v-model="tab">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <Tabs type="border-card" v-model="tab">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <Tabs type="no-border-card" v-model="tab">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
</div>
```

```styl
.k-tabs
    margin-bottom 16px
.k-no-border-card
    padding 10px
    background #f1f1f5
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 'rulein'
        };
    }
}
```
