import React from "react";
import SubNavbar from "../SubNavbar";
import {
  StyledLink,
  Container,
  Nav,
  LinkContainer,
  LinkWrapper,
  RightNavbarWrapper,
  InputWrapper,
  Input,
  CurrencyButton,
  ThemeButton,
  DollarIconWrapper,
  MagnifyIconWrapper,
  ChevronIconWrapper,
  CurrencyList,
  DarkThemeIconWrapper,
  SubNavbarWrapper,
} from "./Navbar.styles";
import {
  DarkThemeIcon,
  MagnifyIcon,
  ChevronIcon,
  DollarIcon,
} from "../IconComponent";
// import bitcoin from "../../assets/bitcoin.webp";
// import ethereum from "../../assets/ethereum.webp";

class Navbar extends React.Component {
  render() {
    return (
      <Container className="third" $on={this.props.on}>
        <Nav>
          <LinkContainer>
            <LinkWrapper>
              <StyledLink className="text button" to="/">
                Coins
              </StyledLink>
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink className="text button" to="/portfolio">
                Portfolio
              </StyledLink>
            </LinkWrapper>
          </LinkContainer>
          <RightNavbarWrapper>
            <InputWrapper>
              <MagnifyIconWrapper className="text" $on={this.props.on}>
                <MagnifyIcon />
              </MagnifyIconWrapper>
              <Input
                className="text second"
                $on={this.props.on}
                placeholder="Search..."
              />
              <CurrencyButton className="text button">
                <DollarIconWrapper>
                  <DollarIcon />
                </DollarIconWrapper>
                USD
                <ChevronIconWrapper>
                  <ChevronIcon />
                </ChevronIconWrapper>
              </CurrencyButton>
              <CurrencyList>
                <li>USD</li>
                <li>GBP</li>
                <li>EUR</li>
                <li>BTC</li>
                <li>ETH</li>
              </CurrencyList>
            </InputWrapper>
            <ThemeButton className="button" onClick={this.props.handleClick}>
              <DarkThemeIconWrapper className="fill" $on={this.props.on}>
                <DarkThemeIcon />
              </DarkThemeIconWrapper>
            </ThemeButton>
          </RightNavbarWrapper>
        </Nav>
        <SubNavbarWrapper className="text third">
          <SubNavbar
            totalCoins={this.props.totalCoins}
            totalExchanges={this.props.totalExchanges}
            marketCap={this.props.marketCap}
            marketVolume={this.props.marketVolume}
          />
        </SubNavbarWrapper>
      </Container>
    );
  }
}

export default Navbar;
