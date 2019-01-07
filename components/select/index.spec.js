import BasicDemo from '~/components/select/demos/basic';
import DisabledDemo from '~/components/select/demos/disabled'; 
import ClearableDemo from '~/components/select/demos/clearable';
import FilterDemo from '~/components/select/demos/filterable';
import GroupDemo from '~/components/select/demos/group';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';

describe('Select', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 400);
    });

    it('should select value correctly', () => {
        instance = mount(BasicDemo);
        
        const trigger = instance.element.querySelector('.k-wrapper');
        trigger.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-item');
        item.click();
        expect(instance.element.outerHTML).to.matchSnapshot();

        trigger.click();
        const _dropdown = getElement('.k-select-dropdown');
        expect(_dropdown.innerHTML).to.matchSnapshot();
    });

    it('disabled', () => {
        instance = mount(DisabledDemo);

        const [, trigger] = instance.element.querySelectorAll('.k-wrapper');
        trigger.click();
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();
    });

    it('clearable', () => {
        instance = mount(ClearableDemo);

        instance.set({day: 'Monday', days: ['Monday', 'Tuesday']});
        expect(instance.element.outerHTML).to.matchSnapshot();
        const [clear1, clear2] = instance.element.querySelectorAll('.k-clear');
        clear1.click();
        clear2.click();
        expect(instance.get('day')).to.eql('');
        expect(instance.get('days')).to.eql('');
    });

    it('multiple', () => {
        instance = mount(ClearableDemo);

        const [, trigger] = instance.element.querySelectorAll('.k-wrapper');
        trigger.click();
        const dropdown = getElement('.k-select-dropdown');
        const [item1, item2] = dropdown.querySelectorAll('.k-item');
        item1.click();
        item2.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('days')).to.eql(['Monday', 'Tuesday']);
        // delete
        const deleteBtn = instance.element.querySelector('.k-select-tag .k-icon');
        deleteBtn.click();
        expect(instance.get('days')).to.eql(['Tuesday']);
    });

    it('filterable', () => {
        instance = mount(FilterDemo);
    
        const [input1, input2, input3] = instance.element.querySelectorAll('.k-inner');
        input1.value = 'm';
        dispatchEvent(input1, 'input');
        const dropdown1 = getElement('.k-select-dropdown');
        expect(dropdown1.innerHTML).to.matchSnapshot();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(instance.get('day')).to.eql('Monday');

        input2.value = '二';
        dispatchEvent(input2, 'input');
        const dropdown2 = getElement('.k-select-dropdown');
        expect(dropdown2.innerHTML).to.matchSnapshot();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        input2.value = 'Wed';
        dispatchEvent(input2, 'input');
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(instance.get('days')).to.eql(['Tuesday', 'Wednesday'])

        input3.value = 'm';
        dispatchEvent(input3, 'input');
        expect(getElement('.k-select-dropdown').innerHTML).to.matchSnapshot();
        input3.value = '三';
        dispatchEvent(input3, 'input');
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(instance.get('day1')).to.eql('Wednesday');
    });

    it('group', () => {
        instance = mount(GroupDemo);

        const [trigger1, trigger2] = instance.element.querySelectorAll('.k-wrapper');
        trigger1.click();
        const dropdown1 = getElement('.k-select-dropdown');
        expect(dropdown1.innerHTML).to.matchSnapshot();
        const item = dropdown1.querySelector('.k-item');
        item.click();
        expect(instance.get('day')).to.eql('Monday');

        trigger2.click();
        const dropdown2 = getElement('.k-select-dropdown');
        expect(dropdown2.innerHTML).to.matchSnapshot();
    });

    it('keyboard operations',(done) => {
        instance = mount(BasicDemo);

        const select = instance.element.querySelector('.k-select');
        dispatchEvent(select, 'keypress', {keyCode: 13});
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(select, 'keydown', {keyCode: 9});
        setTimeout(() => {
            expect(dropdown.parentNode).to.eql(null);
            done();
        }, 500);
    });
});
