import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
	const action = removeExpense({ id: '123ABC' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123ABC'
	 });
});

test('Should setup edit expense action object', () => {
	const action = editExpense('123', {note: "new note"});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123',
		updates: {
			note: 'new note'
		}

	});
});

test('Should add an expense object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: 'last months rent'

	};
	const action = addExpense(expenseData);

	expect(action).toEqual({
	type: 'ADD_EXPENSE',
	expense: {
		...expenseData,
		id: expect.any(String)
	}
	});
});

test('Should add an expense object using default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
