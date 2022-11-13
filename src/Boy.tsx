import { useEffect, useRef } from 'react';
import Sprite, { SpriteProps } from './Sprite';

interface BoyProps extends Omit<SpriteProps, 'width'|'height'|'src'> {}

export default function Boy({ 
    ...props 
}: BoyProps) {
    return (
        <Sprite
            width={31}
            height={89}
            src={"./boy.png"}
            {...props}
        />
    )
}