import classNames from "classnames";
import PropTypes from 'prop-types';

function Pagination (props) {

	const {
		total,				// total number of pages 
		active = 1,		// current active page
		display = 5, 	// how many pages to display in a row
		onClick,			// callback upon click on page
		style,
		className
	} = props;

	let rootCls = classNames('default-pagination', className);

	let pages = new Array(display).fill(0).map((p,i) => {
		return active+display > total ?  total-display+1 + i : active + i ;
	});

	return (
		<div className={rootCls} style={style}>
			{
				pages.map((page,index) => (
					<button 
						key={index}
						className={classNames("bg-white mx-2 p-2", {'bg-primary text-white': page===active})} 			
						onClick={(e) => onClick && onClick(e, page)}		
					>{page}</button>
				))
			}
		</div>
	);

}

Pagination.propTypes = {
	total: PropTypes.number.isRequired,
	active: PropTypes.number,
	display: PropTypes.number,
	onClick: PropTypes.func
}

export default Pagination;