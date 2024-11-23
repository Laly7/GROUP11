//These codes are teached by ChatGPT except for the data of hotelsRec and res.name

//wait for window is fully loaded
window.onload = function() {
    //select the element with class='states' and add the 'show' class to it
    const RecmElement = document.querySelector(".states");
    RecmElement.classList.add('show'); //display the 'states' section when the page loads
};

//function to display hotel recommendations based on selected state
function hotelRec(statesHotel) {
    //log the selected state to the console for debugging purposes
    console.log("Hotel Rec function triggered with state: " + statesHotel);
    let stateName = ""; //variable to hold the state's name
    let hotelsRec = ""; //variable to hold the html for hotel recommendations
    
    //switch statement to handle different states
    switch (statesHotel) {
        case "KL":
            stateName = "<span class='state-name'>Kuala Lumpur</span><br>";

            hotelsRec += "<br><strong>1. Shangri-La Kuala Lumpur</strong><br> <img src='image/KL1.jpg'>" +
            "<p class='hotelInfo'>#1 best value of 3,122 places to stay in Kuala Lumpur <br><br> ⭐⭐⭐⭐⭐ <br><br> <strong>Address: </strong>11, Jln Sultan Ismail, Kuala Lumpur, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.html?aid=7344253&label=metatripad-link-dmetamy-hotel-175801_xqdz-ad50b1e45d9ed813dfaeebd260d25cf0_los-01_bw-016_tod-17_dom-com_curr-USD_gst-02_nrm-01_clkid-4f6df7fe-f5ad-4e8a-9b90-1972601a8a7d_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&utm_medium=dmeta&no_rooms=1&show_room=17580109_93944899_2_42_0&utm_content=los-01_bw-016_dom-com_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-175801&utm_source=metatripad&highlighted_hotels=175801&checkin=2024-12-03&redirected=1&city=-2403010&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-12-04&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>03-2032 2388</p> <br>"; 

            hotelsRec += "<br><br><strong>2. Days Hotel and Suites by Wyndham Fraser Business Park KL</strong><br> <img src='image/KL2.jpg'>" +
            "<p class='hotelInfo'>#2 best value of 3,122 places to stay in Kuala Lumpur <br><br> ⭐⭐⭐⭐ <br><br> <strong>Address: </strong>Kompleks Metro, Fraser Business Park, 1, Jalan Metro Pudu 2, Pudu, 55200 Kuala Lumpur <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.html?aid=7344253&label=metatripad-link-dmetamy-hotel-4015829_xqdz-47335ecbbf687b92f2a007df6e9e9080_los-01_bw-016_tod-17_dom-com_curr-USD_gst-02_nrm-01_clkid-20fc2f00-45f9-4bdc-9f27-9ab2ad1d18be_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&utm_medium=dmeta&no_rooms=1&show_room=401582904_368927098_2_2_0&utm_content=los-01_bw-016_dom-com_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-4015829&utm_source=metatripad&highlighted_hotels=4015829&checkin=2024-12-03&redirected=1&city=-2403010&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-12-04&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>03-9232 7888</p> <br>";
            break;
        
        case "Slngr":
            stateName = "<span class='state-name'>Selangor</span><br>";

            hotelsRec += "<br><strong>1. Avani Sepang Goldcoast Resort</strong><br> <img src='image/Slngr1.jpg'>" +
            "<p class='hotelInfo'>#1 best value of 1,765 places to stay in Selangor <br><br> ⭐⭐⭐⭐ <br><br> <strong>Address: </strong>67, Jalan Pantai Bagan Lalang, Kg Bagan Lalang, Bagan Lalang, 43950 Sungai Pelek, Selangor <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-175832_xqdz-73d18f2745540a0fb27024ead70bebef_los-01_bw-007_tod-19_dom-commy_curr-MYR_gst-02_nrm-01_clkid-3b1c36da-9837-441c-844d-c30ba0187086_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&utm_medium=dmeta&no_rooms=1&show_room=17583201_88831442_0_1_0&utm_content=los-01_bw-007_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-175832&utm_source=metatripad&highlighted_hotels=175832&checkin=2024-11-24&redirected=1&city=-2403350&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-11-25&age=1&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>03-3182 3600</p> <br>";

            hotelsRec += "<br><br><strong>2. Acappella Suite Hotel</strong><br> <img src='image/Slngr2.jpg'>" +
            "<p class='hotelInfo'>#2 best value of 1,765 places to stay in Selangor <br><br> ⭐⭐⭐⭐ <br><br> <strong>Address: </strong>No. 8, Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-1411602_xqdz-47335ecbbf687b92f2a007df6e9e9080_los-01_bw-007_tod-19_dom-commy_curr-MYR_gst-02_nrm-01_clkid-d0a1f12b-f501-4fde-8986-ad50100a5cd6_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-50&utm_medium=dmeta&no_rooms=1&show_room=141160204_261679408_0_2_0_641249&utm_content=los-01_bw-007_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-1411602&utm_source=metatripad&highlighted_hotels=1411602&checkin=2024-11-24&redirected=1&city=-2405303&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-11-25&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>03-5039 8888</p> <br>";
            break;

        case "Srwk":
            stateName = "<span class='state-name'>Sarawak</span><br>";

            hotelsRec += "<br><strong>1. The Culvert Hotel Resort Kuching</strong><br> <img src='image/Srwk1.jpg'>" +
            "<p class='hotelInfo'>#1 best value of 908 places to stay in Kuching <br><br> ⭐⭐⭐ <br><br> <strong>Address: </strong>Lot 285, Off Jalan Sultan Tengah Block 2 Salak Land District Santubong Damai, 93050 Kuching, Sarawak <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.html?aid=7344253&label=methttps://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-2500438_xqdz-9b0b49b09a44c9db9ce43330d1da0050_los-01_bw-007_tod-20_dom-commy_curr-MYR_gst-02_nrm-01_clkid-fbd66f0e-5fa4-41dd-9aca-be7f24cf0334_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-50&utm_medium=dmeta&no_rooms=1&show_room=250043802_335376585_2_41_0&utm_content=los-01_bw-007_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-2500438&utm_source=metatripad&highlighted_hotels=2500438&checkin=2024-11-24&redirected=1&city=-2402530&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-11-25&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>019-889 9925</p> <br>";

            hotelsRec += "<br><br><strong>2. Sheraton Kuching Hotel</strong><br> <img src='image/Srwk4.jpeg'>" +
            "<p class='hotelInfo'>#2 best value of 908 places to stay in Kuching <br><br> ⭐⭐⭐⭐⭐ <br><br> <strong>Address: </strong>2, Jln Padungan, 93100 Kuching, Sarawak <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-10893767_xqdz-c191b4c24ec5f05d5f5905d03578eb0a_los-01_bw-007_tod-20_dom-commy_curr-MYR_gst-02_nrm-01_clkid-b973305c-258d-4b2b-a116-36cae657437f_aud-0000_mbl-M_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&utm_medium=dmeta&no_rooms=1&show_room=1089376701_381854653_2_0_0&utm_content=los-01_bw-007_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-10893767&utm_source=metatripad&highlighted_hotels=10893767&checkin=2024-11-24&redirected=1&city=-2402530&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-11-25&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>082-221 188</p> <br>";
            break;

        case "Sbh":
            stateName = "<span class='state-name'>Sabah</span><br>";

            hotelsRec += "<br><strong>1. The Magellan Sutera Resort</strong><br> <img src='image/Sbh1.jpg'>" +
            "<p class='hotelInfo'>#1 best value of 1,899 places to stay in Sabah <br><br> ⭐⭐⭐⭐⭐ <br><br> <strong>Address: </strong>The Magellan Sutera Resort, 1 Sutera Harbour Boulevard, Sutera Harbour, 88100 Kota Kinabalu, Sabah <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-25662_xqdz-c191b4c24ec5f05d5f5905d03578eb0a_los-01_bw-015_tod-21_dom-commy_curr-MYR_gst-02_nrm-01_clkid-438e6bd9-4a60-443c-a7a5-60e31f9d5953_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-50&utm_medium=dmeta&no_rooms=1&show_room=2566234_95149345_2_1_0_677884&utm_content=los-01_bw-015_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-25662&utm_source=metatripad&highlighted_hotels=25662&checkin=2024-12-02&redirected=1&city=-2404760&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-12-03&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>088-318 888</p> <br>";

            hotelsRec += "<br><br><strong>2. The Pacific Sutera Hotel</strong><br> <img src='image/Sbh2.jpg'>" +
            "<p class='hotelInfo'>#2 best value of 1,899 places to stay in Sabah <br><br> ⭐⭐⭐⭐⭐ <br><br> <strong>Address: </strong>The Pacific Sutera Hotel, 1 Sutera Harbour Boulevard, Sutera Harbour, 88100 Kota Kinabalu, Sabah <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-25663_xqdz-47335ecbbf687b92f2a007df6e9e9080_los-01_bw-015_tod-21_dom-commy_curr-MYR_gst-02_nrm-01_clkid-52554817-302b-49f4-a611-2ba6df682cd6_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-50&utm_medium=dmeta&no_rooms=1&show_room=2566301_95149349_2_2_0_592504&utm_content=los-01_bw-015_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-25663&utm_source=metatripad&highlighted_hotels=25663&checkin=2024-12-02&redirected=1&city=-2404760&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-12-03&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>088-318 888</p> <br>";
            break;

        case "PPng":
            stateName = "<span class='state-name'>Pulau Pinang (Penang Island)</span><br>";

            hotelsRec += "<br><strong>1. DoubleTree Resort By Hilton Hotel Penang</strong><br> <img src='image/PPng1.jpg'>" +
            "<p class='hotelInfo'>#1 best value of 1,216 places to stay in Penang Island<br><br> ⭐⭐⭐⭐ <br><br> <strong>Address: </strong>56, Jalan Low Yat, Puncak Ria, 11100 Batu Ferringhi, Pulau Pinang <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-25721_xqdz-a777fbe9e57f2698ce613c4f3b92e8bb_los-01_bw-016_tod-21_dom-commy_curr-MYR_gst-02_nrm-01_clkid-8ced22ac-241b-4783-9a65-3ef7749dc251_aud-0000_mbl-M_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&utm_medium=dmeta&no_rooms=1&show_room=2572123_103514068_2_34_0&utm_content=los-01_bw-016_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-25721&utm_source=metatripad&highlighted_hotels=25721&checkin=2024-12-03&redirected=1&city=-2403097&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-12-04&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>04-892 8000</p> <br>";

            hotelsRec += "<br><br><strong>2. Hard Rock Hotel Penang</strong><br> <img src='image/PPng2.jpg'>" +
            "<p class='hotelInfo'>#2 best value of 1,216 places to stay in Penang Island<br><br> ⭐⭐⭐⭐⭐ <br><br> <strong>Address: </strong>Batu Ferringhi Beach, 11100 Batu Ferringghi, Pulau Pinang <br><br> <strong>Booking via: </strong><a href='https://www.booking.com/searchresults.ms.html?aid=7344253&label=metatripad-link-dmetamy-hotel-175826_xqdz-47335ecbbf687b92f2a007df6e9e9080_los-01_bw-016_tod-21_dom-commy_curr-MYR_gst-02_nrm-01_clkid-056a6a90-dbea-4435-9de3-ddaf84ce1783_aud-0000_mbl-L_pd-B_sc-2_defdate-0_spo-0_clksrc-0_mcid-50&utm_medium=dmeta&no_rooms=1&show_room=17582601_215348775_2_2_0_371510&utm_content=los-01_bw-016_dom-commy_defdate-0_spo-0_clksrc-0&utm_campaign=my&utm_term=hotel-175826&utm_source=metatripad&highlighted_hotels=175826&checkin=2024-12-03&redirected=1&city=-2403097&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-12-04&keep_landing=1&sid=2c2a35fd45dc8cc1885a74b322fab2fe' target=''>Booking.com</a> <br><br> <strong>Phone: </strong>04-881 1711</p> <br>";
            break;

        default:
            stateName = "<span class='state-name'>State</span>";
            hotelsRec = "<strong>Hotels recommendation</strong>";
            break;
    }

    //adding the 'show' class to element with class 'hotels'
    document.getElementById("hotelsRec").innerHTML = stateName + hotelsRec;
    //scrolling the element with id 'hotels' into view smoothly
    document.querySelector(".hotels").classList.add("show"); 
    document.getElementById("hotels").scrollIntoView({
        behavior: 'smooth', //scroll smoothly
        block: 'start' //align the top of the element with the top of viewport(visible area of browser window's)
    });

}