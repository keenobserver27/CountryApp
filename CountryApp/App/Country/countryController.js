app.controller('CountryController', ['$scope', '$filter', '$window', 'CountryService', function ($scope, $filter, $window, CountryService) {
    
    GetAllCountries();

    function GetAllCountries() {      
        var getData = CountryService.getAllCountries();

        getData.then(function (ctrlData) {
            $scope.countries = ctrlData.data;
            GetName(ctrlData.data);
            GetCapital(ctrlData.data);
        }, function () {
            alert('unable to load data..');
        });
    }

    $scope.GetCountryDetails = function(data)
    {
        window.location.href = "Home/Details/" + data.name;
    }

    $scope.countryName = [];
    function GetName(list) {
        angular.forEach(list, function (item) {            
            $scope.countryName.push({cname:item.name});            
        });
    }

    $scope.countryCapital = [];
    function GetCapital(list) {
        angular.forEach(list, function (item) {
            if (item.capital != '') {
                $scope.countryCapital.push({ ccapital: item.capital });
            }
        });
        $scope.countryCapital = $filter('orderBy')($scope.countryCapital, 'ccapital');
    }
    
    $scope.countryRegion = [
                        { cregion: 'Africa' },
                        { cregion: 'Americas' },
                        { cregion: 'Asia' },
                        { cregion: 'Europe' },
                        { cregion: 'Oceania' },
                        { cregion: 'Polar' }
    ];

    $scope.countrySubregion = [
                        { csubregion: 'Australia and New Zealand' },
                        { csubregion: 'Caribbean' },
                        { csubregion: 'Central America' },
                        { csubregion: 'Central Asia' },
                        { csubregion: 'Eastern Africa' },
                        { csubregion: 'Eastern Asia' },
                        { csubregion: 'Eastern Europe' },
                        { csubregion: 'Melanesia' },
                        { csubregion: 'Micronesia' },
                        { csubregion: 'Middle Africa' },
                        { csubregion: 'Northern Africa' },
                        { csubregion: 'Northern America' },
                        { csubregion: 'Northern Europe' },
                        { csubregion: 'Polynesia' },
                        { csubregion: 'South America' },
                        { csubregion: 'South-Eastern Asia' },
                        { csubregion: 'Southern Africa' },
                        { csubregion: 'Southern Asia' },
                        { csubregion: 'Southern Europe' },
                        { csubregion: 'Western Africa' },
                        { csubregion: 'Western Asia' },
                        { csubregion: 'Western Europe' },
    ];

    $scope.cName = '';
    $scope.ResetName = function () {
        if ($scope.cName == null) {
            $scope.cName = '';
        }
    }

    $scope.cCapital = '';
    $scope.ResetCapital = function () {
        if ($scope.cCapital == null) {
            $scope.cCapital = '';
        }
    }

    $scope.cRegion = '';
    $scope.ResetRegion = function () {
        if ($scope.cRegion == null) {
            $scope.cRegion = '';
        }
    }

    $scope.cSubRegion = '';
    $scope.ResetSubRegion = function () {
        if ($scope.cSubRegion == null) {
            $scope.cSubRegion = '';
        }
    }

    $scope.ClearSearchBox = function ()
    {
        $scope.searchAnyField = '';
        $scope.cName = '';
        $scope.cCapital = '';
        $scope.cRegion = '';
        $scope.cSubRegion = '';
    }

}]);

app.controller("CountryDetailController", ['$scope', '$routeParams', 'CountryService', function ($scope, $routeParams, CountryService) {

    

    var initialize = function () {
        loadDetails($routeParams.name);
    }

    var loadDetails = function (name) {
        debugger;
        var getCountryData = CountryService.getCountryByName(name);
        getCountryData.then(function (ctrlData) {
            $scope.countryDetails = ctrlData.data;
        }, function () {
            alert('unable to load data..');
        });
    }

    initialize();
}]);