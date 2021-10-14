export const Metas = page => {
  return {
    title: page.title + ' • pnkfrg',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: page.title + ' • pnkfrg'
      },
      {
        hid: 'description',
        name: 'description',
        content: page.description
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: page.title + ' • pnkfrg'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: page.description
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: page.title + ' • pnkfrg'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: page.description
      }
    ]
  }
}
