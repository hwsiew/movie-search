import classNames from "classnames";
import 'boxicons';
import { useState } from "react";
import Paper from '../Paper';
import PropTypes from 'prop-types';

function SearchBar (props) {

	let [ focus, setFocus ] = useState(false);
	let [ query, setQuery ] = useState('');

	const {
		className,
		style,
		onSearch,
		placeholder = 'search',
		...paperOthers
	} = props;

	let rootCls = classNames( 'default-searchBar', className, {
		'border-primary': focus,
	});

	const handleChange = function(event){
		setQuery(event.target.value);
	}

	const handleEnter = function(event){
		if(!query) return;
		if(event.key === 'Enter') {
			onSearch(event, event.target.value)
		}
	}

	const handleSearch = function(event){
		if(!query) return;
		onSearch(event, query);
	}

	return (
		<Paper className={rootCls} style={style} {...paperOthers}>
			<input className="focus:outline-none" type="text" 
				placeholder={placeholder}
				onFocus={() => setFocus(true)} 
				onBlur={() => setFocus(false)}
				onChange={handleChange}
				onKeyUp={handleEnter}
				value={query}
				title="search-input"
			/>
			<button className="flex items-center text-primary" onClick={handleSearch} title="search-btn">
				<box-icon color="#7faae4" name="search"></box-icon>
			</button>
		</Paper>
	);

}

SearchBar.propTypes = {
	onSearch: PropTypes.func,
	placeholder: PropTypes.string
};

export default SearchBar;