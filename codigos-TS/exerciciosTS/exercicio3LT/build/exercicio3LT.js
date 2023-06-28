"use strict";
var genremovie;
(function (genremovie) {
    genremovie["acao"] = "A\u00E7\u00E3o";
    genremovie["drama"] = "Drama";
    genremovie["comedia"] = "Com\u00E9dia";
    genremovie["romance"] = "Romance";
    genremovie["terror"] = "Terror";
})(genremovie || (genremovie = {}));
function streaming(movieName, releaseYear, movieGender, siteScore) {
    let hasPontuation = siteScore ? 'Pontuação em site de resenha:' + siteScore : '';
    console.log(`Nome do filme: ${movieName}, Ano de lançamento: ${releaseYear},genero do filme: 
${movieGender},  ${hasPontuation}`);
}
streaming('OI', 1234, genremovie.drama);
//# sourceMappingURL=exercicio3LT.js.map