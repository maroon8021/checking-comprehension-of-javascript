<template>
  <div>
    <table class="table result-table" align="center">
      <thead>
        <tr>
          <th v-for="result in results" :key="result.questionId">{{result.questionId}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="result in results" :key="result.questionId">
            <span v-if="result.answer" class="icon has-text-success">
              <i class="fas fa-check"></i>
            </span>
            <span v-else class="icon has-text-danger">
              <i class="fas fa-times"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="result-score">
      <span class="score">{{score.correct}}</span>
      <span> / </span>
      <span>{{score.total}}</span>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface questionItem{
  userAnswer: Number,
  answer: Number,
  questionId: Number
}


@Component
export default class ResultTable extends Vue {
  
  @Prop()
  private results!: any;

  @Prop()
  private score!: any;

}
</script>


<style scoped>
.result-table{
  margin-top: 24px;
  margin-bottom: 16px;
}
.result-score{
  margin-top: 8px;
  text-align: center;
  font-family: cursive;
  font-size: 30px;
}
.score{
  font-size: 40px;
}

</style>
