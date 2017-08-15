import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Autocomplete from '../index';
function setup() {
    let props = {
        onClick: () => {},
        style: { color: 'grey' },
        dropdownStyle: { backgroundColor: 'grey' },
        valuesStyle: { color: 'pink' },
        values: [1, 2, 3, 4, 5, 6],
    };
    return shallow(<Autocomplete {...props} />);
}
describe('Autocomplete Testing', () => {
    it('Testing Proper Spread of Styles', () => {
        const wrapper = setup();

        expect(wrapper.props().style.color).toEqual('grey');
    });
    it('Testing state correctly holds values to pass as props', () => {
        const wrapper = setup();
        expect(wrapper.state().displayedValues).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('Testing to ensure, pop-up gets passed proper display value', () => {
        const wrapper = setup();
        expect(wrapper.state().displayValues).toEqual(false);
    });
});
