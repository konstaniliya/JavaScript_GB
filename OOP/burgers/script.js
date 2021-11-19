    class Burger{
        constructor(size, filling, options, callories, price){
            this.size = size;
            this.filling = filling;
            this.options = options;
            this.price = price;
            this.callories = callories;
        }
    }
    class Factory{
        createBurger(size, filling, options){
            let burgerPrice = 0;
            let callories = 0;
            switch (size){
                case 0:
                    burgerPrice += 50;
                    callories += 20;
                    break;
                case 1:
                    burgerPrice += 100;
                    callories += 40;
                    break;
            }
            switch (filling){
                case "cheese":
                    burgerPrice += 10;
                    callories += 20;
                    break;
                case "salad":
                    burgerPrice += 20;
                    callories += 5;
                    break;
                case "potato":
                    burgerPrice += 15;
                    callories += 10;
                    break;
            }
            switch (options){
                case "flavoring":
                    burgerPrice += 15;
                    break;
                case "mayonnaise":
                    burgerPrice += 20;
                    callories += 5;
                    break;
            }
            let burger = new Burger(size, filling, options, callories, burgerPrice);
            return burger;
        }
    }
    class Order{
        constructor(size, filling, options){
            this.overallPrice = 0;
            this.overallCallories = 0;
            this.createOrder(size, filling, options);
            this.show();
        }
        createOrder(size, filling, options){
            let factory = new Factory();
            this.overallPrice = factory.createBurger(size, filling, options).price;
            this.overallCallories = factory.createBurger(size, filling, options).callories;

        }
        show(){
            console.log(`Price is ${this.overallPrice}`);
            console.log(`Callories is ${this.overallCallories}`);
        }
    }
    let order = new Order(0,"salad","flavoring");