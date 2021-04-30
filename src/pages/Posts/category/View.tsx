import { FunctionComponent } from 'react'
import { withRouter } from 'react-router-dom';
import lodash from 'lodash';

import { BodyColor, Container, Title } from '../../../assets/styles/utils/utils'
import PostList from '../../components/PostList/View'
import { PropsType } from './View.Types'

const CategoryView: FunctionComponent<PropsType> = (props) => {

    return (
        <BodyColor bgColor="#f2f4f6">
            <Container paddingTop={30} paddingBottom={30}>
                <Title textAlign="center">{lodash.capitalize(props.match.params.categoryName)}</Title>
                <PostList layout="mosaic" category={props.match.params.categoryName} />
            </Container>
        </BodyColor>
    )
}

export default withRouter(CategoryView)
