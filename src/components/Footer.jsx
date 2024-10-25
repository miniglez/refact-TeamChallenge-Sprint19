const Footer = ({nombre,inc,direccion,telefono,email}) =>{
    return(
       <>
        <p> {nombre}</p>
        <p>- {inc} </p>
        <p>- {direccion}</p>
        <p>- {telefono} </p>
        <p>- {email} </p>
       </>
    )
}

export default Footer