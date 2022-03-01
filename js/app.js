
// show all phone button search event
const allPhone = () =>{
    
    const searchValue = document.getElementById('search-box')
    searchText = searchValue.value
    console.log(searchText)
    searchValue.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then((res) => res.json())
    .then(data => displayPhones(data.data))
    document.getElementById('search-box').value = ''

}


// show all phone display
const displayPhones = phones =>{
    const showPhones = document.getElementById('show-phones').innerHTML = ''
    let cleanDetails = document.getElementById('phone-detail').innerHTML = ''
    document.getElementById('see-btn').style.display = 'none'
    
   console.log(phones.length)
   if(phones.length === 0){
       document.getElementById('error').style.display = 'block'
   }
   else{
    
    document.getElementById('error').style.display = 'none'
   if(phones.length >= 20){
    const limitPhones = phones.slice(0,20)
    // console.log(limitPhones)
    const showPhones = document.getElementById('show-phones')
    limitPhones.forEach( phone => {
    //  console.log(phone)
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
     document.getElementById('see-btn').style.display = 'block'
     showPhones.appendChild(div)
    })
    
     
    }

    else{
        const limitPhones = phones.slice(0,20)
    // console.log(limitPhones)
    const showPhones = document.getElementById('show-phones')
    limitPhones.forEach( phone => {
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
   
}


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
    console.log(details)
    console.log(details.others === undefined)
    let cleanDetails = document.getElementById('phone-detail').innerHTML = ''
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

          <h4 class="card-title" id="relese-date">MainFeatures:</h4>
          
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


          <h4 class="card-title" id="relese-date">Others:</h4>
            <p class="card-text">
            Bluetooth: ${details.others.Bluetooth}
            </p>
            <p class="card-text">
            GPS: ${details.others.GPS}
            </p>
            <p class="card-text">
            NFC: ${details.others.NFC}
            </p>
            <p class="card-text">
            Radio: ${details.others.Radio}
            </p>
            <p class="card-text">
            USB: ${details.others.USB}
            </p>
            <p class="card-text">
            WLAN: ${details.others.WLAN}
            </p>
          
        </div>`
    }
    else{
        div.innerHTML = `<img src="${details.image}" class="card-img-top w-25 mx-auto img-fluid" alt="..." />
    <div class="card-body">
    
      <h5 class="card-title text-success" id="relese-date">${details.releaseDate}</h5>

      <h4 class="card-title" id="relese-date">MainFeatures:</h4>
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


      <h4 class="card-title" id="relese-date">Other:</h4>
      <p class="card-text">
      Bluetooth: ${details.others.Bluetooth}
      </p>
      <p class="card-text">
      GPS: ${details.others.GPS}
      </p>
      <p class="card-text">
      NFC: ${details.others.NFC}
      </p>
      <p class="card-text">
      Radio: ${details.others.Radio}
      </p>
      <p class="card-text">
      USB: ${details.others.USB}
      </p>
      <p class="card-text">
      WLAN: ${details.others.WLAN}
      </p>
      
    </div>`
    }
    phoneDetails.appendChild(div)
    
}


