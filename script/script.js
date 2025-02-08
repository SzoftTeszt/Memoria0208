const x=4
const y=4
let idozito

function showImage(){
  console.log(this)
  if (document.getElementsByClassName("nyitott").length==0)
    idozito=setTimeout(becsuk,1000)

  if (document.getElementsByClassName("nyitott").length<2)
  {
    // this.style.backgroundImage="url('./img/1.png')"
    this.style.backgroundImage=`url('./img/${this.dataset.img}')`
    this.style.backgroundColor="rgb(119, 57, 67)"
    this.classList.add("nyitott")
    console.log("show")    
  }
  // ha 2 van kiválasztva, lehet, hogy eltalálta
  // clearTimeout(idozitő) jobb ötlet nyitott class helyett vmi másclass,
  //  .remove?EventListener("click", showImage)
  // Hány cellán van másClass? == 16 =>győztem

}

function becsuk(){
  let latszodok=document.getElementsByClassName("nyitott")
  for (let i = latszodok.length-1; i >=0; i--) {
    console.log(latszodok)
    console.log(latszodok[i])
    console.log(i)
    latszodok[i].style.backgroundImage=""
    latszodok[i].style.backgroundColor="rgb(155, 100, 109)"
    latszodok[i].classList.remove("nyitott")
  }
} 

for (let j = 0; j < y; j++) {  
  let sor= document.createElement("div")
  sor.className="row"
  sor.style.width=x*100+"px";
  for (let i = 0; i < x; i++) {
    let box=document.createElement("div")
    box.className="box"
    box.addEventListener("click", showImage)
    box.style.backgroundImage
    sor.appendChild(box)  
  }
  document.body.appendChild(sor)    
}


  let boxok=document.getElementsByClassName("box")
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 2; j++) {
      let v= Math.round(Math.random()*(boxok.length-1))
      console.log("random v",v)
      if (!boxok[v].dataset.img){

          boxok[v].dataset.img=i+".png"
          // boxok[v].style.backgroundImage="url('./img/"+i+".png')"
          // boxok[v].style.backgroundImage=`url('./img/${i}.png')`
        }
      else j--;
    }
   
}