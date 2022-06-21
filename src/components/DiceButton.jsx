import { useState } from "react"

const DiceButton = (props) => {
    const [diceRolls, setDiceRolls] = useState([])
    const diceRoll = () => {
        setDiceRolls([...diceRolls, [...Array(props.n)].map((_) => [...Array(props.size)].map(() => Math.floor(Math.random() * props.side + 1)))] )
    }
    const reset = () => {
        setDiceRolls([])
    }
	return (
        <div>
            <button className="btn btn-block mb-4 no-animation" onClick={diceRoll}>{props.side} 面ダイスを {props.size} 個、{props.n} 回振る</button>
            <ol className="text-sm list-decimal pl-12 bg-gray-100 h-[70vh] overflow-y-scroll py-6">
                {diceRolls.flat().map((val, idx) => <li className="mb-1" key={idx}>( {val.join(", ")} )</li>)}
                { diceRolls.flat().length > 0 ? <button onClick={reset} className="text-blue-700 underline hover:opacity-50 mt-2">リセット</button> : null}
            </ol>
        </div>
	)
}
export default DiceButton