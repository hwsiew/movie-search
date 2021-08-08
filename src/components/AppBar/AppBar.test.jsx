import {render} from '@testing-library/react';
import AppBar from '.';

it('should render AppBar', function(){
	const {container} = render(<AppBar />);
	const root = container.firstChild;
	expect(root.tagName).toEqual('DIV');
	expect(root.className.split(' ').sort()).toEqual(['default-paper',"default-appBar",'shadow-sm'].sort());
});

it('should render AppBar children', function(){
	const {container} = render(<AppBar>Hello World</AppBar>);
	const root = container.firstChild;
	expect(root.innerHTML).toEqual('Hello World');
});