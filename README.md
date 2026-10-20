# Note Dashboard – React + Vite

Tablero de notas/publicaciones hecho con **React 18**, **Vite** y **React Router 7**. Permite listar publicaciones, ver el detalle de cada una y crear nuevas, consumiendo un backend de prueba en Express.

## Funcionalidades

- Listado de publicaciones (`/`) cargadas con *loader* de React Router.
- Creación de una publicación en un modal (`/create-post`) mediante *action*.
- Detalle de cada publicación con ruta dinámica (`/:id`).
- Estilos con CSS Modules e iconos de `react-icons`.

## Tecnologías

- React 18, React Router DOM 7, Vite 3, `react-icons`
- Backend de prueba: Node.js + Express 4 + `body-parser` (carpeta `dummy-backend/`)

## Estructura

```
src/
  components/   MainHeader, Modal, Post, PostList
  routes/       RootLayout, Posts, NewPost, PostDetails
  main.jsx      Definición del router
dummy-backend/  API Express (GET /posts, GET /posts/:id, POST /posts)
```

## Cómo ejecutarlo

Necesitas dos terminales: una para el backend y otra para el frontend.

**1. Backend** (puerto 8080)

```bash
cd dummy-backend
npm install
npm start
```

**2. Frontend**

```bash
npm install
npm run dev
```

Abre la URL que indica Vite (normalmente <http://localhost:5173>). El frontend llama a `http://localhost:8080/posts`, así que el backend debe estar encendido.

### Build

```bash
npm run build
npm run preview
```

## Nota importante sobre el backend

`dummy-backend/app.js` importa `./data/posts` (funciones `getStoredPosts` y `storePosts`), pero esa carpeta está excluida en `.gitignore` y no viene en el repositorio. Para que el backend arranque, crea `dummy-backend/data/posts.js` que lea y escriba el archivo `posts.json` (que sí está incluido, con el formato `{ "posts": [...] }`).
