// ===== CONFIGURACIÓN GOOGLE SHEETS =====
const CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI',
    SPREADSHEET_ID: 'TU_SPREADSHEET_ID_AQUI'
};

// ===== USUARIOS DE PRUEBA (Sin necesidad de Google Sheets) =====
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
    }
];

// ===== DATOS DE PRUEBA (Simulan Google Sheets) =====
const TEST_STANDINGS = [
    { ranking: 1, nombre: 'Usuario', apellido: 'Demo', wildCard: 24, divisional: 28, conference: 16, superBowl: 20, totalPoints: 88, premio: '1500' },
    { ranking: 2, nombre: 'María', apellido: 'López', wildCard: 22, divisional: 26, conference: 14, superBowl: 18, totalPoints: 80, premio: '500' },
    { ranking: 3, nombre: 'Carlos', apellido: 'García', wildCard: 20, divisional: 24, conference: 12, superBowl: 16, totalPoints: 72, premio: '200' },
    { ranking: 4, nombre: 'Ana', apellido: 'Martínez', wildCard: 18, divisional: 22, conference: 10, superBowl: 14, totalPoints: 64, premio: '' },
    { ranking: 5, nombre: 'Luis', apellido: 'Rodríguez', wildCard: 16, divisional: 20, conference: 8, superBowl: 12, totalPoints: 56, premio: '' },
    { ranking: 6, nombre: 'Sofia', apellido: 'Hernández', wildCard: 14, divisional: 18, conference: 6, superBowl: 10, totalPoints: 48, premio: '' },
    { ranking: 7, nombre: 'Diego', apellido: 'González', wildCard: 12, divisional: 16, conference: 4, superBowl: 8, totalPoints: 40, premio: '' },
    { ranking: 8, nombre: 'Laura', apellido: 'Pérez', wildCard: 10, divisional: 14, conference: 2, superBowl: 6, totalPoints: 32, premio: '' },
    { ranking: 9, nombre: 'Miguel', apellido: 'Sánchez', wildCard: 8, divisional: 12, conference: 2, superBowl: 4, totalPoints: 26, premio: '' },
    { ranking: 10, nombre: 'Carmen', apellido: 'Ramírez', wildCard: 6, divisional: 10, conference: 2, superBowl: 2, totalPoints: 20, premio: '' }
];

// ===== MODO DE PRUEBA =====
let USE_TEST_MODE = true; // Cambiar a false para usar Google Sheets real

// ===== FUNCIONES GOOGLE SHEETS API =====
async function readSheet(sheetName, range = '') {
    // Si está en modo de prueba, usar datos locales
    if (USE_TEST_MODE) {
        console.log(`📊 MODO PRUEBA: Leyendo ${sheetName} localmente`);
        
        if (sheetName === 'Users') {
            return TEST_USERS.map(u => [u.email, u.password, u.nombre, u.apellido, u.isAdmin ? 'TRUE' : 'FALSE']);
        }
        
        if (sheetName === 'Standings') {
            return TEST_STANDINGS.map(s => [
                s.ranking, s.nombre, s.apellido, s.wildCard, s.divisional, 
                s.conference, s.superBowl, s.totalPoints, s.premio
            ]);
        }
        
        return [];
    }
    
    // Modo normal: usar Google Sheets API
    const fullRange = range ? `${sheetName}!${range}` : sheetName;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.SPREADSHEET_ID}/values/${fullRange}?key=${CONFIG.API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.values || [];
    } catch (error) {
        console.error('Error reading sheet:', error);
        return [];
    }
}

async function appendToSheet(sheetName, values) {
    // Nota: Append requiere OAuth. Por ahora mostraremos mensaje al usuario
    console.log('Para agregar usuarios, edita directamente Google Sheets');
    console.log('Datos a agregar:', values);
    return null;
}

// ===== ESTADO DE LA APLICACIÓN =====
let currentUser = null;

function saveUser(user) {
    currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
}

function loadUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        currentUser = JSON.parse(userStr);
        return currentUser;
    }
    return null;
}

function clearUser() {
    currentUser = null;
    localStorage.removeItem('user');
}

// ===== NAVEGACIÓN ENTRE SCREENS =====
function showScreen(screenName) {
    // Ocultar todos los screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    
    // Mostrar el screen solicitado
    const targetScreen = document.getElementById(screenName + 'Screen');
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
}

// ===== UTILIDADES =====
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
}

function showLoading(elementId) {
    const loadingElement = document.getElementById(elementId);
    if (loadingElement) {
        loadingElement.classList.remove('hidden');
    }
}

function hideLoading(elementId) {
    const loadingElement = document.getElementById(elementId);
    if (loadingElement) {
        loadingElement.classList.add('hidden');
    }
}
