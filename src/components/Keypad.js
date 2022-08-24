// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <label htmlFor="pwd">Password:</label>
            <input type={'password'} id={'pwd'} onChange={event=>{console.log(`Entering password...`)}}></input>
        </div>
    )
}

export default Keypad;