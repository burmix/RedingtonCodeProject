using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Redington.Models
{
    public enum ProbabilityCalculationModeEnum
    {
        INDEPENDENT_EVENTS,
        NOT_MUTUALLY_EXCLUSIVE_EVENTS
    };

    [Serializable]
    public class ProbabilityCalculation
    {
        public string Name { get; set; }

        public DateTime CalculationDateTime { get; set; }

        public double ProbabilityValueFirst { get; set; }

        public double ProbabilityValueSecond { get; set; }

        public double CalculationResult { get; set; }

        public ProbabilityCalculationModeEnum ProbabilityCalculationMode { get; set; }

        public ProbabilityCalculation()
        {
            CalculationDateTime = DateTime.Now;
            Name = String.Format("{0}{1}{2}-{3}{4}{5}", CalculationDateTime.Year, CalculationDateTime.Month,
                CalculationDateTime.Day, CalculationDateTime.Hour, CalculationDateTime.Minute,
                CalculationDateTime.Second);
        }
    }
}