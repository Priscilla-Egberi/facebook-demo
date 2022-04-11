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
       <span class="numbersOfThumbsup">0</span>
     </div>
     <div class="align-self-center"><span>85</span><span> comments</span></div>
   </div>
   <hr>

   <div class="d-flex container justify-content-between">
     <div><i class="fa-regular fa-thumbs-up thumbsUp1"></i><span class="numbersOfThumbsup">0</span></div>
     <div><i class="fa-regular fa-message"></i><span class="comments"> Comments</span></div>
     <div><i class="fa-solid fa-share"></i><span> share</span></div>
   </div>
    <div class="d-none commentSection">
    <div class="postedComments ms-2 my-1"></div>
    <div class="input-group my-2">      
       <input type="text" class="form-control border-0 bg-light inputComment" placeholder="write comment here">
       <button class="btn btn-light commentBtn" type="button" id="button-addon2"><i class="fa-solid fa-paper-plane text-secondary"></i></button>
     </div>
    </div>
   
   <hr>
   
      </div>
        `;
       
       randDiv.innerHTML = template;
        peopleElem.appendChild(randDiv); 
      
        // adding event listener to thumbsUp and comments
        randDiv.addEventListener('click', function(e){
          let numbersOfThumbsup = randDiv.getElementsByClassName('numbersOfThumbsup')[0]
          let numbersOfThumbsup2 = randDiv.getElementsByClassName('numbersOfThumbsup')[1]
         if(e.target.classList.contains('thumbsUp1') && numbersOfThumbsup.textContent == '0'){
                    numbersOfThumbsup.textContent++;
                    numbersOfThumbsup2.textContent=numbersOfThumbsup.textContent;
                    e.target.classList.add('text-danger')
                    
                } else {
                    numbersOfThumbsup.textContent = 0;
                    numbersOfThumbsup2.textContent=numbersOfThumbsup.textContent; 
                    e.target.classList.remove('text-danger')
                }
          if(e.target.classList.contains('commentBtn') || e.target.classList.contains('fa-paper-plane') ){
            let postedComments=randDiv.getElementsByClassName('postedComments')[0];
            let inputComment=randDiv.getElementsByClassName('inputComment')[0];
            let commentText = document.createElement('p');
            commentText.innerHTML=inputComment.value
            inputComment.value=''
            postedComments.appendChild(commentText)
          }
          if(e.target.classList.contains('fa-message') || e.target.classList.contains('comments')){
          let commentSection=randDiv.getElementsByClassName('commentSection')[0];
          let message=randDiv.getElementsByClassName('fa-message')[0];
          commentSection.classList.toggle('d-none');
          message.classList.toggle('text-primary')
        }
         
        })
 
     
   }}
        
        
       fetchUser();

