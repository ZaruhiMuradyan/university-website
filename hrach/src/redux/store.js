

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

const defaultStore = {
    data: [
        {
            namesurname: "",
            tests: "Test1  /  Test2",
            assignments: "Paid / Unpaid",
            participation: "",
            overall: "",
        },
        {
            namesurname: "Ella Manukyan",
            tests: "90% / 84%",
            assignments: "+ / +",
            participation: "full time",
            overall: "92",
        },
        {
            namesurname: "Mike Jackson",
            tests: "76% / 68%",
            assignments: "+ / -",
            participation: "part time",
            overall: "82",
        },
        {
            namesurname: "Lilit Vardanyan",
            tests: "88% / 72%",
            assignments: "+ / -",
            participation: "full time",
            overall: "98",
        },
        {
            namesurname: "Hrair Poghosyan",
            tests: "93% / 89%",
            assignments: "+ / -",
            participation: "full time",
            overall: "75",
        },
        {
            namesurname: "Hilda Lily",
            tests: "75% / 84%",
            assignments: "+ / +",
            participation: "part time",
            overall: "90",
        },
        {
            namesurname: "Frances Fox",
            tests: "50% / 68%",
            assignments: "- / -",
            participation: "full time",
            overall: "92",
        },
        {
            namesurname: "Anna Muradyan",
            tests: "84% / 94%",
            assignments: "+ / +",
            participation: "full time",
            overall: "86",
        },
        {
            namesurname: "Sue Danson",
            tests: "68% / 89%",
            assignments: "+ / -",
            participation: "part time",
            overall: "70",
        },
        {
            namesurname: "George Avagyan",
            tests: "94% / 86%",
            assignments: "+ / -",
            participation: "full time",
            overall: "93",
        },
        {
            namesurname: "Anahit Stepanyan",
            tests: "85% / 82%",
            assignments: "+ / -",
            participation: "part time",
            overall: "80",
        },
    ],
    tuitionFees: [
        {
            profession: "Information Technologies",
            fullTime: "570.000",
            fullTimeF: "960.000 ",
            partTime: "-",
            partTimeF: "-",
        },
        {
            profession: "Linguistics",
            fullTime: "552.000",
            fullTimeF: "960.000 ",
            partTime: "-",
            partTimeF: "-",
        },
        {
            profession: "Law",
            fullTime: "690.000",
            fullTimeF: "960.000 ",
            partTime: "552.000",
            partTimeF: "768.000",
        },
        {
            profession: "Psychology",
            fullTime: "552.000",
            fullTimeF: "960.000 ",
            partTime: "-",
            partTimeF: "-",
        },
        {
            profession: "Graphic Design   ",
            fullTime: "570.000",
            fullTimeF: "960.000 ",
            partTime: "-",
            partTimeF: "-",
        }
    ]
}
export function studentsReducer(state=defaultStore , action) {
    switch (action.type) {
        case "GET_DATA":
            return {
                data: {
                    "x": "y"
                }
            };
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.



