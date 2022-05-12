const fetch = require('node-fetch').default

const API_ENDPOINT =
  'https://pnkfrg.us8.list-manage.com/subscribe/post?u=ab2795ef0867c42fc42e1420d&amp;id=6fd247e051&c=ng_jsonp_callback_0&EMAIL=asdasd.debray@me.fr'

const opts = {
  method: 'GET',
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT, opts)
    console.log('response', response)
    return { statusCode: 200, body: 'response' }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
}
