import React from 'react'
import {FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocailIconLink,WebsiteRights} from './FooterElements'

import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'


const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
            
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Carrers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms and Services
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
            
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Carrers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms and Services
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Carrers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms and Services
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Business</FooterLinkTitle>
            
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Carrers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms and Services
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>InRu</SocialLogo>
                        <WebsiteRights>InRu c {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocailIconLink href='/' target='-blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocailIconLink>
                            <SocailIconLink href='/' target='-blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocailIconLink>
                            <SocailIconLink href='/' target='-blank' aria-label='YouTube'>
                                <FaYoutube />
                            </SocailIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
