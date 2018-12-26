<template>
  <div class="select" :class="answerStatus">
    <select v-model="questionItem.userAnswer">
      <option v-for="answerItem in questionItem.answerItems" :key="answerItem.answerId" :value="answerItem.answerId">{{answerItem.answerText}}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface questionItem{
  userAnswer: Number,
  answer: Number,
}

@Component
export default class QuestionSelect extends Vue {
  
  @Prop()
  private questionItem!: questionItem;

  @Prop()
  private isAnswerPage!: boolean;

  private get answerStatus() :String {
    if(!this.questionItem.userAnswer || !this.isAnswerPage){
      return ''
    }
    if(this.questionItem.userAnswer === this.questionItem.answer){
      return 'is-success'
    }else{
      return 'is-danger'
    }
  }
}
</script>


<style scoped>


</style>
