import {Title, TitleWrapper} from "./style";

const Header = ({children}) => {
    return (
        <TitleWrapper>
            <Title>
                {children}
            </Title>
        </TitleWrapper>
    );
};

export default Header;
