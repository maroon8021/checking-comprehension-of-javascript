<template>
  <div class="questions page-container">
    <Header msg="Javascript 理解度チェックテスト Answer Page"></Header>
    <ResultTable :results="results" :score="score"></ResultTable>
    <Content v-for="question in questions" :key="question.id" :content="question" :detail="question.detail" :answerStr="question.answerStr" :isAnswerPage="true"></Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Content from '@/components/Content.vue';
import ResultTable from '@/components/ResultTable.vue';
// tslint:disable-next-line:no-var-requires
// import { prettyPrint } from '@types/code-prettify/index';


@Component({
  components: {
    Header,
    Content,
    ResultTable,
  },
})
export default class Answer extends Vue {
  private questions: any[] = this.$store.getters.getQuestions();

  private results: any = this.getResult();

  private score: any = this.getScore();


  public beforeCreate(): void {
    const rawAnswers = JSON.parse(this.$route.query.answers.toString());
    rawAnswers.forEach((answers: any) => {
      answers.forEach((answer: any) => {
        this.$store.commit('setUserAnswer', answer);
      }, this);
    }, this);
  }

  public mounted(): void {
    // prettyPrint();
    // document.write('<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst" ><\/script>')
  }

  private getResult(): any {
    const result: any[] = [];
    const questions = this.$store.getters.getQuestions();
    questions.forEach((question: any) => {
      question.questionItems.forEach((eachItem: any) => {
        result.push({
          questionId : eachItem.questionId,
          answer : eachItem.answer === eachItem.userAnswer,
        });
      });
    });
    return result;
  }

  private getScore(): any {
    const score: object = {};
    let correctNumber: number = 0;
    let totalNumber: number = 0;
    const questions = this.$store.getters.getQuestions();
    questions.forEach((question: any) => {
      question.questionItems.forEach((eachItem: any) => {
        if (eachItem.answer === eachItem.userAnswer) {
          correctNumber++;
        }
        totalNumber++;
      });
    });
    return {
      correct : correctNumber,
      total : totalNumber,
    };
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

</style>