var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [{
        path: '/about/',
        url: 'about.html',
    }, {
        path: '/home/',
        url: 'index.html'
    }],
    // ... other parameters
});

var $$ = Dom7;
if (app.device.ios) {
    $$('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">'
    );
} else {
    $$('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.md.min.css">'
    );
}
var mainView = app.views.create('.view-main');

$$(".confirm").each(function () {
    $$(this).on('click', function (e) {
        var id = $$(this).data('id');
        $$(this).removeClass('color-gray');
        $$(this).addClass('color-blue');
        $$("#report" + id).removeClass('color-blue');
        $$("#report" + id).addClass('color-gray');
        $$(this).text('Confirmed');
        $$("#report" + id).text('Report');
    });
});

$$(".report").each(function () {
    $$(this).on('click', function (e) {
        var id = $$(this).data('id');
        $$(this).removeClass('color-gray');
        $$(this).addClass('color-blue');
        $$("#confirm" + id).removeClass('color-blue');
        $$("#confirm" + id).addClass('color-gray');
        $$(this).text('Reported');
        $$("#confirm" + id).text('Confirm');
    });
});

window.onload = function () {
    plugin.google.maps.environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDFoKox77-7dFBBUBIUG2OBmCZpU-_JoMA',
        'API_KEY_FOR_BROWSER_DEBUG': '' // If key is empty or unset,
        // the maps plugin runs under the development mode.
    });
    app.dialog.alert($$("#map_canvas").height());
    var options = {
        camera: {
            target: {
                lat: -25.363882,
                lng: 131.044922
            },
            zoom: 19
        }
    };

    var map = plugin.google.maps.Map.getMap(document.getElementById('map_canvas'), options);
    plugin.google.maps.LocationService.getMyLocation(function (location) {
        map.moveCamera({
            target: {
                lat: location.latLng.lat,
                lng: location.latLng.lng
            },
            zoom: 17,
            tilt: 60,
            bearing: 140
        });
    });
};