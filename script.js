// let nomeCapivara = "Jureusko";

// let contador = 0;

// while(contador<100){
//     console.log(contador);
//     contador ++;
// }




// for(let contador=0; contador<4; contador++){
//     console.log(contador);
//     console.log("rabanete");
// }

// let listaChamada = ["Almeida Tamarindo", "Jorge Aragão", "Jubileu Didi", "Ronaldinho Gaúcho", "Akida Sorte", "Minalba Granado", "Miranha da Silva", "Cleytinn Rasta"];

// for(let contador = 0; contador<listaChamada.length; contador++){
//     console.log(listaChamada[contador]);
// }


// let listaChamada = ["Almeida Tamarindo", "Jorge Aragão", "Jubileu Didi", "Ronaldinho Gaúcho", "Akida Sorte", "Minalba Granado", "Miranha da Silva", "Cleytinn Rasta"];

// // FOR IN
// for(let capivara in listaChamada){
//     console.log(`O aluno na posição ${capivara} é: ${listaChamada[capivara]}`);
// }

// FOR OF
// for(let aluno of listaChamada){
//     console.log(aluno);
// }

let filmes = [
    {nome: "Rei Leão", classificacao: 12, estilo: "animacao"},
    {nome: "Vingadores", classificacao: 16, estilo: "acao" },
    {nome: "KillBill", classificacao: 125, estilo:"muito sangue" },
    {nome: "O iluminado", classificacao: 16, estilo: "perturbador"},
    {nome: "Tropa de Elite", classificacao: 18, estilo:"sangue e tapa na cara" },
    {nome: "matrix", classificacao: 25},
    {nome: "Kung-Fu Panda", classificacao: 12}
];

let nome = prompt("Qual é o seu nome?")
let idade = prompt(`Seja bem vindx ${nome}, qual é a sua idade?`);

// SOLUÇÃO COM FOR OF

console.log(`Você pode assistir ao filme:`)
console.log(" ");

for(let filme of filmes){
    if(idade >= filme.classificacao){
        console.log(`${filme.nome}`);
    }
}
console.log(" ");
console.log(`Pois sua idade é: ${idade}`)

// // SOLUCAO COM FOR IN 
// for(let indice in filmes){
//     if(idade >= filmes[indice].classificacao){
//         console.log(`Você pode assistir o filme ${filmes[indice].nome}, pois sua idade é ${idade}`);
//     }
// }

// // SOLUCAO COM FOR CONVENCIONAL
// for(let contador = 0; contador<filmes.length; i++){
//     console.log(`Você pode assistir o filme ${filmes[contador].classificacao}, pois sua idade é ${idade}`);
// }

// // SOLUCAO COM WHILE
// let contador = 0;
// while(contador<filmes.length){
//     console.log(`Você pode assistir o filme ${filmes[contador].nome}, pois sua idade é ${idade}`);
//     contador ++
// }