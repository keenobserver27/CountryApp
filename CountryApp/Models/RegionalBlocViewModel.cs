using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CountryApp.Models
{
    public class RegionalBlocViewModel
    {
        public string acronym { get; set; }
        public string name { get; set; }
        public List<string> otherAcronyms { get; set; }
        public List<string> otherNames { get; set; }
    }
}