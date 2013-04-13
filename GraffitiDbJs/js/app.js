/// <reference path="ms-appx:///Bing.Maps.JavaScript//js/veapicore.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="ms-appx://Bing.Maps.JavaScript/js/veapiModules.js" />
(function () {
    "use strict";

    WinJS.Namespace.define("GraffitiX",
    {
        map: null,
        initialize: function () {
            "use strict";
            
            Microsoft.Maps.loadModule('Microsoft.Maps.Map', { callback: initMap, culture: 'en-us', homeRegion: 'US', zoom: 18 });
            function initMap() {
                var mapOptions =
                {
                    credentials: "Ap3Ia1YWeZo0uh2LVTF5nH2d03vY-IKtelnVQK77y68WKAzOOhV3VVL_eoiy1eav",
                    center: new Microsoft.Maps.Location(-33.045904, -71.62056),
                    zoom: 15
                };

                GraffitiX.map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);
                GraffitiX.addLocations();
            }
        }
    }
);


})();
