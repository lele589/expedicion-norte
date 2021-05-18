import { FunctionComponent } from 'react'
import { useDispatch } from "react-redux"

import * as actionTypes from '../../store/actions'
import { ShareTriggerProps } from './View.Types'
import styles from './View.module.css'

const ShareTrigger:FunctionComponent<ShareTriggerProps> = ({ iconStyles, url, title }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            {type: actionTypes.MODAL_VISIBILITY, value: true},
        )
        dispatch(
            {type: actionTypes.SHARE_URL, value: url}
        )
        dispatch(
            {type: actionTypes.SHARE_TITLE, value: title}
        )
    }

    return(
        <button onClick={handleClick} className={styles.button}>
            <i className={iconStyles + " fas fa-share-alt"}></i>
        </button>
    )
}

export default ShareTrigger