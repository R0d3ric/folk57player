function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
	
    if (player.paused) {
        player.play();
        control.src = 'pause.png';
    } else {
        player.pause();
        control.src = 'play.png';
    }
}

function resume(idPlayer,control) {
    var player = document.querySelector('#' + idPlayer);
    
    document.getElementById("boutonPlay").src = 'play.png';

    player.currentTime = 0;
    player.pause();
}

function volume(idPlayer, vol) {
    var player = document.querySelector('#' + idPlayer);
	
    player.volume = vol;
}

function update(player) {
    var date = new Date();
    var heure = date.getHours();
    console.log(heure);
    var percent = 0;
    if(heure>15)
        {
            percent = 50 + Math.ceil( (date.getMinutes()/60)*50 );
        }
    else{
            percent = Math.ceil( (date.getMinutes()/60)*50 );
    }
    //var duration = player.duration;    // Durée totale
    //var time     = player.currentTime; // Temps écoulé
    //var fraction = time / duration;
    //var percent  = Math.ceil(fraction * 100);

    var progress = document.querySelector('#progressBar');
	
    progress.style.width = percent + '%';
    progress.textContent = 'Fous de Folk, le direct ' + percent + '%';
}