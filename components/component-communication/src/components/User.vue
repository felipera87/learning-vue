<template>
    <div class="container">
        <h1>User Component</h1>
        <p>This is the parent component</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="changeName('Eliria')">Change name</button>
        <hr>
        <div class="components">
            <app-user-info 
                staticProp="this is a static prop"
                :name="name"
                @nameChanged="name = $event.newName"
                :changeNameUsingCallback="changeNameToSomething"
            />
            <app-user-update />
        </div>
    </div>
</template>

<script>
import AppUserInfo from './UserInfo'
import AppUserUpdate from './UserUpdate'

export default {
    components: { AppUserInfo, AppUserUpdate },
    data() {
        return {
            name: 'Felipe',
            age: 34,
        };
    },
    methods: {
        changeName(newName) {
            this.name = newName;
        },
        // this is a way to update data from child to parent using callbacks
        changeNameToSomething() {
            this.name = 'Something';
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .components {
        display: flex;
    }

    .components > * {
        margin: 10px;
    }
</style>
