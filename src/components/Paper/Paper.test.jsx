import {render} from '@testing-library/react';
import Paper from '.';

it('should render paper component', function() {
	const {container} = render(<Paper />);
	const root = container.firstChild;
	expect(root.tagName).toEqual('DIV');
	expect(root.className.split(' ').sort()).toEqual(['default-paper', 'shadow-sm'].sort());
});



