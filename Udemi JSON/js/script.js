const dropdown = document.querySelector('.dropdown-menu')
console.log(dropdown);


async function getAPI() {
    const res = await fetch('./db/categories.json');
    const resJson = await res.json();
    console.log(resJson);

    for (i = 0; i <= resJson.categories.length; i++) {
        const categoriesList = document.createElement('li')
        const categoriesLink = document.createElement('a')
        categoriesLink.className = 'dropdown-item dropdown-toggle'
        categoriesLink.href = '#'
        categoriesLink.innerHTML = resJson.categories[i].name
        categoriesList.appendChild(categoriesLink)
        dropdown.appendChild(categoriesList)
    }


}
getAPI()
async function getApiPostingan() {
    const resApiPosstingan = await fetch('./db/postingan.json')
    const apiPostinganJson = await resApiPosstingan.json()
    console.log(apiPostinganJson.postingan[1]);
}
getApiPostingan()