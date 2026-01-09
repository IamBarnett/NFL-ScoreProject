# 📊 DIAGRAMA DE ESTRUCTURA - NFL PLAYOFFS POLLA

## 🗂️ ESTRUCTURA DE ARCHIVOS

```
nfl-polla-modular/
│
├── index.html                 ← ARCHIVO PRINCIPAL (carga todo)
│
├── css/
│   └── styles.css            ← TODOS LOS ESTILOS
│
└── js/
    ├── config.js             ← Configuración + Google Sheets API
    ├── login.js              ← Pantalla de Login
    ├── register.js           ← Pantalla de Registro
    ├── dashboard.js          ← Pantalla de Dashboard
    ├── leaderboard.js        ← Pantalla de Leaderboard
    └── admin.js              ← Pantalla de Admin
```

---

## 🔄 FLUJO DE LA APLICACIÓN

```
┌─────────────────────────────────────────────────────────────┐
│                      INICIO (index.html)                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ¿Usuario logueado?
                              │
                ┌─────────────┴─────────────┐
                │                           │
               NO                          SÍ
                │                           │
                ▼                           ▼
    ┌───────────────────────┐   ┌──────────────────────┐
    │  SCREEN: LOGIN        │   │  SCREEN: MAIN        │
    │  (login.js)           │   │  (dashboard.js)      │
    ├───────────────────────┤   ├──────────────────────┤
    │ • Email               │   │ • Header             │
    │ • Password            │   │ • Navigation         │
    │ • [Ingresar]          │   │ • Dashboard Section  │
    │                       │   │ • Leaderboard Section│
    │ Link: Registrarse →   │   │ • Admin Section      │
    └───────────────────────┘   └──────────────────────┘
                │                           │
                │                           │
    Click "Registrarse"         Click navegación
                │                           │
                ▼                           ▼
    ┌───────────────────────┐   ┌──────────────────────┐
    │  SCREEN: REGISTER     │   │  Cambiar Sección     │
    │  (register.js)        │   │                      │
    ├───────────────────────┤   ├──────────────────────┤
    │ • Nombre              │   │ • Dashboard          │
    │ • Apellido            │   │ • Leaderboard        │
    │ • Email               │   │ • Admin              │
    │ • Password            │   │                      │
    │ • Confirmar Password  │   └──────────────────────┘
    │ • [Registrarse]       │
    │                       │
    │ Link: Login ←         │
    └───────────────────────┘
                │
    Registro exitoso
                │
                ▼
    ┌───────────────────────┐
    │  Mensaje de Éxito     │
    ├───────────────────────┤
    │ Datos para el admin:  │
    │ • Email               │
    │ • Password            │
    │ • Nombre              │
    │ • Apellido            │
    │                       │
    │ [Ir al Login]         │
    └───────────────────────┘
```

---

## 📱 PANTALLAS (SCREENS)

### 1. LOGIN SCREEN (`login.js`)
```
┌────────────────────────────────┐
│         🏈                     │
│    NFL PLAYOFFS                │
│ Polla 2025 - Super Bowl LIX   │
│                                │
│ Email: [____________]          │
│ Password: [____________]       │
│                                │
│     [  INGRESAR  ]             │
│                                │
│ ¿No tienes cuenta?             │
│ → Regístrate aquí              │
└────────────────────────────────┘
```

**Archivo:** `js/login.js`
**Función principal:** `initLogin()`
**Conecta con:** Google Sheets hoja "Users"

---

### 2. REGISTER SCREEN (`register.js`)
```
┌────────────────────────────────┐
│         📝                     │
│      REGISTRO                  │
│ Únete a la Polla NFL 2025     │
│                                │
│ Nombre: [____________]         │
│ Apellido: [____________]       │
│ Email: [____________]          │
│ Password: [____________]       │
│ Confirmar: [____________]      │
│                                │
│   [ REGISTRARSE ]              │
│                                │
│ ¿Ya tienes cuenta?             │
│ → Inicia sesión aquí           │
└────────────────────────────────┘

Después del registro:
┌────────────────────────────────┐
│   ✅ ¡Registro Exitoso!        │
│                                │
│ Datos del nuevo usuario:       │
│ Email: juan@email.com          │
│ Password: ******               │
│ Nombre: Juan                   │
│ Apellido: Pérez                │
│                                │
│ 📧 El admin debe agregar       │
│ estos datos a Google Sheets    │
│                                │
│   [ IR AL LOGIN ]              │
└────────────────────────────────┘
```

**Archivo:** `js/register.js`
**Función principal:** `initRegister()`
**Nota:** No escribe en Sheets (requiere OAuth), muestra datos al admin

---

### 3. MAIN SCREEN - DASHBOARD (`dashboard.js`)
```
┌─────────────────────────────────────────────────┐
│ Header: 🏈 NFL PLAYOFFS POLLA | Juan Pérez [Salir]│
├─────────────────────────────────────────────────┤
│ [Dashboard] [Leaderboard] [Admin]               │
├─────────────────────────────────────────────────┤
│                                                 │
│ Mi Dashboard                                    │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│ │ 🏆   │ │ ⭐   │ │ 🎯   │ │ 🔥   │           │
│ │ #1   │ │ 117  │ │  25  │ │  30  │           │
│ │ Pos  │ │ Pts  │ │  WC  │ │ DIV  │           │
│ └──────┘ └──────┘ └──────┘ └──────┘           │
│                                                 │
│ Top 10 Jugadores                                │
│ ┌───┬──────────┬────┬────┬────┬───┬─────┐     │
│ │ # │ Jugador  │ WC │DIV │CONF│ SB│Total│     │
│ ├───┼──────────┼────┼────┼────┼───┼─────┤     │
│ │ 1 │ Juan P   │ 25 │ 30 │ 14 │ 22│ 117 │     │
│ │ 2 │ María L  │ 23 │ 28 │ 12 │ 20│ 115 │     │
│ └───┴──────────┴────┴────┴────┴───┴─────┘     │
└─────────────────────────────────────────────────┘
```

**Archivo:** `js/dashboard.js`
**Funciones:**
- `loadDashboard()` - Carga datos del usuario y top 10
- `showDashboard()` - Muestra esta sección
**Conecta con:** Google Sheets hoja "Standings"

---

### 4. MAIN SCREEN - LEADERBOARD (`leaderboard.js`)
```
┌─────────────────────────────────────────────────┐
│ Header: 🏈 NFL PLAYOFFS POLLA | Juan Pérez [Salir]│
├─────────────────────────────────────────────────┤
│ [Dashboard] [Leaderboard] [Admin]               │
├─────────────────────────────────────────────────┤
│                                                 │
│ Podio                                           │
│   ┌─────┐    ┌─────┐    ┌─────┐               │
│   │ 🥈  │    │ 🥇  │    │ 🥉  │               │
│   │ #2  │    │ #1  │    │ #3  │               │
│   │María│    │Juan │    │Pedro│               │
│   │115pt│    │117pt│    │110pt│               │
│   └─────┘    └─────┘    └─────┘               │
│                                                 │
│ Clasificación Completa                          │
│ ┌───┬────────┬───┬───┬────┬───┬─────┬────┐   │
│ │ # │Jugador │WC │DIV│CONF│ SB│Total│ $  │   │
│ ├───┼────────┼───┼───┼────┼───┼─────┼────┤   │
│ │ 1 │Juan P  │ 25│ 30│ 14 │ 22│ 117 │1500│   │
│ └───┴────────┴───┴───┴────┴───┴─────┴────┘   │
└─────────────────────────────────────────────────┘
```

**Archivo:** `js/leaderboard.js`
**Funciones:**
- `loadLeaderboard()` - Carga clasificación completa
- `showLeaderboard()` - Muestra esta sección
**Conecta con:** Google Sheets hoja "Standings"

---

### 5. MAIN SCREEN - ADMIN (`admin.js`)
```
┌─────────────────────────────────────────────────┐
│ Header: 🏈 NFL PLAYOFFS POLLA | Juan Pérez [Salir]│
├─────────────────────────────────────────────────┤
│ [Dashboard] [Leaderboard] [Admin]               │
├─────────────────────────────────────────────────┤
│                                                 │
│ Panel de Administración                         │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│ │   👥     │ │   📊     │ │   🎯     │        │
│ │   68     │ │   95     │ │   117    │        │
│ │Participan│ │ Promedio │ │ Máximo   │        │
│ └──────────┘ └──────────┘ └──────────┘        │
│                                                 │
│ 📝 Para actualizar puntos, edita               │
│    directamente tu Google Sheet                │
└─────────────────────────────────────────────────┘
```

**Archivo:** `js/admin.js`
**Funciones:**
- `loadAdmin()` - Carga estadísticas generales
- `showAdmin()` - Muestra esta sección
- `logout()` - Cerrar sesión
**Conecta con:** Google Sheets hoja "Standings"

---

## 🔧 ARCHIVOS DE CONFIGURACIÓN

### `js/config.js`
```javascript
CONFIG = {
    API_KEY: '...',
    SPREADSHEET_ID: '...'
}

Funciones:
├── readSheet()        → Leer Google Sheets
├── appendToSheet()    → Agregar a Google Sheets
├── saveUser()         → Guardar usuario en localStorage
├── loadUser()         → Cargar usuario de localStorage
├── clearUser()        → Limpiar usuario
├── showScreen()       → Cambiar entre pantallas
└── Utilidades         → showError, hideError, etc.
```

---

## 📊 CONEXIÓN CON GOOGLE SHEETS

```
┌──────────────────────────────────────────────┐
│         GOOGLE SHEETS                        │
├──────────────────────────────────────────────┤
│                                              │
│  Hoja "Users"                                │
│  ┌─────────────────────────────────────┐    │
│  │ Email │ Pass │ Nombre │ Apellido │ Admin│
│  │admin@│admin │ Admin  │ User     │TRUE │
│  │user@ │pass  │ Juan   │ Pérez    │FALSE│
│  └─────────────────────────────────────┘    │
│           ▲                                  │
│           │ login.js lee usuarios            │
│           │ register.js verifica duplicados  │
│                                              │
│  Hoja "Standings"                            │
│  ┌──────────────────────────────────────┐   │
│  │Rank│Nombre│Apellido│WC│DIV│CONF│SB│$│   │
│  │ 1  │Juan  │Pérez   │25│30 │14  │22│$│   │
│  │ 2  │María │López   │23│28 │12  │20│$│   │
│  └──────────────────────────────────────┘   │
│           ▲                                  │
│           │ dashboard.js lee para stats      │
│           │ leaderboard.js lee para tabla    │
│           │ admin.js lee para estadísticas   │
└──────────────────────────────────────────────┘
```

---

## 🔄 NAVEGACIÓN ENTRE SCREENS

```javascript
// Desde cualquier lugar:
showScreen('login')      → Muestra pantalla de login
showScreen('register')   → Muestra pantalla de registro
showScreen('main')       → Muestra pantalla principal

// Dentro de main screen:
showDashboard()          → Muestra sección Dashboard
showLeaderboard()        → Muestra sección Leaderboard
showAdmin()              → Muestra sección Admin
```

---

## 🎯 FLUJO DE DATOS

### LOGIN
```
Usuario ingresa email/password
       ↓
login.js → readSheet('Users')
       ↓
Busca coincidencia
       ↓
saveUser() → localStorage
       ↓
showScreen('main')
       ↓
loadDashboard()
```

### REGISTRO
```
Usuario llena formulario
       ↓
Validaciones (password match, etc)
       ↓
register.js → readSheet('Users')
       ↓
Verifica que email no exista
       ↓
Muestra mensaje con datos
       ↓
Admin agrega manualmente a Sheets
       ↓
Usuario puede hacer login
```

### DASHBOARD
```
dashboard.js → readSheet('Standings')
       ↓
Procesa datos
       ↓
Busca stats del usuario actual
       ↓
Actualiza UI:
  • userRank
  • userPoints
  • userWildCard
  • userDivisional
       ↓
Genera tabla top 10
```

### LEADERBOARD
```
leaderboard.js → readSheet('Standings')
       ↓
Procesa datos
       ↓
Genera podio (top 3)
       ↓
Genera tabla completa
```

### ADMIN
```
admin.js → readSheet('Standings')
       ↓
Calcula estadísticas:
  • Total participantes
  • Promedio
  • Máximo
       ↓
Actualiza UI
```

---

## 📝 RESUMEN VISUAL

```
                    INDEX.HTML
                        │
         ┌──────────────┼──────────────┐
         │              │              │
      CSS/          JS/CONFIG      JS/SCREENS
   styles.css           │              │
                        │         ┌────┼────┬────┬────┐
                 Google Sheets    │    │    │    │    │
                    API          login register dash lead admin
                                   │    │    │    │    │
                                   └────┴────┴────┴────┘
                                          │
                                    GOOGLE SHEETS
                                    ├── Users
                                    └── Standings
```

---

## ✅ VENTAJAS DE ESTA ESTRUCTURA

1. **Modular** - Cada pantalla en su propio archivo
2. **Mantenible** - Fácil de editar cada sección
3. **Escalable** - Agregar nuevas pantallas es simple
4. **Organizado** - Carpetas css/ y js/ separadas
5. **Clean** - Un solo archivo HTML que carga todo
6. **Debugging fácil** - Sabes exactamente dónde buscar cada cosa

---

## 🎯 PARA AGREGAR NUEVA PANTALLA

1. Crear `js/nueva-pantalla.js`
2. Agregar HTML de la pantalla en `index.html`
3. Importar script en `index.html`
4. Usar `showScreen('nueva-pantalla')` para mostrarla

¡Así de simple! 🚀
