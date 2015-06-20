using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Redington.Models
{
    [Serializable]
    public class IndexVm
    {
        [Required(ErrorMessage = "This probability field is required")]
        [Range(0.0, 1.0, ErrorMessage = "Probability value must be in range <0;1>")]
        [DisplayName("P(A)")]
        public double ProbabilityValueFirst { get; set; }

        [Required(ErrorMessage = "This probability field is required")]
        [Range(0.0, 1.0, ErrorMessage = "Probability value must be in range <0;1>")]
        [DisplayName("P(B)")]
        public double ProbabilityValueSecond { get; set; }

        [Required]
        public ProbabilityCalculationModeEnum ProbabilityCalculationMode { get; set; }
    }
}