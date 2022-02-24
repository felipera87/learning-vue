<template>
  <div class="counter">
    <span>{{ counter }}</span>
    <button type="button" @click="counter++">+</button>
    <button type="button" @click="counter--">-</button>
  </div>
</template>

<script>
export default {
    name: 'counter-component',
    data() {
      return {
        counter: 0
      }
    }
}
</script>

// scoped isolates this css to this component, and not the entire application
// this can propagate to a direct child, but not any further
// ex: parent style a div, and the direct child IS a div, so this child will get this style
<style scoped>
  .counter span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
  }

  .counter button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
  }
</style>
