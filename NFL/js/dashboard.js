// ===== SCREEN: DASHBOARD =====

async function loadDashboard() {
    // Actualizar nombre de usuario en header
    if (currentUser) {
        document.getElementById('userName').textContent = `${currentUser.nombre} ${currentUser.apellido}`;
    }
    
    // Activar nav item
    setActiveNav('dashboard');
    
    try {
        showLoading('dashboardLoading');
        
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

        // Update user stats
        const userStats = players.find(p => 
            p.nombre.toLowerCase() === currentUser.nombre.toLowerCase() &&
            p.apellido.toLowerCase() === currentUser.apellido.toLowerCase()
        );

        if (userStats) {
            document.getElementById('userRank').textContent = `#${userStats.ranking}`;
            document.getElementById('userPoints').textContent = userStats.totalPoints;
            document.getElementById('userWildCard').textContent = userStats.wildCard;
            document.getElementById('userDivisional').textContent = userStats.divisional;
        }

        // Top 10 table
        const tbody = document.getElementById('dashboardTableBody');
        tbody.innerHTML = '';
        
        players.slice(0, 10).forEach(player => {
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
            `;
            tbody.appendChild(row);
        });

        hideLoading('dashboardLoading');
        document.getElementById('dashboardTable').classList.remove('hidden');
    } catch (error) {
        console.error('Error loading dashboard:', error);
        hideLoading('dashboardLoading');
    }
}

function setActiveNav(section) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const navItems = document.querySelectorAll('.nav-item');
    if (section === 'dashboard' && navItems[0]) navItems[0].classList.add('active');
    if (section === 'leaderboard' && navItems[1]) navItems[1].classList.add('active');
    if (section === 'admin' && navItems[2]) navItems[2].classList.add('active');
}

function showDashboard() {
    document.getElementById('dashboardSection').classList.remove('hidden');
    document.getElementById('leaderboardSection').classList.add('hidden');
    document.getElementById('adminSection').classList.add('hidden');
    setActiveNav('dashboard');
    loadDashboard();
}
