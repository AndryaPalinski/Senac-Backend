# Veificar versão do "node" instalado.
node -v
# Gerar arquivo package.jason
verificar a pasta q está -> npm init -y
# Instalar o ""Typescript""
npm i -g typescript
# Transpilar o código Ts
npx tsc index.ts
# Para rodar no terminal
node (nome do arquivo)
# Para criar o arquivo de consiguração do TS 
npx tsc --init
# Configuções no arquivo TS (tsconfig.json)
"target":"es6";
"module":"commonjs";
"sourceMap": true;
"outDir":"./build";
"rootDir": "./scr";
"removeComments": true;
"noImplicitAny": true.
# Adicionar script no package.jason
"start": "npx tsc && node ./build/index.js"
# Para rodar 
 npm start