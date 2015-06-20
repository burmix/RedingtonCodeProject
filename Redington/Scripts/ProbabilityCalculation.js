function ValidateForm() {
    $('.labelResult').html("");

    if ($('#calculationForm').valid()) {
        var ProbabilityValueFirst = parseFloat($('#ProbabilityValueFirst').val());
        var ProbabilityValueSecond = parseFloat($('#ProbabilityValueSecond').val());
        var ProbabilityCalculationMode = $('#ProbabilityCalculationMode').val();

        var result = CalculateProbability(ProbabilityValueFirst, ProbabilityValueSecond, ProbabilityCalculationMode);

        $('.labelResult').html(result);
    }
}

function ClearForm() {
    $("#calculationForm").trigger('reset');
    $('.labelResult').html("");
}

function CalculateProbability(ProbabilityValueFirst, ProbabilityValueSecond, ProbabilityCalculationMode) {
    var result = undefined;

    if (ProbabilityCalculationMode === '0') {
        result = ProbabilityValueFirst * ProbabilityValueSecond;
    } else if (ProbabilityCalculationMode === '1') {
        result = ProbabilityValueFirst + ProbabilityValueSecond - (ProbabilityValueFirst * ProbabilityValueSecond);
    }

    return result ? result : -1;
}