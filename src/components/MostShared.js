import React from 'react'
import '../css/MostShared.css'
import HeadlineFull from './HeadlineFull.js'
import Loading from './Loading.js'

class MostShared extends React.Component {

    render() {
        return(
            <div className="mostsh">
            	<Loading visible={this.props.loading}/>
            	{this.props.news.map(piece => <HeadlineFull piece={piece} key={piece.id}/> )}
            </div>
        )
    }
}

export default MostShared

