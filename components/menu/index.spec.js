import CollapseDemo from '~/components/menu/demos/collapse';
import AccordionDemo from '~/components/menu/demos/accordion';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';

describe('Menu', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('expand and shrink sub menu', async () => {
        instance = mount(CollapseDemo);

        const title = instance.element.querySelector('.k-expanded .k-title');
        title.click();
        await wait(300);
        expect(instance.element.outerHTML).to.matchSnapshot();
        title.click();
        await wait(300);
        expect(instance.element.outerHTML).to.matchSnapshot();
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

    it('collapse', async () => {
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
        await wait(500);
        expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
    });

    it('select collapsed menu', async () => {
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
        await wait(500);
        expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
    });

    it('accordion', (done) => {
        instance = mount(AccordionDemo);

        const element = instance.element;
        const menu3 = element.children[2];
        const subMenu1 = menu3.querySelector('.k-menu').firstChild.querySelector('.k-title');
        subMenu1.click();
        // the order of style and class is different on travis and local environment
        expect(element.innerHTML.replace(
            'class="c-expand-enter" style="height: 0px;"',
            'style="height: 0px;" class="c-expand-enter"',
        )).to.matchSnapshot();

        const subMenu4 = menu3.querySelector('.k-menu').lastChild.querySelector('.k-title');
        subMenu4.click();
        expect(element.innerHTML).to.matchSnapshot();

        const menu1 = element.firstChild.querySelector('.k-title');
        menu1.click();
        expect(element.innerHTML).to.matchSnapshot();

        menu3.querySelector('.k-title').click();
        expect(element.innerHTML).to.matchSnapshot();
        done();
    });
});
