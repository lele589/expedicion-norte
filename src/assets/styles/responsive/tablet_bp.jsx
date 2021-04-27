import Breakpoint from './breakpoints';

const TabletBreakpoint = (props) => {
 return (
    <Breakpoint name="phone">
    {props.children}
    </Breakpoint>
 );
}

export default TabletBreakpoint