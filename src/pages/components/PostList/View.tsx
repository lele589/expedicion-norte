import {FunctionComponent, useEffect, useState} from "react";

import { FlexDiv } from "../../../assets/styles/utils/utils";
import PostsService from "../../../services/PostsService";
import { PostListProps } from './View.Types'
import PostCard from "../../../components/PostCard/View";
import {PostCardType} from "../../../components/PostCard/View.Types";

const PostList: FunctionComponent<PostListProps> = ({ layout, limit, orderBy, order, category }) => {

    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState<number| any>(null);
    const [currentPage, setCurrentPage] = useState<number | any>(null);

    const cardLayout = layout === 'mosaic' ? 'row' : 'column'

    useEffect(() => {
        PostsService.getPostList(limit, orderBy, order, category)
            .then((data: any) => {
                setPosts(data.results)
                setTotalPages(data.totalPages)
                setCurrentPage(data.currentPage)
            })
            .catch((error: any) => console.log(error))
    }, [location.pathname]);

    return(
        <FlexDiv flexDirection={cardLayout} flexWrap="wrap" alignItems="stretch" justifyContent="center">
            { posts.length &&
                 posts.map((post: PostCardType, index) => (
                    <PostCard
                        layout={layout}
                        post={post}
                        key={index}
                    />
                ))
            }
        </FlexDiv>
    )
}

export default PostList