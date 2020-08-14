import React from 'react'
import '../css/BlackHeadline.css'

class BlackHeadline extends React.Component {
	render() {
		return (
			<article className="blackh">
				<a href={this.props.piece.url} target="_blank" rel="noopener noreferrer">
				<header className="blackh__header">
					<img className="blackh__header-img" src={this.props.piece.image} alt={this.props.piece.title}/>
					<h2 className="blackh__header-title">
						{this.props.piece.title}
					</h2>
				</header>
				<footer className="blackh__tags">
					{this.props.piece.tags.map(t => <span className="blackh__tag" key={t}>{t}</span>)}
				</footer>
				</a>
			</article>
		)
	}
}

export default BlackHeadline
