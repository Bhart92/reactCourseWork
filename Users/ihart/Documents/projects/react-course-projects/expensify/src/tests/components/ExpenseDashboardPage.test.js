import React from 'react';
import { shallow } from  'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import NotFoundPage from '../../components/NotFoundPage';


test('Should render the Expense dashbaord page', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	expect(wrapper).toMatchSnapshot();
});

test('Should render the not found page', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();

});
