import { useState } from "react";
import { FaDice } from "react-icons/fa"
import {DiceButton, DiceRollSize, DiceRollSide, DiceRollN} from "./components/index";

function App() {
    const [side, setSide] = useState(6)
    const [size, setSize] = useState(3)
    const [n, setN] = useState(1)
    return (
    <div className="w-[800px] mx-auto py-8 px-4 overflow-x-hidden">
        <h2 className="text-3xl mb-4"><FaDice className="inline-block mr-2" />ダイスを投げてみよう</h2>
        <div className="flex justify-between mb-8">
            <DiceRollSide
                side={side}
                setSide={setSide}
            />
            <DiceRollSize
                size={size}
                setSize={setSize}
            />
            <DiceRollN
                n={n}
                setN={setN}
            />
        </div>
        <DiceButton
            side={side}
            size={size}
            n={n}
        />
    </div>
);
}
export default App;