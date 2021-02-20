---
title: 表头分组
order: 12
---

`scheme`和`TableColumn`两种方式都可以定义分组的表头。`scheme`方式下，只需要嵌套定义`scheme`字段即可；
`TableColumn`方式下，嵌套使用`TableColumn`即可

> 不管那种方式定义分组表头，`key`必须在当前表格下唯一

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<div>
    <Table data={{ self.get('data') }} type="grid"
        scheme={{ {
            weekday: {title: 'Weekday'},
            forenoon: {
                title: 'Forenoon',
                scheme: {
                    forenoonTime: {title: 'Time'},
                    classes: {
                        title: 'Classes',
                        scheme: {
                            class1: {title: 'Class 1'},
                            class2: {title: 'Class 2'},
                            class3: {title: 'Class 3'},
                            class4: {title: 'Class 4'}
                        }
                    }
                } 
            },
            afternoon: {
                title: 'Afternoon',
                scheme: {
                    afternoonTime: {title: 'Time'},
                    class5: {title: 'Class 5'},
                    class6: {title: 'Class 6'},
                    class7: {title: 'Class 7'}
                } 
            }
        } }}
    />
    <Table data={{ self.get('data') }} checkType="none" type="grid" resizable stickHeader="87">
        <TableColumn title="Weekday" key='weekday' fixed="left"/>
        <TableColumn title="Forenoon" key="forenoon">
            <TableColumn title="Time" key="forenoonTime" fixed="left" />
            <TableColumn title="Classes" key="classes">
                <TableColumn title="Class 1" key='class1' />
                <TableColumn title="Class 2" key='class2' />
                <TableColumn title="Class 3" key='class3' />
                <TableColumn title="Class 4" key='class4' />
            </TableColumn>
        </TableColumn>
        <TableColumn title="Afternoon" key="afternoon">
            <TableColumn title="Time" key="afternoonTime" />
            <TableColumn title="Class 5" key='class5' />
            <TableColumn title="Class 6" key='class6' />
            <TableColumn title="Class 7" key='class7' fixed="right" />
        </TableColumn>
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 20px
```

```js
const weekdays = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday'];
const classes = ['English', 'Mathematics', 'Chinese', 'History', 'Geopraghy'];
let index = 0;
const randomClasses = () => {
    const ret = {};
    for (let i = 0; i < 7; i++) {
        // ret[`class${i + 1}`] = classes[Math.floor(Math.random() * classes.length)];
        ret[`class${i + 1}`] = classes[(i + index) % classes.length];
    }
    index++;
    return ret;
};
const data = weekdays.map(weekday => {
    return {
        weekday, 
        ...randomClasses(), 
        forenoonTime: '08:00 ~ 12:00',
        afternoonTime: '14:00 ~ 17:00',
    };
});

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {data};
    }
}
```

```vue-data
data() {
    return {data};
}
```

```react-methods
constructor(props) {
    super(props);
    this.state = {data};
}
```

```angular-properties
private data = data;
```
