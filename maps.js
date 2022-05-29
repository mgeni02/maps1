var map;
        function initMap() {
            var options = {
                zoom: 10,
                center: {lat:47.2529, lng:-122.4443}
              };  
            map = new google.maps.Map(document.getElementById('map1'), options );

        function addMarkerAndCoverage(coords, metres){
                var marker = new google.maps.Marker({position: coords, map:map});
                var circle = new google.maps.Circle({map:map, center: coords, radius:metres});
            }
            
            addMarker({lat:47.3770, lng:-122.4298}, 5000);
            addMarker({lat:47.2043, lng:-121.9915}, 3000);
            addMarker({lat:47.5707, lng:-122.2221}, 4000);
            addMarker({lat:47.3596, lng:-121.1180}, 5000);
            addMarker({lat:47.3523, lng:-121.9837}, 1000);
            addMarker({lat:47.1854, lng:-122.2929}, 3000);
            addMarker({lat:46.9832, lng:-122.5887}, 4000);
            addMarker({lat:47.0798, lng:-122.0515}, 5000);
         
       } 