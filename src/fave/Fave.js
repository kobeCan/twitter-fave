import React from 'react';
import './fave.scss';

class Fave extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isFave: false
		}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick () {
		this.setState(state => ({
			isFave: !state.isFave
		}))
	}
	render () {
		const {size} = this.props;
		const style = {
			width: size,
			height: size
		}
		
		const cls = this.state.isFave ? 'fave-rank' : '';

		return <div className="fave-heart" onClick={this.handleClick} style={style}>
			<div className={`fave-toggle ${cls}`} ></div>
		</div>
	}
}

export default Fave