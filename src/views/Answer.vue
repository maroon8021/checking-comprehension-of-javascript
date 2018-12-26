<template>
  <div class="questions page-container">
    <Header msg="Javascript 理解度チェックテスト Answer Page"></Header>
    <ResultTable results="results" score="score"></ResultTable>
    <Content v-for="question in questions" :key="question.id" :content="question" :detail="question.detail" :answerStr="question.answerStr" :isAnswerPage="true"></Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Content from '@/components/Content.vue'; 
import ResultTable from '@/components/ResultTable.vue'; 

@Component({
  components: {
    Header,
    Content
  },
})
export default class Answer extends Vue {
  private questions: Array<any> = this.$store.getters.getQuestions();

  private result:any = this.getResult();

  private score:any = this.getScore();

  getResult() :any {
    let result: Array<any> = []
    this.questions.forEach((question) => {
      question.questionItems.forEach((eachItem:any) => {
        result.push({
          questionId : eachItem.questionId,
          answer : eachItem.answer === eachItem.userAnswer
        })
      })
    })
    return result
  }

  getScore() :any {
    let score: Object = {}
    let correctNumber: number = 0;
    let totalNumber: number = 0;
    this.questions.forEach((question) => {
      question.questionItems.forEach((eachItem:any) => {
        if(eachItem.answer === eachItem.userAnswer){
          correctNumber++
        }
        totalNumber++
      })
    })
    return {
      correct : correctNumber,
      total : totalNumber
    }
  }


  beforeCreate(): void{
    let rawAnswers = JSON.parse(this.$route.query.answers)
    rawAnswers.forEach(answers => {
      answers.forEach(answer => {
        this.$store.commit('setUserAnswer', answer)
      },this)
    },this);
  }

  mounted(): void{
    document.write('<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst" ><\/script>')
  }
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