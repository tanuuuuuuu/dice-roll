type Props = {
    n: number
    setN: React.Dispatch<React.SetStateAction<number>>
}

const DiceRollN: React.FC<Props> = (props) => {
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setN(Number(event.target.value) > 1 ? Number(event.target.value) : 1)
    }
    return (
        <div>
            <label htmlFor={"dice-roll-n"} className="label">
                <span className="label-text">何回ダイスを振りますか？</span>
            </label>
            <input className="input input-bordered input-md w-full max-w-xs" id={"dice-roll-n"} type={"number"} onChange={(event) => handleName(event)} value={props.n}/>
        </div>
    )
}

export default DiceRollN