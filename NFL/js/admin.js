// ===== SCREEN: ADMIN =====

async function loadAdmin() {
    setActiveNav('admin');
    
    try {
        const standings = await readSheet('Standings', 'A2:I100');
        const players = standings
            .filter(row => row[0] && row[1])
            .map(row => ({
                totalPoints: parseInt(row[7]) || 0
            }));

        document.getElementById('totalParticipants').textContent = players.length;
        
        const avg = Math.round(players.reduce((sum, p) => sum + p.totalPoints, 0) / players.length);
        document.getElementById('avgPoints').textContent = avg;
        
        const max = Math.max(...players.map(p => p.totalPoints));
        document.getElementById('maxPoints').textContent = max;
    } catch (error) {
        console.error('Error loading admin:', error);
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
