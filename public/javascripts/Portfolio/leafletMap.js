//Contains code for basic leaflet embed
//Justin Lynn Reid - 9/9/2015
$(document).ready(function(){
  var map = L.map('map').setView([35.508550, -82.519404], 15);
  var popupHtml = '<p style="color: #333333">1106 Turtle Creek Drive Asheville, NC 28803</p>';
  popupHtml += '<p style="color: #333333"> Phone: (405)-779-6131</p>';
  popupHtml += '<p style="color: #333333">Email: <a href="mailto:jlreid@alumni.unca.edu">';
  popupHtml += 'jlreid@alumni.unca.edu</p>';

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([35.508550, -82.519404]).addTo(map)
      .bindPopup(popupHtml)
      .openPopup();
});
