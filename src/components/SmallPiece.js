import React from 'react'
import '../css/SmallPiece.css'

class SmallPiece extends React.Component {

    render() {
        return(
            <article className="smallp">
	        	<a href={this.props.piece.url} target="_blank" rel="noopener noreferrer">
            	<header className="smallp__header">
            		<div className="smallp__header-user"></div>
            		<span className="smallp__header-by">{this.props.piece.author}</span>
            	</header>
            	<img className="smallp__img" src={this.props.piece.image} alt={this.props.piece.title}/>
            	<h2 className="smallp__title">{this.props.piece.title}</h2>
            	<footer className="smallp__footer">
            		<div className="smallp__tags">
            			{this.props.piece.tags.map(t => <div className="smallp__tag" key={t}>{t}</div>)}
            		</div>
            		<div className="smallp__section">{this.props.piece.section}</div>
            	</footer>
	        	</a>
            </article>
        )
    }
}

export default SmallPiece

