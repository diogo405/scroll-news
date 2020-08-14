import React from 'react'
import '../css/MostEmailed.css'
import BlackHeadline from './BlackHeadline.js'
import Loading from './Loading.js'

class MostEmailed extends React.Component {
	render() {
		return (
			<div className="moste">
				<Loading visible={this.props.loading}/>
				{this.props.news.map(piece => <BlackHeadline piece={piece} key={piece.id}/>)}
			</div>
		)
	}
}

export default MostEmailed
