# 🎮 MODO DE PRUEBA - DEMO SIN GOOGLE SHEETS

## ✨ ¿Qué es esto?

Ahora puedes **probar la interfaz completa SIN configurar Google Sheets**.

El sistema incluye:
- ✅ 2 usuarios de prueba hardcodeados
- ✅ 10 jugadores de ejemplo en el leaderboard
- ✅ Datos simulados localmente
- ✅ **Funciona inmediatamente** sin configuración

---

## 🚀 USO INMEDIATO (1 PASO)

### Solo abre `index.html` y listo!

**No necesitas:**
- ❌ Configurar Google Cloud
- ❌ Crear API Key
- ❌ Configurar Google Sheets
- ❌ Editar ningún archivo

**¡Funciona de inmediato!** 🎉

---

## 👤 USUARIOS DE PRUEBA

### Usuario Normal
```
Email: demo@nfl.com
Password: demo123

Posición: #1 (88 puntos)
```

### Usuario Admin
```
Email: admin@nfl.com
Password: admin123

Posición: No está en el ranking (solo admin)
```

---

## 🎯 CÓMO PROBAR

### 1️⃣ Abre `index.html`
Doble click o arrastra a Chrome/Safari

### 2️⃣ Login como demo
```
Email: demo@nfl.com
Password: demo123
```

### 3️⃣ Explora la interfaz
- ✅ **Dashboard:** Verás tus stats (#1 con 88 puntos)
- ✅ **Leaderboard:** Clasificación completa con 10 jugadores
- ✅ **Admin:** Estadísticas generales

### 4️⃣ Prueba el registro
- Click en "Regístrate aquí"
- Llena el formulario
- Verás el mensaje de éxito

### 5️⃣ Logout y prueba admin
```
Email: admin@nfl.com
Password: admin123
```

---

## 📊 DATOS DE PRUEBA INCLUIDOS

### Usuarios (2)
```javascript
1. demo@nfl.com / demo123 (Usuario normal)
2. admin@nfl.com / admin123 (Admin)
```

### Leaderboard (10 jugadores)
```
#1  Usuario Demo      88 pts  $1500
#2  María López       80 pts  $500
#3  Carlos García     72 pts  $200
#4  Ana Martínez      64 pts
#5  Luis Rodríguez    56 pts
#6  Sofia Hernández   48 pts
#7  Diego González    40 pts
#8  Laura Pérez       32 pts
#9  Miguel Sánchez    26 pts
#10 Carmen Ramírez    20 pts
```

El usuario "Usuario Demo" está en la posición #1 con 88 puntos.

---

## 🔧 CAMBIAR A MODO REAL (Google Sheets)

Cuando quieras conectar con Google Sheets real:

### 1️⃣ Edita `js/config.js`

Busca esta línea (al final del archivo):
```javascript
let USE_TEST_MODE = true; // Cambiar a false para usar Google Sheets real
```

Cámbiala a:
```javascript
let USE_TEST_MODE = false; // Ahora usa Google Sheets
```

### 2️⃣ Configura tus credenciales

En el mismo archivo, edita:
```javascript
const CONFIG = {
    API_KEY: 'TU_API_KEY_REAL',
    SPREADSHEET_ID: 'TU_SPREADSHEET_ID_REAL'
};
```

### 3️⃣ Configura Google Sheets

Sigue las instrucciones del README.md para:
- Crear API Key
- Configurar hojas "Users" y "Standings"
- Hacer el Sheet público

### 4️⃣ ¡Listo!

Ahora usará datos reales de Google Sheets.

---

## 🎨 PERSONALIZAR DATOS DE PRUEBA

Si quieres cambiar los datos de prueba:

### Edita `js/config.js`

**Agregar más usuarios de prueba:**
```javascript
const TEST_USERS = [
    {
        email: 'demo@nfl.com',
        password: 'demo123',
        nombre: 'Usuario',
        apellido: 'Demo',
        isAdmin: false
    },
    {
        email: 'admin@nfl.com',
        password: 'admin123',
        nombre: 'Admin',
        apellido: 'NFL',
        isAdmin: true
    },
    // Agregar más aquí:
    {
        email: 'tuusuario@email.com',
        password: 'tupass',
        nombre: 'Tu',
        apellido: 'Nombre',
        isAdmin: false
    }
];
```

**Modificar leaderboard:**
```javascript
const TEST_STANDINGS = [
    { 
        ranking: 1, 
        nombre: 'Usuario', 
        apellido: 'Demo', 
        wildCard: 24, 
        divisional: 28, 
        conference: 16, 
        superBowl: 20, 
        totalPoints: 88, 
        premio: '1500' 
    },
    // Agregar más jugadores aquí
];
```

---

## ✅ VENTAJAS DEL MODO DE PRUEBA

| Ventaja | Descripción |
|---------|-------------|
| 🚀 **Inmediato** | Funciona sin configuración |
| 👤 **Usuarios listos** | 2 usuarios predefinidos |
| 📊 **Datos completos** | 10 jugadores en leaderboard |
| 🎨 **Prueba diseño** | Ve la interfaz completa |
| 🔧 **No requiere API** | Sin necesidad de Google Cloud |
| 💡 **Educativo** | Entiende cómo funciona |
| ⚡ **Rápido** | Sin latencia de API |
| 🎯 **Desarrollo** | Ideal para testing |

---

## 🎬 DEMOSTRACIÓN

### Flujo completo:

1. **Abre index.html**
   ```
   No necesitas nada más
   ```

2. **Login**
   ```
   Email: demo@nfl.com
   Password: demo123
   ```

3. **Dashboard**
   ```
   🏆 Posición: #1
   ⭐ Puntos: 88
   🎯 Wild Card: 24
   🔥 Divisional: 28
   ```

4. **Leaderboard**
   ```
   Podio:
   🥈 María (80 pts)
   🥇 Usuario Demo (88 pts) ← Tú
   🥉 Carlos (72 pts)
   
   + Tabla completa con 10 jugadores
   ```

5. **Admin**
   ```
   👥 10 participantes
   📊 Promedio: 56 pts
   🎯 Máximo: 88 pts
   ```

6. **Logout y prueba registro**
   ```
   Registra un usuario nuevo
   Ve el mensaje de éxito
   ```

---

## 🔍 DEBUGGING

Abre la consola del navegador (F12) y verás:

```
📊 MODO PRUEBA: Leyendo Users localmente
📊 MODO PRUEBA: Leyendo Standings localmente
```

Esto confirma que está usando datos locales.

---

## 📝 NOTAS IMPORTANTES

### ⚠️ Limitaciones del modo de prueba:

1. **No persiste datos:**
   - El registro muestra el mensaje pero no guarda usuarios
   - Los datos son estáticos (no cambian)

2. **Usuarios fijos:**
   - Solo los 2 usuarios predefinidos pueden loguearse
   - No puedes crear usuarios nuevos que funcionen

3. **Leaderboard estático:**
   - Los 10 jugadores son siempre los mismos
   - Los puntos no cambian

### ✅ Para qué SÍ sirve:

1. **Probar la interfaz completa**
2. **Ver el diseño y navegación**
3. **Entender el flujo de la app**
4. **Desarrollar sin dependencias**
5. **Demostrar a clientes/amigos**
6. **Testing rápido de cambios**

---

## 🚀 CASOS DE USO

### Para Desarrolladores:
```
✅ Desarrollar sin configurar APIs
✅ Testing rápido
✅ Debuggear sin latencia
✅ Trabajar offline
```

### Para Demostración:
```
✅ Mostrar a clientes
✅ Presentar el proyecto
✅ Compartir sin configuración
✅ Portfolio
```

### Para Aprendizaje:
```
✅ Entender el código
✅ Ver cómo funciona
✅ Modificar y probar
✅ Aprender sin complicaciones
```

---

## 🎯 RESUMEN

```
┌─────────────────────────────────────┐
│  MODO DE PRUEBA ACTIVADO            │
├─────────────────────────────────────┤
│                                     │
│  ✅ Funciona SIN Google Sheets      │
│  ✅ 2 usuarios listos               │
│  ✅ 10 jugadores en leaderboard     │
│  ✅ Todos los features funcionan    │
│                                     │
│  📧 demo@nfl.com / demo123          │
│  🔐 admin@nfl.com / admin123        │
│                                     │
│  Solo abre index.html ¡Ya!          │
└─────────────────────────────────────┘
```

---

## 🔄 CAMBIAR DE MODO

### De Prueba → Real:
```javascript
// En js/config.js
let USE_TEST_MODE = false;
```

### De Real → Prueba:
```javascript
// En js/config.js
let USE_TEST_MODE = true;
```

---

**¡Disfruta probando la interfaz sin configurar nada!** 🎉

Usuarios listos:
- 📧 **demo@nfl.com** / demo123 (Usuario #1)
- 🔐 **admin@nfl.com** / admin123 (Admin)
