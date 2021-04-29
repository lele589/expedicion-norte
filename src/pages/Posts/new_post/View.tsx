import { Component } from 'react'

import { Container, Title } from '../../../assets/styles/utils/utils'
import PostForm from '../../components/PostForm/View'

class NewPostView extends Component { 

    render() {
        return (
            <Container paddingTop={30} paddingBottom={30}>
                <Title size="big">Crear nuevo post</Title>
                <p>Comparte con nosotros todos los planes interesantes que conozcas para realizar por Asturias y así ayudarás a que otras personas también puedan disfrutarlo.</p>
                <PostForm />
            </Container>
        )
    }
}

export default NewPostView
