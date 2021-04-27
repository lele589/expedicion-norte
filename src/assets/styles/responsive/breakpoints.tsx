import { FunctionComponent } from 'react';
import MediaQuery from 'react-responsive';

const breakpoints: any = {
    wide: '(min-width: 1140px)',
    desktop: '(min-width: 992px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    touch: '(max-width: 991px)',
    mobile: '(max-width: 767px)',
};

type PropsType = {
    query: string,
    children: object
}

const Breakpoint: FunctionComponent<PropsType> = (props) => {
    const breakpoint = breakpoints[props.query] || breakpoints.desktop;

    return (
        <MediaQuery {...props } query={breakpoint}>
         {props.children}
        </MediaQuery>
    );
}

export default Breakpoint