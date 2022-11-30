
function showLabel (propsLabel){
    alert('A label desse botão é: ' + propsLabel)
}

export default function Button(props){
    return <button className="btn" onClick={() => showLabel(props.label)}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Button'
}

