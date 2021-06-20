import {FunctionComponent} from "react";
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useSelector } from "react-redux"

import { RootState } from '../../store/store'
import { FlexDiv } from "../../assets/styles/utils/utils";
import { PostCardProps } from './View.Types'
import ShareTrigger from '../ShareTrigger/View'
import styles from './View.module.css'
import { Icon } from './../Icon/Icons'

type layoutType = {
    layout: string
}

const Card = styled.div<layoutType>`
  background-color: #fff;
  margin: 20px;
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 33%;
  }
  @media (min-width: 1200px) {
    width: 25%;
  }

  ${({ layout }) => {
    if (layout === 'column') {
      return css`
        flex-direction: row;
      `
    } else {
      return css`
        flex-direction: column;
      `
    }
  }}
`;

const ThumbContainer = styled.div<layoutType>`
  position: relative;
  min-height: 200px;
  width: 100%;
  overflow: hidden;

  ${({ layout }) => {
    if (layout === 'column') {
      return css`
        width: 30%;
      `
    } else {
      return css`
        width: 100%;
      `
    }
  }}
`;

const Thumb = styled.img`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: auto;
`;

const PostCard: FunctionComponent<PostCardProps> = ({post, layout}) => {

    const isUserLogged = useSelector((state: RootState) => state.logged);
    const shareUrl = process.env.REACT_APP_DOMAIN_URL + "posts/detail/" + post['_id'];

    return(
        <Card layout={layout}>
            <ThumbContainer layout={layout} >
                <Thumb src={post.image} alt={post.title} />
            </ThumbContainer>
            <div className={styles.info}>
                <div>
                    <div className={styles.category}>{post.category}</div>
                    <Link
                        className={styles.title}
                        to={"/posts/detail/" + post['_id']}
                    >{post.title}</Link>
                </div>
                <FlexDiv justifyContent="space-between" padding="25px 0 0 0">
                    <a className={styles.item} href={post.locationUrl} target="_blank" rel="noopener noreferrer">
                        <Icon.PinFull color="#5baaa1" fontSize={20} />
                        <span className={styles.itemName}>{post.location}</span>
                    </a>
                    <div className={styles.item}>
                        <Icon.Coins color="#5baaa1" fontSize={20} block={false}/>
                        <span className={styles.itemName}>{post.price === 0 ? 'Gratis' : post.price + '€'}</span>
                    </div>
                </FlexDiv>
                <FlexDiv className={styles.footer} justifyContent="space-between" padding="10px 0 0 0">
                    <FlexDiv>
                        { isUserLogged && <i className={styles.icon + " fas fa-heart"} />}
                        <ShareTrigger url={shareUrl} title={post.title} iconStyles={styles.icon} />
                    </FlexDiv>
                    <Link
                        className={styles.more}
                        to={"/posts/detail/" + post['_id']}
                    >
                        <span>Ver más</span>
                        <Icon.ArrowRightV2 className={styles.moreIcon} />
                    </Link>
                </FlexDiv>
            </div>
        </Card>
    )
}

export default PostCard