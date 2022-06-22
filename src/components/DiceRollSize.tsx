type Props = {
    size: number
    setSize: React.Dispatch<React.SetStateAction<number>>
}

const DiceRollSize: React.FC<Props> = (props) => {
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSize(Number(event.target.value) > 1 ? Number(event.target.value) : 1)
    }
    return (
        <div>
            <label htmlFor={"dice-roll-size"} className="label">
                <span className="label-text">同時に投げるダイスの個数</span>
            </label>
            <input className="input input-bordered input-md w-full max-w-xs" id={"dice-roll-size"} type={"number"} onChange={(event) => handleName(event)} value={props.size}/>
        </div>
    )
}

export default DiceRollSize