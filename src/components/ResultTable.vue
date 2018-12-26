<template>
  <div>
    <table class="table">
      <thead>
        <tr v-for="result in results" :key="result.questionId">
          <th>{{result.questionId}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results" :key="result.questionId">
          <td v-if="result.answer">
            <span class="icon has-text-success">
              <i class="fas fa-check"></i>
            </span>
          </td>
          <td v-else>
            <span class="icon has-text-danger">
              <i class="fas fa-times"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
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


</style>
