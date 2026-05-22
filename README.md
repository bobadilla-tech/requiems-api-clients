# Spike: Evaluación de Generadores de Clientes OpenAPI

## 🎯 Objetivo
El objetivo de esta prueba de concepto (PoC) es evaluar y seleccionar la herramienta más eficiente para generar automáticamente los clientes HTTP a partir de nuestra especificación OpenAPI. Se busca reducir el código *boilerplate* manual, minimizar errores de tipado y mejorar la experiencia de desarrollo (DX).

Se evaluaron tres herramientas principales, ejecutándolas contra la especificación completa del proyecto (Gateway):
1. **OpenAPI Generator** (El estándar de la industria)
2. **Kiota** (Alternativa moderna de Microsoft)
3. **Orval** (Especializado en el ecosistema TypeScript)

---

## 📊 Tabla Comparativa

| Herramienta | Ecosistema Principal | Peso del Código | Curva de Adopción | Licencia | Ideal para... |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenAPI Gen** | Multilenguaje | 🔴 Muy Pesado | Media | Apache 2.0 | SDKs públicos masivos |
| **Kiota** | C# / .NET / TS | 🟢 Liviano | Media (Setup inicial) | MIT | Backends modernos (.NET 8) |
| **Orval** | TypeScript / JS | 🟢 Liviano | Baja (Plug & Play) | MIT | Frontends o Node.js |

---

## 🔍 Análisis Detallado (Pros y Contras)

### 1. OpenAPI Generator (`@openapitools/openapi-generator-cli`)
Herramienta probada y robusta que soporta casi cualquier lenguaje del mercado.

* **Pros:**
  * Cobertura absoluta: mapea el 100% de la especificación sin problemas.
  * En C# genera una solución completa (`.sln` y `.csproj`) lista para compilar.
  * Gran comunidad y soporte para casos de uso empresariales antiguos.
* **Contras:**
  * Código generado sobre-diseñado y pesado (crea muchísimas clases e interfaces redundantes).
  * En C# utiliza patrones anticuados, desaprovechando las optimizaciones de .NET 8.
  * Genera PRs masivos y ruidosos debido a la gran cantidad de archivos *boilerplate*.

### 2. Kiota (por Microsoft)
Generador de nueva generación que prioriza el rendimiento, el bajo peso y la integración con las herramientas nativas de cada lenguaje.

* **Pros:**
  * **Patrón Builder:** Genera un árbol de navegación fluido (`client.Lorem.Batch.PostAsync()`) que brinda un autocompletado excelente en el editor.
  * **Optimizado para .NET 8:** El código generado se acopla perfectamente a `HttpClient` y a la inyección de dependencias moderna, sin librerías de terceros pesadas.
  * Modelos extremadamente limpios y livianos.
* **Contras:**
  * Requiere escribir un poco más de código manual para inicializar el cliente (configurar *Authentication Providers* y *Request Adapters*).
  * La estructura de carpetas generada es muy profunda (una carpeta por segmento de URL).

### 3. Orval
Generador enfocado exclusivamente en el ecosistema de TypeScript y JavaScript.

* **Pros:**
  * **Enfoque Funcional:** No genera clases pesadas, sino funciones planas y tipadas que usan `axios` o `fetch` de forma nativa.
  * Código altamente legible, casi idéntico al que un desarrollador escribiría a mano.
  * Permite separar muy fácilmente la capa de modelos (interfaces) de la capa de red a través de su archivo `orval.config.js`.
* **Contras:**
  * Soporte exclusivo para TypeScript/JavaScript (no sirve para el backend en C#).

---

## 💡 Recomendación Final

Basado en las pruebas realizadas contra la especificación de nuestro Gateway, la recomendación técnica es adoptar una **estrategia híbrida**, descartando OpenAPI Generator por su peso y sobreingeniería:

1. **Para servicios Backend (.NET / C#): Utilizar Kiota.** Nos permite aprovechar al máximo el rendimiento de la infraestructura actual, manteniendo el código generado al mínimo indispensable y ofreciendo una experiencia de desarrollo inmejorable gracias a su patrón *Builder*.
2. **Para servicios Node.js / Frontend (TypeScript): Utilizar Orval.** Se adapta perfectamente al ecosistema de TS, manteniendo un enfoque funcional y limpio, permitiendo integrar nativamente librerías de peticiones (como Axios) sin agregar capas innecesarias de abstracción orientada a objetos.

---

## 🔄 Alternativa: Enfoque de Herramienta Única (Solo Kiota)

Si la prioridad absoluta del proyecto es la estandarización extrema de la infraestructura, existe la opción de unificar el desarrollo utilizando **Kiota como herramienta única** tanto para el Backend (C#) como para el Frontend/Node.js (TypeScript). 

* **Ventajas:** Centraliza el mantenimiento en un único script de generación en el pipeline de CI/CD, unifica los contratos de red bajo una misma filosofía de diseño y reduce la curva de aprendizaje global, ya que todo el equipo consumirá la API mediante el mismo patrón *Builder*.
* **Desventajas:** Introduce fricción en el equipo de Frontend, obligándolos a adoptar una arquitectura rígida, basada en clases, adaptadores de red y configuraciones manuales de autenticación que se sienten ajenas al ecosistema idiomático de TypeScript. Además, se pierde la integración directa con herramientas cliente avanzadas (como la generación automática de hooks de React Query o Axios simplificado) que Orval resuelve de forma nativa y transparente.

# Guía de Instalación y Ejecución: Generadores OpenAPI

Esta guía detalla los pasos y comandos necesarios para instalar, configurar y ejecutar las tres herramientas evaluadas en este proyecto: **OpenAPI Generator**, **Kiota** y **Orval**.

---

## 📋 Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu entorno local antes de comenzar:
* **Docker** (para OpenAPI Generator y Kiota)
* **Node.js** (para Orval y manejo de paquetes npm)

Todos los comandos deben ser ejecutados desde la raíz de este repositorio, asegurando que el archivo `openapi.json` esté presente en el mismo directorio.

---

## 🛠️ 1. OpenAPI Generator (Vía Docker)

No requiere instalación global de dependencias. Se utiliza la imagen oficial de Docker.

### Paso 1: Crear directorios de salida
$ mkdir -p clientes-openapi/typescript clientes-openapi/csharp

### Paso 2: Generar cliente TypeScript (Axios)
$ docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i /local/openapi.json -g typescript-axios -o /local/clientes-openapi/typescript

### Paso 3: Generar cliente C# (.NET)
$ docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate -i /local/openapi.json -g csharp -o /local/clientes-openapi/csharp

---

## 🛠️ 2. Kiota - Microsoft (Vía Docker)

Kiota se ejecuta mediante su imagen oficial. En entornos Linux, es necesario ajustar los permisos de la carpeta destino antes de la ejecución para evitar bloqueos del contenedor.

### Paso 1: Crear directorios y abrir permisos
$ mkdir -p clientes-kiota/typescript clientes-kiota/csharp
$ sudo chmod -R 777 clientes-kiota

### Paso 2: Generar cliente TypeScript
$ sudo docker run --rm -v "${PWD}:/workspace" mcr.microsoft.com/openapi/kiota generate -l typescript -d /workspace/openapi.json -o /workspace/clientes-kiota/typescript

### Paso 3: Generar cliente C#
$ sudo docker run --rm -v "${PWD}:/workspace" mcr.microsoft.com/openapi/kiota generate -l csharp -d /workspace/openapi.json -o /workspace/clientes-kiota/csharp

---

## 🛠️ 3. Orval (Vía Node.js)

Orval se ejecuta de forma nativa a través de Node.js mediante `npx` sin necesidad de instalación global.

### Paso 1: Crear directorio de salida
$ mkdir -p clientes-orval/typescript

### Paso 2: Crear archivo de configuración
Crea un archivo llamado `orval.config.js` en la raíz del proyecto con la siguiente estructura:

module.exports = {
  requiemsApi: {
    input: './openapi.json',
    output: {
      mode: 'split',
      target: './clientes-orval/typescript/api.ts',
      schemas: './clientes-orval/typescript/modelos',
      client: 'axios-functions',
    },
  },
};

### Paso 3: Ejecutar generador
$ npx orval