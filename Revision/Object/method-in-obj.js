let teamIndia = {
    country: "India",
    board: "BCCI",
    captain: "Rohit Sharma",
    viceCaptain: "KL Rahul",
    totalPlayer: 16,
    player: [],

    addPlayer: function (name) {
        this.player.push(name);
    },

    showPlayer: function () {
        for (let i = 0; i < this.player.length; i++) {
            console.log(this.player[i]);
        }
    },

    info: function () {
        return `${this.totalPlayer} ${this.captain} ${this.viceCaptain}`;
    }
}


teamIndia.addPlayer("Virat Kohli");
teamIndia.addPlayer("KL Rahul");
teamIndia.addPlayer("Rohit Sharma");
teamIndia.addPlayer("Surya Kumar Yadav");

// teamIndia.showPlayer();


console.log(teamIndia.info())



