//Task 1 

class Restaurant {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    showMsg() {
        return `The ${this.name} restaurant with ${this.type} cuisine `;
    }

    workingHours() {
        let hours = new Date();
        let work = hours.getHours();
        if (work > 9 && work < 23) {
            return this.name + " is opened";
        } else return this.name + " is closed";
    }

    serve() {
        let client = 1;
        return "Now in restaurant " + client++;
    }
    setServed(banket) {
        return "Banket for " + parseInt(banket) + " person";
    }

    showTotalClient() {
        return "Total served - 21";
    }
}

const salkyn = new Restaurant("Salkyn Tor", "national");

console.log(salkyn.showMsg());
console.log(salkyn.workingHours(5));
console.log(salkyn.serve());
console.log(salkyn.setServed(20));
console.log(salkyn.showTotalClient());

document.write(salkyn.showMsg());
document.write("<br>")
document.write(salkyn.workingHours(5));
document.write("<br>")
document.write(salkyn.serve());
document.write("<br>")
document.write(salkyn.setServed(20));
document.write("<br>")
document.write(salkyn.showTotalClient());
document.write("<br>")
document.write("<hr>")



//Task 2
class Cars {
    constructor(model, year, power, color) {
        this.model = model;
        this.year = year;
        this.power = power;
        this.color = color;
    }

    showDescr(){
        return `Эта машина - ${this.model} , ${this.year} года выпуска, с мошностью ${this.power} , ${this.color}`
    }
}


class ElectroCars extends Cars {
    constructor(model, year, power, color, volume){
        super(model, year, power, color);
        this.volume = volume;
    }
    promote(){
        return this.showDescr() + ` Купи эту крутую машину с объемом ${this.volume}`;
    }
}

const audi = new ElectroCars("Audi", "2002", "1000", "grey", "2.3");
console.log(audi);
console.log(audi.showDescr());
console.log(audi.promote());


document.write("<br>")
document.write(audi.showDescr());
document.write("<br>")
document.write(audi.promote());