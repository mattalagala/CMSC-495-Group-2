exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('teams').del()
        .then(function () {
            // Seed division entries
            return knex('teams').insert([
                { id: 1, division_id: 4, name: 'Kansas City Chiefs', wins: 14, losses: 2, ties: 0, division_rank: 1, league_rank: 1 },
                { id: 2, division_id: 2, name: 'Buffalo Bills', wins: 13, losses: 3, ties: 0, division_rank: 1, league_rank: 2 },
                { id: 3, division_id: 5, name: 'Green Bay Packers', wins: 13, losses: 3, ties: 0, division_rank: 1, league_rank: 3 },
                { id: 4, division_id: 7, name: 'New Orleans Saints', wins: 12, losses: 4, ties: 0, division_rank: 1, league_rank: 4 },
                { id: 5, division_id: 1, name: 'Pittsburgh Steelers', wins: 12, losses: 4, ties: 0, division_rank: 1, league_rank: 5 },
                { id: 6, division_id: 8, name: 'Seattle Seahawks', wins: 12, losses: 4, ties: 0, division_rank: 1, league_rank: 6 },
                { id: 7, division_id: 1, name: 'Baltimore Ravens', wins: 11, losses: 5, ties: 0, division_rank: 2, league_rank: 7 },
                { id: 8, division_id: 1, name: 'Cleveland Browns', wins: 11, losses: 5, ties: 0, division_rank: 3, league_rank: 8 },
                { id: 9, division_id: 3, name: 'Indianapolis Colts', wins: 11, losses: 5, ties: 0, division_rank: 2, league_rank: 9 },
                { id: 10, division_id: 7, name: 'Tampa Bay Buccaneers', wins: 11, losses: 5, ties: 0, division_rank: 2, league_rank: 10 },
                { id: 11, division_id: 3, name: 'Tennessee Titans', wins: 11, losses: 5, ties: 0, division_rank: 1, league_rank: 11 },
                { id: 12, division_id: 8, name: 'Los Angeles Rams', wins: 10, losses: 6, ties: 0, division_rank: 2, league_rank: 12 },
                { id: 13, division_id: 2, name: 'Miami Dolphins', wins: 10, losses: 6, ties: 0, division_rank: 2, league_rank: 13 },
                { id: 14, division_id: 8, name: 'Arizona Cardinals', wins: 8, losses: 8, ties: 0, division_rank: 3, league_rank: 14 },
                { id: 15, division_id: 5, name: 'Chicago Bears', wins: 8, losses: 8, ties: 0, division_rank: 2, league_rank: 15 },
                { id: 16, division_id: 4, name: 'Las Vegas Raiders', wins: 8, losses: 8, ties: 0, division_rank: 2, league_rank: 16 },
                { id: 17, division_id: 4, name: 'Los Angeles Chargers', wins: 7, losses: 9, ties: 0, division_rank: 3, league_rank: 17 },
                { id: 18, division_id: 5, name: 'Minnisota Vikings', wins: 7, losses: 9, ties: 0, division_rank: 3, league_rank: 18 },
                { id: 19, division_id: 2, name: 'New England Patriots', wins: 7, losses: 9, ties: 0, division_rank: 3, league_rank: 19 },
                { id: 20, division_id: 6, name: 'Washington Football Team', wins: 7, losses: 9, ties: 0, division_rank: 1, league_rank: 20 },
                { id: 21, division_id: 6, name: 'Dallas Cowboys', wins: 6, losses: 10, ties: 0, division_rank: 3, league_rank: 21 },
                { id: 22, division_id: 6, name: 'New York Giants', wins: 6, losses: 10, ties: 0, division_rank: 2, league_rank: 22 },
                { id: 23, division_id: 8, name: 'San Francisco 49ers', wins: 6, losses: 10, ties: 0, division_rank: 4, league_rank: 23 },
                { id: 24, division_id: 7, name: 'Carolina Panthers', wins: 5, losses: 11, ties: 0, division_rank: 3, league_rank: 24 },
                { id: 25, division_id: 4, name: 'Denver Broncos', wins: 5, losses: 11, ties: 0, division_rank: 4, league_rank: 25 },
                { id: 26, division_id: 5, name: 'Detroit Lions', wins: 5, losses: 11, ties: 0, division_rank: 4, league_rank: 26 },
                { id: 27, division_id: 1, name: 'Cincinnati Bengals', wins: 4, losses: 11, ties: 1, division_rank: 4, league_rank: 27 },
                { id: 28, division_id: 6, name: 'Philidelphia Eagles', wins: 4, losses: 11, ties: 1, division_rank: 4, league_rank: 28 },
                { id: 29, division_id: 7, name: 'Atlanta Falcons', wins: 4, losses: 12, ties: 0, division_rank: 4, league_rank: 29 },
                { id: 30, division_id: 3, name: 'Houston Texans', wins: 4, losses: 12, ties: 0, division_rank: 3, league_rank: 30 },
                { id: 31, division_id: 2, name: 'New York Jets', wins: 2, losses: 14, ties: 0, division_rank: 4, league_rank: 31 },
                { id: 32, division_id: 3, name: 'Jacksonville Jaguars', wins: 1, losses: 15, ties: 0, division_rank: 4, league_rank: 32 },
            ]);
        });
};