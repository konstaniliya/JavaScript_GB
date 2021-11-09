const app = new Vue({
    el: "#app",
    data:{
        name: 'Ivan',
        name2: 'Anna'
    },
    methods:{
        test(x){
            alert(`Имя пользователя - ${this.name}, возраст ${x}`);
        }
    }
});