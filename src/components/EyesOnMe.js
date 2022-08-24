// Code EyesOnMe Component Here
function EyesOnMe(){
    return (
            <button onFocus={event=>{console.log('Good!')}} onBlur={event=>{console.log('Hey! Eyes on me!')}}>Eyes on me</button>
    )
}

export default EyesOnMe;