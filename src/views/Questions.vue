<template>
  <div class="questions page-container">
    <Header msg="Javascript 理解度チェックテスト"></Header>
    <Content v-for="question in questions" :key="question.id" :content="question"></Content>
    <div class="button-area">
      <a class="button is-link" @click="onClick">Go to Answer Page</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Content from '@/components/Content.vue'; 

@Component({
  components: {
    Header,
    Content
  },
})
export default class Questions extends Vue {
  private questions: Array<any> = this.$store.getters.getQuestions();

  private onClick(): void {
    this.$router.push({
      name:'answer',
      query: {
        test: 'tes,t'
      }
    })
  }
  
  // private questions(): Array<any> {
  //   console.log(this.$store)
  //   return this.$store.getters.getQuestions();
  // }
  
}
</script>

<style scoped>
.page-container{
  margin: auto 15%; 
}

.button-area{
  text-align: center;
}

.button-area .button{
  margin-bottom: 24px;
}

</style>