import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//actions needed
	//ADD_EXPENSE
	const addExpense = (
	{
		description = '',
		note = '',
		amount = 0,
		createdAt = 0
	} = {}
	) => ({
		type: 'ADD_EXPENSE',
		expenses: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
		}
	});
	//REMOVE_EXPENSE
  const removeExpense = ({ id } = {}) => ({
    type:'REMOVE_EXPENSE',
    id
  });
	//EDIT_EXPENSE
  const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
	//SET_TEXT_FILTER
  const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
  });
	//SORT_BY_DATE
	//SORT_BY_AMOUNT
	//SET_START_DATE
	//SET_END_DATE
//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState , action) => {
	switch(action.type){
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expenses
			];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        } else{
        return expense;
      };
    });
		default:
			return state;
		}
	};
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState , action) => {
	switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
		default:
			return state;
	}
};

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	console.log(store.getState());
});
const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 300 }));
store.dispatch(removeExpense({ id: expense1.expenses.id }));
store.dispatch(editExpense(expense2.expenses.id, { amount: 500 }));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(setTextFilter('sortBy'));





// const demoState = {
// 	expenses: [{
// 		id: '42342342' ,
// 		description: 'Jan rent',
// 		note: 'this was the final payment for that address',
// 		amount: 54500,
// 		createdAt: 0
// 	}],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amount', //date or amount
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// };
