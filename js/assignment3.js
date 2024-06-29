let BookmarkName = document.querySelector('#BookmarkName')
let urlInput = document.querySelector('#urlInput')
let btnInput = document.querySelector('.btnInput')
let alertHere = document.querySelector('.alertHere')

let urlContainer

if (localStorage.getItem('url-name') == null) {

    urlContainer = []
} else {
    urlContainer = JSON.parse(localStorage.getItem('url-name'))
    displayData(urlContainer)
}

function addURL() {
    if (BookmarkName.value === '' || urlInput.value === '') {
        alertHere.classList.replace('d-none', 'd-block')
    }
    else {
        alertHere.classList.replace('d-block', 'd-none')
        let inputs = {
            name: BookmarkName.value,
            webUrl: urlInput.value,
        }
        urlContainer.push(inputs)
        localStorage.setItem('url-name', JSON.stringify(urlContainer))

        displayData(urlContainer)
        clearUrl()
    }
}

function clearUrl() {
    BookmarkName.value = null;
    urlInput.value = null

}

function deleteUrl(item) {
    urlContainer.splice(item, 1)
    localStorage.setItem('url-name', JSON.stringify(urlContainer))
    displayData(urlContainer)
}



function validation(index) {
    let regex = {
        BookmarkName: /[a-z]{3,8}$/,
        urlInput: /^([a-z0-9]+)\.(com|eg)$/i,
    }
    if (regex[index.id].test(index.value)) {
        index.classList.add('is-valid')
        index.classList.remove('is-invalid')
    } else {
        index.classList.add('is-invalid')
        index.classList.remove('is-valid')
    }
}

function displayData(arr) {

    cartouna = ''
    for (let i = 0; i < arr.length; i++) {

        cartouna +=
            `
         <div class="col-lg-3">
                <p> ${i} </p>
            </div>
            <div class="col-lg-3">
            <p> ${arr[i].name}</p>
            </div>
            <div class="col-lg-3">
            <button class="btn-success px-3 py-1 rounded-2 "><a href="${arr[i].webUrl} " class="text-decoration-none text-light"><i class="fa-solid fa-eye px-2"></i> Visit</a></button>
            </div>
            <div class="col-lg-3">
                <button  onclick='deleteUrl(${i}) ' class="btn-danger px-3 py-1 rounded-2"><i class="fa-solid fa-trash px-2"></i> Delete</button>
            </div>
          `
    }
    document.getElementById('demo').innerHTML = cartouna

}
