import { useEffect, useId, useRef } from 'react';
import { useKai } from './KaiProvider';
import Sprite, { SpriteProps } from './Sprite';

interface BoyProps extends Omit<SpriteProps, 'width'|'height'|'src'> {}

export default function Boy({ 
    ...props 
}: BoyProps) {

    const id = useId();
    const { x, y, move } = useKai(id, 0, 0);

    const handleKeyDownCapture:React.KeyboardEventHandler<HTMLCanvasElement> = (evt) => {
        console.log("yo");
        // evt.preventDefault();
        // evt.stopPropagation();
        move();
    }
    const handleKeyUpCapture:React.KeyboardEventHandler<HTMLCanvasElement> = () => {
        console.log("yo2");
    }
    return (
        <Sprite
            width={31}
            height={89}
            src={"./boy.png"}
            {...props}
            style={{
                ...props.style,
                bottom: y,
                left: x,
            }}
            onKeyDownCapture={handleKeyDownCapture}
            onKeyUpCapture={handleKeyUpCapture}
        />
    )
}