const React = require("react");


function squares(props){



return (
	//<div className='square' onClick={props.draw}> {props.items} 
	<div className='square' onClick={props.draw.bind(props,props.id)}>{props.items}</div>
	);
 }


module.exports = squares;