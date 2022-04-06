let peopleElem = document.getElementById('card-deck');


const fetchUser = async () => {
    const res = await axios.get('https://randomuser.me/api/?results=10')
    
    console.log(res)
    for (let i = 0; i < res.data.results.length; i++) {
        let profile = res.data.results[i]
        let randDiv = document.createElement('div');
        let template = `
        <div class="card">
        <!-- head-section -->
    <div class="d-flex justify-content-between">              
      <div>
       <div class="d-inline-block rounded-circle border border-primary border-5">
         <img src="${profile.picture.medium}" alt="" class="rounded-circle profile_picture">
       
     </div>    
           <div class="d-inline-block">
           <h4 class="name">${profile.name.first} ${profile.name.last}</h4>
           <p class="text-muted"><span>4day</span> <i class="fa-solid fa-earth-africa"></i></p>
           </div>
      </div>    
      <div class="align-self-center"><i class="fa-solid fa-ellipsis-vertical"></i></div>

   </div>
   <!-- body-section -->
   <section>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab debitis nam facilis harum quae eos, quaerat repellendus ipsum eaque sunt quam, ducimus pariatur facere laborum perspiciatis excepturi hic necessitatibus iste perferendis maxime. Repellat itaque, placeat saepe quas quis ea officiis?</p>
   </section>

   <!-- image-section -->
   <img src="${profile.picture.large}" class="postPicture" alt="">

   <!-- like and comments images section -->
   <div class="d-flex justify-content-between">
     <div>
       <i class="fa-solid fa-thumbs-up text-white bg-primary rounded-circle p-2"></i>
       <i class="fa-solid fa-heart text-white bg-danger rounded-circle p-2 marginForThumbsup border border-4 border-light"></i>
       <span class="numbersOfThumbsup">105</span>
     </div>
     <div class="align-self-center"><span>85</span><span> comments</span></div>
   </div>
   <hr>

   <div class="d-flex container justify-content-between">
     <div><i class="fa-regular fa-thumbs-up thumbsUp1"></i><span class="numbersOfThumbsup">105</span></div>
     <div><i class="fa-regular fa-message"></i><span> Comments</span></div>
     <div><i class="fa-solid fa-share"></i><span> share</span></div>
   </div>
   <hr>
   
      </div>
        `;
       
        randDiv.innerHTML = template;
        peopleElem.appendChild(randDiv);  
        let numbersOfThumbsup = document.querySelectorAll(".numbersOfThumbsup")
        let thumbsUp1 = document.querySelector(".thumbsUp1") 
        console.log(thumbsUp1)
        thumbsUp1.addEventListener('click', function(e){
            console.log(99);
            // if (numbersOfThumbsup.classList.contains('liked')) {
            //                     let count = Number(element.target.innerText)
            //                     count--;
            //                     element.target.innerText = count.toString();
            //                     element.target.classList.remove('liked')
            //                 } else {
            //                     let count = Number(element.target.innerText)
            //                     count++;
            //                     element.target.innerText = count.toString();
            //                     element.target.classList.add('liked')
                                
            //                 }
        })

    //     let numbersOfThumbsup = document.querySelectorAll(".numbersOfThumbsup")
    //     console.log(numbersOfThumbsup);
    //     numbersOfThumbsup.forEach(element => {
    //         element.onclick = function (element) {
    //             if (element.target.classList.contains('liked')) {
    //                 let count = Number(element.target.innerText)
    //                 count--;
    //                 element.target.innerText = count.toString();
    //                 element.target.classList.remove('liked')
    //             } else {
    //                 let count = Number(element.target.innerText)
    //                 count++;
    //                 element.target.innerText = count.toString();
    //                 element.target.classList.add('liked')
                    
    //             }
               
                
    //         }
        
    // });
    }
}


fetchUser();






// for (let index = 0; index < numbersOfThumbsup.length; index++) {
//     console.log(numbersOfThumbsup[index]);   
// }









// let numbersOfThumbsup2 = document.getElementsByClassName("numbersOfThumbsup")[1]

// numbersOfThumbsup.textContent=0;
// numbersOfThumbsup2.textContent=0;

