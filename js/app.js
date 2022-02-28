const allPhone = () =>{
    const searchValue = document.getElementById('search-box')
    searchText = searchValue.value
    searchValue.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then((res) => res.json())
    .then(data => displayPhone(data.data))
    

}



const displayPhone = phones =>{
 const showPhones = document.getElementById('show-phones')
 phones.forEach( phone => {
     console.log(phone)
     const div = document.createElement('div')
     div.classList.add('col')
     div.innerHTML = `
     <div class="card">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="..." />
        <div class="card-body">
            <h2 class="card-title">${phone.brand}</h2>
            <h5 class="card-text">
            ${phone.phone_name}
            </h5>
        </div>
   </div>
     `
     showPhones.appendChild(div)
    
 })
 
}
