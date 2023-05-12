import './Header.css'

function Header(){
    return (
        <header>
            <div className='headerLeft'>
                <h2>Acesse sua conta</h2>

                <div className='headerInputs'>
                    <label>E-mail</label>
                    <input placeholder='Digite seu e-mail'></input>
                </div>

                <div className='headerInputs'>
                    <label>Senha</label>
                    <input placeholder='Digite sua senha'></input>
                </div>

                <div className='divButtons'>
                    <button>Entrar</button>

                    <a href='#'>Esqueci minha senha</a> 
                </div>

                <p>Não possui conta ainda?</p> 
                <a href='#'>Crie agora grátis</a>
            </div>

            <div className='headerRight'>
                
            </div>
        </header>
    )
}

export default Header