function addToPlaylist(playlist, episode){
    return playlist.concat(episode);
}

function removeFromPlaylist(playlist, episode){
    return playlist.filter(ep => ep !== episode);
}

function getNextEpisodeInPlaylist(playlist){
    return playlist[0];
}

function bingeWatch(playlist){
    if(playlist[0]){
        playlist.shift();
        bingeWatch(playlist);
    } else{
        return 'Please let there be more!'
    }
}