/*!
 * kpc v0.7.10
 *
 * Copyright (c) Kingsoft Cloud
 * Released under the MIT License
 * 
 * Documentation available at
 * https://ksc-fe.github.io/kpc/
 */

import {_$, localize} from './components/utils';

/* generate start */

import {App} from './components/app';
import {Badge} from './components/badge';
import {Breadcrumb, BreadcrumbItem} from './components/breadcrumb';
import {Button, ButtonGroup} from './components/button';
import {Cascader} from './components/cascader';
import {Checkbox} from './components/checkbox';
import {Collapse, CollapseItem} from './components/collapse';
import {Datepicker} from './components/datepicker';
import {Dialog} from './components/dialog';
import {Drawer} from './components/drawer';
import {Dropdown, DropdownMenu, DropdownItem} from './components/dropdown';
import {Editable} from './components/editable';
import {Form, FormItem} from './components/form';
import {Input} from './components/input';
import {Link} from './components/link';
import {Menu, MenuItem} from './components/menu';
import {Message} from './components/message';
import {MoveWrapper} from './components/moveWrapper';
import {Pagination} from './components/pagination';
import {Progress} from './components/progress';
import {Radio} from './components/radio';
import {Row, Col} from './components/grid';
import {ScrollSelect} from './components/scrollSelect';
import {Select, Option, OptionGroup} from './components/select';
import {Slider} from './components/slider';
import {Spinner} from './components/spinner';
import {Spin} from './components/spin';
import {Steps, Step} from './components/steps';
import {Switch} from './components/switch';
import {Table, TableColumn} from './components/table';
import {Tabs, Tab} from './components/tabs';
import {Tag} from './components/tag';
import {Timeline, TimelineItem} from './components/timeline';
import {Timepicker} from './components/timepicker';
import {Tip} from './components/tip';
import {Tooltip} from './components/tooltip';
import {Transfer} from './components/transfer';
import {Tree} from './components/tree';
import {Upload} from './components/upload';

export {
    App,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Cascader,
    Checkbox,
    Col,
    Collapse,
    CollapseItem,
    Datepicker,
    Dialog,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Editable,
    Form,
    FormItem,
    Input,
    Link,
    Menu,
    MenuItem,
    Message,
    MoveWrapper,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Radio,
    Row,
    ScrollSelect,
    Select,
    Slider,
    Spin,
    Spinner,
    Step,
    Steps,
    Switch,
    Tab,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Timeline,
    TimelineItem,
    Timepicker,
    Tip,
    Tooltip,
    Transfer,
    Tree,
    Upload
};

const components = {
    App,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Cascader,
    Checkbox,
    Col,
    Collapse,
    CollapseItem,
    Datepicker,
    Dialog,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Editable,
    Form,
    FormItem,
    Input,
    Link,
    Menu,
    MenuItem,
    Message,
    MoveWrapper,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Radio,
    Row,
    ScrollSelect,
    Select,
    Slider,
    Spin,
    Spinner,
    Step,
    Steps,
    Switch,
    Tab,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Timeline,
    TimelineItem,
    Timepicker,
    Tip,
    Tooltip,
    Transfer,
    Tree,
    Upload
};

export const version = '0.7.10';

/* generate end */

export default function install(Vue) {
    if (install.installed) return;

    if (Vue) {
        for (let key in components) {
            Vue.component(`K${key}`, components[key]);
            // support call method like this.$message.success('test'), #88
            if (key === 'Message') {
                Vue.prototype.$message = components.Message;
            }
        }
    } else {
        for (let key in components) {
            global[`K${key}`] = components[key];
        }
    }
    install.installed = true;
}

export {_$, localize, install};
