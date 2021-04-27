import Breakpoint from './breakpoints';

const DesktopBreakpoint = (props) => {
 return (
 <Breakpoint name="desktop">
    {props.children}
 </Breakpoint>
 );
}

export default DesktopBreakpoint