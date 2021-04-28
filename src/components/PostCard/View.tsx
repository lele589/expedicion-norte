import {FunctionComponent} from "react";
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { FlexDiv } from "../../assets/styles/utils/utils";
import { PostCardProps } from './View.Types'
import styles from './View.module.css'

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
              <FlexDiv justifyContent="space-between" padding="10px 0 0 0">
                  <a className={styles.location} href={post.location} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-map-marker-alt" />
                      <span className={styles.locationName}>Cómo llegar</span>
                  </a>
                  <div className={styles.price}>{post.price === 0 ? 'Gratis' : post.price + '€'}</div>
              </FlexDiv>
          </div>
      </Card>
   )
}

export default PostCard