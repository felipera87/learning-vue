<template>
    <div class="component">
        <h2>Update user data</h2>
        <p>Update the information</p>
        <button @click="changeSiblingAge(100)">change sibling age</button>
        <button @click="changeSiblingNick('Another nick')">change sibling nick</button>
    </div>
</template>

<script>
import bus from '@/bus';

export default {
    methods: {
        changeSiblingAge(age) {
            bus.$emit('changeAge', age);
        },
        changeSiblingNick(newNick) {
            bus.changeNick(newNick);
        }
    }
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
