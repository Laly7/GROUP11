let availableKeywords = [
    'Home',
    'Hotels',
    'Flights',
    'Destinations',
    'Car Rental',
    'Restaurants',
    'Feedbacks',
    'About Us',
    'Sarawak',
    'Sabah',
    'Labuan',
    'Kuala Lumpur',
    'Johor',
    'Kedah',
    'Kelantan',
    'Malacca',
    'Negeri Sembilan',
    'Pahang',
    'Penang',
    'Perak',
    'Perlis',
    'Putrajaya',
    'Selangor',
    'Terengganu',
];

const pageLinks = {
    'Home': 'index.html',
    'Hotels': 'Hotels.html',
    'Flights': 'flights.html',
    'Destinations': 'Destinations.html',
    'Car Rental': 'carhire.html',
    'Restaurants': 'restaurants_recommendation.html',
    'Feedbacks': 'feedbacks.html',
    'About Us': 'AboutUs.html',
    'Sarawak': 'sarawak.html',
    'Sabah':'sabah.html',
    'Labuan': 'labuan.html' ,
    'Kuala Lumpur': 'KL.html',
    'Johor': 'johor.html',
    'Kedah': 'kedah.html',
    'Kelantan': 'kelantan.html',
    'Malacca': 'malacca.html',
    'Negeri Sembilan': 'ns.html',
    'Pahang': 'pahang.html',
    'Penang': 'penang.html',
    'Perak': 'perak.html',
    'Perlis': 'perlis.html',
    'Putrajaya': 'putrajaya.html',
    'Selangor': 'selangor.html',
    'Terengganu': 'terengganu.html',
    
};

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }

}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectionInput(this)>" + list +  "<li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "<ul>"

}

function selectionInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

function handleSearch() {
    const query = document.getElementById('input-box').value.trim();
    if (query && pageLinks[query]) {
        window.location.href = pageLinks[query];
    } else {
        alert("No matching page found for your search.");
    }
}

document.querySelector('button').addEventListener('click', handleSearch);  
