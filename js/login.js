// ===== SCREEN: LOGIN =====

// Usuario de prueba (DEMO MODE - sin necesidad de Google Sheets)
const DEMO_USERS = [
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

async function initLogin() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        hideError('loginError');
        
        // PRIMERO: Verificar si es usuario de prueba
        const demoUser = DEMO_USERS.find(u => 
            u.email.toLowerCase() === email.toLowerCase() && 
            u.password === password
        );
        
        if (demoUser) {
            console.log('✅ Login con usuario de prueba');
            const userData = {
                email: demoUser.email,
                nombre: demoUser.nombre,
                apellido: demoUser.apellido,
                isAdmin: demoUser.isAdmin
            };
            saveUser(userData);
            goToDashboard();
            return;
        }
        
        // SEGUNDO: Si no es usuario de prueba, intentar con Google Sheets
        try {
            const users = await readSheet('Users', 'A2:E100');
            const user = users.find(row => 
                row[0]?.toLowerCase() === email.toLowerCase() && 
                row[1] === password
            );

            if (user) {
                console.log('✅ Login con Google Sheets');
                const userData = {
                    email: user[0],
                    nombre: user[2],
                    apellido: user[3],
                    isAdmin: user[4] === 'TRUE'
                };
                
                saveUser(userData);
                goToDashboard();
            } else {
                showError('loginError', 'Credenciales inválidas. Intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error en login:', error);
            showError('loginError', 'Error al conectar con Google Sheets. Usa el usuario de prueba: demo@nfl.com / demo123');
        }
    });
}

function goToDashboard() {
    showScreen('main');
    loadDashboard();
}
