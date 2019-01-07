import Intact from 'intact';

export default class MoveWrapper extends Intact {
    template(self, Vdt) {
        const children = self.get('children');
        return children || Vdt.miss.hc('MoveWrapper');
    }

    static propTypes = {
        autoDestroy: Boolean,
        container: [Function, String],
    }

    defaults() {
        return {
            autoDestroy: true, 
            container: undefined,
        }
    }

    init(...args) {
        super.init(...args);
        return this.placeholder = document.createComment("placeholder");
    }

    hydrate(...args) {
        super.hydrate(...args);
        return this.placeholder = document.createComment('placeholder');
    }

    update(lastVNode, nextVNode) {
        super.update(lastVNode, nextVNode);
        return this.placeholder;
    }

    destroy(...args) {
        if (this.get('autoDestroy')) {
            this._$destroy(...args);
        }
    }

    
    /**
     * @brief override super destroy 
     *
     * MoveWraper component has changed the dom struction.
     * It is always the top level dom, so we should 
     * remove it from parent dom. By passing the container
     * to remove function can do this. We can't remove it
     * directly by calling removeChild method, beacause it
     * maybe have leave animation.
     *
     * @param ...args
     */
    _$destroy(lastVNode, nextVNode) {
        // if (this.destroyed) {
            // return console.warn('destroyed multiple times');
        // }
        if (this.rendered && 
            (
                !nextVNode ||
                !(nextVNode.type & Intact.Vdt.miss.Types.ComponentClassOrInstance) ||
                nextVNode.key !== lastVNode.key
            )
        ) {
            Intact.Vdt.miss.remove(this.vdt.vNode, this.container);
        }
        this._destroy(lastVNode, nextVNode);
        this.destroyed = true;
        this.trigger('$destroyed', this);
        this.off();
    }

    _mount(lastVNode, nextVNode) {
        const container = this.get('container');
        if (container) {
            if (typeof container === 'string') {
                this.container = document.querySelector(container);
            } else {
                this.container = container(this.placeholder);
            }
        }
        if (!this.container) {
            // find the closest dialog if exists
            let dom = this.placeholder;
            let found;
            while ((dom = dom.parentNode) && dom.nodeType === 1) {
                if (dom.className && dom.className.split(' ').indexOf('k-dialog') > -1) {
                    found = dom;
                    break;
                }
            }
            this.container = found || document.body;
        }
        this.container.appendChild(this.element);
    }
}

export {MoveWrapper};
