import React from 'react'
import '../css/HeadlineFull.css'

class HeadlineFull extends React.Component {

    render() {
        return(
            <article className="headf">
                <a href={this.props.piece.url} target="_blank" rel="noopener noreferrer">
                        <div className="headf__image-cont">
                            <h2 className="headf__title">{this.props.piece.title}</h2>
                            <img className="headf__image" src={this.props.piece.image} alt={this.props.piece.title}/>
                        </div>
                        <footer className="headf__tags">
                            {this.props.piece.tags.map(t => <span className="headf__tag" key={this.props.piece.id}>{t}</span> )}
                        </footer>
                </a>
            </article>
        )
    }
}

export default HeadlineFull
