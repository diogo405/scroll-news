import axios from 'axios'
import React from 'react'
import './css/App.css'
import TopBar from './components/TopBar.js'
import MostShared from './components/MostShared.js'
import MostViewed from './components/MostViewed.js'
import MostEmailed from './components/MostEmailed.js'
import Piece from './components/Piece.js'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            mostShared: [], 
            mostSharedLoading: false,
            mostViewed: [], 
            mostViewedLoading: false,
            mostEmailed: [], 
            mostEmailedLoading: false
        }
    }

    componentDidMount() {
        this.loadMostEmailed()
        this.loadMostShared()
        this.loadMostViewed()
    }

    loadMostEmailed() {
        this.setState({mostEmailedLoading: true})
        let mostEmailed = JSON.parse(localStorage.getItem('mostEmailed'))
        if (!mostEmailed) {
            console.log('Most emailed is not cached')
            axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
                .then(({data: dataEmailed}) => {
                    console.log('Most emailed fetched')
                    mostEmailed = dataEmailed.results.map(n => Piece.createPiece(n)).filter(n => n !== null)
                    localStorage.setItem('mostEmailed', JSON.stringify(mostEmailed))
                    this.setState({mostEmailed: mostEmailed, mostEmailedLoading: false})
                })
        } else {
            console.log('Most emailed from cache')
            this.setState({mostEmailed: mostEmailed, mostEmailedLoading: false})
        }
    }

    loadMostViewed() {
        this.setState({mostViewedLoading: true})
        let mostViewed = JSON.parse(localStorage.getItem('mostViewed'))
        if (!mostViewed) {
            console.log('Most viewed is not cached')
            axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
                .then(({data: dataViewed}) => {
                    console.log('Most viewed fetched')
                    mostViewed = dataViewed.results.map(n => Piece.createPiece(n)).filter(n => n !== null)
                    localStorage.setItem('mostViewed', JSON.stringify(mostViewed))
                    this.setState({mostViewed: mostViewed, mostViewedLoading: false})
                })
        } else {
            console.log('Most viewed from cache')
            this.setState({mostViewed: mostViewed, mostViewedLoading: false})
        }
    }

    loadMostShared() {
        this.setState({mostSharedLoading: true})
        let mostShared = JSON.parse(localStorage.getItem('mostShared'))
        if (!mostShared) {
            console.log('Most shared is not cached')
            axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
                .then(({data: dataShared}) => {
                    console.log('Most shared fetched')
                    mostShared = dataShared.results.map(n => Piece.createPiece(n)).filter(n => n !== null)
                    localStorage.setItem('mostShared', JSON.stringify(mostShared))
                    this.setState({mostShared: mostShared, mostSharedLoading: false})
                })
        } else {
            console.log('Most shared from cache')
            this.setState({mostShared: mostShared, mostSharedLoading: false})
        }
    }

    render() {
        return(
            <div className="app">
                <TopBar/>
                <div className="app__news">
                    <MostShared news={this.state.mostShared} loading={this.state.mostSharedLoading}/>
                    <MostViewed news={this.state.mostViewed} loading={this.state.mostViewedLoading}/>
                    <MostEmailed news={this.state.mostEmailed} loading={this.state.mostEmailedLoading}/>
                </div>
            </div>
        )
    }
}

export default App
