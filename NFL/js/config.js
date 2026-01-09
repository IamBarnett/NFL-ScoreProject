// ===== CONFIGURACIÓN GOOGLE SHEETS =====
const CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI',
    SPREADSHEET_ID: 'TU_SPREADSHEET_ID_AQUI'
};

// ===== FUNCIONES GOOGLE SHEETS API =====
async function readSheet(sheetName, range = '') {
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
