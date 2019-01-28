
const EIGroupQuestions = [0, 4, 8, 12, 16];
const SNGroupQuestions = [1, 5, 9, 13, 17];
const NTGroupQuestions = [2, 6, 10, 14, 18];
const JPGroupQuestions = [3, 7, 11, 15, 19];

export const getPersonalityType = (answerMap) => {
    return Group(answerMap, EIGroupQuestions, ["E", "I"]) +
        Group(answerMap, SNGroupQuestions, ["S", "N"]) +
        Group(answerMap, NTGroupQuestions, ["N", "T"]) +
        Group(answerMap, JPGroupQuestions, ["J", "P"])
}

const Group = (answerMap, groupQuestions, traits) => {
    var count = 0;
    groupQuestions.array.forEach(i => {
        count += answerMap[i];
    });

    return count <= 2 ? traits[0] : traits[1]
}