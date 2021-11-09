Vue.component('mycomp', {
    props: ['name','x','title'],
    data() {
        return {
            name: 'Ivan',
            age: 25
        }
    },
    template: `<div>
                    <h1>Добрый день, {{ name }}, {{ $data.name }}!!!</h1>
                    <h2>Параметры, которые поступили из верстки: x = {{ x }}; title = {{ title }}</h2>
                    <hr>
               </div>`
});