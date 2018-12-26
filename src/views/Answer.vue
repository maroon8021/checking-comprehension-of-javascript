<template>
  <div class="questions page-container">
    <Header msg="Javascript 理解度チェックテスト Answer Page"></Header>
    <Content v-for="question in questions" :key="question.id" :content="question" :detail="question.detail" :answerStr="question.answerStr" :isAnswerPage="true"></Content>
    <!-- 
    <div class="button-area">
      <a class="button is-link">Go to Answer Page</a>
    </div>
    -->
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
export default class Answer extends Vue {
  private questions: Array<any> = this.$store.getters.getQuestions();
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

.button,.select select {
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
}

.button{
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(.375em - 1px);
  padding-left: .75em;
  padding-right: .75em;
  padding-top: calc(.375em - 1px);
  text-align: center;
  white-space: nowrap;
}

.button.is-link{
  background-color: #3273dc;
  border-color: transparent;
  color: #fff;
}
</style>