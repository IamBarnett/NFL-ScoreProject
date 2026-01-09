// ===== SCREEN: LOGIN =====

async function initLogin() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        hideError('loginError');
        
        try {
            const users = await readSheet('Users', 'A2:E100');
            const user = users.find(row => 
                row[0]?.toLowerCase() === email.toLowerCase() && 
                row[1] === password
            );

            if (user) {
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
            showError('loginError', 'Error al conectar con el servidor. Verifica tu configuración.');
        }
    });
}

function goToDashboard() {
    showScreen('main');
    loadDashboard();
}
