export interface imgSizeTypes {
    width: number,
    height: number,
}

export interface imgMediaTypes {
    desktop: imgSizeTypes,
    tablet?: imgSizeTypes,
    mobile: imgSizeTypes,
}

export type HeaderProps = {
    title: string,
    imgSize: imgMediaTypes,
    imgFolder: string,
    overlay?: boolean,
    mask?: boolean,
}