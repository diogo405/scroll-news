import React from 'react'
import '../css/Loading.css'

class Loading extends React.Component {
	render() {
		return (
			<div className={this.props.visible ? 'loading loading--active' : 'loading'}>
				<div className="loading__piece">
					<div className="loading__image"></div>
					<div className="loading__line"></div>
					<div className="loading__line"></div>
					<div className="loading__line"></div>
				</div>
				<div className="loading__piece">
					<div className="loading__image"></div>
					<div className="loading__line"></div>
					<div className="loading__line"></div>
					<div className="loading__line"></div>
				</div>
				<div className="loading__piece">
					<div className="loading__image"></div>
					<div className="loading__line"></div>
					<div className="loading__line"></div>
					<div className="loading__line"></div>
				</div>
			</div>
		)
	}
}

export default Loading
