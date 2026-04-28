# Tu primera evaluación de desempeño

Herramienta para diseñar procesos de evaluación de desempeño con recomendaciones basadas en el **Nuevo Diccionario de Competencias Buk** (7 transversales + 15 específicas).

Creado por **Andrea Vargas**.

---

## ⚙️ Paso 1 — Configura el nombre de tu repositorio

Antes de subir a GitHub, edita el archivo `vite.config.js` y reemplaza el nombre del repo:

```js
const REPO_NAME = '/tu-primera-evaluacion/'
// Cámbialo por el nombre exacto de tu repo en GitHub
// Ejemplo: '/eval-desempeno/' o '/primera-evaluacion/'
```

---

## 🚀 Paso 2 — Sube a GitHub

### Si nunca has usado GitHub:

1. Ve a [github.com](https://github.com) → crea cuenta gratuita
2. Clic en **New repository**
3. Nombre: `tu-primera-evaluacion` (o el que prefieras, debe coincidir con `vite.config.js`)
4. Selecciona **Public** → clic en **Create repository**
5. En tu computador, instala [GitHub Desktop](https://desktop.github.com) (más fácil)
6. Abre GitHub Desktop → **Add existing repository** → selecciona la carpeta `eval-desempeno`
7. Clic en **Publish repository** → selecciona el repo que creaste

### Si ya usas Git por terminal:

```bash
cd eval-desempeno
git init
git add .
git commit -m "primera versión"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

---

## 📄 Paso 3 — Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** (engranaje) → sección **Pages** en el menú izquierdo
3. En **Source** → selecciona **GitHub Actions**
4. Listo. En 1-2 minutos el sitio estará en:
   `https://TU_USUARIO.github.io/TU_REPO/`

Cada vez que hagas un cambio y lo subas a GitHub, el sitio se actualiza automáticamente.

---

## 🌐 Paso 4 — Embeber en Google Sites

Google Sites no hospeda archivos directamente, pero permite embeber páginas externas.

1. Copia tu URL de GitHub Pages: `https://TU_USUARIO.github.io/TU_REPO/`
2. Ve a tu Google Site → edita la página donde quieres poner la herramienta
3. Clic en **Insertar** → **Insertar URL**
4. Pega la URL y ajusta el tamaño (recomendado: ancho 100%, alto 700px)
5. Publica el Google Site

> **Nota:** Si Google Sites no permite embeber la URL directamente (a veces bloquea por política de seguridad), usa Netlify como alternativa: arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop) y usa esa URL en Google Sites.

---

## 🏗️ Desarrollo local

```bash
npm install
npm run dev      # Servidor local en http://localhost:5173
npm run build    # Genera carpeta dist/ para producción
```
