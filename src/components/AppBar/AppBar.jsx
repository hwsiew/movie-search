import classNames from "classnames";
import Paper from "../Paper";

export default function AppBar (props) {

	const {
		className,
		children,
		style,
		...others
	} = props;

	let rootCls = classNames('default-appBar', className);

	return (
		<Paper className={rootCls} style={style} {...others}>
			{children}
		</Paper>
	);

}