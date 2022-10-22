abstract class AutoM {
    modelo: string;
    marca: string;
    velocidad: number;

    constructor(modelo: string, marca: string, velocidad: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    obtenerNombreVehiculo(): string {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    };

    abstract acelerar(): void;
}


class AutoCiudad extends AutoM {
    constructor(modelo: string, marca: string, velocidad: number) {
        super(modelo, marca, velocidad);
    }

    acelerar() {
        this.velocidad += 10;
    }
}

class AutoDeportivos extends AutoM {
    constructor(modelo: string, marca: string, velocidad: number) {
        super(modelo, marca, velocidad);
    }

    acelerar() {
        this.velocidad += 30;
    }
}


class Camioneta extends AutoM {
    constructor(modelo: string, marca: string, velocidad: number) {
        super(modelo, marca, velocidad);
    }

    acelerar() {
        this.velocidad += 20;
    }
}


const autoCiudad = new AutoCiudad('208', 'Peugeot', 10);
const autoDeportivo2 = new AutoDeportivos('Supra', 'Toyota', 10);
const camioneta = new Camioneta('Hilux', 'Toyota', 10);

console.log(autoCiudad.obtenerNombreVehiculo());
console.log(autoDeportivo2.obtenerNombreVehiculo());
console.log(camioneta.obtenerNombreVehiculo());