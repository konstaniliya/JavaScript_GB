Vue.component('mycomp', {
    data() {
        return {
            name: 'Ivan',
            age: 25
        }
    },
    template: `<div>
                    <h1>Добрый день, {{ name }}, {{ $parent.name }}!!!</h1>
                    <inner-comp :age="age"></inner-comp>
                    <button @click="$parent.test(age)">OK</button>
               </div>`
});
Vue.component('inner-comp',{
    props: ['age'],
    template: `<div>
                    <h1>Пользователю {{ $root.name }} {{ age }} лет
               </div>`
});
