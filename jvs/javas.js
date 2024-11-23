//the object 'resData' stores information about various restaurants in different states of Malaysia
//Each state is the key in resdata object and the value is an array of restaurant objects
const resData = {
    sarawak: [
        { name: "The Bikalan", info:"<em>#1 of 529 Restaurants in Kuching</em><br></br>", address: "<strong>Address: </strong>33 Pekan Siniawan, Siniawan, 94000 Bau, Sarawak<br></br>", image: "image/Srwk6.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298309-d15262645-Reviews-The_Bikalan-Kuching_Sarawak.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: +60 85-421 121</strong>"},
        { name: "Zest Restaurant at Miri Marriott Resort & Spa", info:"<em>#1 of 593 Restaurants in Kota Kinabalu</em><br></br>", address: "<strong>Address: </strong>Jln Temenggong Oyong Lawai Jau, Datuk Oyong Lawai, 98000 Miri, Sarawak<br></br>", image: "image/Srwk7.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g303998-d4071490-Reviews-Zest-Miri_Miri_District_Sarawak.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: +60 86-335 820</strong>"},
    ],
    sabah: [
        { name: "Mother India Restaurant", info:"<em>#1 of 109 Restaurants in Sandaka</em><br></br>", address: "<strong>Address: </strong>Oceanus Waterfront mall Lot G-40A, 88000 Kota Kinabalu, Sabah<br></br>", image: "image/Sbh6.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298307-d10980911-Reviews-Mother_India_Restaurant-Kota_Kinabalu_Kota_Kinabalu_District_West_Coast_Division.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 12-480 9089"},
        { name: "Fat Mother Semporna", info:"<em>#1 of 28 Restaurants in Semporna</em><br></br>", address: "<strong>Address: </strong>Taman Bandar Semporna, 91308 Semporna, Sabah<br></br>", image: "image/Sbh8.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g635753-d5966369-Reviews-Fat_Mother_Semporna-Semporna_Semporna_District_Sabah.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 17-904 4188"},
    ],
    kl: [
        { name: "Iketeru Restaurant", info:"<em>#2 of 4,316 Restaurants in Kuala Lumpur</em><br></br>", address: "<strong>Address: </strong>Level 8, 3, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur<br></br>", image: "image/KL7.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298570-d796300-Reviews-Iketeru_Restaurant-Kuala_Lumpur_Wilayah_Persekutuan.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 3-2264 2264"},
        { name: "TTDI Meat Point Halal Steakhouse", info:"<em>#3 of 4,316 Restaurants in Kuala Lumpur</em><br></br>", address: "<strong>Address: </strong>62, Jalan Burhanuddin Helmi, Taman Tun Dr Ismail, 60000 Wilayah Persekutuan, Wilayah Persekutuan Kuala Lumpur<br></br>", image: "image/KL8.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298570-d5894203-Reviews-TTDI_Meat_Point_Halal_Steakhouse-Kuala_Lumpur_Wilayah_Persekutuan.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 360 4040"},
    ],
    putrajaya: [
        { name: "Zest Restaurant", info:"<em>#1 of 126 Restaurants in Putrajaya</em><br></br>", address: "<strong>Address: </strong>IOI RESORT CITY, Persiaran Utara, 62502 Sepang, Putrajaya<br></br>", image: "image/Ptj6.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298305-d5895861-Reviews-Zest_Restaurant-Putrajaya_Wilayah_Persekutuan.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 3-8949 8888"},
        { name: "Makan Kitchen at DoubleTree by Hilton Putrajaya Lakeside", info:"<em>#2 of 126 Restaurants in Putrajaya</em><br></br>", address: "<strong>Address: </strong>2, Jalan P5/5, Presint 5, 62200 Putrajaya, Wilayah Persekutuan Putrajaya<br></br>", image: "image/Ptj7.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298305-d23332098-Reviews-Makan_Kitchen_at_DoubleTree_by_Hilton_Putrajaya_Lakeside-Putrajaya_Wilayah_Perse.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 3-8890 0000"},
    ],
    perak: [
        { name: "Jeff's Cellar", info:"<em>#5 of 620 Restaurants in Ipoh</em><br></br>", address: "<strong>Address: </strong>Ipoh Perak MY, 1, Persiaran Lagoon, Sunway 3, Sunway City, 31150 Tambun<br></br>", image: "image/Prk6.jpg", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g298298-d12166856-Reviews-Jeff_s_Cellar-Ipoh_Kinta_District_Perak.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 5-210 7777"},
        { name: "STG Taiping", info:"<em>#1 of 87 Restaurants in Taiping</em><br></br>", address: "<strong>Address: </strong>Spritzer EcoPark, Jalan Reservoir, 34000 Taiping, Perak<br></br>", image: "image/Prk7.png", more: "<strong>See More: </strong><a href='https://www.tripadvisor.com.my/Restaurant_Review-g670111-d8473593-Reviews-STG_Taiping-Taiping_Larut_Matang_dan_Selama_District_Perak.html' target=''>Tripadvisor</a><br></br>", phone: "<strong>Phone: </strong>+60 12-539 0218"},
    ],
};

document.getElementById("locationDropdown").addEventListener("change", (event) => {
    const location = event.target.value.toLowerCase();
    const resList = document.getElementById("resList");
    const resOptions = document.getElementById("resOptions");

    //clear existing list before adding new results
    resList.innerHTML = "";

    //check if there are results for the selected location
    if (resData[location]) {
        //if data exists, display the options and add the result cards
        resOptions.style.display = "block";
        resData[location].forEach((res) => {
            const resCard = document.createElement("div");
            resCard.className = "res-card";
            resCard.innerHTML = `
                <img src="${res.image}" alt="${res.name}">
                <h3>${res.name}</h3>
                <p>${res.info}</p>
                <p>${res.address}</p>
                <p>${res.more}</p>
                <p>${res.phone}</p>
            `;
            resList.appendChild(resCard);
        });
    }else{
        console.log("No data found for location:", location);
    }
});

function submitFeedback(event) {
    event.preventDefault();  // Prevent the default form submission

    //collect the form data
    let feedbackDate = document.forms["feedback"]["feedback_date"].value;
    let feedbackTime = document.forms["feedback"]["feedback_time"].value;
    let comments = document.forms["feedback"]["comment"].value;
    let recommendationText = document.forms["feedback"]["recommendation"].value;

    //get selected checkboxes and radio buttons
    let positiveFeedback = [];
    let negativeFeedback = [];
    let satisfactionRating = document.querySelector('input[name="satisfaction"]:checked')?.value;
    let usabilityRating = document.querySelector('input[name="usability"]:checked')?.value;
    let recommendationRating = document.querySelector('input[name="recommendation"]:checked')?.value;

    //loop through the checkboxes to get selected options
    let positiveCheckboxes = document.querySelectorAll('input[name="Background_pictures"]:checked, input[name="arrangement"]:checked, input[name="colour"]:checked, input[name="design"]:checked, input[name="content"]:checked');
    positiveCheckboxes.forEach(function (checkbox) {
        positiveFeedback.push(checkbox.value);
    });

    let negativeCheckboxes = document.querySelectorAll('input[name="Background_pictures"]:checked, input[name="arrangement"]:checked, input[name="colour"]:checked, input[name="design"]:checked, input[name="content"]:checked');
    negativeCheckboxes.forEach(function (checkbox) {
        negativeFeedback.push(checkbox.value);
    });

    //check if required fields are filled
    if (!feedbackDate || !feedbackTime || !satisfactionRating || !usabilityRating || !recommendationRating) {
        alert("Please fill out all required fields.");
        return;
    }

    //display the feedback in an alert (or you could send this to a server)
    let feedbackSummary = `
        Feedback Date: ${feedbackDate}\n
        Feedback Time: ${feedbackTime}\n
        Positive Feedback: ${positiveFeedback.join(', ')}\n
        Negative Feedback: ${negativeFeedback.join(', ')}\n
        Usability Rating: ${usabilityRating}\n
        Satisfaction Rating: ${satisfactionRating}\n
        Recommendation Rating: ${recommendationRating}\n
        Comments: ${comments}\n
        Recommendation: ${recommendationText}
    `;

    alert("Thank you for your feedback!\n" + feedbackSummary);
}
