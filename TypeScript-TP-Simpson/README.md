<!--El comando "npm init -y " inicializa un proyecto Node.js creando automanticamente el archivo "package.json". El cual contiene la inforamcion basica del proyecto. La bandera "-y" acepta todas las configuraciones predeterminadas.>

<!-- Se usa `--save-dev` al instalar TypeScript porque es una herramienta de desarrollo. Solo la necesitamos mientras escribimos y compilamos el código, no cuando la aplicación ya está corriendo en producción>

<!-- "Strict" Activa el modo estricto del compilador de TypeScript, mejorando la calidad del codigo.
"Target" Define la version de JavaScript a la que se transpilara el codigo TypeScript.
"OutDir" Especifica la carpeta de salida deonde se colocara el JavaScript compilado>

<!-- El script build, tiene el comando tsc que ejecuta el compilador de TypeScript una sola vez. Compila los archivos .ts y genera los archivos .js en el outDir. Se ejecuta utilizando el comando "npm run build"
El script watch, ejecuta el modo observador. Se queda escuchando los cambios y recompila automaticamente cuando se guarda. Se ejecuta con el comando "npm run watch">