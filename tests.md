Este proyecto incluye un conjunto de aplicaciones de prueba mínimas (example-apps/) diseñadas para validar que los clientes de API autogenerados se compilan correctamente y logran comunicarse con la API de Requiems.

Dado que las pruebas se ejecutan sin una API Key válida, el resultado esperado para un test exitoso es un error HTTP 401 (Unauthorized). Esto confirma que la capa de red y serialización del cliente funciona perfectamente.

Requisito Previo Importante
Antes de correr las pruebas locales, asegúrate de haber generado los clientes en la carpeta clients/ ejecutando el generador de OpenAPI.

En el caso particular de TypeScript, el cliente debe estar compilado previamente:

cd clients/typescript
npm install
npm run build
cd ../..

Cómo ejecutar los tests por lenguaje
1. TypeScript (Node.js)
Requiere Node.js y npm instalados.

cd example-apps/typescript
npm install
npx ts-node index.ts

Salida esperada: ✅ TypeScript Client E2E OK (Expected 401)

2. C# (.NET 8)
Requiere el SDK de .NET 8.0 instalado.

cd example-apps/csharp
dotnet run

Salida esperada: ✅ C# Client E2E OK (Expected 401)

3. Python
Requiere Python 3 y pip. Se recomienda el uso de un entorno virtual (venv) para no contaminar el sistema operativo.

cd example-apps/python

Crear y activar entorno virtual
python3 -m venv venv
source venv/bin/activate

Instalar dependencias del cliente generado
pip install urllib3 pydantic python-dateutil aiohttp

Ejecutar el test
python3 main.py

Salir del entorno virtual
deactivate

Salida esperada: ✅ Python Client E2E OK (Expected 401)

4. Ruby
Requiere Ruby y gem instalados. Dependiendo de los permisos de tu sistema, la instalación de la gema podría requerir sudo.

cd example-apps/ruby
gem install typhoeus
ruby main.rb

Salida esperada: ✅ Ruby Client E2E OK (Expected 401)

5. Go (Golang)
Requiere el compilador de Go. La aplicación utiliza la directiva replace en su go.mod para apuntar al cliente local generado.

cd example-apps/go
go mod tidy
go run main.go

Salida esperada: ✅ Go Client E2E OK (Expected 401)

Integración Continua (CI)
Estos tests se ejecutan automáticamente a través de GitHub Actions (regenerate-clients.yml) cada vez que se detecta un cambio en la especificación de OpenAPI. Si alguno de los clientes falla al compilar o no logra comunicarse con la API, el pipeline abortará la creación del Pull Request.