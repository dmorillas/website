const fetch = require('node-fetch').default

const API_ENDPOINT =
  'https://pnkfrg.us8.list-manage.com/subscribe/post?u=ab2795ef0867c42fc42e1420d&amp;id=6fd247e051&EMAIL=yoyoyo@debray.studio'

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'post'
    })
    const data = await response.json()
    console.log('data', data)
    return { statusCode: 200, body: JSON.stringify({ data }) }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
}
