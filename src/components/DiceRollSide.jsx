const DiceRollSide = (props) => {
    const handleName = (event) => {
        props.setSide(Number(event.target.value))
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