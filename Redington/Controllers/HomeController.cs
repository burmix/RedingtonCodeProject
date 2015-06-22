using Microsoft.Ajax.Utilities;
using Redington.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Redington.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "About";

            return View();
        }

        [HttpPost]
        public JsonResult SaveCalculationResults(double _probabilityValueFirst, double _probabilityValueSecond, int _probabilityCalculationMode, double _result)
        {
            var calculation = new ProbabilityCalculation()
            {
                ProbabilityValueFirst = _probabilityValueFirst,
                ProbabilityValueSecond = _probabilityValueSecond,
                ProbabilityCalculationMode = (ProbabilityCalculationModeEnum)_probabilityCalculationMode,
                CalculationResult = _result
            };

            this.Session.Add(calculation.Name, calculation);

            return new JsonResult() { Data = calculation };
        }
    }
}