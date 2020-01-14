//XMLHttpRequest()
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    const data = JSON.parse(this.responseText);
    const data2 = data.result;
    let card1 = '';
    data2.forEach(dat => {
        card1 += `    <div class="col s12 m6 l4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${dat.thumbnail}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${dat.title}<i
                        class="material-icons right">more_vert</i></span>
                <p><a href="#">More</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i
                        class="material-icons right">close</i></span>
                <p>${dat.description}</p>
            </div>
        </div>
    </div>`;
    });
    document.querySelector('.card1').innerHTML = card1;
}
xhr.onerror = function () {
    console.log('Error : -S', error);
}
xhr.open('get', 'https://readerapi.codepolitan.com/articles', true);
xhr.send();




// Fetch