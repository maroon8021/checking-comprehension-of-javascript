<template>
  <div class="content box">
    <section class="section">
      <div class="container">
        <h3>Question : {{ content.id }}</h3>
        <pre class="prettyprint custom">{{ content.code }}</pre>
        <pre v-if="content.codeAnother" class="prettyprint custom">{{ content.codeAnother }}</pre>
        <div v-for="questionItem in content.questionItems" :key="questionItem.questionId">
          <h4>{{ questionItem.questionText }}</h4>
          <div class="select">
            <select>
              <option v-for="answerItem in questionItem.answerItems" :key="answerItem.answerId" value="answerItem.answerId">{{answerItem.answerText}}</option>
            </select>
          </div>
        </div>
        <div class="message is-info" v-if="detail">
          <div class="message-body">{{ detail }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Content extends Vue {
  @Prop()
  private content!: Object;
  @Prop()
  private detail!: String;
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

.box {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

.select {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
}

.select select:not([multiple]) {
  padding-right: 2.5em;
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

.select select {
  background-color: #fff;
  border-color: #dbdbdb;
  color: #363636;
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: 0;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: center;
  transform-origin: center;
  width: 0.625em;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #3273dc;
  right: 1.125em;
  z-index: 4;
}

.select.is-danger select{
  border-color: #ff3860;
}

.select.is-danger:not(:hover)::after{
  border-color: #ff3860;
}

.select.is-success select{
  border-color: #23d160;
}

.select.is-success:not(:hover)::after{
  border-color: #23d160;
}

.message.is-info{
  background-color: #f6fbfe;
}

.message-body{
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 1.25em 1.5em;
}
.message.is-info .message-body{
  border-color: #209cee;
  color: #12537e;
}

</style>
