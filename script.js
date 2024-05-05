$(document).ready(function() {
    video = document.getElementById('video')
    audio = document.getElementById('audio');
    $("#player").click(function(){
        $("#sobre-div").slideUp(1500);
        $("#player-div").slideDown(1500);
        $(".elenco-div").slideUp(1500);
        $("#div-clipes").slideup(1500);
    });

    $("#sobre").click(function(){
        $("#sobre-div").slideDown(1500);
        $("#player-div").slideUp(1500);
        $(".elenco-div").slideUp(1500);
        $("#div-clipes").slideUp(1500);
    });

    $("#elenco").click(function(){
        $("#player-div").slideUp(1500);
        $("#sobre-div").slideUp(1500);
        $(".elenco-div").slideDown(1500);
        $("#div-clipes").slideUp(1500);
    });

    $("#clipes").click(function(){
        $("#player-div").slideUp(1500);
        $("#sobre-div").slideUp(1500);
        $(".elenco-div").slideUp(1500);
        $("#div-clipes").slideDown(1500);
    });

    $("#expandir").click(function(){
        $("#player-div").slideDown(1500);
        $("#sobre-div").slideDown(1500);
        $(".elenco-div").slideDown(1500);
        $("#div-clipes").slideDown(1500);
    });

    $("#formulario-musica").submit(function(){
        event.preventDefault();
        opcao = document.getElementById('opcoes').value;
        switch(opcao){

        case 'bh':
        audio.src = "musicas/BH.mp3";
        document.getElementById('musica-imagem').src = "discografia/bohemian.jpg";
        $('#player-div').css("background-color","#843084");
        $('#titulo-div-player').css("color","white");
        $('#music-player').css("background-image","linear-gradient(to right, #843084, #EA14EA)");
        $('.botoes-musica-classe').css("background-color","#87156A");
        $('#opcoes').css("background-color","#87156A");
        $('#send').css("background-color","#87156A");
        break;

        case 'iwt':
        audio.src = "musicas/iwt.mp3";
        document.getElementById('musica-imagem').src = "discografia/classic.jpg";
        $('#player-div').css("background-color","#252F53");
        $('#titulo-div-player').css("color","#9A9236");
        $('#music-player').css("background-image","linear-gradient(to right, #252F53, #2D3C72)");
        $('.botoes-musica-classe').css("background-color","#9A9236");
        $('#opcoes').css("background-color","#9A9236");
        $('#send').css("background-color","#9A9236");
        break;

        case 'wwr':
        audio.src = "musicas/wwry.mp3";
        document.getElementById('musica-imagem').src = "discografia/wwry.jpg";
        $('#player-div').css("background-color","#8CAF8B");
        $('#titulo-div-player').css("color","#E25F57");
        $('#music-player').css("background-image","linear-gradient(to right, #8CAF8B, #8CCC8B)");
        $('.botoes-musica-classe').css("background-color","#ED3C31");
        $('#opcoes').css("background-color","#ED3C31");
        $('#send').css("background-color","#ED3C31");
        break;

        case 'dsm':
        audio.src = "musicas/dsmn.mp3";
        document.getElementById('musica-imagem').src = "discografia/dsmn.jpg";
        $('#player-div').css("background-color","#B2AA4F");
        $('#titulo-div-player').css("color","black");
        $('#music-player').css("background-image","linear-gradient(to right, #B2A342, #DAC228)");
        $('.botoes-musica-classe').css("background-color","#5F5F5F");
        $('#opcoes').css("background-color","#5F5F5F");
        $('#send').css("background-color","#5F5F5F");
        break;

        }
    });

    $("#tocar").click(function(){
        audio.play();
    });

    $("#pause").click(function(){
        audio.pause();
    });

    $("#volume-up").click(function(){
        audio.volume =  audio.volume + 0.1;
    });

    $("#volume-down").click(function(){
        audio.volume =  audio.volume - 0.1;
    });

    $("#mute").click(function(){
        audio.volume = 0.0;
    });

    $("#slider").click(function(){
        audio.currentTime = document.getElementById('slider').value;
        document.getElementById('slider').max = audio.duration;
    });

    var video = $('#video')[0]; 

    $('#play-video').click(function() {
        video.play();
    });


    $('#pause-video').click(function() {
        video.pause();
    });

  
    $('#audiomais-video').click(function() {
        if(video.volume < 1) video.volume += 0.1; 
    });


    $('#audiomenos-video').click(function() {
        if(video.volume > 0) video.volume -= 0.1; 
    });

   
    $('#mute-video').click(function() {
        video.muted = !video.muted; 
    });


    $('.video-select').click(function() {
        var videoPath = 'clipes/'+$(this).attr('id');
        $('#video').attr('src', videoPath);
        video.load(); 
        video.play(); 
    });
    });