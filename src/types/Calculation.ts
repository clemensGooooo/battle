export interface Exercise {
    instruction: string,
    calculation: string,
    result: string[]
}

export const squares = [
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "1^1",
        result: ["1"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "15^2",
        result: ["225"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "13^2",
        result: ["169"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "12^2",
        result: ["144"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "2^2",
        result: ["4"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "17^2",
        result: ["289"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "19^2",
        result: ["361"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "7^2",
        result: ["49"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "2^4+84",
        result: ["100"]
    },
    {
        instruction: "Schreibe als Potenz",
        calculation: "121",
        result: ["11^2"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "2w(2^2*4^2)",
        result: ["16,-16"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "2w(441)",
        result: ["42,-42"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "w( \\frac {1000} {10})",
        result: ["10,-10"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "81^{\\frac {1} {4}}",
        result: ["3,-3"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "64^{\\frac {1} {2}}",
        result: ["8,-8"]
    },
    {
        instruction: "Berechne",
        calculation: "64^{\\frac {1} {3}}",
        result: ["4"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "256^{\\frac {1} {2}}",
        result: ["16,-16"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "144^{\\frac {1} {2}}",
        result: ["12,-12"]
    },
    {
        instruction: "Berechne",
        calculation: "\\sqrt[4]{81}",
        result: ["3"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "64^{\\frac {1} {3}}",
        result: ["4"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "x^3 = 64",
        result: ["4"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "x^4 = 256",
        result: ["4,-4", "-4,4"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "x^3 = -27",
        result: ["-3"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "x^6 = 1000 000",
        result: ["10,-10"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "x^6 = 64",
        result: ["2,-2"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es keine Lösung gibt schreibe nan",
        calculation: "x^6 = -64",
        result: ["nan"]
    },
]

export const addition = [
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "1+1",
        result: ["2"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: " \\frac{a}{b}*\\frac{a}{b}",
        result: ["a^2/b^2"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "13+2",
        result: ["15"]
    }
]