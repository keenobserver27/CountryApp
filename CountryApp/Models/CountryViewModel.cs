﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CountryApp.Models
{
    public class CountryViewModel
    {
        public string name { get; set; }
        public string flag { get; set; }
        public List<string> topLevelDomain { get; set; }
        public string alpha2Code { get; set; }
        public string alpha3Code { get; set; }
        public List<string> callingCodes { get; set; }
        public string capital { get; set; }
        public List<string> altSpellings { get; set; }
        public string region { get; set; }
        public string subregion { get; set; }
        public int population { get; set; }
        public List<double> latlng { get; set; }
        public string demonym { get; set; }
        public double? area { get; set; }
        public double? gini { get; set; }
        public List<string> timezones { get; set; }
        public List<string> borders { get; set; }
        public string nativeName { get; set; }
        public int? numericCode { get; set; }
        public List<CurrencyViewModel> currencies { get; set; }
        public List<LanguageViewModel> languages { get; set; }
        public TranslationViewModel translations { get; set; }
        public List<RegionalBlocViewModel> regionalBlocs { get; set; }
    }
}