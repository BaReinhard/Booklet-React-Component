import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Booklet from './index';
let props = {
    index: 0,
    flipPageIndex: 0,
    pages: [<div />, <div />, <div />, <div />, <div />],
};
function setup() {
    return shallow(<Booklet {...props} />);
}
describe('Test Booklet Mounts ', () => {
    it('Test Container ClassName', () => {
        const wrapper = setup();
        expect(wrapper.node.props.className).toBe('book booklet-container');
    });
    it('Test Container Children ClassNames', () => {
        const wrapper = setup();
        expect(wrapper.node.props.children[0].props.className).toBe('pagelast booklet-next-right');
        expect(wrapper.node.props.children[1].props.className).toBe('page booklet-next-left');
        expect(wrapper.node.props.children[2].props.className).toBe('page3 booklet-current-right');
        expect(wrapper.node.props.children[3].props.className).toBe('cover');
    });
});
