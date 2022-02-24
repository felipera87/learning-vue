import Vue from 'vue';

// this new vue instance will act as a bus, which can be imported by any component
// so some component can emit an event and another component, not necessarily directly related, can listen to it
export default new Vue({
    // this is a way to encapsulate the event emitting/listening, this way just the bus need to know the event name
    methods: {
        changeNick(nick) {
            this.$emit('changeNick', nick);
        },
        onChangeNick(callback) {
            this.$on('changeNick', callback);
        }
    }
})