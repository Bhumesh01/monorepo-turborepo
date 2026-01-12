interface PropType{
    placeholder: string,
    style?: React.CSSProperties
}

export function TextInput({placeholder, style}: PropType){
    return (
        <input style={style} type="text" placeholder={placeholder}></input>
    )
}