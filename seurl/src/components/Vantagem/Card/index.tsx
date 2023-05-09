import style from './style.module.scss'
import { Option, Cursor, PaintBrush, RocketLaunch, Folders, HandTap, Path, Smiley, ShirtFolded, } from '@phosphor-icons/react'

interface Props {
    title: string,
    text: string,
    tag: string
}

export function Card({
    title,
    text,
    tag
}: Props) {

    function setTag(tag: string) {
        if (tag == 'rocket') {
            return <RocketLaunch />
        }if(tag == 'cursor') {
            return <Cursor />
        }if (tag == 'shirt') {
            return <ShirtFolded />
        }if(tag == 'hand') {
            return <HandTap />
        }if (tag == 'smiley') {
            return <Smiley />
        }if(tag == 'path') {
            return <Path />
        }if(tag == 'folders') {
            return <Folders />
        }if (tag == 'paint') {
            return <PaintBrush />
        }if(tag == 'option') {
            return <Option />
        }
    }

    return (
        <li className={style.vantagemCard}>
            <div className={style.cardHeader}>
                {setTag(tag)}
                <h2>{title}</h2>
            </div>
            <p className={style.cardText}>
                {text}
            </p>
        </li>
    )
}