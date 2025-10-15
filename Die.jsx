
export default function Die(props){
    const styles={
        backgroundColor:props.isHeld? "#0eb752ff":"white"
        

    }
    
    return(
    <button onClick={()=>props.toggle(props.id)} style={styles}>{props.value}</button>
)}
    /**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT role any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `hold`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */ 