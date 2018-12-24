<template>
  <div class="content box">
    <section class="section">
      <div class="container">
        <p>{{ content.id }}</p>
        <p>{{ content.questionText }}</p>
        <pre class="prettyprint custom">{{ content.code }}</pre>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @Prop() 
  private content!: Object;
}
</script>


<style scoped>
.content{
  margin: 5% 5%;
}

pre.prettyprint.custom{
  font-family: arial, sans-serif;
  font-size: 14px;
}

.box{
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}
</style>
