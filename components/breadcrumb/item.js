import Intact from 'intact';
import template from './item.vdt';
import {findRouter, isExternalLink} from '../utils';

export default class BreadcrumbItem extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        to: [String, Object],
        separator: [String, Intact.VNode, Array]
    };

    static blocks = ['separator'];

    defaults() {
        return {
            to: undefined,
            separator: '>',
        }
    }

    _mount() {
        this.$router = findRouter(this);
    }

    onClick() {
        const to = this.get('to');
        if (to) {
            const $router = this.$router;
            if ($router && !isExternalLink(to)) {
                $router.push(to);
            } else {
                window.location.href = to;
            }
        }
    }
}
