
const Button = ({name,className,onClick,id}) => {
    return (
        <>
            <button className ={className} onClick = {onClick} id = {id}>{name}</button>
        </>
    )
}

export default Button
