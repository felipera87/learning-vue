<template>
    <div class="component">
        <h2>User information</h2>
        <p>Many details...</p>
        <p>Just some random prop: {{ staticProp }}</p>
        <p>Name: <strong>{{ name }}</strong></p>
        <p>Reversed name: <strong>{{ reverseName() }}</strong></p>
        <p>Age: {{ age }}</p>
        <p>Nick: {{ nick }}</p>
        <button type="button" @click="resetName">Reset Name</button>
        <button type="button" @click="changeNameUsingCallback">Change parent name using callback</button>
    </div>
</template>

<script>
// @ here will be the absolute path from src
import bus from '@/bus';

export default {
    // this is a simple way to declare props, no type validation
    // props: ['staticProp', 'name'],
    props: {
        staticProp: String, // this could validate many types (name: [String, Array])
        name: {
            type: String,
            // required: true,
            // default: 'Not informed',
            default: function() {
                // default can be a function
                return 'Not informed';
            }
        },
        changeNameUsingCallback: Function,
    },
    data() {
        return {
            age: 50,
            nick: 'blobby',
        }
    },
    methods: {
        reverseName() {
            // this is how you access props. The name will conflict with other things like data, methods, computed...
            // if this.name receives a value, only the value in child is changed and not on parent. It also breaks 
            // the data reflection, so this.name will not be updated again if the parent changes it
            return this.name.split('').reverse().join('');
        },
        resetName() {
            const oldName = this.name;
            this.name = 'Felipe';   // this line is not even necessary, newName could receive the string
            // this is a way to send data from child to parent, emit a custom event
            // second parameter is captured by $event on parent and can be anything (string, object...)
            this.$emit('nameChanged', {
                oldName,
                newName: this.name,
            });
        },
    },
    created() {
        // when this component is created start listening to this event, which is emitted by a sibling (no parent involved)
        bus.$on('changeAge', age => {
            this.age = age;
        });

        bus.onChangeNick((newNick) => {
            this.nick = newNick;
        })
    },
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
