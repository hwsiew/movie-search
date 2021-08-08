import {render, fireEvent} from '@testing-library/react';
import SearchBar from '.';

it('should render a SearchBar', function(){
	const { container } = render(<SearchBar />);
	const root = container.firstChild;
	expect(root.className.split(' ').sort()).toEqual(['default-paper',"default-searchBar",'shadow-sm'].sort());
});

it('should trigger callback on click', function() {
	const handleSearch = jest.fn();
	const { queryByTitle } = render(<SearchBar onSearch={handleSearch} />);
	const btn = queryByTitle('search-btn');
	const input = queryByTitle('search-input');
	fireEvent.change(input, {target: {value: 'fast and furious'}});
	fireEvent.click(btn);
	expect(handleSearch).toHaveBeenCalled();
})