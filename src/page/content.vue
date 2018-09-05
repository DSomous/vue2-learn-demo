<template>
  <div>
    <Header></Header>
    <h2 v-text="data.title"></h2>
    <p>作者：{{data.author.loginname}}, 发表于：{{$utils.formatTime({time: data.create_at, format: 'YYYY-MM-DD h:mm A'})}} </p>
    <hr>
    <article v-html="data.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in data.replies.slice(0, 30) " :key="i.id">
        <p>评论者：{{i.author.loginname}}, 评论于：{{$utils.formatTime({time: i.create_at, format: 'YYYY-MM-DD h:mm A'})}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
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
      id: this.$route.params.id,
      data: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, res => {
        console.log(res.data)
        this.data = res.data
      })
    }
  }
}
</script>
