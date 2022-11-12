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
        calculation: "2w(2^2*4^2)\\",
        result: ["16,-16"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "2w(441)\\",
        result: ["42,-42"]
    },
    {
        instruction: "Schreibe als Lösung x<sub>1</sub>, falls es x<sub>2</sub> gibt,schreibe es so 1,2",
        calculation: "w( \\frac {1000} {10})\\",
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
export const squaresComplex = [
    {
        instruction: "Schreibe als Division",
       calculation: "30^{-2}*(\\frac{2}{3})^{-2}",
        result: ["1/400"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "(\\frac {7} {6})^{3}*\\frac {1} {3^{-3}}",
        result: ["343/2"]
    },
    {
        instruction: "Schreibe als ganze Bruch",
        calculation: "2,25^{-2}*(1,5)^2",
        result: ["4/9"]
    },
    {
        instruction: "Schreibe als ganze Bruch",
        calculation: "\\frac {25} {2^2} * (\\frac {3} {4})^{-2}",
        result: ["100/9"]
    },
    {
        instruction: "Schreibe als ganze Bruch",
        calculation: "(\\frac {2} {7})^{-2} * \\frac {1} {14}",
        result: ["7/8"]
    },
    {
        instruction: "Schreibe als Division",
        calculation: "(\\frac {2} {7})^{-2} * \\frac {1} {14}",
        result: ["3125/32","(5/2)^2"]
    },
    {
        instruction: "Schreibe als Division",
        calculation: "(\\frac {1} {2})^{-5} * 3^5",
        result: ["6^5","7776"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "8^{-4}*4^4",
        result: ["1"]
    },
    {
        instruction: "Schreibe als Potenz",
        calculation: "3^2*3^4*5^6",
        result: ["15^5","15^{5}"]
    },
    {
        instruction: "Schreibe als Potenz oder Zahl",
        calculation: "\\frac {25^7*4^7} {100^3}",
        result: ["100^4","100000000"]
    },
    {
        instruction: "Schreibe als Potenz oder Zahl",
        calculation: "\\frac {x^{2n}-121} {x^{2n}+22x^n+121}",
        result: ["x^n-11"]
    },
    {
        instruction: "Schreibe als Division",
        calculation: "\\frac {\\frac {1} {35}(7xy^2)^5} {(49x^2y^5)^2 }",
        result: ["(1/5)x"]
    },
    {
        instruction: "Schreibe als Division",
        calculation: "\\frac {3x} {x^n}- \\frac {5x^{-1}} {x^{n-2}} + \\frac {x^{n+1}} {x^{2n}}",
        result: ["-x^{1-n}"]
    },
    {
        instruction: "Schreibe als Division",
        calculation: "\\sqrt[3]{\\sqrt[]{a^{12}}}",
        result: ["a^2"]
    },
    {
        instruction: "Schreibe als Division",
        calculation: "\\sqrt[]{\\sqrt[]{\\sqrt[]{a^{16}}}}",
        result: ["a^2"]
    },
    {
        instruction: "Schreibe als ganze Zahl",
        calculation: "\\frac {1024^3} {2048^3}",
        result: ["8"]
    }
]