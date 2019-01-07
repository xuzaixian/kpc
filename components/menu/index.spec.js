import CollapseDemo from '~/components/menu/demos/collapse';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';

describe('Menu', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('expand and shrink sub menu', (done) => {
        instance = mount(CollapseDemo);

        const title = instance.element.querySelector('.k-expanded .k-title');
        title.click();
        setTimeout(() => {
            expect(instance.element.outerHTML).to.matchSnapshot();
            title.click();
            setTimeout(() => {
                expect(instance.element.outerHTML).to.matchSnapshot();
                done();
            }, 300);
        }, 300);
    });

    it('select', () => {
        instance = mount(CollapseDemo);

        const [title, disabledTitle] = instance.element.querySelectorAll('.k-title');
        title.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        disabledTitle.click();
        expect(instance.element.outerHTML).to.matchSnapshot();

        const subTitle = instance.element.querySelector('.k-expanded .k-menu .k-title');
        subTitle.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('collapse', (done) => {
        instance = mount(CollapseDemo);

        instance.set('isCollapse', true);
        expect(instance.element.outerHTML).to.matchSnapshot();

        // show sub menu
        const title = instance.element.querySelector('.k-menu-item:nth-child(3) .k-title');
        dispatchEvent(title, 'mouseenter');
        const dropdown = getElement('.k-dropdown-menu.k-menu');
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(dropdown.querySelector('.k-menu-item:nth-child(4) .k-title'), 'mouseenter');
        expect(getElement('.k-dropdown-menu.k-menu').innerHTML).to.matchSnapshot();

        // hide all
        dispatchEvent(document, 'click');
        setTimeout(() => {
            expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
            done();
        }, 500);
    });

    it('select collapsed menu', (done) => {
        instance = mount(CollapseDemo);

        instance.set('isCollapse', true);
        const element = instance.element;  
        let title = element.querySelector('.k-title');
        title.click();
        expect(element.outerHTML).to.matchSnapshot();

        title = element.querySelector('.k-menu-item:nth-child(3) .k-title');
        dispatchEvent(title, 'mouseenter');
        const dropdown = getElement('.k-dropdown-menu.k-menu');
        dropdown.querySelector('.k-title').click();
        expect(dropdown.innerHTML).to.matchSnapshot();

        // should hide when select
        setTimeout(() => {
            expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
            done();
        }, 500);
    });
});
