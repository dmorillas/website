const contentful = require('contentful')

const config = {
  space: process.env.SPACE,
  accessToken: process.env.DELIVERY
}

module.exports = {
  client () {
    return contentful.createClient(config)
  },

  async getPage (slug, redirect) {
    return contentful
      .createClient(config)
      .getEntries({
        content_type: 'page',
        'fields.slug': slug,
        include: '5'
      })
      .then(res => {
        if (!res.items[0]) {
          redirect('/404')
        }
        return { page: res.items[0], err: !res.items[0] }
      })
  },

  async getPages () {
    return contentful
      .createClient(config)
      .getEntries({
        content_type: 'page'
      })
      .then(res => {
        if (!res) {
          console.error('ERROR')
        }

        return res.items.map(page => page.fields.slug)
      })
  }
}
