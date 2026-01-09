# 🏈 NFL PLAYOFFS POLLA - VERSIÓN MODULAR

## ✨ ¿Qué es esto?

Una aplicación web **modular y elegante** para tu polla de NFL con:
- ✅ Pantalla de **LOGIN**
- ✅ Pantalla de **REGISTRO** (nueva!)
- ✅ **Dashboard** personal
- ✅ **Leaderboard** completo
- ✅ Panel de **Admin**
- ✅ Código **separado por pantallas**
- ✅ Diseño **profesional NFL**
- ✅ Conexión con **Google Sheets**

---

## 📂 ESTRUCTURA

```
nfl-polla-modular/
│
├── index.html              ← Archivo principal
│
├── css/
│   └── styles.css         ← Todos los estilos
│
├── js/
│   ├── config.js          ← Configuración + API
│   ├── login.js           ← Pantalla Login
│   ├── register.js        ← Pantalla Registro ⭐ NUEVO
│   ├── dashboard.js       ← Pantalla Dashboard
│   ├── leaderboard.js     ← Pantalla Leaderboard
│   └── admin.js           ← Pantalla Admin
│
├── README.md              ← Este archivo
└── DIAGRAMA.md            ← Diagrama completo
```

**Ver diagrama completo:** [DIAGRAMA.md](DIAGRAMA.md)

---

## 🚀 INSTALACIÓN (3 PASOS)

### 1️⃣ Configurar Google Sheets API

1. Ve a https://console.cloud.google.com/
2. Crea un proyecto
3. Habilita "Google Sheets API"
4. Crea una "API Key"
5. Copia el SPREADSHEET_ID de tu Google Sheet

### 2️⃣ Editar `js/config.js`

Abre `js/config.js` en VSCode y edita:

```javascript
const CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI',           // ← Pega tu API Key
    SPREADSHEET_ID: 'TU_SPREADSHEET_ID_AQUI'  // ← Pega tu Spreadsheet ID
};
```

**Guarda el archivo** (Cmd + S)

### 3️⃣ Abrir `index.html`

- **Opción A:** Doble click en `index.html`
- **Opción B:** Arrastra a Chrome/Safari
- **Opción C:** Click derecho → "Open with Live Server" (VSCode)

**¡Listo!** 🎉

---

## 📊 CONFIGURAR GOOGLE SHEET

Tu Google Sheet debe tener estas hojas:

### Hoja "Users" (Login y Registro)

| Email | Password | Nombre | Apellido | isAdmin |
|-------|----------|--------|----------|---------|
| admin@test.com | admin123 | Admin | User | TRUE |
| player1@test.com | pass123 | Juan | Pérez | FALSE |

**Importante:** 
- Columna A: Email
- Columna B: Password
- Columna C: Nombre
- Columna D: Apellido
- Columna E: isAdmin (TRUE o FALSE)

### Hoja "Standings" (Clasificación)

| Ranking | Nombre | Apellido | Wild Card | Divisional | Conference | Super Bowl | Total Points | $ |
|---------|--------|----------|-----------|------------|------------|------------|--------------|---|
| 1 | Juan | Pérez | 25 | 30 | 14 | 22 | 117 | 1500 |
| 2 | María | López | 23 | 28 | 12 | 20 | 115 | 500 |

### Hacer el Sheet Público

1. Click en "Share"
2. Cambia a "Anyone with the link"
3. Selecciona "Viewer"
4. Copia el link

---

## 🆕 NUEVA FUNCIÓN: REGISTRO

### Cómo Funciona

1. **Usuario** hace click en "Regístrate aquí" en la pantalla de login
2. **Llena el formulario** de registro:
   - Nombre
   - Apellido
   - Email
   - Password
   - Confirmar Password
3. **Sistema valida**:
   - Que las contraseñas coincidan
   - Que el email no esté registrado
   - Que la contraseña tenga al menos 6 caracteres
4. **Muestra mensaje de éxito** con los datos del nuevo usuario
5. **Admin debe agregar** estos datos manualmente a Google Sheets

### ¿Por Qué Manual?

Escribir en Google Sheets requiere OAuth 2.0 (más complejo).
Para mantener la simplicidad, el sistema:
- ✅ Valida los datos
- ✅ Verifica que el email no exista
- ✅ Muestra los datos al usuario
- ⚠️ El admin agrega manualmente a Sheets

### Para el Admin

Cuando un usuario se registra:

1. Verás en consola (F12) los datos:
```javascript
{
  email: "nuevo@email.com",
  password: "pass123",
  nombre: "Juan",
  apellido: "Pérez",
  isAdmin: "FALSE"
}
```

2. Agrégalos a la hoja "Users" en Google Sheets:
   - Columna A: Email
   - Columna B: Password
   - Columna C: Nombre
   - Columna D: Apellido
   - Columna E: FALSE

3. El usuario ya puede hacer login

---

## 📱 PANTALLAS

### 1. Login
```
🏈 NFL PLAYOFFS
Polla 2025 - Super Bowl LIX

Email: [____________]
Password: [____________]

[   INGRESAR   ]

¿No tienes cuenta? → Regístrate aquí
```

**Archivo:** `js/login.js`

### 2. Registro ⭐ NUEVO
```
📝 REGISTRO
Únete a la Polla NFL 2025

Nombre: [____________]
Apellido: [____________]
Email: [____________]
Password: [____________]
Confirmar: [____________]

[  REGISTRARSE  ]

¿Ya tienes cuenta? → Inicia sesión aquí
```

**Archivo:** `js/register.js`

Después del registro exitoso:
```
✅ ¡Registro Exitoso!

Datos del nuevo usuario:
Email: juan@email.com
Password: ******
Nombre: Juan
Apellido: Pérez

📧 El admin debe agregar estos datos
   a la hoja "Users" en Google Sheets

[  IR AL LOGIN  ]
```

### 3. Dashboard
```
Header: 🏈 NFL PLAYOFFS | Juan Pérez [Salir]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Dashboard] [Leaderboard] [Admin]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mi Dashboard
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ 🏆   │ │ ⭐   │ │ 🎯   │ │ 🔥   │
│ #1   │ │ 117  │ │  25  │ │  30  │
└──────┘ └──────┘ └──────┘ └──────┘

Top 10 Jugadores
[Tabla con clasificación]
```

**Archivo:** `js/dashboard.js`

### 4. Leaderboard
```
Podio
🥈 #2      🥇 #1      🥉 #3
María      Juan       Pedro
115pts     117pts     110pts

Clasificación Completa
[Tabla con todos los jugadores]
```

**Archivo:** `js/leaderboard.js`

### 5. Admin
```
Panel de Administración
┌──────┐ ┌──────┐ ┌──────┐
│ 👥   │ │ 📊   │ │ 🎯   │
│  68  │ │  95  │ │ 117  │
└──────┘ └──────┘ └──────┘

📝 Para actualizar puntos,
   edita Google Sheets
```

**Archivo:** `js/admin.js`

---

## 🔧 ARCHIVOS EXPLICADOS

### `index.html`
- Contiene el HTML de TODAS las pantallas
- Importa CSS y todos los JS
- Inicializa la aplicación

### `css/styles.css`
- Todos los estilos CSS
- Diseño NFL profesional
- Responsive para móvil

### `js/config.js`
- **CONFIG:** API Key y Spreadsheet ID
- **readSheet():** Lee Google Sheets
- **saveUser() / loadUser():** localStorage
- **showScreen():** Cambia entre pantallas
- **Utilidades:** showError, hideError, etc.

### `js/login.js`
- **initLogin():** Inicializa formulario
- Lee hoja "Users"
- Valida credenciales
- Guarda usuario y va a Dashboard

### `js/register.js` ⭐ NUEVO
- **initRegister():** Inicializa formulario
- Valida datos del formulario
- Verifica que email no exista
- Muestra datos para que admin agregue
- **goToLogin():** Vuelve al login

### `js/dashboard.js`
- **loadDashboard():** Carga datos
- Lee hoja "Standings"
- Muestra stats del usuario
- Muestra top 10 jugadores

### `js/leaderboard.js`
- **loadLeaderboard():** Carga datos
- Lee hoja "Standings"
- Genera podio top 3
- Genera tabla completa

### `js/admin.js`
- **loadAdmin():** Carga datos
- Lee hoja "Standings"
- Calcula estadísticas
- **logout():** Cierra sesión

---

## 🎨 PERSONALIZACIÓN

### Cambiar Colores

Edita `css/styles.css`:

```css
/* Color NFL Azul */
#013369

/* Color NFL Rojo */
#d50a0a
```

### Cambiar Textos

Edita `index.html`:

```html
<h1>NFL PLAYOFFS POLLA</h1>
<p>Super Bowl LIX • 2025</p>
```

### Agregar Nueva Pantalla

1. Crear `js/nueva-pantalla.js`
2. Agregar HTML en `index.html`:
```html
<div id="nuevaPantallaScreen" class="screen hidden">
    <!-- Tu contenido -->
</div>
```
3. Importar en `index.html`:
```html
<script src="js/nueva-pantalla.js"></script>
```
4. Usar `showScreen('nuevaPantalla')`

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### "Failed to fetch" / No carga datos

**Causa:** API Key o Spreadsheet ID incorrectos

**Solución:**
1. Verifica `js/config.js`
2. Verifica que Google Sheet sea público
3. Abre consola (F12) para ver errores

### "Invalid credentials" al login

**Causa:** Usuario no existe en "Users"

**Solución:**
1. Verifica la hoja "Users" en Google Sheets
2. Email y password deben coincidir exactamente
3. Email es case-insensitive, password es case-sensitive

### Registro no funciona

**Causa:** JavaScript deshabilitado o error en consola

**Solución:**
1. Abre consola (F12)
2. Ve a la pestaña "Console"
3. Busca errores en rojo
4. Verifica que CONFIG esté configurado

### Usuario se registró pero no puede entrar

**Causa:** Admin no agregó a Google Sheets

**Solución:**
1. Admin debe agregar manualmente a hoja "Users"
2. Verificar formato: Email | Password | Nombre | Apellido | FALSE

---

## 🌐 PUBLICAR EN INTERNET

### GitHub Pages (Gratis)
1. Crea repo en GitHub
2. Sube todos los archivos
3. Settings → Pages
4. Deploy from main branch
5. ¡Listo!

### Netlify Drop (Gratis)
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta completa
3. ¡Listo!

### Vercel (Gratis)
1. Ve a https://vercel.com
2. Arrastra la carpeta
3. ¡Listo!

---

## 📊 VER DIAGRAMA COMPLETO

Para entender toda la estructura y flujo:

**[DIAGRAMA.md](DIAGRAMA.md)** ← Click aquí

El diagrama incluye:
- Estructura de archivos
- Flujo de la aplicación
- Pantallas detalladas
- Conexión con Google Sheets
- Navegación entre screens
- Flujo de datos

---

## ✅ CHECKLIST

- [ ] Creé proyecto en Google Cloud
- [ ] Habilitó Google Sheets API
- [ ] Creé API Key
- [ ] Copié Spreadsheet ID
- [ ] Edité `js/config.js` con mis credenciales
- [ ] Mi Google Sheet es público
- [ ] Creé hoja "Users"
- [ ] Creé hoja "Standings"
- [ ] Abrí `index.html` en navegador
- [ ] Pantalla de login funciona ✅
- [ ] Pantalla de registro funciona ✅
- [ ] Dashboard carga datos ✅
- [ ] Leaderboard muestra clasificación ✅
- [ ] ¡Todo funciona! 🎉

---

## 🎯 VENTAJAS DE ESTA VERSIÓN

| Característica | Versión Anterior | Esta Versión |
|---|---|---|
| Archivos | 1 archivo | **6 archivos JS** ✅ |
| Registro | ❌ | **✅ Nuevo** |
| Modular | ❌ | **✅ Sí** |
| Mantenible | Regular | **✅ Fácil** |
| Escalable | Difícil | **✅ Simple** |
| Diseño | ✅ | ✅ |
| Google Sheets | ✅ | ✅ |

---

## 📞 SOPORTE

1. **Ver Diagrama:** [DIAGRAMA.md](DIAGRAMA.md)
2. **Revisar Consola:** F12 en navegador
3. **Verificar CONFIG:** `js/config.js`

---

**¡Disfruta tu polla de NFL! 🏈🎉**

Código limpio, modular y profesional.
