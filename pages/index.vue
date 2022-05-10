<template>
  <Layout :data="page.fields" />
</template>

<script>
import { getPage } from '@/plugins/contentful.js'
import { Metas } from '@/utils/seo.js'

export default {
  head () {
    return Metas(this.page.fields)
  },

  async asyncData ({ redirect }) {
    return await getPage('index', redirect)
  }
}
</script>
