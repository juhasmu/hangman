
const Button = ({name,className,onClick,id}) => {//makes button with id, onClick function and className
    return (
        <>
            <button className ={className} onClick = {onClick} id = {id}>{name}</button>
        </>
    )
}

export default Button
