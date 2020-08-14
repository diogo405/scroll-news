import React from 'react'
import '../css/TopBar.css'

class TopBar extends React.Component {

	constructor() {
		super()
		this.state = {time: new Date()}
	}

	componentDidMount() {
		this.timer = setInterval(() => this.setState({time: new Date()}), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	render() {
		return (
			<div className="tb">
				<div className="tb__time">
					<img className="tb__time-logo" src={require('../images/streamline-icon-time-clock-midnight@20x20.png')} alt="Clock"/>
					<span className="tb__time-text">{this.state.time.toLocaleTimeString()}</span>
				</div>
				<h1 className="tb__logo">
					SC
				</h1>
				<div className="tb__user">
				</div>
			</div>
		)
	}
}

export default TopBar