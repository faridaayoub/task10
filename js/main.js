var productNameInput = document.getElementById("prodName");
var productPriceInput = document.getElementById("prodPrice");
var productCategoryInput = document.getElementById("prodCategory");
var productImgInput = document.getElementById("prodImage");
var productDescInput = document.getElementById("prodDesc");
var searchInput = document.getElementById("searchProduct");
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteURL");

var allSites = [];
if(localStorage.getItem('siteContainer')===null){
    allSites=[]
}else{
    allSites= JSON.parse(localStorage.getItem('siteContainer'))
    displaySites()
}

function addSite(){
    validateForm()
    var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
    };
    allSites.push(site);
    localStorage.setItem('siteContainer' ,JSON.stringify(allSites))
    console.log(allSites);
    clearinput();
    console.log(site)
    displaySites()
}

function clearinput(){
    siteNameInput.value = null;
    siteUrlInput.value = null;
}

function displaySites(){
    var cartona = ''
    for( var i = 1 ; i < allSites.length ; i++){
        cartona+= `<tr class="p-3">
        <th>${i}</th>
        <th>${allSites[i].name}</th>
        <th><a class="btn visit" href="${allSites[i].url}" role="button" target="_blank"><i class="fa-solid fa-eye" style="color: #ffffff;"></i>  Visit</a></th>
        <th><button class="btn btn-danger" type="submit" onclick='deleteSite(${i})'><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>  Delete</button></th>
      </tr>`
    }
    document.getElementById('table').innerHTML = cartona;
}
function deleteSite(index) {
    allSites.splice(index, 1);
    localStorage.setItem('siteContainer' ,JSON.stringify(allSites))
    displaySites()
}



function validateSiteName() {
    var reguxName = /[a-z]{3,}/;
    var siteName = siteNameInput.value;
    if(reguxName.test(siteName)==true){
        siteNameInput.classList.add('is-valid')
        siteNameInput.classList.remove('is-invalid')
    }else{
        siteNameInput.classList.add('is-invalid')
        siteNameInput.classList.remove('is-valid')
    }
}

function validateSiteUrl() {
    var reguxName = /(.co|.com)/;
    var siteUrl = siteUrlInput.value;
    if(reguxName.test(siteUrl)==true){
        siteUrlInput.classList.add('is-valid')
        siteUrlInput.classList.remove('is-invalid')
    }else{
        siteUrlInput.classList.add('is-invalid')
        siteUrlInput.classList.remove('is-valid')
    }
}

function validateForm() {
  if (validateSiteName() && validateSiteUrl()) return true;
  alert("Site name or URL is not valid.\n• Name ≥ 3 letters\n• URL must be valid");
  return false;
}
