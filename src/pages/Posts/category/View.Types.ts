import { RouteComponentProps } from 'react-router-dom';

export type PathParamsType = {
    categoryName: string,
}

export type PropsType = RouteComponentProps<PathParamsType> & {
    someString?: string,
}