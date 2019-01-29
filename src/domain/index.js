
const EIGroupQuestions = [0, 4, 8, 12, 16];
const SNGroupQuestions = [1, 5, 9, 13, 17];
const FTGroupQuestions = [2, 6, 10, 14, 18];
const JPGroupQuestions = [3, 7, 11, 15, 19];
const traitsMap = {
    "I": "Introverted",
    "E": "Extroverted",
    "S": "Sensing",
    "N": "Intuitive",
    "T": "Thinking",
    "F": "Feeling",
    "J": "Judging",
    "P": "Perceptive"
}

export const getPersonalityType = (answerMap) => {
    return Group(answerMap, EIGroupQuestions, ["E", "I"]) +
        Group(answerMap, SNGroupQuestions, ["S", "N"]) +
        Group(answerMap, FTGroupQuestions, ["N", "T"]) +
        Group(answerMap, JPGroupQuestions, ["J", "P"])
}

const Group = (answerMap, groupQuestions, traits) => {
    var count = 0;
    groupQuestions.array.forEach(i => {
        count += answerMap[i];
    });

    return count <= 2 ? traits[0] : traits[1]
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