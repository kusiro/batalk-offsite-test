<template>
  <div class="question-list">
    <a v-bind:href="question.link" target="_blank" class="question-item" v-for="(question, idx) in questions" :key="idx">
      <h1 class="question-title">{{ question.title }}</h1>
      <div class="question-detail">
        <div class="detail score">
          <h3>Score</h3>
          <div class="red" v-if="question.score < 0">{{ question.score }}</div>
          <div v-else>{{ question.score }}</div>
        </div>
        <div class="detail answer-count">
          <h3>Answer</h3>
          <div class="accept" v-if="question.answer_count > 0 && question.is_answered">
            {{ question.answer_count }}
          </div>
          <div class="notaccept" v-else-if="question.answer_count > 0 && !question.is_answered">
            {{ question.answer_count }}
          </div>
          <div v-else>{{ question.answer_count }}</div>
        </div>
        <div class="detail view-count">
          <h3>View</h3>
          {{ question.view_count}}
        </div>
      </div>
      <div class="owner">
        <div class="owner-image">
          <img v-bind:src="question.owner.profile_image">
        </div>
        {{ question.owner.display_name}}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "QuestionList",
  computed: {
    questions(){
      return this.$store.getters.showAllQuestion;
    }
  },
}
</script>

<style lang="scss" scoped>
  .question-list {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    .question-item {
      width: 60%;
      border: solid 1px;
      padding: 1em;
      display: flex;
      flex-wrap: wrap;
      text-decoration: none;
      color: black;

      .question-title {
        font-size: 1em;
        margin: 0 0 1em 0;
        text-align: left;
        flex: 100%;
      }

      .question-detail {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1 1 auto;

        .detail {
          h3 {
            margin: 0 0 0.5em 0;
            font-size: 0.8em;
            color: #ee7575;
          }
        }
      }

      .owner {
        .owner-image {
          width: 70px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          flex: 1 1 auto;
          img {
            width: 100%;
          }
        }
      }
    }
    .red {
      color: red;
    }
    .accept {
      color: #f7f7f7;
      background-color: green;
      padding: 3px 0;
    }
    .notaccept {
      border: solid 1px red;
    }
  }
</style>