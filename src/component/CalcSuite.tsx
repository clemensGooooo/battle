import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import { Button, TextField } from '@mui/material';
import Help from './help';
import { supportText } from '../types/types';
import { Link } from 'react-router-dom';
import { Exercise } from '../types/Calculation';
import WidgetsIcon from '@mui/icons-material/Widgets';

interface PropsCalcSuite {
    topic: string,
    exercises: Exercise[]
}

const CalcSuite = (props: PropsCalcSuite) => {

    var done = false;
    if (localStorage.getItem(props.topic) == null) {
        localStorage.setItem(props.topic, "0")
    }
    const steps = Number(localStorage.getItem(props.topic))
    // sets the value of "message" to be "saved in browser storage"
    const calcToSolve: { instruction: string, calculation: string, result: string[] } = {
        instruction: "",
        calculation: "",
        result: []

    }
    if (props.exercises[steps] != undefined) {
        calcToSolve.instruction = props.exercises[steps].instruction;
        calcToSolve.calculation = props.exercises[steps].calculation;
        calcToSolve.result = props.exercises[steps].result;
    } else {
        done = true;
    }


    const root = "\\sqrt{\\smash[b]{}}";
    const square = "2^2";

    const [calc, setCalc] = useState("");
    const [calcRender, setCalcRender] = useState("");
    const [success, setSuccess] = useState(false)
    const [open, setOpen] = React.useState(false);

    const getCalcRendered = (string: string) => {
        var calcPrepare = string.replaceAll("w(", "\\sqrt{\\smash[b]{");
        calcPrepare = calcPrepare.replaceAll(")\\", "}}")
        return calcPrepare
    }

    const creatIntroduction = () => {
        return { __html: calcToSolve.instruction };
    }

    return (
        <div>
            <header className="App-header">
                <h3>  battle v2 </h3>
                {success == false ?
                    <div style={{ width: "60vw", textAlign: "center", margin: "auto", padding: "15vw" }}>
                        {
                            done ?
                                <div>
                                    You have done all exercises
                                    <div id="confettis">
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                        <div className="confetti"></div>
                                    </div>
                                    <br />
                                    <Button variant='contained' onClick={() => {
                                        localStorage.setItem(props.topic, "0")
                                        window.location.reload()
                                    }}>
                                        Do all exercies again !
                                    </Button>
                                    <br />
                                    <Link to="/">
                                        <Button>
                                            Home
                                        </Button>
                                    </Link>

                                </div>
                                :
                                <div>
                                    <div style={{
                                        backgroundColor: "white", padding: "5vw",
                                        borderRadius: "10px", width: "80%", color: "black"
                                    }}>

                                        <h4>Your calc</h4>
                                        <div style={{ margin: "20px" }}>
                                            <TeX math={getCalcRendered(calcToSolve.calculation)}></TeX>
                                        </div>
                                        <p style={{
                                            fontSize: "medium"
                                        }}>
                                            <div dangerouslySetInnerHTML={creatIntroduction()} />
                                        </p>
                                        <TextField id="outlined-basic" label="Your term"
                                            variant="outlined" onChange={(e) => {
                                                setCalc(e.target.value);
                                                setCalcRender(getCalcRendered(e.target.value));
                                                calcToSolve.result.map(res => {
                                                    if (e.target.value == res) {
                                                        setSuccess(true)
                                                    }
                                                })
                                            }} value={calc} />
                                        <div style={{ margin: "10px", color: "black" }}>
                                            <TeX math={calcRender}></TeX>
                                        </div>
                                    </div>
                                    <div className='calculation'>
                                        <Button variant="contained"
                                            style={{ color: "white", fontSize: "30px", margin: "10px" }}
                                            onClick={() => {
                                                setCalc(calc + "w(")
                                            }}>
                                            <TeX math={root}></TeX>
                                        </Button>
                                        <Button variant="contained"
                                            style={{ color: "white", fontSize: "30px", margin: "10px" }}
                                            onClick={() => {
                                                setCalc(calc + "^{")
                                            }}>
                                            <TeX math={square}></TeX>
                                        </Button>
                                        <Button variant="contained"
                                            style={{ color: "white", fontSize: "30px", margin: "10px" }}
                                            onClick={() => {
                                                setOpen(true)
                                            }}>
                                            ?
                                        </Button>
                                        <Link to="/">
                                            <Button variant="contained"
                                                style={{ color: "white", fontSize: "30px", margin: "10px", height: "65px" }}
                                            >
                                                <WidgetsIcon />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                        }
                    </div>
                    :
                    <div className="container">
                        <div className="box">
                            <div style={{ padding: "50px" }} className="textSuccess">
                                <h3 style={{
                                    fontSize: "40px",
                                    cursor: "pointer"
                                }} onClick={() => {
                                    setSuccess(false);
                                    setCalc("");
                                    setCalcRender("");
                                    localStorage.setItem(props.topic,
                                        (Number(localStorage.getItem(props.topic)) + 1).toString())
                                }}>
                                    Weiter ..
                                </h3>
                                <Link to="/battle" style={{
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "20px"
                                }}>
                                    To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </header>
            <Help info={supportText} state={open} close={() => { setOpen(false) }} />
        </div>
    );
}

export default CalcSuite;
