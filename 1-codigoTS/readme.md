# Comandos para rodar o Type script ;--;

# Verificar a versão do node. 
node -v

# Gerar arquivo package.json.
npm init -y

# Instalar o TypeScript.
npm i -g typescript

# Transpilar o código TS.
npx tsc -nome do arquivo-

# Executar código no console.
node -nome do arquivo-

# Adicionar script no package.jason.
"start": "nps tsc && node ./build/-nome do arquivo-

# Criar arquivo de configuração.
npx tsc --init 

# Alterações no arquivo -> Devem ser feitas! 

{
  "compilerOptions": {
   "target": "es6",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
   "module": "commonjs",                                /* Specify what module code is generated. */
   "rootDir": "./src",                                  /* Specify the root folder within your source files. */
   "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
   "outDir": "./build",                                   /* Specify an output folder for all emitted files. */
   "removeComments": true,                           /* Disable emitting comments. */
   "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
   "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
   "strict": true,                                      /* Enable all strict type-checking options. */
   "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
   "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}


# Transpilar arquivo.ts. 
npx tsc

# Rodar script. 
npm start
