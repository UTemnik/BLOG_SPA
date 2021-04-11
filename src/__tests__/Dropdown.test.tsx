import { shallow } from 'enzyme';
import React from 'react';
import {Dropdown} from './../common/Dropdown/Dropdown';

 describe('Dropdown', () => {
	test('should render', () => {
		const wrapper = shallow(<Dropdown  button={<button />} children={<div />} />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('.container').isEmptyRender()).toBeFalsy();
	});
});
 

