<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list" :key="i.id">
          <time v-text="i.create_at"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getTopics()
  },
  methods: {
    getTopics () {
      this.$api.get('topics', null, res => {
        this.list = res.data
        console.log(this.list)
      })
    }
  }
}
</script>
