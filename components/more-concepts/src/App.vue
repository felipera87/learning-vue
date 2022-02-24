// this is how you dynamically render a component
// keep-alive is used to avoid destroying the component when another one is rendered, 
// if just component is there everytime it changes it destroys the previous component
// to keep track of keep-alive components life-cycle, there is activated and deactivated methods
<template>
	<div id="app">
		<span>
			<button type="button" @click="currentComponent = 'Quotes'">Quotes</button>
			<button type="button" @click="currentComponent = 'About'">About</button>
		</span>
		<keep-alive>
			<component :is="currentComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
import Quotes from './components/Quotes'
import About from './components/About'

export default {
	components: { Quotes, About },
	data() {
		return {
			currentComponent: 'Quotes',
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>