export interface imgSizeTypes {
    width: number,
    height: number,
}

export interface imgMediaTypes {
    desktop: imgSizeTypes,
    tablet?: imgSizeTypes,
    mobile: imgSizeTypes,
}

export type ImageProps = {
    mediaType?: string,
    customClass?: string,
    size: imgMediaTypes,
    imgFolder: string,
    isTabletImg?: boolean,
}