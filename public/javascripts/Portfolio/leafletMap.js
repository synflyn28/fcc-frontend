//Contains code for basic leaflet embed
//Justin Lynn Reid - 9/9/2015
$(document).ready(function(){
  var map = L.map('map').setView([35.524292, -81.142382], 15);
  var popupHtml = '<p style="color: #333333">3013 Loop Rd. Lincolnton, NC 28092</p>';
  popupHtml += '<p style="color: #333333"> Phone: (405)-779-6131</p>';
  popupHtml += '<p style="color: #333333">Email: <a href="mailto:jlreid@alumni.unca.edu">';
  popupHtml += 'jlreid@alumni.unca.edu</p>';

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([35.524292, -81.142382]).addTo(map)
      .bindPopup(popupHtml)
      .openPopup();
});
