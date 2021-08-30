const mainContainer = document.getElementById("main-container");
const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById("search-button");
const seeAllCategories = document.getElementById("see-all-button");
const container2 = document.getElementById("main-container-2");
const container1 = document.getElementById("container-1");
const loadings = document.getElementById("loading");


const loadData = () => {

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            getData(data)
        })
}
loadData();


const getData = (data) => {
    loading.style.visibility = "hidden";
    mainContainer.textContent = "";
    container2.textContent = "";
    container1.textContent = "";
    for (const info of data) {
        // console.log(info);
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.innerHTML = `
        <div class="card mt-5" style="width: 18rem;">
                    <img src="${info.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${info.title}</h5>
                        <p class="card-text">${info.description.slice(0,150)}</p>
                        <a href="#" class="btn btn-primary" onclick="loadDetails('${info.price}', '${info.rating.rate}', '${info.title}', '${info.image}')">Go somewhere</a>
                    </div>
                </div>
        `
        mainContainer.appendChild(div);

    }
}


const loadDetails = (pri, rate, title, img) => {

    mainContainer.textContent = "";
    container2.innerHTML = "";
    const div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.innerHTML = `
    <div class="card mt-5" style="width: 18rem;">
                    <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${pri}</p>
                        <p class="card-text">${rate}</p>
                        
                    </div>
                </div>
    
    `
    container2.appendChild(div);
}






searchBtn.addEventListener('click', function(e) {
    const searchText = searchField.value;
    fetch(`https://fakestoreapi.com/products/category/${searchText}`)
        .then(res => res.json())
        .then(data => {
            getFixedData(data);
        })
})


const getFixedData = (data) => {

    // mainContainer.style.display = 'none';
    mainContainer.textContent = "";
    container2.textContent = "";
    container1.textContent = "";
    for (const fixItem of data) {

        const div = document.createElement('div');
        div.classList.add("col-lg-4");

        div.innerHTML = `
        <div class="card mt-5" style="width: 18rem;">
                    <img src="${fixItem.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${fixItem.title}</h5>
                        <p class="card-text">${fixItem.description.slice(0,150)}</p>
                        <a href="#" class="btn btn-primary" onclick="searchDetails('${fixItem.image}', '${fixItem.title}', '${fixItem.price}','${fixItem.rating.rate}')">Go somewhere</a>
                    </div>
                </div>
        `
        mainContainer.appendChild(div);

    }
}


const searchDetails = (i, title, price, rating) => {

    mainContainer.textContent = "";
    container2.textContent = "";
    const div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.innerHTML = `
    <div class="card mt-5" style="width: 18rem;">
                    <img src="${i}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${price}</p>
                        <p class="card-text">${rating}</p>
                        
                    </div>
                </div>
    
    `
    container1.appendChild(div);
}