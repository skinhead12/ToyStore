function Register() {
    return ( 
        <>
        <form>
            <h1>Registro</h1>
            <label>Nombre</label>
            <input type={text}></input>
            <label>Apellido</label>
            <input type={text}></input>
            <label>Usuario</label>
            <input type={text}></input>
            <label>Email</label>
            <input type={email}></input>
            <label>Contraseña</label>
            <input type={password}></input>
            <label>Confirmar Contraseña</label>
            <input type={password}></input>
        </form>
        </>
     );
}

export default Register;