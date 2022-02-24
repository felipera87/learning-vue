// h1 and p will be on the default slot, h6 will render on the named slot
<template>
    <div class="quotes">
        <span>
            <button @click="number--">&lt;</button>
            <button @click="number++">&gt;</button>
        </span>
        <Quote>
            <h1>{{ quotes[index].author }}</h1>
            <p>{{ quotes[index].text }}</p>
            <h6 slot="source">{{ quotes[index].source }}</h6>
        </Quote>
        {{ number }} {{ index }}
    </div>
</template>

<script>
import Quote from './Quote.vue';
export default {
    components: {
        Quote,
    },
    data() {
        return {
            number: 0,
            quotes: [{
                source: 'Jornal do Empreendedor',
                text: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                author: 'Margaret Mead'
            }, { 
                source: 'Frases de Mãe',
                text: 'Isso não é um quarto, é um chiqueiro.',
                author: 'Roberta'
            }, {
                source: 'Frases de Pai',
                text: 'Vou contar até 3! 1, 2, 2...',
                author: 'Gustavo'
            }]
        }
    },
    computed: {
        index() {
            return Math.abs(this.number % 3)
        }
    },
    // these functions just work because of keep-alive tag
    activated() {
        // eslint-disable-next-line no-console
        console.log('Quotes activated');
    },
    deactivated() {
        // eslint-disable-next-line no-console
        console.log('Quotes deactivated');
    },
}
</script>

<style scoped>
    .quotes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
