import style from './style.module.scss'

interface Props {
    text?: string,
    name?: string,
    type?: string,
    required?: boolean | undefined,
    value?: string
}

export function Input({
    text,
    name,
    type,
    required,
    value
}: Props) {

    return ( 
        <input 
            className={style.input}
            placeholder={text}
            name={name}
            type={type}
            required={required}
            value={value}
        />
    );
}
