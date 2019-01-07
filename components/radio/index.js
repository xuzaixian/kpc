import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Radio extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
        };
    }

    static propTypes = {
        disabled: Boolean,
    }

    isChecked() {
        return this.get('value') === this.get('trueValue');
    }

    _destroy() {
        // we should not change data in _destroy
        // if (this.isChecked()) {
            // this.set('value', undefined);
        // }
    }

    _onKeypress(e) {
        if (e.keyCode === 13) {
            this.refs.input.click();
        }
    }
}

export {Radio};
