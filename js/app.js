
// show all phone button search event
const allPhone = () =>{
    const searchValue = document.getElementById('search-box')
    searchText = searchValue.value
    searchValue.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then((res) => res.json())
    .then(data => displayPhones(data.data))
    document.getElementById('search-box').value = ''

}


// show all phone display
const displayPhones = phones =>{
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
        <div class="card-footer bg-transparent">
        <button onClick="showDetail('${phone.slug}')" class="btn btn-primary mx-auto" type="submit">Details</button>
        </div>
   </div>
     `
     showPhones.appendChild(div)
     
 })

}
// show all phone detail api connect
const showDetail = (slug) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${slug}
    `
    fetch(url)
    .then((res) => res.json())
    .then(data => displayPhoneDetail(data.data))
}



// show all phone details display

const displayPhoneDetail = details =>{
    
    const phoneDetails = document.getElementById('phone-detail')
    const div = document.createElement('div')
 
    div.classList.add('card')
    div.classList.add('my-5')
    console.log(details.releaseDate)


//relase date error solved
    if(details.releaseDate === ''){
        div.innerHTML = `<img src="${details.image}" class="card-img-top w-25 mx-auto img-fluid" alt="..." />
        <div class="card-body">
        
          <h5 class="card-title text-danger" id="relese-date">Realease Date is not found</h5>
          <p class="card-text">
          Storage: ${details.mainFeatures.storage}
          </p>
          <p class="card-text">
          DisplaySize: ${details.mainFeatures.displaySize}
          </p>
          <p class="card-text">
          ChipSet: ${details.mainFeatures.chipSet}
          </p>
          <p class="card-text">
          Memory: ${details.mainFeatures.memory}
          </p>
          <p class="card-text">
          Sensors: ${details.mainFeatures.sensors}
          </p>
          
        </div>`
    }
    else{
        div.innerHTML = `<img src="${details.image}" class="card-img-top w-25 mx-auto img-fluid" alt="..." />
    <div class="card-body">
    
      <h5 class="card-title text-success" id="relese-date">${details.releaseDate}</h5>
      <p class="card-text">
      Storage: ${details.mainFeatures.storage}
      </p>
      <p class="card-text">
      DisplaySize: ${details.mainFeatures.displaySize}
      </p>
      <p class="card-text">
      ChipSet: ${details.mainFeatures.chipSet}
      </p>
      <p class="card-text">
      Memory: ${details.mainFeatures.memory}
      </p>
      <p class="card-text">
      Sensors: ${details.mainFeatures.sensors}
      </p>
      
    </div>`
    }
    phoneDetails.appendChild(div)
    
}


