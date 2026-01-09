// ===== SCREEN: REGISTRO =====

async function initRegister() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        const nombre = document.getElementById('registerNombre').value;
        const apellido = document.getElementById('registerApellido').value;
        
        hideError('registerError');
        
        // Validaciones
        if (password !== confirmPassword) {
            showError('registerError', 'Las contraseñas no coinciden');
            return;
        }
        
        if (password.length < 6) {
            showError('registerError', 'La contraseña debe tener al menos 6 caracteres');
            return;
        }
        
        try {
            // Verificar si el email ya existe
            const users = await readSheet('Users', 'A2:E100');
            const existingUser = users.find(row => 
                row[0]?.toLowerCase() === email.toLowerCase()
            );
            
            if (existingUser) {
                showError('registerError', 'Este email ya está registrado');
                return;
            }
            
            // Mostrar mensaje de éxito y instrucciones
            document.getElementById('registerForm').classList.add('hidden');
            document.getElementById('registerSuccess').classList.remove('hidden');
            
            // Mostrar los datos para que el admin los agregue
            document.getElementById('newUserData').innerHTML = `
                <strong>Datos del nuevo usuario:</strong><br>
                Email: ${email}<br>
                Password: ${password}<br>
                Nombre: ${nombre}<br>
                Apellido: ${apellido}<br>
                isAdmin: FALSE
            `;
            
            console.log('Nuevo usuario para agregar:', {
                email, password, nombre, apellido, isAdmin: 'FALSE'
            });
            
        } catch (error) {
            console.error('Error en registro:', error);
            showError('registerError', 'Error al procesar el registro. Intenta de nuevo.');
        }
    });
}

function goToLogin() {
    // Limpiar formulario de registro
    document.getElementById('registerForm').reset();
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('registerSuccess').classList.add('hidden');
    
    showScreen('login');
}
