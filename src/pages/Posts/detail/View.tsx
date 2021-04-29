import {FunctionComponent, useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import dayjs from 'dayjs'

import { PropsType, PostType } from './View.Types'
import PostsService from "../../../services/PostsService";
import {Container, FlexDiv} from "../../../assets/styles/utils/utils";
import styles from './View.module.css'

const DetailPostView: FunctionComponent<PropsType> = (props) => {

    const [post, setPost] = useState<PostType | undefined>(undefined);

    useEffect(() => {
        const idPost: string = props.match.params.idPost;
        PostsService.getPostById(idPost)
            .then((postInfo: PostType) => {
                setPost(postInfo)
            })
            .catch((error: any) => console.log(error))
    }, []);

    return (
        <Container paddingTop={50} paddingBottom={50}>
            {post &&
                (
                    <>
                        <FlexDiv className={styles.headerContainer} alignItems="stretch">
                            <div className={styles.imageContainer}>
                                <img className={styles.image} src="https://picsum.photos/700/500" />
                            </div>
                            <FlexDiv flexDirection="column" alignItems="left" justifyContent="space-between" className={styles.header}>
                                <div>
                                    <div className={styles.category}>{(post.category)}</div>
                                    <h1 className={styles.title}>{post.title}</h1>
                                    <div className={styles.date}>Publicado el {dayjs(post.date).format("DD/MM/YYYY")}</div>
                                </div>
                                <div>
                                    <div>
                                        <span className={styles.itemTitle}>Precio{post.category === 'gastronomia' &&  ' por persona'}: </span>
                                        <span className={styles.itemDescr}>{post.price === 0 ? 'Gratis' : post.price + '€'}</span>
                                    </div>
                                    <div className={styles.location}>
                                        <span className={styles.itemTitle}>Ubicación: </span>
                                        <span className={styles.itemDescr}>Asturias</span>
                                        <a className={styles.locationLink} href="https://goo.gl/maps/Qeg57WCA5D29Ge9c7" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-map-marker-alt" />
                                            <span>Cómo llegar</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className={styles.itemTitle}>Permite mascotas: </span>
                                        <span className={styles.itemDescr}>{post.pets ? 'Si' : 'No'}</span>
                                    </div>
                                </div>
                            </FlexDiv>
                        </FlexDiv>
                        <p className={styles.description}>{post.description}</p>
                    </>
                )
            }
        </Container>
    )
}

export default withRouter(DetailPostView)
