import Intact from 'intact';

export function render(Component, props) {
    const c = new Component(props); 
    c.init();
    c.mount();
    return c;
}

export function mount(Component) {
    const container = document.createElement('div');
    container.style = "width: 800px; height: 1080px; overflow: auto";
    document.body.appendChild(container);
    const instance = Intact.mount(Component, container);
    // scroll to the view
    window.scrollTo(0, document.scrollingElement.scrollHeight - 1080);
    return instance;
}

export function unmount(instance) {
    if (instance && !instance.destroyed) {
        instance.destroy();
        document.body.removeChild(instance.element.parentElement);
    }
}

export function dispatchEvent(target, eventName, options) {
    let event;
    if (document.createEvent) {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    } else if (document.createEventObject) {
        event = document.createEventObject();
        return target.fireEvent(`on${eventName}`, event);
    } else if (typeof CustomEvent !== 'undefined') {
        event = new CustomEvent(eventName);
    }
    Object.assign(event, options);
    target.dispatchEvent(event);
}

export function getElement(query) {
    const elements = document.querySelectorAll(query);
    return elements[elements.length - 1];
}

export function testDemos(req, test) {
    const groups = {};
    req.keys().forEach(item => {
        const paths = item.split('/');
        const name = paths[1];
        const type = paths[3];
        const Demo = req(item).default;

        if (!groups[name]) {
            groups[name] = [];
        }
        groups[name].push({
            title: `${name[0].toUpperCase()}${name.substring(1)} ${type}`,
            Demo: Demo,
        });
    });
    Object.keys(groups).forEach(key => {
        const value = groups[key];
        describe(key, () => {
            value.forEach(value => {
                it(value.title, (done) => {
                    test(value.Demo, done);
                });
            });
        });
    });
}
