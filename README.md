
link de pag: https://antifax06.github.io/portafolio/



# Portafolio de Misael Pascual Alfonso

Portafolio estático hecho con **React + Vite** (sin backend, sin base de datos, sin servicios de pago).
Modo oscuro, adaptable a móvil/tableta/PC, con selector de idioma español/inglés.

## 1. Completa tus datos

Todo se edita en **`src/config.js`**:

- `site.linkedin` y `site.email`: están vacíos a propósito. Mientras estén vacíos, sus botones no se muestran.
- Textos de presentación y "Sobre mí" (español e inglés).
- Habilidades (`skills`) y proyectos (`projects`).
- Capturas: copia la imagen en `public/projects/` y escribe `image: './projects/nombre.png'`.
- Demos: escribe la URL en `demo` solo si funciona; si es `null`, el botón no aparece.

## 2. Ejecutar en Windows

1. Instala [Node.js LTS](https://nodejs.org) (incluye `npm`).
2. Abre PowerShell dentro de la carpeta del proyecto:

```powershell
npm install
npm run dev
```

3. Abre la dirección que aparece (normalmente http://localhost:5173).

Para probar la versión final: `npm run build` y luego `npm run preview`.

## 3. Subirlo a GitHub

1. En GitHub crea un repositorio vacío (por ejemplo `portafolio`).
2. En PowerShell, dentro de la carpeta:

```powershell
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/Antifax06/portafolio.git
git push -u origin main
```

(Te pedirá iniciar sesión en GitHub la primera vez.)

## 4. Publicarlo gratis

**Opción A: Vercel** (la más simple)
1. Entra en https://vercel.com e inicia sesión con GitHub.
2. "Add New → Project", elige el repositorio y pulsa **Deploy**. Vercel detecta Vite solo.

**Opción B: GitHub Pages**
1. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
2. Cada `git push` a `main` publica el sitio con `.github/workflows/deploy.yml`.
3. Quedará en `https://antifax06.github.io/portafolio/`.

## Estructura

```
src/config.js   ← tus datos (edita aquí)
src/App.jsx     ← componentes y secciones
src/styles.css  ← estilos
public/         ← favicon e imágenes
```

## Vista previa al compartir (LinkedIn, WhatsApp, etc.)

Las redes necesitan una URL absoluta. Cuando tengas la dirección pública de tu sitio, descomenta en `index.html`
las dos líneas `og:url` y `og:image` y sustituye `TU-URL`. La imagen ya está creada en `public/og-image.png`.

## Importante antes de enviarlo a reclutadores

- Rellena LinkedIn y correo en `src/config.js`.
- Añade capturas reales de cada proyecto (`image` en `projects`).
- Revisa que lo escrito en cada proyecto coincida con tu código; la información salió de los README y descripciones públicas.
