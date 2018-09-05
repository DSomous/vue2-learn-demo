<template>
  <div>
    <Header></Header>
    <div class="scss"></div>
    <div class="article_list">
      <ul>
        <li v-for="i in list.slice(0, 30)" :key="i.id">
          <time>Created at {{$utils.moment(i.create_at).fromNow()}}</time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  .scss {
    width: 300px;
    height: 170px;
    background-image: url('../../static/image/maomao.jpeg')
  }
</style>

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
