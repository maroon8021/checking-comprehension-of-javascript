<template>
  <div class="content box">
    <section class="section">
      <div>
        <h3>Question : {{ content.id }}</h3>
        <pre class="prettyprint custom">{{ content.code }}</pre>
        <pre v-if="content.codeAnother" class="prettyprint custom">{{ content.codeAnother }}</pre>
        <div v-for="questionItem in content.questionItems" :key="questionItem.questionId">
          <h5>{{ questionItem.questionId }} : {{ questionItem.questionText }}</h5>
          <QuestionSelect :questionItem="questionItem" ></QuestionSelect>
        </div>
        <div class="message is-primary" v-if="answerStr">
          <div class="message-body" v-html="answerStr"></div>
        </div>
        <div class="message is-info" v-if="detail">
          <div class="message-body" v-html="detail"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import QuestionSelect from '@/components/QuestionSelect.vue'; 

@Component({
  components: {
    QuestionSelect
  },
})
export default class Content extends Vue {
  
  @Prop()
  private content!: Object;
  @Prop()
  private detail!: String;
  @Prop()
  private answerStr!: String;

}
</script>


<style scoped>
.content {
  margin: 5% 5%;
}

pre.prettyprint.custom {
  font-family: arial, sans-serif;
  font-size: 14px;
  margin-bottom: 24px;
  width: 100%;
  margin: 0;
  margin-bottom: 16px;
}

pre.prettyprint.custom span{
  padding-top: 8px;
  padding-bottom: 8px;
}

h3 {
  margin-top: 0;
}

h4 {
  margin-bottom: 8px;
}

.select{
  margin-bottom: 16px;
}

.section{
  padding: 1.5rem;
}

</style>
