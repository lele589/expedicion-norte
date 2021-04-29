import { useForm } from "react-hook-form";
import { withRouter } from 'react-router';
import dayjs from 'dayjs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { InputContainer, Label, Input, Textarea, Select, InputError, Submit } from '../../../assets/styles/utils/utils'
import { PostType } from './View.Types'
import PostsService from "../../../services/PostsService";

const schema = yup.object().shape({
    title: yup.string().required(),
    category: yup.string().required(),
    image: yup.string().url(),
    location: yup.string().url().required(),
    price: yup.number().min(0).max(1000).required(),
    description: yup.string().min(50).required()
});

const PostForm = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<PostType>({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data: PostType) => {
        data.date = dayjs().format("DD/MM/YYYY");
        data.public = false;
        data.price = Number(data.price);

        PostsService.createPost(data)
            .then((data: any) => {
                props.history.push('/');
            })
            .catch((error: any) => console.log(error))
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <Label>Título*</Label>
                <Input
                    type="text"
                    {...register('title')}
                />
                {errors.title && <InputError>El campo "titulo" es obligatorio</InputError>}
            </InputContainer>
            <InputContainer>
                <Label>Categoría*</Label>
                <Select defaultValue={""} {...register('category')}>
                    <option disabled value="">Elige la categoría</option>
                    <option value="ruta">Ruta</option>
                    <option value="deporte">Deporte</option>
                    <option value="gastronomia">Gastronomía</option>
                    <option value="cultura">Cultura</option>
                </Select>
                {errors.category && <InputError>El campo "categoría" es obligatorio</InputError>}
            </InputContainer>
            <InputContainer>
                <Label>Imagen</Label>
                <Input
                    type="text"
                    {...register('image')}
                />
                {errors.image && <InputError>El campo "imagen" debe tener el formato correcto de URL (https://ejemplo.es/)</InputError>}
            </InputContainer>
            <InputContainer>
                <Label>Localización*</Label>
                <Input
                    type="text"
                    {...register('location')}
                />
                {errors.location && <InputError>El campo "localización" es obligatorio y debe tener el formato correcto de URL (https://ejemplo.es/)</InputError>}
            </InputContainer>
            <InputContainer>
                <Label>Precio (€)*</Label>
                <Input
                    type="number"
                    {...register('price')}
                />
                {errors.price && <InputError>El campo "precio" es obligatorio y debe ser un número entre 0 y 10000</InputError>}
            </InputContainer>
            <InputContainer>
                <Label>Descripción*</Label>
                <Textarea
                    {...register('description')}
                />
                {errors.description && <InputError>El campo "descripción" es obligatorio y debe tener al menos 50 caracteres</InputError>}
            </InputContainer>
            <InputContainer flexDirection="row">
                <input type="checkbox"
                    {...register('pets')}
                />
                <Label>Se permiten mascotas</Label>
            </InputContainer>
            <Submit type="submit" value="Enviar" />
        </form>
    )
}

export default withRouter(PostForm)