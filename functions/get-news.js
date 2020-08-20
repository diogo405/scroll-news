const axios = require('axios')
const Piece = require('./Piece.js')

const getNews = async (type, period = 7) => {
	const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2'
	const {data: response} = await axios.get(`${baseUrl}/${type}/${period}.json?api-key=${process.env.API_KEY}`)
	return response.results.map(nytPiece => Piece.createPiece(nytPiece)).filter(p => p !== null)
}

exports.handler = async (event, context) => {
    try {
        const type = event.queryStringParameters.type
        return { 
            statusCode: 200, 
            body: JSON.stringify({success: true, news: await getNews(type)})
        }
    } catch (e) {
        console.error(e)
        return { 
            statusCode: 500, 
            body: JSON.stringify({success: false, error: 'Internal error'})
        }
    }
}
