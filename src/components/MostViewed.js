import React from 'react'
import '../css/MostViewed.css'
import SmallPiece from './SmallPiece.js'
import Loading from './Loading.js'

class MostViewed extends React.Component {

    render() {
        return(
            <div className="mostview">
            	<Loading visible={this.props.loading}/>
            	{this.props.news.map(piece => <SmallPiece piece={piece} key={piece.id}/> )}
            </div>
        )
    }
}

export default MostViewed

