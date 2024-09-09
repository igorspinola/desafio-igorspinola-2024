class Recinto {
    constructor(numero, bioma, tamanho, animais) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanho = tamanho;
        this.animais = animais;
        this.espacoLivre;
    }
    nome() {
        return `Recinto ${this.numero}`;
    }
    tamanhoLivre(animal, qtd) {
        const tamanhos = {
            "LEAO": 3,
            "LEOPARDO": 2,
            "CROCODILO": 3,
            "MACACO": 1, 
            "GAZELA": 2,
            "HIPOPOTAMO": 4,
        }
        return this.tamanho - (tamanhos[animal] * qtd);
    }
}

const recintos = [];

recintos.push(new Recinto(1, "savana", 10, [{especie: "MACACO", qtd: 3}]));
recintos.push(new Recinto(2, "floresta", 5, []));
recintos.push(new Recinto(3, "savana e rio", 7, [{especie: "GAZELA", qtd: 1}]));
recintos.push(new Recinto(4, "rio", 8, []));
recintos.push(new Recinto(5, "savana", 9, [{especie: "LEAO", qtd: 1}]));

export default recintos;
