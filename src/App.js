import axios from 'axios'
import React from 'react'
import './css/App.css'
import TopBar from './components/TopBar.js'
import MostShared from './components/MostShared.js'
import MostViewed from './components/MostViewed.js'
import MostEmailed from './components/MostEmailed.js'

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
        let mostEmailed = JSON.parse(sessionStorage.getItem('mostEmailed'))
        if (!mostEmailed) {
            console.log('Most emailed is not cached')
            axios.get(`${process.env.REACT_APP_API_URL}/get-news?type=emailed`)
                .then(({data}) => {
                    console.log('Most emailed fetched')
                    sessionStorage.setItem('mostEmailed', JSON.stringify(data.news))
                    this.setState({mostEmailed: data.news, mostEmailedLoading: false})
                })
        } else {
            console.log('Most emailed from cache')
            this.setState({mostEmailed: mostEmailed, mostEmailedLoading: false})
        }
    }

    loadMostViewed() {
        this.setState({mostViewedLoading: true})
        let mostViewed = JSON.parse(sessionStorage.getItem('mostViewed'))
        if (!mostViewed) {
            console.log('Most viewed is not cached')
            axios.get(`${process.env.REACT_APP_API_URL}/get-news?type=viewed`)
                .then(({data}) => {
                    console.log('Most viewed fetched')
                    sessionStorage.setItem('mostViewed', JSON.stringify(data.news))
                    this.setState({mostViewed: data.news, mostViewedLoading: false})
                })
        } else {
            console.log('Most viewed from cache')
            this.setState({mostViewed: mostViewed, mostViewedLoading: false})
        }
    }

    loadMostShared() {
        this.setState({mostSharedLoading: true})
        let mostShared = JSON.parse(sessionStorage.getItem('mostShared'))
        if (!mostShared) {
            console.log('Most shared is not cached')
            axios.get(`${process.env.REACT_APP_API_URL}/get-news?type=shared`)
                .then(({data}) => {
                    console.log('Most shared fetched')
                    sessionStorage.setItem('mostShared', JSON.stringify(data.news))
                    this.setState({mostShared: data.news, mostSharedLoading: false})
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
