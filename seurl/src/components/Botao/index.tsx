import style from './style.module.scss'

interface Props {
    text?: string,
    type?: "button" | "submit" | "reset" | undefined,
    background?: string,
    color?: string,
    border?: string,
    width?: string
    
}

export function Botao({text, type, background, color, border, width}:Props) {

    return (
        <button 
            className={style.botao}
            type={type}
            style={{
                background: background,
                color: color,
                border: border,
                width: width
            }}
        >
            {text}
        </button>
    )
}