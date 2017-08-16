import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import BookletPage from './booklet-page';
function setup() {
    return shallow(<BookletPage />);
}
describe('BookletPage Testing', () => {
    it('', () => {
        const wrapper = setup();
    });
});
