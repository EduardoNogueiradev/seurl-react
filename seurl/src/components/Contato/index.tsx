import style from './style.module.scss'
import Titulo from '../Titulo'
import Input from '../Input';
import Botao from '../Botao';

function contato() {
    return (  
        <section className={style.contato}>
            <div>
                <Titulo text='Contato' />
                <p className={style.contatoText}>
                    Possui alguma dúvida, sugestão, reclamação
                    ou deseja enviar uma mensagem? 
                </p>
            </div>

            <form className={style.contatoForm} action="" method="post">
                <h2 className={style.title}>Fale conosco</h2>
                
                <label htmlFor="nome">Nome</label>
                <Input 
                    text="Digite seu nome"
                    type='text'
                    name='nome'
                    required
                />

                <label htmlFor="email">E-mail</label>
                <Input 
                    text="Jhon@example.com"
                    type='email'
                    name='email'
                    required
                />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea className={style.input} name="mensagem" placeholder="Escreva sua mensagem" rows={4}></textarea>
                <Botao 
                    text="Enviar" 
                    type='submit'
                />
            </form>
        </section>
    );
}

export default contato;