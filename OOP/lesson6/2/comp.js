Vue.component('mycomp', {
    data() {
        return {
            name: 'Ivan',
            age: 25
        }
    },
    template: `<div>
                    <h1>Привет, {{ name }}. Ваш возраст {{ age }} </h1>
                    <inner-comp></inner-comp><hr>
               </div>`
});

Vue.component('inner-comp', {
    data() {
        return {
            counter: 0
        }
    },
    template: `<div>
                <button @click='$parent.age++;increase(3)'>Push</button>
            </div>`,
    methods: {
        increase(step) {
            this.counter += step;
        }
    }

});