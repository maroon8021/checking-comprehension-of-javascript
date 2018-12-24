<template>
  <div class="questions page-container">
    <Header msg="Test page for checking your js skill"></Header>
    <Content v-for="question in questions" :key="question.id" :content="question"></Content>
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

</style>