// ===== SCREEN: ADMIN =====

// Datos de prueba (DEMO MODE)
const DEMO_ADMIN_DATA = {
    totalParticipants: 12,
    avgPoints: 63,
    maxPoints: 84
};

async function loadAdmin() {
    setActiveNav('admin');
    
    try {
        let stats = null;
        
        // Intentar cargar desde Google Sheets
        try {
            const standings = await readSheet('Standings', 'A2:I100');
            if (standings && standings.length > 0) {
                console.log('✅ Datos desde Google Sheets');
                const players = standings
                    .filter(row => row[0] && row[1])
                    .map(row => ({
                        totalPoints: parseInt(row[7]) || 0
                    }));

                stats = {
                    totalParticipants: players.length,
                    avgPoints: Math.round(players.reduce((sum, p) => sum + p.totalPoints, 0) / players.length),
                    maxPoints: Math.max(...players.map(p => p.totalPoints))
                };
            }
        } catch (error) {
            console.log('⚠️ No se pudo cargar desde Google Sheets, usando datos de prueba');
        }
        
        // Si no hay datos de Sheets, usar datos de prueba
        if (!stats) {
            console.log('✅ Usando datos de prueba (DEMO MODE)');
            stats = DEMO_ADMIN_DATA;
        }

        document.getElementById('totalParticipants').textContent = stats.totalParticipants;
        document.getElementById('avgPoints').textContent = stats.avgPoints;
        document.getElementById('maxPoints').textContent = stats.maxPoints;
    } catch (error) {
        console.error('Error loading admin:', error);
        // En caso de error, usar datos de prueba
        document.getElementById('totalParticipants').textContent = DEMO_ADMIN_DATA.totalParticipants;
        document.getElementById('avgPoints').textContent = DEMO_ADMIN_DATA.avgPoints;
        document.getElementById('maxPoints').textContent = DEMO_ADMIN_DATA.maxPoints;
    }
}

function showAdmin() {
    document.getElementById('dashboardSection').classList.add('hidden');
    document.getElementById('leaderboardSection').classList.add('hidden');
    document.getElementById('adminSection').classList.remove('hidden');
    setActiveNav('admin');
    loadAdmin();
}

function logout() {
    clearUser();
    showScreen('login');
}
