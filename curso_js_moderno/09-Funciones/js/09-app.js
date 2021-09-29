const player = {
    toPlay: function (id) {
        console.log(`Playing the song with if ${id}`);
    },
    toPause: function () {
        console.log("Pausing...");
    },
    toDelete: function (id) {
        console.log(`Deleting the song with id ${id}`);
    },
    createPlayList: function (name) {
        console.log(`Creating playlist ${name}`);
    },
    toPlayTheList: function (name) {
        console.log(`Playing the ${name} playlist`);
    },
};

player.toPlay(30);
player.toPlay(20);
player.toPause();

player.createPlayList("The Best Playlist");
player.createPlayList("The Worst Playlist");
player.toPlayTheList("The Best Playlist");
