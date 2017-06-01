using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Net;
using CountryApp.Models;

namespace CountryApp.Controllers
{
    public class HomeController : Controller
    {
        private List<CountryViewModel> countryList;
        public HomeController()
        {
            var client = new WebClient();
            var data = client.DownloadString("https://restcountries.eu/rest/v2/all");
            countryList = JsonConvert.DeserializeObject<List<CountryViewModel>>(data);
        }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllCountries()
        {
            return Json(countryList, JsonRequestBehavior.AllowGet);
        }
        
        public JsonResult GetCountryDetails(string countryName)
        {
            string cName = countryName.Replace("\"", "");
            CountryViewModel countryDetail = countryList.Where(a => a.name == cName).SingleOrDefault();
            return Json(countryDetail, JsonRequestBehavior.AllowGet);
        }        
        
    }
}