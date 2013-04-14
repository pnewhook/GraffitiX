(function () {
    var addcmd = document.getElementById("addbutton");
    addcmd.addEventListener("click", addGraffiti, false);
    var submitbtn = document.getElementById('submit');
    submitbtn.addEventListener('click', closeFlyout, false);

    function addGraffiti() {
        // Create the picker object and set options
        var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
        openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
        openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
        // Users expect to have a filtered view of their folders depending on the scenario.
        // For example, when choosing a documents folder, restrict the filetypes to documents for your application.
        openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

        // Open the picker for the user to pick a file
        openPicker.pickSingleFileAsync().then(function (file) {
            if (file) {
                // Application now has read/write access to the picked file
                WinJS.log && WinJS.log("Picked photo: " + file.name, "File", "info");
                GraffitiX.file = file;
                document.getElementById("filename").value = file.path;

                showFlyout();
            } else {
                // The picker was dismissed with no selected file
                WinJS.log && WinJS.log("Operation cancelled.", "sample", "status");
            }
        });

        function showFlyout() {
            WinJS.log && WinJS.log("Opening Flyout", null, "info");
            document.getElementById("myflyout").winControl.show(document.getElementById('mapDiv'),"bottom", "center");
        }

    }
    function closeFlyout() {
        WinJS.log && WinJS.log("Closing Flyout", null, "info");
        var imagePath = document.getElementById("filename").value;
        
        var urlObject = URL.createObjectURL(GraffitiX.file, { oneTimeOnly: true });
        GraffitiX.taglist.push({ longitude: -70.652046, latitude: -33.441218, img: urlObject, title: "Santiago 1" });
        document.getElementById("myflyout").winControl.hide();
    }

})();