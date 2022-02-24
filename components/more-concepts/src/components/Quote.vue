// slot is a way to render children
// elements in slot can be styled both on parent or child, parent has priority
// slot can be named or not. If not it'll assume the default slot
<template>
    <div class="quote">
        <slot></slot>
        <slot name="source"></slot>
    </div>
</template>

<script>
export default {
    props: ['text'],
    // they work on the children as well
    activated() {
        // eslint-disable-next-line no-console
        console.log('Quote activated');
    },
    deactivated() {
        // eslint-disable-next-line no-console
        console.log('Quote deactivated');
    },
}
</script>

<style scoped>
    .quote {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
