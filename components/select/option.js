import Intact from 'intact';
import {DropdownItem} from '../dropdown';

export default class Option extends DropdownItem {
    defaults() {
        return {
            ...super.defaults(),
            value: undefined,
            label: undefined,
        };
    }
}
