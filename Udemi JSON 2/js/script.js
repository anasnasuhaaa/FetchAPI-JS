async function getApiCategories() {
    resApiCategories = await fetch('./JSON/categories.json')
    jsonApiCategories = await resApiCategories.json()
    console.log(jsonApiCategories);
}
getApiCategories()

async function getApiPostingan() {
    resApiPostingan = await fetch('./JSON/postingan.json')
    jsonApiPostingan = await resApiPostingan.json()
    console.log(jsonApiPostingan);

    jsonApiPostingan.forEach(element => {
        console.log(element);

    });
}
getApiPostingan()