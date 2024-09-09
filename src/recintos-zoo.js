import recintos from "./Recinto.js";
//console.log(recintos[0].nome())
class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        const tamanhos = {
            "LEAO": 3,
            "LEOPARDO": 2,
            "CROCODILO": 3,
            "MACACO": 1, 
            "GAZELA": 2,
            "HIPOPOTAMO": 4,
        }
        const tamanho = tamanhos[animal];
        switch (animal) {
            case "LEAO":
                
                break;
            case "LEOPARDO":
                
                break;
            case "CROCODILO":
                const retorno = {
                    recintosViaveis: [],
                };
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);
                    if (i == 3) {
                       console.log(espacoLivre);
                    }
                    if (existente != undefined && existente.especie != animal) {
                        continue;
                    }
                    if(rec.bioma != "rio") {
                        continue;
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }
                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                return retorno;
                
                break;
            case "MACACO":
                const retorno = {
                    recintosViaveis: [],
                };
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);
                    if (i == 3) {
                       console.log(espacoLivre);
                    }
                    if (existente != undefined && existente.especie == "LEAO" || existente.especie == "LEOPARDO" || existente.especie == "CROCODILO") {
                        continue;
                    }
                    if (existente != undefined && existente.especie != animal) {
                        espacoLivre--; 
                    }
                    //console.log(rec);
                    if(rec.bioma != "rio") {
                        continue;
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }
                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                return retorno;
                
                break;
            case "GAZELA":
                
                break;
            case "HIPOPOTAMO":
                
                break;

            default:
                return {
                         erro: "Animal inválido"
                       }
                break;
        }
    }

}
//new RecintosZoo().analisaRecintos("CROCODILO", 1);
export { RecintosZoo as RecintosZoo };
