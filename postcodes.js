const searchPostcode = document.getElementById('search-postcode');
const inputSearchField = document.getElementById('input');
const content = document.querySelector('.container .content');
autocomplete(document.getElementById("input"), suburbs);



const updateUI = (data) =>{
const {postcode, place, stateName, stateCode, lat, lon} = data;
content.innerHTML = `<h1>${place_name}</h1>`
content.innerHTML += `<p class = "postcode">Postcode: <span>${postcode}</span> </p>`
content.innerHTML += `<p class = "state">State: <span>${state_name}</span></p>`
content.innerHTML += `<p class = "state-code">State Code: <span class = "uppercase">${state_code} </span></p>`
content.innerHTML += `<p class = "latitude">Latitude: ${latitude} </p>`
content.innerHTML += `<p class = "longitude">Longitude: ${longitude} </div> </p>`
inputSearchField.value = "";
}





async function getPostCode (){
    let response = await fetch('https://loewentj.github.io/post/postcodes.json');
  
    const jsonData = await response.json();
    
    const input = inputSearchField.value.toLowerCase();       
    const index = [jsonData.map(e => e.place_name).indexOf(input)];
    const suburb = jsonData[index];
    //console.log(suburb)
    
    
    const data = {
            "postcode":postcode = (suburb.postcode),
            "place_name":place_name= (suburb.place_name),
            "state_name": state_name = (suburb.state_name),
            "state_code":state_code =(suburb.state_code),
            "latitude":latitude = (suburb.latitude),
            "longitude":longitude = (suburb.longitude)
    }
    return data
};



searchPostcode.addEventListener('click', e =>{
    e.preventDefault();
    inputSearchField.value.trim();
    
  
    getPostCode()
    //.then(data => console.log((data)))
    .then(data => updateUI(data))
    

    .catch(error => console.log(error));

})





















