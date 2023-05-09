import style from './style.module.scss'
import Titulo from '../Titulo'
import Card from './Card'

export default function vatagem() {
    return (
        <section className={style.vantagem}>
            <Titulo 
                text="Quais são as vantagens?"
                color='#4F52FF'
            />
            <ul className={style.vantagemBox}>
                <h2 className={style.columnTitle}>Usando o <b>Encurtador</b>:</h2>
                <div className={style.boxColumnOne}>
                    <Card
                        title='Otimizar Espaço'
                        text='Com um link encurtado, economize espaço permitindo que você compartilhe
                              de forma fácil, pratica, eficiênte e sem se preocupar com limite de caracteres.'
                        tag='rocket'
                    />
                    <Card
                        title='Cliques'
                        text='Verifique quantas pessoas acessaram seu link encurtado e crie
                              estatíticas para melhorar o desempenho de seus conteúdos.'
                        tag='cursor'
                    />
                    <Card
                        title='Estética'
                        text='links encurtados são geralmente mais curtos e esteticamente mais agradáveis,
                              tornando a aparência do seu conteúdo mais profissional.'
                        tag='shirt'
                    />
                </div>
                    
                <h2 className={style.columnTitle}>Usando o <b>Qr Code</b>:</h2>
                <div className={style.boxColumnTwo}>
                    <Card
                        title='Facilidade no Uso'
                        text='Ao criar um QR code, você permite que as pessoas acessem rapidamente o seu conteúdo,
                              sem precisar digitar um link ou procurar informações adicionais.'
                        tag='hand'
                    />
                    <Card
                        title='Maior Interatividade'
                        text='QR codes podem ser utilizados para criar experiências interativas, como promoções,
                         jogos ou informações adicionais sobre um produto ou serviço.'
                        tag='smiley'
                    />
                    <Card
                        title='Versatilidade'
                        text='QR codes podem ser usados em diversos formatos de conteúdo, como flyers, cartazes,
                              anúncios, embalagens, etc., tornando-os uma opção versátil para compartilhar informações.'
                        tag='path'
                    />
                </div>
                    
                <h2 className={style.columnTitle} >Usando a <b>Página de Links</b>:</h2>
                <div className={style.boxColumnThree}>
                    <Card 
                        title='Organização'
                        text='ao criar uma página de links, você pode organizar seu conteúdo de forma mais clara
                              e categorizada, permitindo que as pessoas encontrem facilmente o que estão procurando.'
                        tag='folders'
                    />
                    <Card 
                        title='Personalização'
                        text='você pode personalizar sua página de links com sua marca ou logotipo, tornando-a mais
                              profissional e atraente.'
                        tag='paint'
                    />
                    <Card 
                        title='Flexibilidade'
                        text='uma página de links pode ser atualizada facilmente, permitindo que você adicione novos
                              conteúdos ou links relevantes conforme necessário.'
                        tag='option'
                    />
                </div>
            </ul>
        </section>
    )
}