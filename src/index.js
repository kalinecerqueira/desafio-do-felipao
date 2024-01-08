let nomeHeroi = "Kaptain"
let expHeroi = 7654

switch(true){
	case expHeroi > 0 && expHeroi < 1001:
        console.log("A heroína " + nomeHeroi + " está no nível FERRO.")
        break
    
    case expHeroi >= 1001 && expHeroi < 2001:
    	console.log("A heroína " + nomeHeroi + " está no nível BRONZE.")
        break
    
    case expHeroi >= 2001 && expHeroi < 5001:
    	console.log("A heroína " + nomeHeroi + " está no nível PRATA.")
        break
    
    case expHeroi >= 5001 && expHeroi < 7001:
    	console.log("A heroína " + nomeHeroi + " está no nível OURO.")
        break
    
    case expHeroi >= 7001 && expHeroi < 8001:
    	console.log("A heroína " + nomeHeroi + " está no nível PLATINA.")
        break
    
    case expHeroi >= 8001 && expHeroi < 9001:
    	console.log("A heroína " + nomeHeroi + " está no nível ASCENDENTE.")
        break
    
    case expHeroi >= 9001 && expHeroi < 10001:
    	console.log("A heroína " + nomeHeroi + " está no nível IMORTAL.")
        break
    
    case expHeroi >= 10001:
    	console.log("A heroína " + nomeHeroi + " está no nível RADIANTE.")
        break

    default:
        console.log("A heroína " + nomeHeroi + " ainda não iniciou sua jornada!")
        break      
}
