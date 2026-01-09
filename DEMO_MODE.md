# 🎮 MODO DEMO - Usuario de Prueba

## ✨ ¡PRUEBA SIN CONFIGURAR NADA!

Esta versión incluye un **usuario de prueba** que funciona SIN necesidad de configurar Google Sheets.

---

## 🚀 INICIO RÁPIDO (1 PASO)

### Abre `index.html` ¡Y YA!

- **Opción A:** Doble click en `index.html`
- **Opción B:** Arrastra a Chrome/Safari
- **Opción C:** Click derecho → "Open with Live Server" (VSCode)

**¡Eso es todo!** No necesitas configurar nada más.

---

## 👤 USUARIOS DE PRUEBA

### Usuario Normal
```
Email: demo@nfl.com
Password: demo123
```
- Acceso completo al dashboard
- Ver leaderboard
- NO tiene acceso admin

### Usuario Admin
```
Email: admin@nfl.com
Password: admin123
```
- Acceso completo al dashboard
- Ver leaderboard
- SÍ tiene acceso admin

---

## 📊 DATOS DE PRUEBA INCLUIDOS

### Clasificación Demo (12 participantes)

| Pos | Jugador | WC | DIV | CONF | SB | Total | Premio |
|-----|---------|----|----|------|-------|-------|--------|
| 1 | Usuario Demo | 30 | 24 | 18 | 12 | 84 | $1500 |
| 2 | Juan Pérez | 28 | 22 | 16 | 14 | 80 | $500 |
| 3 | María López | 26 | 20 | 18 | 10 | 74 | $200 |
| 4 | Pedro García | 24 | 18 | 14 | 16 | 72 | - |
| 5 | Ana Martínez | 22 | 20 | 12 | 14 | 68 | - |
| 6 | Luis Rodríguez | 20 | 16 | 16 | 12 | 64 | - |
| 7 | Sofia Hernández | 18 | 18 | 14 | 10 | 60 | - |
| 8 | Carlos González | 22 | 14 | 12 | 10 | 58 | - |
| 9 | Laura Díaz | 16 | 16 | 14 | 8 | 54 | - |
| 10 | Diego Torres | 18 | 12 | 10 | 12 | 52 | - |
| 11 | Carmen Ruiz | 14 | 14 | 12 | 10 | 50 | - |
| 12 | Miguel Sánchez | 16 | 12 | 10 | 10 | 48 | - |

---

## 🎯 ¿CÓMO FUNCIONA?

### 1. Login Inteligente

Cuando intentas hacer login, el sistema:

```
1. PRIMERO verifica si es usuario de prueba
   ├─ demo@nfl.com → ✅ Login exitoso
   └─ admin@nfl.com → ✅ Login exitoso

2. SEGUNDO intenta con Google Sheets
   ├─ Si está configurado → ✅ Lee de Sheets
   └─ Si NO está configurado → ⚠️ Muestra error

3. Mensaje de error incluye ayuda
   "Usa el usuario de prueba: demo@nfl.com / demo123"
```

### 2. Datos Inteligentes

Cuando cargas Dashboard/Leaderboard/Admin, el sistema:

```
1. PRIMERO intenta leer Google Sheets
   ├─ Si hay datos → ✅ Usa datos reales
   └─ Si NO hay datos → ⚠️ Usa datos de prueba

2. SIEMPRE funciona
   No importa si tienes Sheets configurado o no
```

### 3. Fallback Automático

```
Google Sheets configurado:
├─ ✅ Usa datos reales de tu Sheet
└─ ⚠️ Si falla → Usa datos de prueba

Google Sheets NO configurado:
└─ ✅ Usa datos de prueba directamente
```

---

## 🔄 FLUJO DE USUARIO DEMO

```
1. Abrir index.html
   ↓
2. Ver pantalla de login con info demo
   ┌────────────────────────────────┐
   │ 🎮 MODO DEMO                   │
   │ Email: demo@nfl.com            │
   │ Password: demo123              │
   └────────────────────────────────┘
   ↓
3. Ingresar credenciales demo
   ↓
4. Sistema detecta usuario de prueba
   ↓
5. Login exitoso ✅
   ↓
6. Redirige a Dashboard
   ↓
7. Carga datos de prueba
   ┌────────────────────────────────┐
   │ Mi Dashboard                   │
   │ Posición: #1                   │
   │ Puntos: 84                     │
   │ WC: 30  DIV: 24                │
   └────────────────────────────────┘
   ↓
8. Navega a Leaderboard
   ┌────────────────────────────────┐
   │ Podio                          │
   │ 🥇 Usuario Demo - 84 pts       │
   │ 🥈 Juan Pérez - 80 pts         │
   │ 🥉 María López - 74 pts        │
   └────────────────────────────────┘
   ↓
9. Navega a Admin
   ┌────────────────────────────────┐
   │ Panel de Administración        │
   │ Participantes: 12              │
   │ Promedio: 63                   │
   │ Máximo: 84                     │
   └────────────────────────────────┘
```

---

## 💡 VENTAJAS DEL MODO DEMO

### ✅ Para Desarrolladores
- Prueba la interfaz inmediatamente
- No necesitas configurar Google Sheets
- Ve cómo se ve con datos reales
- Prueba todas las funcionalidades

### ✅ Para Usuarios Finales
- Muestra la aplicación sin backend
- Demo en vivo sin base de datos
- Presentaciones y demostraciones
- Testing de UI/UX

### ✅ Para Evaluación
- Evalúa el diseño sin configuración
- Prueba flujos de usuario
- Verifica responsive design
- Testing de funcionalidades

---

## 🔀 CAMBIAR ENTRE MODOS

### Modo Demo (sin configuración)
```javascript
// js/config.js
const CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI',           // Sin cambiar
    SPREADSHEET_ID: 'TU_SPREADSHEET_ID_AQUI'  // Sin cambiar
};
```

**Login:** demo@nfl.com / demo123
**Datos:** Automáticamente usa datos de prueba

### Modo Real (con Google Sheets)
```javascript
// js/config.js
const CONFIG = {
    API_KEY: 'AIzaSyABC123...',           // Tu API Key real
    SPREADSHEET_ID: '1BxiMVs0XRA5...'    // Tu Spreadsheet ID real
};
```

**Login:** Cualquier usuario de tu hoja "Users"
**Datos:** Lee desde Google Sheets

### Modo Híbrido (ambos)
**Configuración:** Google Sheets configurado
**Login:** 
- demo@nfl.com → Datos de prueba
- usuario@real.com → Datos de Google Sheets

¡Ambos funcionan al mismo tiempo!

---

## 📝 MODIFICAR DATOS DE PRUEBA

### Cambiar Usuario Demo

Edita `js/login.js`:

```javascript
const DEMO_USERS = [
    {
        email: 'tunuevo@email.com',    // ← Cambiar aquí
        password: 'tupassword',         // ← Cambiar aquí
        nombre: 'Tu',                   // ← Cambiar aquí
        apellido: 'Nombre',             // ← Cambiar aquí
        isAdmin: false
    }
];
```

### Cambiar Datos de Clasificación

Edita `js/dashboard.js` y `js/leaderboard.js`:

```javascript
const DEMO_STANDINGS = [
    { 
        ranking: 1, 
        nombre: 'Tu', 
        apellido: 'Nombre', 
        wildCard: 30, 
        divisional: 24, 
        conference: 18, 
        superBowl: 12, 
        totalPoints: 84, 
        premio: '1500' 
    },
    // Agregar más jugadores aquí...
];
```

### Cambiar Stats de Admin

Edita `js/admin.js`:

```javascript
const DEMO_ADMIN_DATA = {
    totalParticipants: 20,    // ← Cambiar aquí
    avgPoints: 70,            // ← Cambiar aquí
    maxPoints: 100            // ← Cambiar aquí
};
```

---

## 🎨 PERSONALIZACIÓN VISUAL

### Mensaje en Login

Edita `index.html`:

```html
<div class="info-message">
    <strong>🎮 TU MENSAJE</strong><br>
    Tu texto aquí<br>
    <strong>Email:</strong> tu@email.com<br>
    <strong>Password:</strong> tupassword
</div>
```

---

## 🐛 TROUBLESHOOTING

### "No puedo ver los datos de prueba"

**Causa:** Google Sheets configurado correctamente

**Solución:** El sistema prioriza Google Sheets. Si quieres forzar datos de prueba, desconecta internet o usa credenciales demo.

### "El usuario demo no funciona"

**Verifica:**
1. Email exacto: `demo@nfl.com`
2. Password exacto: `demo123`
3. No hay espacios extra
4. Console (F12) para ver errores

### "Quiero solo modo demo"

**Opción A:** No configures Google Sheets
- Deja CONFIG sin cambiar
- Solo funcionarán usuarios demo

**Opción B:** Comenta el código de Sheets
En cada archivo JS, comenta el intento de leer Sheets:
```javascript
// try {
//     const standings = await readSheet('Standings', 'A2:I100');
//     ...
// } catch (error) { ... }
```

---

## 🎯 CASOS DE USO

### 1. Demo para Cliente
```
1. Abre index.html
2. Login: demo@nfl.com / demo123
3. Muestra interfaz completa
4. Cliente ve diseño y funcionalidad
5. Sin necesidad de backend
```

### 2. Desarrollo UI
```
1. Trabaja en estilos (CSS)
2. Prueba con datos demo
3. No necesitas Google Sheets
4. Iteración rápida
```

### 3. Testing
```
1. Prueba flujos de usuario
2. Verifica responsive
3. Testing de interacciones
4. Sin dependencias externas
```

### 4. Presentaciones
```
1. Presentación en vivo
2. Sin configuración previa
3. Datos consistentes
4. Sin riesgo de fallos de red
```

---

## ✅ CHECKLIST MODO DEMO

- [ ] Abrí `index.html`
- [ ] Vi el mensaje "MODO DEMO" en login
- [ ] Usé `demo@nfl.com` / `demo123`
- [ ] Login funcionó ✅
- [ ] Dashboard muestra mis datos (#1, 84 pts)
- [ ] Leaderboard muestra 12 jugadores
- [ ] Podio muestra top 3
- [ ] Admin muestra estadísticas
- [ ] Navegación funciona perfecta
- [ ] TODO funciona sin Google Sheets ✅

---

## 🚀 SIGUIENTE PASO

### Si quieres conectar Google Sheets:

1. Lee `README.md`
2. Configura Google Sheets API
3. Edita `js/config.js`
4. Crea hojas "Users" y "Standings"
5. Haz el Sheet público

### Si quieres solo modo demo:

¡Ya está listo! Solo abre `index.html` 🎉

---

**¡Disfruta del Modo Demo!** 🏈

Sin configuración. Sin dependencias. Solo funciona. ✨
