import Paper from '../Paper';
import classNames from "classnames";
import './Card.css';

export default function Card (props) {

	const {
		className,
		style,
		title,
		subtitle,
		image,
		children
	} = props;

	let rootCls = classNames('default-card', className);

	return (
		<Paper elevation={2} className={rootCls} style={style}>

			{image && 
				<div className="relative">
					<div className="img-holder" style={{width:150}}>
						<img 
							onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}}
							className="w-40 min-w-full max-w-full h-full rounded-tl-md rounded-bl-md" 
							alt={title}
							src={image} 
						/>
					</div>
				</div>
			}
			
			<div className="flex flex-col p-2 items-start flex-grow">
				<h2 className="text-heading font-bold text-primary max-h-20 overflow-ellipsis overflow-hidden">{title}</h2>
				<div className="flex-grow text-gray-400">{subtitle}</div>
				<div>{children}</div>
			</div>

		</Paper>
	);
}