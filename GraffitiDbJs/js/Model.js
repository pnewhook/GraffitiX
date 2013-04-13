/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

(function () {
    "use strict";

    var dataArray = [
    {title:"Picture1",artist:"Peter Newhook", img:"Foo"},
    {title:"Picture2",artist:"Peter Newhook", img:"Foo"},
    {title:"Picture3",artist:"Peter Newhook", img:"Foo"}
    ];
    var tags = new WinJS.Binding.List(dataArray);
    WinJS.Namespace.define("GraffitiX", {
        taglist: tags
});
})();
