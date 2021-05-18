import { FunctionComponent, useState } from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../../store/store'
import { useMediaQuery } from 'react-responsive'

import { FlexDiv, CloseButton } from '../../assets/styles/utils/utils'
import * as actionTypes from '../../store/actions'
import { ModalBoxProps } from './View.Types'
import styles from './View.module.css'

const ModalBox: FunctionComponent<ModalBoxProps> = ({ children, title, contentLabel, notMobileWidth, mobileWidth }) => {

    const [modalIsOpen,setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.isModalOpen);
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })

    const isMobileFullWidth = mobileWidth === '100%' || !mobileWidth
    const modalNotMobileWidth = notMobileWidth ? notMobileWidth : '500px'
    const modalMobileWidth = !isMobileFullWidth ? mobileWidth : ''
    const modalMobileHeight= !isMobileFullWidth ? 'auto' : '100%'
    const modalWidth = isMobile ? modalMobileWidth : modalNotMobileWidth
    const modalHeight = isMobile ? modalMobileHeight : 'auto'

    const modalClasses = [styles.modal, (!isMobileFullWidth ? styles.autoWidth : '')].join(' ')

    const closeModal = () => {
        dispatch({
            type: actionTypes.MODAL_VISIBILITY,
            value: false
        })
    }

    return(
        <Modal
            bodyOpenClassName={styles.body}
            overlayClassName={styles.overlay}
            className={modalClasses}
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel={contentLabel}
            preventScroll={true}
            style={{
                content: {
                    width: modalWidth,
                    height: modalHeight
                }
            }}
        >
            <FlexDiv justifyContent="space-between" alignItems="stretch">
                <h2 className={styles.title}>{title}</h2>
                <CloseButton onClick={closeModal}><i className="fas fa-times" /></CloseButton>
            </FlexDiv>
            {children}
        </Modal>
    )
}

export default ModalBox