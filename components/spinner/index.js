import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {minMaxStep} from '../utils';

const numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

export default class Spinner extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: 0,
            max: Number.POSITIVE_INFINITY,
            min: Number.NEGATIVE_INFINITY,
            step: 1,
            size: 'default',
            vertical: false,
            precision: undefined,
            formatter: undefined,
            parser: undefined,
            prefix: undefined,
            suffix: undefined,
            width: undefined,
            forceStep: false,

            _value: 0,
        };
    }

    static propTypes = {
        disabled: Boolean,
        value: [Number, String],
        max: Number,
        min: Number,
        step: [Number, Object, Function],
        size: ['large', 'default', 'small', 'mini'],
        vertical: Boolean,
        precision: Number,
        formatter: Function,
        parser: Function,
        prefix: String,
        suffix: String,
        width: [String, Number],
        forceStep: Boolean,
    }

    static events = {
        change: true,
    };

    _init() {
        // make sure the min/max/step is valid
        const defaults = this.defaults();
        this.on('$receive:step', (c, v) => {
            this._getStep = parseStep(v, defaults.step);
        });
        ['min', 'max'/* , 'step' */].forEach(item => {
            this.on(`$receive:${item}`, (c, v) => {
                if (typeof v !== 'number') {
                    this.set(item, defaults[item], {async: true});
                }
            });
        });

        this.on('$receive', (c, keys) => {
            if ([
                'max', 'min', 'precision',
                'value', 'formatter', 'parser',
                'prefix', 'suffix'
            ].find(key => ~keys.indexOf(key))) {
                this._fixValue();
            }
        });
    }

    // default function to get step
    _getStep() {
        return [this.get('step'), this.get('min')];
    }

    _fixValue(value = this.get('value'), fallbackValue = 0, shouldTriggerChange) {
        const ret = this._getFixedValue(value, fallbackValue);
        this.set(ret);
        if (shouldTriggerChange && ret.value !== this.oldValue) {
            this.trigger('change', ret.value);
        }
    }

    _getFixedValue(value = this.get('value'), fallbackValue = 0) {
        let {precision, max, forceStep} = this.get();
        const [step, min] = this._getStep(value);

        if (min > max) {
            Intact.utils.error(new Error(`[Spinner] min must less than or equal to max, but got min: ${min} max: ${max}`));
            return {_value: this._format(0), value: 0};
        }

        value = this._parse(value);

        const originValue = this.get('value');
        if (value == null || !numberReg.test(value)) {
            value = fallbackValue;
        }

        value = minMaxStep(Number(value), min, max, forceStep && step);

        let _value = value;
        if (precision != null) {
            _value = value.toFixed(precision);
            value = +_value;
        }

        _value = this._format(_value);

        return {_value, value};
    }

    _parse(value) {
        const {parser, prefix, suffix} = this.get();
        value = String(value);

        if (!parser) {
            if (prefix) {
                value = value.replace(new RegExp(`^${prefix}`), '');
            }
            if (suffix) {
                value = value.replace(new RegExp(`${suffix}$`), '');
            }
            return value;
        }

        return parser(value);
    }

    _format(value) {
        const {formatter, prefix, suffix} = this.get();

        if (!formatter) {
            return `${prefix || ''}${value}${suffix || ''}`;
        }

        return formatter(value);
    }

    _increase(e) {
        const {value} = this.get();
        const [step] = this._getStep(value, 'increase');

        this.oldValue = value;
        this._fixValue(Number((+value + step).toFixed(10)), 0, true);
    }

    _decrease(e) {
        const {value} = this.get();
        const [step] = this._getStep(value, 'decrease');

        this.oldValue = value;
        this._fixValue(Number((+value - step).toFixed(10)), 0, true);
    }

    _disableDecrease() {
        const {value, min, /* step,  */disabled} = this.get();

        // enable btn as long as the value is greater than min
        // otherwise we can't set the boundary value, #484
        return disabled || +value <= min; // || Number((min + step).toFixed(10)) > value;
    }

    _disableIncrease() {
        const {value, max, /* step,  */disabled} = this.get();

        return disabled || +value >= max; // || Number((max - step).toFixed(10)) < value;
    }

    _changeValue(e) {
        this._fixValue(e.target.value.trim(), this.get('value'), true);
    }

    // we need change value as long as the input is valid, #213
    _onInput(e) {
        const val = e.target.value;
        const {value} = this._getFixedValue(val.trim(), this.get('value'));
        const data = {_value: val, value};
        // if (_value === val) {
            // data.value = value;
        // }
        this.set(data);
    }

    // preserve old value on focus to detect we should trigger change event or not
    _onFocus() {
        this.oldValue = this.get('value');
    }
}

function _parseStep(step, defaultValue) {
    const type = typeof step;
    switch (type) {
        case 'number': return () => step;
        case 'object':
            const breakpoints = Object.keys(step).map(i => {
                if (i === '$') {
                    return {key: i, value: Number.POSITIVE_INFINITY};
                }
                return {key: i, value: Number(i)};
            }).sort((a, b) => {
                return a.value - b.value;
            });
            return (value, direction) => {
                for (let i = 0; i < breakpoints.length; i++) {
                    const breakpoint = breakpoints[i];
                    const prevBreakpoint = breakpoints[i - 1];
                    if (value < breakpoint.value) {
                        return [step[breakpoint.key], prevBreakpoint && prevBreakpoint.value];
                    }
                    if (value === breakpoint.value) {
                        // we must detect the direction when it is a breakpoint
                        if (direction === 'increase') {
                            const nextBreakpoint = breakpoints[i + 1];
                            if (nextBreakpoint !== undefined) {
                                return [step[nextBreakpoint.key], breakpoint.value];
                            }
                        }
                        return [step[breakpoint.key], prevBreakpoint && prevBreakpoint.value];
                    }
                }
                return [defaultValue, undefined];
            };
        case 'function': return step;
        default: return () => defaultValue;
    }
}

export function parseStep(step, defaultValue) {
    const getStep = _parseStep(step, defaultValue);

    return function(value, direction) {
        const step = getStep(value, direction);
        const min = this.get('min');
        if (Array.isArray(step)) {
            return [step[0], step[1] === undefined ? min : Math.max(min, step[1])];
        } else {
            return [step, min];
        }
    }
}

export {Spinner};
