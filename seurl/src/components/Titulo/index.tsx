import style from './style.module.scss'

interface Props {
    text: string,
    color?: string,
    fontSize?: string,
    lineHeight?: string,
    position?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
}

export function Titulo(
    {
        text,
        color,
        fontSize,
        lineHeight,
        position
    }: Props) {
        
    return (
        <h1
            className={style.titulo}
            style={{
                color: color,
                fontSize: fontSize,
                lineHeight: lineHeight,
                textAlign: position
            }}
        >
            {text}
        </h1>
    )
}