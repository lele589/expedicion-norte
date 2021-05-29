import { BodyColor, Container, Title } from '../../assets/styles/utils/utils'

import PostList from "../components/PostList/View";
import Header from "../components/Header/View";

const HomeView = () => {
    
    const headerSize = {
        desktop: {  width: 2880, height: 800},
        mobile: {  width: 768, height: 400}
    }

    return (
        <BodyColor bgColor="#f2f4f6">
            <Header 
                title="Descubre todo lo que puedes hacer en Asturias"
                imgSize={headerSize}
                imgFolder="home"
                overlay={true}
                mask={true}
            />
            <Container paddingTop={30} paddingBottom={30}>
                <Title textAlign="center">Últimos post publicados</Title>
                <PostList layout="mosaic" orderBy="-date" order="desc" onlyPublic={true} />
            </Container>
        </BodyColor>
    )
}

export default HomeView
