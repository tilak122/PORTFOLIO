var arr = [
    { dp:"images/ii.png", story:"images/duction.png"},
    {dp:"images/skills.png",story:"images/newskill.png"},
    {dp:"images/contact.png",story:"images/cont.png"},]
 
   
   var clutter=""
   arr.forEach((elem,idx)=>{
    clutter+=`<div class="circle">
            <img id="${idx}" src="${elem.dp}" alt="">
            
          </div>`

   })
   
   
    document.querySelector(".stories").innerHTML=clutter
    document.querySelector(".stories").addEventListener('click',(dets)=>{
       //console.log(arr[dets.target.id].story)
       document.querySelector(".fullscreen").style.display="block"
          document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
          document.querySelector("#line").style.opacity="0";
         
    });
    document.querySelector(".fullscreen").addEventListener('click', () => {
        document.querySelector(".fullscreen").style.display = "none";
        document.querySelector("#line").style.opacity="1";
         
     
       
    });

    

