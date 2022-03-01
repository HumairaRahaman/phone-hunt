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
    let showPhones = document.getElementById('show-phones').innerHTML = ''
    let cleanDetails = document.getElementById('phone-detail').innerHTML = ''
    document.getElementById('see-btn').style.display = 'none'
    
   console.log(phones.length)
   if(phones.length === 0){
       document.getElementById('error').style.display = 'block'
   }
   else{
    
        document.getElementById('error').style.display = 'none'


        // show 20 phones
        if(phones.length > 20){
         const limitPhones = phones.slice(0,20)
           
        let showPhones = document.getElementById('show-phones')
        limitPhones.forEach( phone => {
        
        const div = document.createElement('div')
        div.classList.add('col')
            div.innerHTML = `
            <div class="card p-4 shadow p-3 mb-5 bg-body rounded bg-transparent">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="..." />
                <div class="card-body">
                    <h2 class="card-title text-info">${phone.brand}</h2>
                    <h5 class="card-text badge rounded-pill bg-primary">
                    ${phone.phone_name}
                    </h5>
                </div>
                <div class="card-footer text-center bg-transparent">
                <button onClick="showDetail('${phone.slug}')" class="btn btn-warning border border-warning rounded-top btn-lg  mx-auto" type="submit">Details</button>
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
        let showPhones = document.getElementById('show-phones')
        limitPhones.forEach( phone => {
        console.log(phone)
    
        
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card p-4 shadow-lg p-3 mb-5 bg-body rounded bg-transparent">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="..." />
            <div class="card-body">
                <h2 class="card-title text-info">${phone.brand}</h2>
                <h5 class="card-text badge rounded-pill bg-primary">
                ${phone.phone_name}
                </h5>
            </div>
            <div class="card-footer text-center  bg-transparent">
            <button onClick="showDetail('${phone.slug}')" class="btn btn-warning rounded-top border border-warning btn-lg  mx-auto" type="submit">Details</button>
            </div>
        </div>

        `
        showPhones.appendChild(div)
        })
    
     
    }

    // see more btn show after 20
    const seeMoreBtn = document.getElementById('see-btn')
    console.log('ball')
   seeMoreBtn.addEventListener("click" ,()=>{
    document.getElementById('show-phones').innerHTML = ''
    const limitPhones = phones.slice(20,40)
    let showPhones = document.getElementById('show-phones')
        limitPhones.forEach( phone => {
        //  console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
            div.innerHTML = `
            <div class="card p-4 shadow p-3 mb-5 bg-body rounded bg-transparent">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="..." />
                <div class="card-body">
                    <h2 class="card-title text-info">${phone.brand}</h2>
                    <h5 class="card-text badge rounded-pill bg-primary">
                    ${phone.phone_name}
                    </h5>
                </div>
                <div class="card-footer text-center bg-transparent">
                <button onClick="showDetail('${phone.slug}')" class="btn btn-warning border border-warning rounded-top btn-lg  mx-auto" type="submit">Details</button>
                </div>
            </div>
        
            `
          document.getElementById('see-btn').style.display = 'none'
          showPhones.appendChild(div)
        })       

        })

   
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
 
    div.classList.add('card','shadow-lg','p-3','mb-5','bg-body','rounded','mt-5','p-2')
    div.classList.add()
    console.log(details.releaseDate)


//relase date error solved
    if((details.releaseDate === '') || (details.others === undefined)){


        //details others condition for undafine
        if(details.others === undefined){
            div.innerHTML = `<img src="${details.image}" class="card-img-top w-25 mx-auto img-fluid" alt="..." />
           
        <div class="card-body p-2 mt-5 shadow-lg p-3 mb-5 bg-body rounded bg-transparent">
        <h2 class="card-title text-info">${details.brand}</h2>
        <h5 class="card-text badge rounded-pill bg-primary"> ${details.name}
        </h5>
        
          <h5 class="card-title badge bg-info fs-6 d-block w-50 text-wrap" id="relese-date">${details.releaseDate}</h5>

          <h4 class="card-title badge bg-warning  fs-5 my-2 text-uppercase text-wrap" id="relese-date">MainFeatures:</h4>
          
          <p class="card-text ">
          Storage: ${details.mainFeatures.storage}
          </p>
          <p class="card-text ">
          Storage: ${details.mainFeatures.displaySize}
          </p>
          <p class="card-text ">
          DisplaySize: ${details.mainFeatures.displaySize}
          </p>
          <p class="card-text ">
          ChipSet: ${details.mainFeatures.chipSet}
          </p>
          <p class="card-text ">
          Memory: ${details.mainFeatures.memory}
          </p>
          <p class="card-text ">
          Sensors: ${details.mainFeatures.sensors}
          </p>


          <h4 class="card-title badge bg-danger fs-6 text-wrap" id="relese-date">Others: Plz check later...</h4>
           
           
          
        </div>`
        }
        else{
        div.innerHTML = `<img src="${details.image}" class="card-img-top w-25 mx-auto img-fluid" alt="..." />
        <div class="card-body p-2 mt-5 shadow-lg p-3 mb-5 bg-body rounded bg-transparent">

         <h2 class="card-title text-info">${details.brand}</h2>
        <h5 class="card-text badge rounded-pill bg-primary"> ${details.name}
        </h5>
          <h5 class="card-title badge bg-danger fs-6 d-block w-50 text-wrap" id="relese-date">Realease Date is not found!</h5>

          <h4 class="card-title card-title badge bg-warning fs-5 my-2 text-uppercase text-wrap" id="relese-date">MainFeatures:</h4>
          
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


          <h4 class="card-title card-title badge bg-success fs-5 my-2 text-uppercase" id="relese-date">Others:</h4>
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
    }
    else{
        div.innerHTML = `<img src="${details.image}" class="card-img-top w-25 mx-auto img-fluid" alt="..." />
    <div class="card-body p-2 mt-5 shadow-lg p-3 mb-5 bg-body rounded bg-transparent">


     <h2 class="card-title text-info">${details.brand}</h2>
        <h5 class="card-text badge rounded-pill bg-primary"> ${details.name}
        </h5>
      <h5 class="card-title badge bg-info fs-6 d-block w-50 text-wrap" id="relese-date">${details.releaseDate}</h5>

      <h4 class="card-title card-title badge bg-warning fs-5 my-2 text-uppercase text-wrap" id="relese-date">MainFeatures:</h4>
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


      <h4 class="card-title card-title badge bg-success fs-5 my-2 text-uppercase" id="relese-date">Other:</h4>
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





