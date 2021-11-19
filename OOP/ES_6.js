class Person {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    static compareAge(m1, m2) {
        if (m1.year > m2.year) {
            console.log(`${m1.name} младше пользователя ${m2.name} на ${m1.year - m2.year}`)
        }
        else {
            console.log(`${m2.name} младше пользователя ${m1.name} на ${m2.year - m1.year}`)
        }
    }
    info() {
        return `Пользователь ${this.name} родился в ${this.year} году`
    }
}

class Teacher extends Person {
    constructor(name, year, subject) {
        super(name, year);
        this.subject = subject;
    }
    info() {
        console.log(`${super.info()}, он преподает предмет ${this.subject}`)
    }
}
let t = new Teacher("Иван", 1980, 'Программирование');
t.info();
console.log(t.getAge());








// let man1 = new Person("Ivan", 1907);
// let man2 = new Person("Petr", 1997);
// Person.compareAge(man1, man2);
// console.log(man1.getAge());
// console.log(man1.info())