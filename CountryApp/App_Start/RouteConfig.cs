using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CountryApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               null,
              "Home/Home/GetAllCountries",
               new { controller = "Home", action = "GetAllCountries" }
            );

            routes.MapRoute(
               null,
              "Home/Details/Home/GetCountryDetails",
               new { controller = "Home", action = "GetCountryDetails" }
            );

            routes.MapRoute(
            name: "Home",
            url: "Home/Index",
            defaults: new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                name: "HomeD",
                url: "Home/Details/{name}",
                defaults: new { controller = "Home", action = "Index", name = UrlParameter.Optional }
            );


            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
