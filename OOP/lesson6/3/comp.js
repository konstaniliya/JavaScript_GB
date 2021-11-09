Vue.component('mycomp', {
    data() {
        return {
            name: 'Ivan',
            age: 25
        }
    },
    template: `<div>
                    <h1>Добрый день, {{ name }}!!!</h1>
                    <slot></slot>
               </div>`
});