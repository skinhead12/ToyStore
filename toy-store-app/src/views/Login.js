function Login() {
    return ( 
        <>
        <form>
        <h1>Inicio de Sesion</h1>
            <label>Usuario</label>
            <input type={text} className="user"></input>
            <label>Contraseña</label>
            <input type={password}></input>
            <button>Login</button>
        </form>
        </>
     );
}

export default Login;