function gamesManager() {
    const games = ['GTA 5', 'Witcher 3', 'Sims'];

    return {
        printGamesList: function() {
            console.log(games);
        },
        addGameToList: function(game) {
            games.push(game)
        }
    }
}

const gm = new gamesManager();
gm.printGamesList();
gm.addGameToList('Ori')
gm.printGamesList();