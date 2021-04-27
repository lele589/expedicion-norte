import { RouteComponentProps } from 'react-router-dom';

// Type whatever you expect in 'this.props.match.params.*'
export type PathParamsType = {
    idPost: string,
}

// Your component own properties
export type PropsType = RouteComponentProps<PathParamsType> & {
    someString?: string,
}