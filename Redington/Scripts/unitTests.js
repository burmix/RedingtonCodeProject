QUnit.test("Probability calculation - Independent events - P(0.3)P(0.2)", function (assert) {
    var result = CalculateProbability(0.3, 0.2, '0');
    var expected = 0.06;
    assert.equal(result, expected, "Correct result: 0.06");
});

QUnit.test("Probability calculation - Not mutually exclusive - P(0.3)+P(0.2)-P(0.3)P(0.2)", function (assert) {
    var result = CalculateProbability(0.3, 0.2, '1');
    var expected = 0.44;
    assert.equal(result, expected, "Correct result: 0.44");
});

QUnit.test("Probability calculation - Independent events - first probability incorrect", function (assert) {
    var result = CalculateProbability(1.3, 0.2, '0');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Not mutually exclusive - first probability incorrect", function (assert) {
    var result = CalculateProbability(1.3, 0.2, '1');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Independent events - second probability incorrect", function (assert) {
    var result = CalculateProbability(0.3, 1.2, '0');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Not mutually exclusive - second probability incorrect", function (assert) {
    var result = CalculateProbability(0.3, 1.2, '1');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Independent events - first probability negative", function (assert) {
    var result = CalculateProbability(-0.3, 0.2, '0');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Independent events - second probability negative", function (assert) {
    var result = CalculateProbability(0.3, -0.2, '0');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Not mutually exclusive - first probability negative", function (assert) {
    var result = CalculateProbability(-0.3, 0.2, '1');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - Not mutually exclusive - second probability negative", function (assert) {
    var result = CalculateProbability(0.3, -0.2, '1');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - function number too high", function (assert) {
    var result = CalculateProbability(0.3, 0.2, '3');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - function number too low", function (assert) {
    var result = CalculateProbability(0.3, 0.2, '-1');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});

QUnit.test("Probability calculation - function number not a number", function (assert) {
    var result = CalculateProbability(0.3, 0.2, 'a');
    var expected = -1;
    assert.equal(result, expected, "Correct result: -1");
});