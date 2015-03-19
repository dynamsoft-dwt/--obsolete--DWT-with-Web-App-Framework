function twainControl($scope) {
    $scope.acquireImage = function() {
        var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer'); // Get the Dynamic Web TWAIN object that is embeded in the div with id 'dwtcontrolContainer'.
        DWObject.IfDisableSourceAfterAcquire = true;    // Source will be closed automatically after acquisition.
        DWObject.SelectSource();                        // Select a Data Source (a device like scanner) from the Data Source Manager.
        DWObject.OpenSource();                          // Open the source. You can set resolution, pixel type, etc. after this method. Please refer to the sample 'Scan' -> 'Custom Scan' for more info.
        DWObject.AcquireImage();
    };
}

var app = angular.module('WebScanning', []);
app.controller('twainControl',twainControl);