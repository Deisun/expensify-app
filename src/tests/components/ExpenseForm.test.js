import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import MockDate from 'mockdate';


test('should render ExpenseForm correctly', ()=> {
    MockDate.set(0);

    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    MockDate.reset();
})
