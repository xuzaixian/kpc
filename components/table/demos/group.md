---
title: 分组
order: 18
---

分组需要两个`group`来指定：

1. 第一个是`Table`上的`group`属性，该属性指定当前分组的方式，形式为：`{["分组的列的key"]: ["当前列选择的分组的值"]}`
2. 第二个是`TableColumn`或者`scheme`上的`group`属性，该属性指定当前列有哪些可选的分组方式，
如果该列支持多选，还可以添加`multiple`属性，默认为单选。形式为：`[{label: "分组展示文案", value: "选择后的值"}]`

当分组方式改变时，可以监听默认事件`$change:group`来执行自定义分组逻辑

> `group`属性不会双向绑定，所以在改变时，你应该同步更新当前属性值(`sort`也一样)

```vdt
import {Table, TableColumn} from 'kpc/components/table';

const scheme = {
    name: '名称',
    status: {
        title: '状态',
        template(data) {
            return <span>{{ data.status === 'active' ? '运行中' : '已关闭' }}</span>
        },
        group: [
            {label: '全部', value: ''},
            {label: '运行中', value: 'active'},
            {label: '已关闭', value: 'stopped'},
        ]
    }
};

<div class='no-data-template'>
    <Table scheme={{ scheme }} 
        data={{ self.get('data') }} 
        v-model:group="group"
        ev-$change:group={{ self._onChangeGroup }}
        ref="__test1"
    />
    <Table data={{ self.get('multipleData') }} 
        v-model:group="multipleGroup"
        ev-$change:group={{ self._onChangeMultipleGroup }}
        ref="__test2"
    >
        <TableColumn title='名称' key='name' />
        <TableColumn title='状态' key='status' 
            group={{ [ 
                {label: '运行中', value: 'active'},
                {label: '已关闭', value: 'stopped'}
            ] }}
            multiple
        >
            <b:template params="data">
                <span>{{ data.status === 'active' ? '运行中' : '已关闭' }}</span>
            </b:template>
        </TableColumn>
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    .k-table
        flex 1
        margin-left: 10px
```

```js
const oData = [
    {name: '主机1', status: 'active'},
    {name: '主机2', status: 'stopped'},
    {name: '主机3', status: 'active'},
];
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: oData, 
            group: {status: ''},
            multipleData: oData,
            multipleGroup: {status: []},
        }
    }

    _onChangeGroup(c, group) {
        console.log(group);
        const data = oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value && item[key] !== value) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });

        this.set('data', data);
    }

    _onChangeMultipleGroup(c, group) {
        console.log(group);
        const data = oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value.length && value.indexOf(item[key]) === -1) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });

        this.set('multipleData', data);
    }
}
```

```vue-data
data() {
    return {
        data: oData, 
        group: {status: ''},
        multipleData: oData,
        multipleGroup: {status: []},
        scheme: {
            name: '名称',
            status: {
                title: '状态',
                template: function(data) {
                    return <span>{data.status === 'active' ? '运行中' : '已关闭'}</span>
                },
                group: [
                    {label: '全部', value: ''},
                    {label: '运行中', value: 'active'},
                    {label: '已关闭', value: 'stopped'},
                ]
            }
        },
    }
},
```

```react-methods
constructor(props) {
    super(props);
    this.state = {
        "data": oData,
        "group": {
            "status": ""
        },
        "multipleData": oData,
        "multipleGroup": {
            "status": []
        }
    };
    this._onChangeGroup = this._onChangeGroup.bind(this);
    this._onChangeMultipleGroup = this._onChangeMultipleGroup.bind(this);
}
```

```angular-properties
private data = oData;
private group = {status: ''};
private multipleData = oData;
private multipleGroup = {status: []};
private scheme = {
    name: '名称',
    status: {
        title: '状态',
        template: function(data) {
            return data.status === 'active' ? '运行中' : '已关闭';
        },
        group: [
            {label: '全部', value: ''},
            {label: '运行中', value: 'active'},
            {label: '已关闭', value: 'stopped'},
        ]
    }
};
```
