class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos
        this.tipo = tipo
        this.endereco = endereco

    }
    exibirinformacoes(){
        return 'Tipo: ${this.tipo} Quartos: ${this.quartos} Endereço: ${this.endereco}'

    }
        
}

const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre")
const apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro")
console.log(casa.exibirinformacoes())
console.log(apartamento.exibirinformacoes())
