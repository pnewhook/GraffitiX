/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

(function () {
    "use strict";

    var dataArray = [
        { longitude: -58.35577, latitude: -34.632961,  img: "../images/art/IMG_3877.jpg", title: "Buenos Aires 4" },
        { longitude: -58.381391, latitude: -34.620636, img: "../images/art/IMG_3941.jpg", title: "Buenos Aires 5" },
        { longitude: -58.359504, latitude: -34.629147, img: "../images/art/IMG_3953.jpg", title: "Buenos Aires 2" },
        { longitude: -58.365984, latitude: -34.640199, img: "../images/art/IMG_3976.jpg", title: "Buenos Aires 3" },
        { longitude: -58.361607, latitude: -34.634373, img: "../images/art/IMG_3985.jpg", title: "Buenos Aires 1" },
        { longitude: -71.620216, latitude: -33.045436, img: "../images/art/IMG_4418.jpg", title: "Valparaiso 1" },
        { longitude: -71.617298, latitude: -33.046011, img: "../images/art/IMG_4423.jpg", title: "Valparaiso 2" },
        { longitude: -71.619358, latitude: -33.047217, img: "../images/art/IMG_4428.jpg", title: "Valparaiso 3" },
        { longitude: -71.623392, latitude: -33.047792, img: "../images/art/IMG_4437.jpg", title: "Valparaiso 4" },
        { longitude: -71.615989, latitude: -33.047792, img: "../images/art/IMG_4443.jpg", title: "Valparaiso 5" },
        { longitude: -71.613479, latitude: -33.048907, img: "../images/art/IMG_4446.jpg", title: "Valparaiso 6" },
        { longitude: -71.617727, latitude: -33.048745, img: "../images/art/IMG_4449.jpg", title: "Valparaiso 7" },
        { longitude: -71.610861, latitude: -33.045939, img: "../images/art/IMG_4465.jpg", title: "Valparaiso 8" },
        { longitude: -71.609659, latitude: -33.04817,  img: "../images/art/IMG_4469.jpg", title: "Valparaiso 9" },
        { longitude: -70.652046, latitude: -33.441218, img: "../images/art/Santiago_1.jpg", title: "Santiago 2" },
        { longitude: -70.657883, latitude: -33.441075, img: "../images/art/Santiago_2.jpg", title: "Santiago 2" },
        { longitude: -70.653334, latitude: -33.441648, img: "../images/art/Santiago_3.jpg", title: "Santiago 3" },
        { longitude: -70.649385, latitude: -33.437745, img: "../images/art/Santiago_4.jpg", title: "Santiago 4" }
    ];
    var tags = new WinJS.Binding.List(dataArray);
    WinJS.Namespace.define("GraffitiX", {
        taglist: tags
    });
})();
