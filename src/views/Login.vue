<template>
    <div class="about">
        <h1>This is an about login</h1>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    @Prop() private msg!: string;
}
</script>
