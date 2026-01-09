// ===== SCREEN: LEADERBOARD =====

// Datos de prueba (DEMO MODE) - reutilizamos los mismos del dashboard
const DEMO_STANDINGS_LEADERBOARD = [
    { ranking: 1, nombre: 'Usuario', apellido: 'Demo', wildCard: 30, divisional: 24, conference: 18, superBowl: 12, totalPoints: 84, premio: '1500' },
    { ranking: 2, nombre: 'Juan', apellido: 'Pérez', wildCard: 28, divisional: 22, conference: 16, superBowl: 14, totalPoints: 80, premio: '500' },
    { ranking: 3, nombre: 'María', apellido: 'López', wildCard: 26, divisional: 20, conference: 18, superBowl: 10, totalPoints: 74, premio: '200' },
    { ranking: 4, nombre: 'Pedro', apellido: 'García', wildCard: 24, divisional: 18, conference: 14, superBowl: 16, totalPoints: 72, premio: '' },
    { ranking: 5, nombre: 'Ana', apellido: 'Martínez', wildCard: 22, divisional: 20, conference: 12, superBowl: 14, totalPoints: 68, premio: '' },
    { ranking: 6, nombre: 'Luis', apellido: 'Rodríguez', wildCard: 20, divisional: 16, conference: 16, superBowl: 12, totalPoints: 64, premio: '' },
    { ranking: 7, nombre: 'Sofia', apellido: 'Hernández', wildCard: 18, divisional: 18, conference: 14, superBowl: 10, totalPoints: 60, premio: '' },
    { ranking: 8, nombre: 'Carlos', apellido: 'González', wildCard: 22, divisional: 14, conference: 12, superBowl: 10, totalPoints: 58, premio: '' },
    { ranking: 9, nombre: 'Laura', apellido: 'Díaz', wildCard: 16, divisional: 16, conference: 14, superBowl: 8, totalPoints: 54, premio: '' },
    { ranking: 10, nombre: 'Diego', apellido: 'Torres', wildCard: 18, divisional: 12, conference: 10, superBowl: 12, totalPoints: 52, premio: '' },
    { ranking: 11, nombre: 'Carmen', apellido: 'Ruiz', wildCard: 14, divisional: 14, conference: 12, superBowl: 10, totalPoints: 50, premio: '' },
    { ranking: 12, nombre: 'Miguel', apellido: 'Sánchez', wildCard: 16, divisional: 12, conference: 10, superBowl: 10, totalPoints: 48, premio: '' }
];

async function loadLeaderboard() {
    setActiveNav('leaderboard');
    
    try {
        showLoading('leaderboardLoading');
        
        let players = [];
        
        // Intentar cargar desde Google Sheets
        try {
            const standings = await readSheet('Standings', 'A2:I100');
            if (standings && standings.length > 0) {
                console.log('✅ Datos desde Google Sheets');
                players = standings
                    .filter(row => row[0] && row[1])
                    .map(row => ({
                        ranking: parseInt(row[0]) || 0,
                        nombre: row[1] || '',
                        apellido: row[2] || '',
                        wildCard: parseInt(row[3]) || 0,
                        divisional: parseInt(row[4]) || 0,
                        conference: parseInt(row[5]) || 0,
                        superBowl: parseInt(row[6]) || 0,
                        totalPoints: parseInt(row[7]) || 0,
                        premio: row[8] || ''
                    }));
            }
        } catch (error) {
            console.log('⚠️ No se pudo cargar desde Google Sheets, usando datos de prueba');
        }
        
        // Si no hay datos de Sheets, usar datos de prueba
        if (players.length === 0) {
            console.log('✅ Usando datos de prueba (DEMO MODE)');
            players = DEMO_STANDINGS_LEADERBOARD;
        }

        // Podium
        const podium = document.getElementById('podium');
        podium.innerHTML = '';
        
        players.slice(0, 3).forEach((player, index) => {
            const icons = ['🥇', '🥈', '🥉'];
            const classes = ['podium-1', 'podium-2', 'podium-3'];
            
            const podiumItem = document.createElement('div');
            podiumItem.className = `podium-item ${classes[index]}`;
            podiumItem.innerHTML = `
                <div class="podium-icon">${icons[index]}</div>
                <div class="podium-rank">#${player.ranking}</div>
                <div class="podium-name">${player.nombre} ${player.apellido}</div>
                <div class="podium-points">${player.totalPoints} pts</div>
            `;
            podium.appendChild(podiumItem);
        });

        // Full table
        const tbody = document.getElementById('leaderboardTableBody');
        tbody.innerHTML = '';
        
        players.forEach(player => {
            const row = document.createElement('tr');
            const rankClass = player.ranking === 1 ? 'rank-1' : 
                             player.ranking === 2 ? 'rank-2' : 
                             player.ranking === 3 ? 'rank-3' : '';
            
            row.innerHTML = `
                <td><span class="rank ${rankClass}">#${player.ranking}</span></td>
                <td><span class="player-name">${player.nombre} ${player.apellido}</span></td>
                <td>${player.wildCard}</td>
                <td>${player.divisional}</td>
                <td>${player.conference}</td>
                <td>${player.superBowl}</td>
                <td><span class="points">${player.totalPoints}</span></td>
                <td>${player.premio ? '$' + player.premio : '-'}</td>
            `;
            tbody.appendChild(row);
        });

        hideLoading('leaderboardLoading');
        document.getElementById('leaderboardTable').classList.remove('hidden');
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        hideLoading('leaderboardLoading');
    }
}

function showLeaderboard() {
    document.getElementById('dashboardSection').classList.add('hidden');
    document.getElementById('leaderboardSection').classList.remove('hidden');
    document.getElementById('adminSection').classList.add('hidden');
    setActiveNav('leaderboard');
    loadLeaderboard();
}
