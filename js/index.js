let profile=document.getElementsByClassName("profile_picture")[0];
let profile2=document.getElementsByClassName("profile_picture")[1];
let profile3=document.getElementsByClassName("profile_picture")[2];
let name = document.getElementsByClassName("name")[0];
let name2 = document.getElementsByClassName("name")[1];
let name3 = document.getElementsByClassName("name")[2];
let postPicture=document.getElementsByClassName("postPicture")[0];
let postPicture2=document.getElementsByClassName("postPicture")[1];
let postPicture3=document.getElementsByClassName("postPicture")[2];

const getUsers = async() =>{
    let res = await axios.get('https://randomuser.me/api/')
    const array= res.data.results[0];
    console.log(array)
    localStorage.setItem('nam', JSON.stringify(array))
    gottenArray=JSON.parse(localStorage.getItem('nam'))
    console.log(gottenArray)
    profile.setAttribute("src", `${gottenArray.picture.medium}`);  
    postPicture.setAttribute("src", `${gottenArray.picture.large}`);  
    name.innerHTML=`${gottenArray.name.first} ${gottenArray.name.last}` 
}
getUsers();

const getUsers2 = async() =>{
    let res = await axios.get('https://randomuser.me/api/')
    const array= res.data.results[0];
    console.log(array)
    localStorage.setItem('nam', JSON.stringify(array))
    gottenArray=JSON.parse(localStorage.getItem('nam'))
    console.log(gottenArray)    
    profile2.setAttribute("src", `${gottenArray.picture.medium}`);  
    postPicture2.setAttribute("src", `${gottenArray.picture.large}`);     
    name2.innerHTML=`${gottenArray.name.first} ${gottenArray.name.last}` 
}
getUsers2();

let numbersOfThumbsup = document.getElementsByClassName("numbersOfThumbsup")[0]
let numbersOfThumbsup2 = document.getElementsByClassName("numbersOfThumbsup")[1]
console.log(numbersOfThumbsup);
numbersOfThumbsup.textContent=0;
numbersOfThumbsup2.textContent=0;

document.querySelector("#thumbsUp1").addEventListener("click", function(e){
    if (numbersOfThumbsup.textContent == '0') {
        numbersOfThumbsup.textContent++;
        numbersOfThumbsup2.textContent=numbersOfThumbsup.textContent 
    } else {
        numbersOfThumbsup.textContent = 0;
        numbersOfThumbsup2.textContent=numbersOfThumbsup.textContent 
    }
})
