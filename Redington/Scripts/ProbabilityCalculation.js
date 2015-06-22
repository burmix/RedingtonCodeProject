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

    if (ProbabilityValueFirst < 0.0 || ProbabilityValueFirst > 1.0 || ProbabilityValueSecond < 0.0 || ProbabilityValueSecond > 1.0)
        return -1;

    if (ProbabilityCalculationMode != 0 && ProbabilityCalculationMode != 1)
        return -1;

    if (ProbabilityCalculationMode === '0') {
        result = ProbabilityValueFirst * ProbabilityValueSecond;
    } else if (ProbabilityCalculationMode === '1') {
        result = ProbabilityValueFirst + ProbabilityValueSecond - (ProbabilityValueFirst * ProbabilityValueSecond);
    }

    SaveCalculationResults(ProbabilityValueFirst, ProbabilityValueSecond, ProbabilityCalculationMode, result);

    return result ? result : -1;
}

function SaveCalculationResults(ProbabilityValueFirst, ProbabilityValueSecond, ProbabilityCalculationMode, result) {
    $.ajax({
        url: '/Home/SaveCalculationResults',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({ ProbabilityValueFirst: ProbabilityValueFirst, ProbabilityValueSecond: ProbabilityValueSecond, ProbabilityCalculationMode: ProbabilityCalculationMode, result: result }),
        success: function (data) {
            console.log('Successfully saved.');
        },
        error: function (x, error) {
            console.log('Error while saving probability calculation results.');
        }
    });
}