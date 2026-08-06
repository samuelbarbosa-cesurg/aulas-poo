function validaMedia(nota){
    if(nota >= 7){
        return "Aluno aprovado"
    }else{
        return "Aluno reprovado"
    }
}

const alunos = [
    {
        nome: "samuel",
        nota: 7,
        cidade: "Marau"
    },
    {
        nome: "Felipe",
        nota: 6,
        cidade: "Marau"
    },
    {
        nome: "Matheus",
        nota: 9,
        cidade: "Marau"
    }
]

alunos.map(aluno => {
    console.log(`${aluno.nome} - ${validaMedia(aluno.nota)}`)
})