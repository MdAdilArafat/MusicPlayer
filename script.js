var arr= [
    {name: "Aafat - MEHNAT KAR", mp3:"./songs/Aafat - MEHNAT KAR.mp3",image:"https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg"},
    {name: "Allah Ke Bande", mp3:"./songs/Allah Ke Bande.mp3",image:"https://yespunjab.com/wp-content/uploads/2022/08/Vijay-Ananya-Panday-Aafat-Liger.jpg"},
    {name: "ANGEL VIVALDI", mp3:"./songs/ANGEL VIVALDI.mp3",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1e0MCLW3HjlwwmtJ6j3sk3RdfiAiasprqX0FYkckWEw&s"},
    {name: "Faded", mp3:"./songs/Faded.mp3",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8fj645TxqfQ1bvMOyfk3jx2G4IPGPv2_sG_YSxTOGg&s"},
]
 var flag = 0
 var audio = new Audio
 var selectedSong = 0
 var allSongs = document.querySelector("#all-songs")

 var play = document.querySelector("#play")
 var backward = document.querySelector("#backward")
 var forward = document.querySelector("#forward")
 function main(){
    var clutter =""
    arr.forEach(function(elem,index) {
    clutter += ` <div class="song-card" id="${index}" >
    <div class="part1">
            <img src="${elem.image}" alt="">
            <h2>${elem.name} </h2>
    </div>
    <h6>3:56</h6>

</div>`
});
document.querySelector("#all-songs").innerHTML= clutter
audio.src = arr[selectedSong].mp3
document.querySelector("#left").style.backgroundImage= `url(${arr[selectedSong].image})`

 }
 main()
allSongs.addEventListener("click", function(details){
    selectedSong =   details.target.id
    main()
    audio.play()
    play.innerHTML = '<i class="ri-pause-line"></i>'
    flag = 1
})
play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = '<i class="ri-pause-line"></i>'
        flag = 1
        main()
        audio.play()
    }
    else{
        play.innerHTML = '<i class="ri-play-fill"></i>'
        flag = 0
        main()
        audio.pause()
    }
})
forward.addEventListener("click",function(){
    if(selectedSong < arr.length-1){
       selectedSong++
        main()
        audio.play()
    }
    else{
        selectedSong = 0
        main()
        audio.play()
    }
}) 
backward.addEventListener("click",function(){
    if(selectedSong > 0){
       selectedSong--
        main()
        audio.play()
    }
    else{
        selectedSong = arr.length-1
        main()
        audio.play()
    }
})
