import Breakpoint from './breakpoints';

const MobileBreakpoint = (props) => {
 return (
    <Breakpoint name="mobile">
    {props.children}
    </Breakpoint>
 );
}

export default MobileBreakpoint