import style from './style.module.scss'

export function Footer() {
    return (  
        <footer className={style.footer}>
            <img 
                src="./img/logo-seurl.png"
                alt="Logo do Site"
                className={style.footerImg}    
            />
            <ul className={style.footerNav}>
                <li>Informações</li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Atualizações</a></li>
                <li><a href="">Dúvidas</a></li>
            </ul>
            <ul className={style.footerNav}>
                <li>Ajuda</li>
                <li><a href="">Contato</a></li>
                <li><a href="">Remover Link</a></li>
                <li><a href="">Denunciar</a></li>
            </ul>
            <ul className={style.footerNav}>
                <li>Conteúdo</li>
                <li><a href="">Encurtador</a></li>
                <li><a href="">Página Personaliza</a></li>
                <li><a href="">Qr Code</a></li>
                <li><a href="">Monitorar</a></li>
                <li><a href="">Blog</a></li>
            </ul>
            <hr className={style.footerLine}/>
            <p >Copyright @ 2022 seurl.com.br. todos os direitos reservados</p>
        </footer>
    );
}
