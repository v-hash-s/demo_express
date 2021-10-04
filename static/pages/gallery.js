"use strict";
//const galleryUrl: URL = new URL('api/gallery'); 
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const pageSearch = /\?page=[1-5]/g;
let pageNumber;
if (location.search.match(pageSearch)) {
    localStorage.setItem('page', params.page);
    pageNumber = localStorage.getItem('page');
    document.getElementById("pageNumInForm").value = pageNumber;
}
else if (localStorage.getItem('page')) {
    pageNumber = localStorage.getItem('page');
    updateLocation();
}
else {
    localStorage.setItem('page', "1");
    pageNumber = localStorage.getItem('page');
    updateLocation();
}

//createGalleryPage(pageNumber);
//const gallery = document.getElementById('gallery');
const btnBack = document.getElementById('back');
const btnNext = document.getElementById('next');
// async function fetchPhotos(fetchurl) {
//     let token = localStorage.getItem('token');
//     if (token) {
//         try {
//             let response = await fetch(fetchurl, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': token,
//                 }
//             });
//             let data = await response.json();
//             return data.objects;
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }
// }


async function createGalleryPage(pageNumber) {
    

    
    // console.log(response)
    try {
        checkTime();
        updateLocation();
    }
    catch (err) {
        alert(err.message);
    }
}
// async function displayPhotos(pageNumber) {
//     try {
//         let newUrl = 'http://localhost:8080/gallery?page=' + pageNumber;
//         let fetchedPhotos = await (fetchPhotos(newUrl));
//         gallery.innerHTML = "";
//         fetchedPhotos.forEach((item) => gallery.innerHTML += `<img src=${item} height='400'
//         width='400' style="object-fit: cover">`);
//     }
//     catch (err) {
//         alert(err.message);
//     }
// }
async function checkTime() {
    let timeNow = new Date();
    if (timeNow.getUTCMinutes() - Number(localStorage.getItem('time')) >= 10) {
        localStorage.removeItem('token');
        localStorage.removeItem('time');
        document.location.replace('/');
    }
}
function updateLocation() {
    console.log(location);
    location.search = `?page=${pageNumber}`;
}
btnBack.addEventListener('click', function () {
    pageNumber = previousPage(pageNumber);
    localStorage.setItem('page', pageNumber);
    createGalleryPage(pageNumber);
});
btnNext.addEventListener('click', function () {
    pageNumber = nextPage(pageNumber);
    localStorage.setItem('page', pageNumber);
    createGalleryPage(pageNumber);
});
// function changePageNumber(pageNumber: string, sign: string): string{
//     if(sign === "-"){
//         pageNumber = `${+pageNumber - 1}`;
//         if(+pageNumber < 1){
//             pageNumber = `${+pageNumber + 5}`;
//         }
//         localStorage.setItem('page', pageNumber);
//     } else if(sign === '+'){
//         pageNumber = `${+pageNumber + 1}`;
//         if(+pageNumber > 5){
//             pageNumber = `${+pageNumber - 5}`;
//         }
//         localStorage.setItem('page', pageNumber);
//     }
//     console.log(pageNumber)
//     return pageNumber;
// }
function nextPage(pageNumber) {
    pageNumber = `${+pageNumber + 1}`;
    if (+pageNumber > 5) {
        pageNumber = `${+pageNumber - 5}`;
    }
    localStorage.setItem('page', pageNumber);
    console.log(pageNumber);
    return pageNumber;
}
function previousPage(pageNumber) {
    pageNumber = `${+pageNumber - 1}`;
    if (+pageNumber < 1) {
        pageNumber = `${+pageNumber + 5}`;
    }
    localStorage.setItem('page', pageNumber);
    console.log(pageNumber);
    return pageNumber;
}
