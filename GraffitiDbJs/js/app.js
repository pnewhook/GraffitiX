/// <reference path="ms-appx:///Bing.Maps.JavaScript//js/veapicore.js" />
/// <reference path="ms-appx://Bing.Maps.JavaScript/js/veapiModules.js" />
WinJS.Namespace.define("GraffitiDb",
    {
        initialize: function() {
            Microsoft.Maps.loadModule('Microsoft.Maps.Map', { callback: initMap, culture: 'en-us', homeRegion: 'US', zoom: 18 });
            function initMap() {
                var map;

                var mapOptions =
                {
                    credentials: "Ap3Ia1YWeZo0uh2LVTF5nH2d03vY-IKtelnVQK77y68WKAzOOhV3VVL_eoiy1eav",
                    center: new Microsoft.Maps.Location(-33.045904, -71.62056),
                    zoom: 15
                };

                map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);
            }
        }
    }
);

