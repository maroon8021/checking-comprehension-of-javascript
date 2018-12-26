<template>
  <div class="select" :class="answerStatus">
    <select v-model="answer" :disabled="readOnly">
      <option v-for="answerItem in questionItem.answerItems" :key="answerItem.answerId" :value="answerItem.answerId">{{answerItem.answerText}}</option>
    </select>
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
export default class QuestionSelect extends Vue {
  
  @Prop()
  private questionItem!: questionItem;

  @Prop()
  private isAnswerPage!: boolean;

  private answerValue: Number = -1;

  private get answer() :Number{
    if(this.answerValue === -1){
      this.answerValue = this.questionItem.userAnswer || 1;
    }
    return this.answerValue;
  }

  private set answer(value) {
    this.answerValue = value;
  }

  private get readOnly() :boolean {
    return this.isAnswerPage
  }
  

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

  public getValue() :Object {
    return {
      userAnswer : this.answer
    }
  }
}
</script>


<style scoped>


</style>
