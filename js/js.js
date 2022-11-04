var db=["erro",
    '50 Cent ft Nate Dogg - 21 Questions.mp3',
'702 (Lyrics) - Get It Together(MP3_320K).mp3',
'Bin _DIOR_ (ÁUDIO PRÉVIA)(MP3_320K).mp3',
'BIN - DIOR ft. Major RD (prod. Ajaxx)(MP3_320K).mp3',
'Looking For A Fire(MP3_160K).mp3',
'Lose Myself(MP3_160K).mp3',
'Love Songs (Bonus)(MP3_320K).mp3',
'Matuê - Cogulândia (8D Audio)(MP3_320K).mp3',
'Poesia Acústica _11 - Nada Mudou - L7NNON_ CHRIS_ Ryan SP_ Lourena_ Xamã_ Azzy_ Mc Poze_ Cynthia Luz(MP3_320K).mp3',
'Poesia Acústica 13 (com LETRA) - Cabelinho_ Oruam_ L7_ Chefin_ Chris MC_ Xamã_ Luísa Sonza _ N.I.N.A(MP3_160K).mp3',
'Poesia Acústica _9 - Melhor Forma - L7NNON _ CHRIS _ Xamã _ Lourena _ Cesar Mc _ Djonga _ Filipe Ret(M4A_128K).m4a',
'Vividry - A Million Signs(MP3_160K).mp3',
'Vividry - Can_t Hold It In Anymore(MP3_160K).mp3',
'Vividry - High Time(MP3_160K).mp3',
'Vividry - My World (Lyrics)(MP3_160K).mp3',
'Vividry - Pass Me(MP3_160K).mp3',
'Vividry - Your Good Lies(MP3_320K).mp3',
'Caio Luccas _Dinheiro e Putaria_ ft. Mc Cabelinho (Prod. Dallass)(MP3_320K).mp3',];


var musica=db[Math.floor(Math.random()*db.length + 1)]

nome=document.querySelector('.nome')//coloca o nome da musica a ser tocada
nome.innerHTML=`<p> ${musica} </p>`;

var audio= new Audio('./mp3/'+musica );
// Caio Luccas _Dinheiro e Putaria_ ft. Mc Cabelinho (Prod. Dallass)(MP3_320K).mp3



var progressbar=document.querySelector('.loop');
progressbar.min=0;
progressbar.value=0
// progressbar.style.width= '0px' ;

function Change(){
    audio.pause()
    musica=db[Math.floor(Math.random()*db.length + 1)]
     audio= new Audio('./mp3/'+musica );
     nome.innerHTML=`<p> ${musica} </p>`;

     audio.play()


}

function setPosition(){
    audio.currentTime=progressbar.value;



}
function setVolume(){
    volume=document.querySelector('.volumerange');
    volume.min=0;
    volume.max=100;
    audio.volume=volume.value/100;
}

function Progresso() {


    if(audio.ended==false ){
        progressbar.max=audio.duration


        
    
        
         progressbar.value=audio.currentTime;

    
    
       
}else{
    document.getElementById('random').click();

}
}

function Anima(){  intervalo= setInterval(Progresso, 1000); }

function Stop(){clearInterval(intervalo);}

function AutoPlay(){
    audio.play()
    Anima()
    document.querySelector('.player').src='./img/replay.svg'
}

const Play=()=>{
    if(audio.paused==true ){
        document.querySelector('.player').src='./img/replay.svg'
        Anima()
        audio.play();}
            else{
        document.querySelector('.player').src='./img/play.svg';

        Stop()
        audio.pause();
    }


}

const Goto5sec=()=>{

    audio.currentTime+=+5;
    progressbar.value=audio.currentTime;

    console.log(audio.currentTime);



   

}
const backto5sec=()=>{
    audio.currentTime-=5;
    progressbar.value=audio.currentTime;




    
}



AutoPlay()//function automática
