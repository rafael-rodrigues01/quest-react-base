
function capitalize(text){
    let capitalLetter = text.toUpperCase();
    return capitalLetter;
  }  


function UppercaseAndColoredText ({color,label}) {
    return <div>
            <p style={{color: color}}>{label}</p>
        </div>
}

export { UppercaseAndColoredText, capitalize }
