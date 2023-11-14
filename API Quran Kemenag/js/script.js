// const endpoint = "https://api.myquran.com/v1/sholat/jadwal/1204/2023/11/25"

// Docmunent Object
const locationId = document.getElementById('location')
const dateNow = document.getElementById('dateNow')
const imsak = document.getElementById('imsakHour')
const subuh = document.getElementById('subuhHour')
const dzuhur = document.getElementById('dzuhurHour')
const dhuha = document.getElementById('dhuhaHour')
const ashar = document.getElementById('asharHour')
const maghrib = document.getElementById('maghribHour')
const terbit = document.getElementById('terbitHour')
const isya = document.getElementById('isyaHour')

/*
const getMyQuran = () => {
    const api = fetch(endpoint)
        .then(response => response.json())
        .then(result => {
            locationId.innerText = result.data.lokasi;
            dateNow.innerHTML = result.data.jadwal.tanggal;
            imsak.innerText = result.data.jadwal.imsak;
            subuh.innerHTML = result.data.jadwal.subuh;
            dzuhur.innerHTML = result.data.jadwal.subuh;

            console.log(result);
        })

}

getMyQuran()
*/

async function findMyQuran(year, month, date) {
    const response = await fetch(`https://api.myquran.com/v1/sholat/jadwal/1204/${year}/${month}/${date}`)
    const json = await response.json();
    locationId.innerText = json.data.lokasi;
    dateNow.innerHTML = json.data.jadwal.tanggal;
    imsak.innerText = json.data.jadwal.imsak;
    subuh.innerHTML = json.data.jadwal.subuh;
    terbit.innerText = json.data.jadwal.terbit;
    dhuha.innerText = json.data.jadwal.dhuha;
    dzuhur.innerHTML = json.data.jadwal.dzuhur;
    ashar.innerHTML = json.data.jadwal.ashar;
    maghrib.innerText = json.data.jadwal.maghrib;
    isya.innerText = json.data.jadwal.isya;

    console.log(json.data);
}
// findMyQuran(2023, 11, 9)

async function getAllKota() {
    const dataKota = await fetch('https://api.myquran.com/v1/sholat/kota/semua')
    const jsonKota = await dataKota.json();
    console.log(jsonKota);

    jsonKota.forEach(element => {
        console.log(element);
    });
}
// getAllKota()

async function getFindKota(keyword) {
    const resFindKota = await fetch(`https://api.myquran.com/v1/sholat/kota/cari/${keyword}`)
    const jsonFindKota = await resFindKota.json();

    console.log(jsonFindKota);
}
// getFindKota('indramayu')

async function getAllQuranKemenag() {
    const resAllQuran = await fetch('https://web-api.qurankemenag.net/quran-surah');
    const jsonAllQuran = await resAllQuran.json();
    console.log(jsonAllQuran);
}
// getAllQuranKemenag()

async function getStartLimitQuran(limit, surah) {
    const resStartLmitQuran = await fetch(`https://web-api.qurankemenag.net/quran-ayah?start=0&limit=${limit}&surah=${surah}`);
    const jsonStartLimitQuran = await resStartLmitQuran.json();
    console.log(jsonStartLimitQuran);
}
getStartLimitQuran(20, 2)