import Image from 'next/image';
import styles from './ImageContainer.module.css';
import {useEffect, useRef, useState} from "react";


const ImageContainer = ({width, maxWidth, src, ...props}) => {
    const ref = useRef(null)

    const [height, setHeight] = useState(0)

    const handleResize = () => {
        setHeight(ref?.current?.children?.item(0)?.clientHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const style = {
        height: height ? height : '100%',
        width: width ? width : '100%',
        maxWidth: maxWidth ?  maxWidth : '100%',
        position: "relative"
    }

    if (src) {
        return (
            <div
                ref={ref}
                className={styles.imageContainer}
                style={style}
            >
                <Image
                    className={styles.image}
                    src={src}
                    {...props}
                />
            </div>
        );
    } else {
        return null
    }

};

export default ImageContainer;
