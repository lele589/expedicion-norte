import { FunctionComponent } from 'react'

import { FlexDiv } from '../../../assets/styles/utils/utils'
import { HeaderProps } from './View.Types'
import Image from '../../../components/Image/View'
import styles from './View.module.css'

const Header: FunctionComponent<HeaderProps> = ({ title, imgSize, imgFolder, overlay, mask }) => {

    return (
        <FlexDiv className={styles.container}>
            <Image size={imgSize} imgFolder={imgFolder} />
            {mask && <div className={styles.mask}></div>}
            {overlay && <div className={styles.overlay}></div>}
            <FlexDiv className={styles.title}>
                {title}
            </FlexDiv>
        </FlexDiv>
    )
}

export default Header
