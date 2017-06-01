app.service('CountryService', function ($http) { 

    this.getAllCountries = function () {
        return $http.get("Home/GetAllCountries");
    };

    this.getCountryByName = function (objName) {
        var response = $http({
            method: "post",
            url: "Home/GetCountryDetails",
            params: {
                countryName: JSON.stringify(objName)
            }
        });
        return response;
    }

});