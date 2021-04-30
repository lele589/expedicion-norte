import {FunctionComponent, useEffect, useState} from "react";

import { FlexDiv } from "../../../assets/styles/utils/utils";
import PostsService from "../../../services/PostsService";
import { PostListProps } from './View.Types'
import PostCard from "../../../components/PostCard/View";
import Pagination from "../../../components/Pagination/View";
import {PostCardType} from "../../../components/PostCard/View.Types";

const PostList: FunctionComponent<PostListProps> = ({ layout, limit, orderBy, order, category, page }) => {

    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState<number| any>(0);
    const [currentPage, setCurrentPage] = useState<number | any>(null);
    const [newPage, setNewPage] = useState<number | any>(null);

    const cardLayout = layout === 'mosaic' ? 'row' : 'column'

    const savePostsData = (data: any) => {
        setPosts(data.results)
        setTotalPages(data.totalPages)
        setCurrentPage(data.currentPage)
    }

    useEffect(() => {
        PostsService.getPostList(limit, orderBy, order, category, page)
            .then((data: any) => {
                savePostsData(data);
            })
            .catch((error: any) => console.log(error))
    }, [location.pathname]);

    useEffect(() => {
        PostsService.getPostList(limit, orderBy, order, category, newPage)
            .then((data: any) => {
                savePostsData(data);
                window.scrollTo(0, 0);
            })
            .catch((error: any) => console.log(error))
    }, [newPage]);

    return(
        <>
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
            <FlexDiv>
                { totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} setNewPage={setNewPage} />
                )}
            </FlexDiv>
        </>
    )
}

export default PostList