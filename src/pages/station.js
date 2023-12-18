import React, { useState ,useEffect} from 'react';
import "../pages/home.css";
import "../pages/stores.js";
window.onload = function() {
  
}
var google;
var stores;
var map;
var markers = [];
var infoWindow;

 


function initMap() {
    var losAngeles = { 
        lat: 34.063380, 
        lng: -118.358080 
    };
    map = new google.maps.Map(document.getElementById("map"), {
      center: losAngeles,
      zoom: 11,
      mapTypeId: "roadmap",
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
    
  }

function searchStores() {
  var foundStores = [];
  var zipCode = document.getElementById('zip-code-input').value;
  if(zipCode){
    for (var store of stores){
      var postal = store['address']['postalCode'].substring(0,5);
      if(postal === zipCode){
        foundStores.push(store);
  } 
  }
  
    }else {
      foundStores = stores;
  }
  clearLocations();
  displayStores(foundStores);
  showStoresMarkers(foundStores);
  setOnClickListener();
}

function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function setOnClickListener() {
  var storeElements = document.querySelectorAll('.store-container');
  storeElements.forEach(function(element, index){
    element.addEventListener('click', function(){
      new google.maps.event.trigger(markers[index], "click");
    })
  })
}

function displayStores() {
  var storesHtml ='';
  for(var [index, store] of stores.entries()){
    var address = store['addressLines'];
    var phone = store['phoneNumber'];
    storesHtml += `
            <div class="store-container">
              <div class="store-container-background">
                <div class="store-info-container">
                  <div class="store-address">
                    <span>${address[0]}</span>
                    <span>${address[1]}</span>
                  </div>
                  <div class="store-phone-number">${phone}</div>
                </div>
                <div class="store-number-container">
                  <div class="store-number">
                    ${index+1}
                  </div>
                </div>
              </div>
            </div>
    `
    document.querySelector('.stores-list').innerHTML = storesHtml;
    
  }
}

function showStoresMarkers(stores){
  var bounds = new google.maps.LatLngBounds();
  for(var [index, store] of stores.entries()){
    var latlng = new google.maps.LatLng(
      store["coordinates"]["latitude"],
      store["coordinates"]["longitude"]);
    var name = store["name"];
    var address = store["addressLines"][0];
    var openStatusText = store["openStatusText"];
    var phoneNumber = store["phoneNumber"];
    bounds.extend(latlng);
    createMarker(latlng, name, address, openStatusText, phoneNumber, index+1)
  }
  map.fitBounds(bounds);
  
}

function createMarker(latlng, name, address, openStatusText, phoneNumber, index) {
  var html = `
      <div class="store-info-window">
        <div class="store-info-name">
          ${name}
        </div>
        <div class="store-info-status">
          ${openStatusText}
        </div>
        <div class="store-info-address">
          <div class="circle">
            <i class="fas fa-location-arrow"></i>
          </div>
          ${address}
        </div>
        <div class="store-info-phone">
          <div class="circle">
            <i class="fas fa-phone-alt"></i>
          </div>
          ${phoneNumber}
        </div>
      </div>
  `
  var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            label: index.toString(),
          });
          google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
          });
          markers.push(marker);
}
const StoreLocator = ({stores}) => {
  const [ filteredStores ] = useState([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);
 
  const loadScript = () => {
    
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDx0lPvZoA1GxiDFVnvSTDJhtDuNWIV6Jc&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_locatorplus_v7_cABDF`;
      script.async = true;
      script.defer = true;

      script.addEventListener('load', () => {
        setScriptLoaded(true);
      });

      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    loadScript();

    // Define the initMap function globally to avoid issues
    window.initMap = initMap;

    // Clean up the global function when the component unmounts
    return () => {
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    // Check if the script has been loaded before calling initMap
    if (scriptLoaded) {
      initMap();
    }
  }, [scriptLoaded]);

  return (
    <>
    <div class="home-page-header pt-5 pb-3">
     <div  class="container pt-5 pb-5">
        <div class ="Row">
            <div class="header-text-heading pt-5 pb-5">
                <h2>Locate Your Nearest EV Station here</h2>
            </div>
        </div>
     </div>
   </div> 

      <div class="title ">Store Locator</div>
      <div class="pt-5">
      <div class="search-container">
        <div class="search">
          <input type="text" id="zip-code-input" placeholder="Enter Zip" />
          <i class="fas fa-search" onclick="searchStores()"></i>
        </div>
      </div>
      </div>
      <div className="stores-list-container">
        <div className="store-list">
          {filteredStores.map((stores, index) => (
            <div className="store-container" key={index}>
                <h1>{stores.id}</h1>
                <div>{stores.name}</div>
                <div>{stores.storeNumber}</div>
            </div>
          ))}
        </div>
        <div id="map"></div>
      </div>
    
      
    </>
  );
};

export default StoreLocator;
