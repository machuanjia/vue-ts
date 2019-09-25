<template>
    <div class="about">
        <h1>This is an about regist</h1>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Regist extends Vue {
    @Prop() private msg!: string;
}
</script>
