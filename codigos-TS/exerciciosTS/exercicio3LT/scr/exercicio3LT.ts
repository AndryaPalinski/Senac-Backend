/*Crie uma função que receva todas as informações como parâmetros (3 essenciais[nome do filme, 
ano de lançamento, genero do filme] + 1 opcional[score do site]) e retorne todas as informações 
organizadas em um 'type' */

enum genremovie {
    acao = "Ação",
    drama = "Drama",
    comedia = "Comédia",
    romance = "Romance",
    terror = "Terror"
}

function streaming(movieName: string, releaseYear: number, movieGender: string, siteScore?: number): any{
    let hasPontuation = siteScore ? ', Pontuação em site de resenha:' + siteScore : '';

    console.log(`Nome do filme: ${movieName}, Ano de lançamento: ${releaseYear},genero do filme: 
${movieGender}  ${hasPontuation}` );


}

streaming('Lokloklok', 2031, genremovie.comedia);