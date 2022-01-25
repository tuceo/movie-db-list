import {Wrapper} from "./style";

const Layout = ({children, type}) => {
    return (
        <Wrapper type={type}>
            {children}
        </Wrapper>
    );
};

export default Layout;
