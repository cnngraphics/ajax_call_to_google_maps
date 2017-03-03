//assumes that JQUERY is loaded

$.ajax({
url:"https://maps.googleapis.com/maps/api/geocode/json?",
data: {address: 33071}, //will be converted to query string with &key=value
type: "GET", //defines the type of reques
dataType: "JSON" //expected return format for the data`
})
   .done(function(json){   //on success - call back function 
   console.log(json.results[0].address_components[3]);
   

     }).fail(function(xhr, status,errorThrown){ //catching errors

      console.log("Sorry, issues - ");
      console.log("Error: "+errorThrown);
      console.log("Status: "+status);
      console.dir(xhr);
});