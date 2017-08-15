import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ValueDisplay from './valuedisplay';
let props = {};
function setup(bool) {
    props = {
        onClick: function(event) {
            return event.target.innerText;
        },
        dropdownStyle: { backgroundColor: 'grey' },
        displayValues: bool,
        displayedValues: [1, 2, 3, 4, 5, 6],
    };
    return shallow(<ValueDisplay {...props} />);
}
describe('ValueDisplay Pop Up Testing', () => {
    it('Testing Proper Children are rendered based on array given', () => {
        let wrapper = setup(true);

        // Testing Each List Item OnClick function to return the proper value
        for (let i = 0; i < wrapper.props().children.length; i++) {
            let fakeEvent = {
                target: {
                    innerText: props.displayedValues[i],
                },
            };
            expect(wrapper.props().children[i].props.onClick(fakeEvent)).toEqual(
                wrapper.props().children[i].props.children,
            );
        }
        expect(wrapper.props().children.length).toBe(props.displayedValues.length);
        expect(wrapper.props().className).toBe('valuedisplay-container');
    });
    it('Testing Display is correctly rendered on bool', () => {
        let wrapper = setup(false);
        expect(wrapper.props()).toEqual({});
        wrapper = setup(true);
        expect(wrapper.props().children.length).toBe(props.displayedValues.length);
    });
});
