function hideCurrentMovie(){
    var currentmovie = document.getElementById('dangchieu');
    var upcoming = document.getElementById('sapchieu');

    currentmovie.style.display='none';
    upcoming.style.display='block';
}

function hideUpcomingMovie(){
    var currentmovie = document.getElementById('dangchieu');
    var upcoming = document.getElementById('sapchieu');

    currentmovie.style.display='block';
    upcoming.style.display='none';
}
