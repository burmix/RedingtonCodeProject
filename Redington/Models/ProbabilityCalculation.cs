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
        public decimal IndependentEvents { get; set; }

        public decimal NotMutuallyExclusiveEvents { get; set; }

        public decimal CalculationResult { get; set; }

        public ProbabilityCalculationModeEnum ProbabilityCalculationMode { get; set; }

        public DateTime CalculationDateTime { get; set; }

        public ProbabilityCalculation()
        {
            CalculationDateTime = DateTime.Now;
        }
    }
}