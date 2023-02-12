class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isConnected = false;
    }

    connect() {
        console.log(this.name + ": прибор включен!");
        this.isConnected = true;
    }

    disconnect() {
        console.log(this.name + ": прибор выключен!");
        this.isConnected = false;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, brand, power, lampType) {
        super(name, power);
        this.brand = brand;
        this.lampType = lampType;
        this.isConnected = false;
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isConnected = false;
    }
}

function getSumPower(appliances) {
    let sumPower = 0;
    for (let i = 0; i < appliances.length; i++) {
        if (appliances[i].isConnected) {
            sumPower += appliances[i].power;
        }
    }
    return sumPower;
}

const tableLamp = new Lamp("Настольная лампа", "Навигатор", 35, "Галогенная лампа");

const homeTablePC = new Computer("Компьютер", "HP", 150, "Стационарный", "Для работы");

const homeLaptop = new Computer("Ноутбук", "Lenovo", 90, "Переносной", "Для учебы")

tableLamp.connect();
homeTablePC.connect();
homeLaptop.connect();
homeLaptop.disconnect();

let appliances = [tableLamp, homeTablePC, homeLaptop];

console.log("Суммарная мощность включенных приборов составляет " + getSumPower(appliances) + "Вт");