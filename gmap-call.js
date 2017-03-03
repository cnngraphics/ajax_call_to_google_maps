$.ajax({
url:"https://maps.googleapis.com/maps/api/geocode/json?",
data: {address: 33071},
type: "GET",
dataType: "JSON"
})
   .done(function(json){
   console.log(json.results[0].address_components[3]);
   

     }).fail(function(xhr, status,errorThrown){

      console.log("Sorry, issues - ");
      console.log("Error: "+errorThrown);
      console.log("Status: "+status);
      console.dir(xhr);
});