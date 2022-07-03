function songs(songsData) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsList = [];
    let numberOfSongs = songsData.shift();
    let playlist = songsData.pop();
    
    for(let i = 0; i < songsData.length; i++){
        let [typeList, name, time] = songsData[i].split("_");
        let song = new Song(typeList, name, time);
        songsList.push(song);
    }

    if(playlist === "all"){
        songsList.forEach((song) => console.log(song.name));
    } else {
        let filteredSongs = songsList.filter((song) => song.typeList === playlist);
        filteredSongs.forEach((song) => console.log(song.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);