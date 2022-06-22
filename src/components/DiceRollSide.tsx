type Props = {
    side: number
    setSide: React.Dispatch<React.SetStateAction<number>>
}

const DiceRollSide: React.FC<Props> = (props) => {
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSide(Number(event.target.value) > 2 ? Number(event.target.value) : 2)
    }
    return (
        <div>
            <label htmlFor={"dice-roll-side"} className="label">
                <span className="label-text">何面ダイスを使いますか？</span>
            </label>
            <input className="input input-bordered input-md w-full max-w-xs" id={"dice-roll-side"} type={"number"} onChange={(event) => handleName(event)} value={props.side}/>
        </div>
    )
}

export default DiceRollSide