import style from './style.module.scss'

interface Props {
    text: string,
    name: string,
    type: string,
    required?: boolean | undefined
}

function input({
    text,
    name,
    type,
    required
}: Props) {

    return ( 
        <input className={style.input}
            placeholder={text}
            name={name}
            type={type}
            required={required}
        />
    );
}

export default input;