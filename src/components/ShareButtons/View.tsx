import { FunctionComponent } from 'react'
import type { RootState } from '../../store/store'
import { useSelector } from "react-redux"
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";

import { FlexDiv } from '../../assets/styles/utils/utils'
import { ShareButtonsProps } from './View.Types'
import styles from './View.module.css'

const ShareButtons:FunctionComponent<ShareButtonsProps> = ({ withText, direction, iconSize }) => {

    const currentShareUrl = useSelector((state: RootState) => state.currentShareUrl);
    const currentShareTitle = useSelector((state: RootState) => state.currentShareTitle);
    const shareTitleText = `Quiero compartir contigo este plan: "${currentShareTitle}"`

    const alignStyle = direction === 'column' ? 'flex-start' : 'center'
    const padding = direction === 'column' ? '5px 0' : '0 7px'
    const size = iconSize ? iconSize : '40'

    return(
        <FlexDiv flexDirection={direction} alignItems={alignStyle}>
            <EmailShareButton url={shareTitleText}>
                <FlexDiv padding={padding}>
                    <EmailIcon size={size} />
                    {withText && <span className={styles.text}>Email</span>}
                </FlexDiv>
            </EmailShareButton>
            <FacebookShareButton quote={shareTitleText} url={currentShareUrl}>
                <FlexDiv padding={padding}>
                    <FacebookIcon size={size} />
                    {withText && <span className={styles.text}>Facebook</span>}
                </FlexDiv>
            </FacebookShareButton>
            <TelegramShareButton title={shareTitleText} url={currentShareUrl}>
                <FlexDiv padding={padding}>
                    <TelegramIcon size={size} />
                    {withText && <span className={styles.text}>Telegram</span>}
                </FlexDiv>
            </TelegramShareButton>
            <TwitterShareButton title={shareTitleText} url={currentShareUrl}>
                <FlexDiv padding={padding}>
                    <TwitterIcon size={size} />
                    {withText && <span className={styles.text}>Twitter</span>}
                </FlexDiv>
            </TwitterShareButton>
            <WhatsappShareButton title={shareTitleText} url={currentShareUrl}>
                <FlexDiv padding={padding}>
                    <WhatsappIcon size={size} />
                    {withText && <span className={styles.text}>Whatsapp</span>}
                </FlexDiv>
            </WhatsappShareButton>
        </FlexDiv>
    )
}

export default ShareButtons