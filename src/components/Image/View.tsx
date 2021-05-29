import { FunctionComponent } from 'react'
import { ImageProps } from './View.Types'

const Image: FunctionComponent<ImageProps> = ({ mediaType = 'image/webp', isTabletImg, customClass, size, imgFolder, ...delegated }) => {
    const headerImgDesktop = require(`../../assets/images/header/${imgFolder}/desktop.webp`).default
    const headerImgTablet = isTabletImg && require(`../../assets/images/header/${imgFolder}/tablet.webp`).default
    const headerImgMobile = require(`../../assets/images/header/${imgFolder}/mobile.webp`).default
    const headerImgFallback = require(`../../assets/images/header/${imgFolder}/mobile.jpg`).default
    
    return(
        <picture>
            <source
                type={mediaType}
                media={!isTabletImg ? '(min-width: 768px)' : '(min-width: 1024px)'}
                srcSet={headerImgDesktop}
                style={{ aspectRatio: `${size.desktop.width}/${size.desktop.height}`}}
            />
            {isTabletImg &&
                <source
                    type={mediaType}
                    media="(min-width: 768px) and (max-width: 1024px)"
                    srcSet={headerImgTablet}
                    style={{ aspectRatio: `${size.tablet?.width}/${size.tablet?.height}`}}
                />
            }
            <source
                type={mediaType}
                media="(max-width: 767px)"
                srcSet={headerImgMobile}
                style={{ aspectRatio: `${size.mobile.width}/${size.mobile.height}`}}
            />
            <img
                src={headerImgFallback} {...delegated}
                width={size.mobile.width}
                height={size.mobile.height}
                style={{width: '100%', height: 'auto' }}
            />
         </picture>
    )
};

export default Image