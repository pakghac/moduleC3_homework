function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isConnected = false;
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

ElectricalAppliance.prototype.connect = function() {
    console.log(this.name + ": прибор включен!");
    this.isConnected = true;
};

ElectricalAppliance.prototype.disconnect = function() {
    console.log(this.name + ": прибор выключен!");
    this.isConnected = false;
};

function Lamp(name, brand, power, lampType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.lampType = lampType;
    this.isConnected = false;
}

Lamp.prototype = new ElectricalAppliance();

function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isConnected = false;
}

Computer.prototype = new ElectricalAppliance();

const tableLamp = new Lamp("Настольная лампа", "Навигатор", 35, "Галогенная лампа");

const homeTablePC = new Computer("Компьютер", "HP", 150, "Стационарный", "Для работы");

const homeLaptop = new Computer("Ноутбук", "Lenovo", 90, "Переносной", "Для учебы")

tableLamp.connect();
homeTablePC.connect();
homeLaptop.connect();
homeLaptop.disconnect();

let appliances = [tableLamp, homeTablePC, homeLaptop];

console.log("Суммарная мощность включенных приборов составляет " + getSumPower(appliances) + "Вт");