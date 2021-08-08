import classNames from 'classnames';

function Paper (props) {

	const {
		className,
		children,
		style,
		elevation = 1,	// shadow level of paper, value = [0,5]
	} = props;

	let rootCls = classNames('default-paper', className, {
		'shadow-none': elevation === 0,
		'shadow-sm': elevation === 1,
		'shadow-md': elevation === 2, 
		'shadow-lg': elevation === 3, 
		'shadow-xl': elevation === 4, 
		'shadow-2xl': elevation === 5, 
	});

	return (
		<div className={rootCls} style={style}>
			{children}
		</div>
	);

}

Paper.propTypes = {
	elevation: function(props, propName, componentName){
		let value = props[propName];
		// check props is provided and value is between [0, 5]
		if ( value && (!Number.isInteger(value) || value < 0 || value > 5) ){
			return new Error('Invalid prop `' + propName + '` supplied to' +
			' `' + componentName + '`. Value must be >= 0 and <= 5 ')
		}
	}
}

export default Paper;