import { BodyColor, Container, Title } from '../../assets/styles/utils/utils'

import PostList from "../components/PostList/View";

const HomeView = () => {

    return (
        <BodyColor bgColor="#f2f4f6">
            <Container paddingTop={30} paddingBottom={30}>
                <Title textAlign="center">Últimos post publicados</Title>
                <PostList layout="mosaic" orderBy="-date" order="desc" onlyPublic={true} />
            </Container>
        </BodyColor>
    )
}

export default HomeView
