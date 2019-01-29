const EIGroupQuestions = [0, 4, 8, 12, 16];
const SNGroupQuestions = [1, 5, 9, 13, 17];
const TFGroupQuestions = [2, 6, 10, 14, 18];
const JPGroupQuestions = [3, 7, 11, 15, 19];

const traits = {
    I: "I",
    E: "E",
    S: "S",
    N: "N",
    T: "T",
    F: "F",
    J: "J",
    P: "P"
}

const traitsFullName = {
    Introverted: "Introverted",
    Extroverted: "Extroverted",
    Sensing: "Sensing",
    Intuitive: "Intuitive",
    Thinking: "Thinking",
    Feeling: "Feeling",
    Judging: "Judging",
    Perceptive: "Perceptive"
}

const traitsMap = {
    [traits.I]: traitsFullName.Introverted,
    [traits.E]: traitsFullName.Extroverted,
    [traits.S]: traitsFullName.Sensing,
    [traits.N]: traitsFullName.Intuitive,
    [traits.T]: traitsFullName.Thinking,
    [traits.F]: traitsFullName.Feeling,
    [traits.J]: traitsFullName.Judging,
    [traits.P]: traitsFullName.Perceptive,
}

export const getPersonalityType = (answerMap) => {
    return Group(answerMap, EIGroupQuestions, [traits.E, traits.I]) +
        Group(answerMap, SNGroupQuestions, [traits.S, traits.N]) +
        Group(answerMap, TFGroupQuestions, [traits.T, traits.F]) +
        Group(answerMap, JPGroupQuestions, [traits.J, traits.P])
}

const Group = (answerMap, groupQuestions, personalityTraits) => {
    var count = 0;
    groupQuestions.forEach(i => {
        count += answerMap[i];
    });

    return count <= 2 ? personalityTraits[0] : personalityTraits[1];
}

export const getPersonalityTraits = (personalityType) => {
    console.log(personalityType);
    var results = [];
    var traits = personalityType.split("");
    traits.forEach(e => {
        console.log(e);
        results.push({
            "code": e,
            "fullName": traitsMap[e]
        })
    });

    return results;
}
