$(function() {

    var colors = { "comune": "#3AC430", "altrepa": "#FF0000", "official": "#266FF0" },
        map = L.map("map").setView([41.879156, 12.457727], 6);

    L.tileLayer("http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png", {
        attribution: [
            'Map tiles by <a href="https://stamen.com/" target="_blank">Stamen Design</a>,',
            'under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.',
            'Data by <a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>,',
            'under <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC-BY-SA 3.0</a>.'
        ].join(" ")
    }).addTo(map);

    pegasus("/comuni-pa/index.json").then(
        function(data) {
            data.forEach(function(el) {

                if (el.lat && el.lng) {
                    L.marker(
                        [el.lat, el.lng],
                        // Marker trick from https://stackoverflow.com/questions/23567203/leaflet-changing-marker-color
                        { icon: L.divIcon({
                            html: '<span class="marker '+(el.official?"marker-official":"")+'" style="background-color: '+colors[el.type]+'"></span>'
                        }) }
                    ).addTo(map).bindPopup([
                        '<img src="/images/arms/'+el.image+'">',
                        el.official ? '<span>&#x2605;</span>' : '',
                        '<h3>'+el.title+'</h3>',
                        '<a href="'+el.permalink+'" target="_blank">Pagina</a> | <a href="'+el.rss+'" target="_blank">RSS</a>'
                    ].join('<br>'));
                } else {
                    console.log("Coordinate mancanti per "+el.title+"...");
                }

            });
        },
        function(data, xhr) {}
    );

});