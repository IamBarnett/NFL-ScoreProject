// ===== SCREEN: LEADERBOARD =====

async function loadLeaderboard() {
    setActiveNav('leaderboard');
    
    try {
        showLoading('leaderboardLoading');
        
        const standings = await readSheet('Standings', 'A2:I100');
        const players = standings
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
