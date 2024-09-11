import recintos from "./Recinto.js";
class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        if (quantidade <= 0) {
           return  {
                    erro: "Quantidade inválida"
           }
        }
        const retorno = {
            recintosViaveis: [],
        };
        switch (animal) {
            case "LEAO":
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);

                    if (!rec.bioma.includes("savana")) {
                        continue;
                    }
                    if (existente != undefined && existente.especie != animal) {
                        continue;
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }

                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                if (retorno.recintosViaveis.length == 0) {
                    return {
                            erro: "Não há recinto viável"
                    }
                }
                return retorno;
                
                break;
            case "LEOPARDO":
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);

                    if (!rec.bioma.includes("savana")) {
                        continue;
                    }
                    if (existente != undefined && existente.especie != animal) {
                        continue;
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }

                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                if (retorno.recintosViaveis.length == 0) {
                    return {
                            erro: "Não há recinto viável"
                    }
                }
                return retorno;
                
                break;
            case "CROCODILO":
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);

                    if (!rec.bioma.includes("rio")) {
                        continue;
                    }
                    if (existente != undefined && existente.especie != animal) {
                        continue;
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }

                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                if (retorno.recintosViaveis.length == 0) {
                    return {
                            erro: "Não há recinto viável"
                    }
                }
                return retorno;
                
                break;
            case "MACACO":
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);
                    if(!rec.bioma.includes("savana") && !rec.bioma.includes("floresta")) {
                        continue;
                    }
                    if (existente == undefined && quantidade == 1) {
                       continue; 
                    }
                    if (existente != undefined) {
                        if (existente.especie == "LEAO" || existente.especie == "LEOPARDO" || existente.especie == "CROCODILO") {
                            continue;
                        }
                    }
                    if (existente != undefined && existente.especie != animal) {
                        espacoLivre--; 
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }
                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                if (retorno.recintosViaveis.length == 0) {
                    return {
                            erro: "Não há recinto viável"
                    }
                }
                return retorno;
                
                break;
            case "GAZELA":
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);
                    if(!rec.bioma.includes("savana")) {
                        continue;
                    }
                    if (existente != undefined) {
                        if (existente.especie == "LEAO" || existente.especie == "LEOPARDO" || existente.especie == "CROCODILO") {
                            continue;
                        }
                    }
                    if (existente != undefined && existente.especie != animal) {
                        espacoLivre--; 
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }
                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                if (retorno.recintosViaveis.length == 0) {
                    return {
                            erro: "Não há recinto viável"
                    }
                }
                return retorno;
                
                break;
            case "HIPOPOTAMO":
                for (let i = 0; i < recintos.length; i++) {
                    const rec = recintos[i];
                    const existente = rec.animais[0];
                    let espacoLivre = rec.tamanhoLivre(animal, quantidade);
                    if(!rec.bioma.includes("savana") && !rec.bioma.includes("rio")) {
                        continue;
                    }
                    if (existente != undefined) {
                        if (existente.especie == "LEAO" || existente.especie == "LEOPARDO" || existente.especie == "CROCODILO") {
                            continue;
                        }
                    }
                    if (existente != undefined && existente.especie != animal) {
                        espacoLivre--; 
                    }
                    if (existente != undefined && existente.especie != animal && !rec.bioma.includes("savana") || !rec.bioma.includes("rio")) {
                        continue; 
                    }
                    if(espacoLivre < 0) {
                        continue;
                    }
                    rec.espacoLivre = espacoLivre;
                    const dados = `${rec.nome()} (espaço livre: ${espacoLivre} total: ${rec.tamanho})`
                    retorno.recintosViaveis.push(dados);
                }
                if (retorno.recintosViaveis.length == 0) {
                    return {
                            erro: "Não há recinto viável"
                    }
                }
                return retorno;
                
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
