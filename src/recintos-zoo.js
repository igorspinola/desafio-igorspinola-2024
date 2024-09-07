import recintos from "./Recinto.js";
//console.log(recintos[0].nome())
class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        switch (animal) {
            case "LEAO":
                
                break;
            case "LEOPARDO":
                
                break;
            case "CROCODILO":

//{
//  recintosViaveis: ["Recinto 1 (espaço livre: 5 total: 10)", 
//   "Recinto 2 (espaço livre: 3 total: 5)", 
//   "Recinto 3 (espaço livre: 2 total: 7)"]
//}
                const retorno = {
                    recintosViaveis: [
                        
                    ]
                }
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    console.log(rec);
                    if(rec.bioma != "rio") {
                        continue;
                    }
                    if(rec.tamanho < quantidade * 4) {
                        continue;
                    }
                }
                
                break;
            case "MACACO":
                
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

export { RecintosZoo as RecintosZoo };
