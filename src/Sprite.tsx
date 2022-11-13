import { useEffect, useLayoutEffect, useRef } from 'react';

export interface SpriteProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    src: string,
    width: number, 
    height: number,
}

export default function Sprite({ 
    width, 
    height,
    src,
    ...props
}: SpriteProps) {
    const ref = useRef<HTMLCanvasElement>(null);

    useLayoutEffect(() => {
        const context = ref.current!.getContext('2d')!;
        context.imageSmoothingEnabled = false;
        const image = new Image();
        image.src = src;
        image.onload = () => {
          context.drawImage(image, 0, 0, width, height);
        };
      }, [height, src, width]);

    return (
        <canvas
            ref={ref}
            width={width}
            height={height}
            {...props}
        />
    )
}