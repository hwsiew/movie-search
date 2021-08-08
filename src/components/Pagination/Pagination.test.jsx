import { render, fireEvent } from '@testing-library/react';
import Pagination from '.';

it('should render default Pagination', function(){
	const {container, getAllByText} = render(<Pagination total={10} />);
	const root = container.firstChild;
	const btns = getAllByText(/\d/i);
	expect(btns.length).toBe(5); // default to display 5 buttons at once
	expect(btns[0].innerHTML).toEqual(`1`); // default first button is 1
});

it('should render custom Pagination', function(){
	let numberToDisplay = 7; 
	let activePage = 3;
	const {container, getAllByText} = render(<Pagination total={10} display={numberToDisplay} active={activePage} />);
	const root = container.firstChild;
	const btns = getAllByText(/\d/i);
	// total number of buttons to display should be equal to prop 'display'
	expect(btns.length).toBe(numberToDisplay);
	// first button should be the one that is currently active
	expect(btns[0].innerHTML).toEqual(`${activePage}`);
});