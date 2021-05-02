import { Component } from 'react'

import { Container, Title } from '../../../assets/styles/utils/utils'
import LoginForm from '../../components/LoginForm/View'

class LoginView extends Component {

    render() {
        return (
            <Container paddingTop={30} paddingBottom={30}>
                <Title size="big">Iniciar sesión</Title>
                <p>Accede para poder guardar tus favoritos y crear nuevos planes para compartir.</p>
                <LoginForm />
            </Container>
        )
    }
}

export default LoginView
