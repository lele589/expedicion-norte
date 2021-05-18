import { FunctionComponent } from 'react'

import ShareButtons from '../ShareButtons/View'
import ModalBox from '../ModalBox/View'

const ShareModal:FunctionComponent<any> = () => {

    return(
        <ModalBox
            title="Compartir"
            contentLabel="Compartir con redes sociales"
            notMobileWidth="220px"
            mobileWidth="220px"
        >
            <ShareButtons withText={true} direction="column" />
        </ModalBox>
    )
}

export default ShareModal