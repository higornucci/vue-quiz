<template>
    <div class="game">
        <div class="card w-75 text-center py-4 mx-auto">
            <question v-bind:question='question'></question>
            <answers v-bind:answers='object'></answers>
        </div>
    </div>
</template>
<script>
    import Question from './Question.vue'
    import Answers from './Answers.vue'
    export default{
        components: {
            question: Question,
            answers: Answers
        },
        data: function() {
            return {
                questions: this.$store.state.questions,
                question: '',
                object: {},
                result: {
                    corrects: 0,
                    incorrects: 0
                }
            }
        },
        methods: {
            getQuestion: function(answer) {
                this.object = this.questions.shift()
                this.question = this.object.question
            }
        },
        created() {
            this.getQuestion()
        }
    }
</script>
<style scoped>
</style>