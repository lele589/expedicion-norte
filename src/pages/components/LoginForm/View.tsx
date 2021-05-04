import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { InputContainer, Label, Input, InputError, Submit } from '../../../assets/styles/utils/utils'
import UserService from "../../../services/UserService";
import { UserType } from './View.Types'
import * as actionTypes from '../../../store/actions';

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});

const LoginForm = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<UserType>({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();

    const onSubmit = (data: UserType) => {
        UserService.loginUser(data)
            .then((data: any) => {
                localStorage.setItem('token', JSON.stringify(data.token));
                dispatch({
                    type: actionTypes.USER_LOGGED,
                    value: true
                })
                props.history.push('/');
            })
            .catch((error: any) => console.log(error))
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <Label>Email*</Label>
                <Input
                    type="email"
                    {...register('email')}
                />
                {errors.email && <InputError>El campo "email" es obligatorio</InputError>}
            </InputContainer>
            <InputContainer>
                <Label>Contraseña*</Label>
                <Input
                    type="password"
                    {...register('password')}
                />
                {errors.password && <InputError>El campo "contraseña" es obligatorio</InputError>}
            </InputContainer>
            <Submit type="submit" value="Enviar" />
        </form>
    )
}

export default withRouter(LoginForm)