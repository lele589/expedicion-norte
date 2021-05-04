import { RouteComponentProps } from 'react-router-dom';

export type PathParamsType = {
    idPost: string,
}

export interface PostType {
    _id: string,
    title: string,
    category: string,
    image: string,
    location: string,
    locationUrl: string,
    price: number,
    description: string,
    date: string,
    public: boolean,
    pets: boolean,
}

export type PropsType = RouteComponentProps<PathParamsType>