const player = {
    song: "",
    toPlay: (id) => console.log(`Playing the song with id ${id}`),
    toPause: () => console.log("Pausing..."),
    toDelete: (id) => console.log(`Deleting the song with id ${id}`),
    createPlayList: (name) => console.log(`Creating playlist ${name}`),
    toPlayTheList: (name) => console.log(`Playing the "${name}" playlist`),

    set newSong(song) {
        // To set values
        this.song = song;
        console.log(`Adding ${song}`);
    },

    get getSong() {
        // To get values
        console.log(this.song);
    },
};

player.newSong = "Enter Sandman";
player.getSong;

player.toPlay(30);
player.toPlay(20);
player.toPause();

player.createPlayList("The Best Playlist");
player.createPlayList("The Worst Playlist");
player.toPlayTheList("The Best Playlist");
