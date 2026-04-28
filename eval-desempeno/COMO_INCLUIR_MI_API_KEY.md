## Cómo incluir tu API key en el build (para que los clientes no la vean)

### Requisitos
- Node.js 18+ instalado → https://nodejs.org

### Pasos

1. Descomprime el archivo `eval-desempeno.zip` (el proyecto completo, no el dist.zip)

2. Abre la carpeta `eval-desempeno` en tu computador

3. Crea un archivo llamado `.env` en esa carpeta con este contenido:
   ```
   VITE_ANTHROPIC_API_KEY=sk-ant-api03-TU_KEY_AQUI
   ```
   (Reemplaza con tu key real de console.anthropic.com → API Keys)

4. Abre la terminal en esa carpeta y ejecuta:
   ```
   npm install
   npm run build
   ```

5. Se genera la carpeta `dist/` con tu key ya incluida

6. Ve a https://app.netlify.com/drop
   Arrastra la carpeta `dist/` → listo

### Resultado
Los clientes abrirán el link y entrarán directo a la herramienta, sin ver ni ingresar ninguna key.

### Nota importante
Nunca compartas el archivo `.env` ni subas el proyecto a GitHub con la key incluida.
El archivo `.gitignore` ya está configurado para ignorar `.env`.
