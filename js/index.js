let profile=document.getElementsByClassName("profile_picture")[0];
let name = document.getElementById("name");
const getUsers = async() =>{
    let res = await axios.get('https://randomuser.me/api/')
    const array= res.data.results[0];
    console.log(array)
    localStorage.setItem('nam', JSON.stringify(array))
    gottenArray=JSON.parse(localStorage.getItem('nam'))
    console.log(gottenArray)
    profile.setAttribute("src", `${gottenArray.picture.medium}`);  
    name.innerHTML=`${gottenArray.name.first} ${gottenArray.name.last}` 
}
getUsers();

