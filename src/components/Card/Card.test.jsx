import {render} from '@testing-library/react';
import Card from '.';

it('should render a Card', function(){
	const { container } = render(<Card />);
	const root = container.firstChild;
	expect(root.tagName).toEqual('DIV');
	expect(root.className.split(' ').sort()).toEqual(['default-paper',"default-card",'shadow-md'].sort());
});