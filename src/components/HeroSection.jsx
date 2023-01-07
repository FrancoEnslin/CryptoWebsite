import React from 'react'
import searchI from '../assets/icons/searchI.svg'
import { ReactComponent as TelegramIcon } from '../assets/icons/telegramI.svg'
import { ReactComponent as TwitterIcon } from '../assets/icons/twitterI.svg'
import { ReactComponent as YoutubeIcon } from '../assets/icons/youtubeI.svg'
import { ReactComponent as DiscordIcon } from '../assets/icons/discordI.svg'
import  hero  from '../assets/hero.svg'

export const HeroSection = () => {
  return (
    <div className='hero-section-container'>
        <div className='hero-info-wrapper'>
            <div className='hero-info-text'>
                <h1>The <span className='highlighted'>Decentralized</span> cross-chain exchange</h1>
                <p className='hero-info-description'>
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at it's layout.
                </p>
                <div className='search-container'>
                    <div className='search-input-wrapper'>
                        <img className='search' src={searchI} alt='Search'/>
                        <input className='search-input' placeholder='Search 5000+ tokens accross 9 chains...'></input>
                        <button className='search-btn primary'>
                            <span className='start-swapping'>Start swapping</span>
                        </button>
                    </div>
                </div>
                <div className='social-links-container'>
                        <div className='social-links'>
                            <a href='/'>
                                <TelegramIcon />
                            </a>
                            <a href='/'>
                                <TwitterIcon />
                            </a>
                            <a href='/'>
                                <DiscordIcon />
                            </a>
                            <a href='/'>
                                <YoutubeIcon />
                            </a>
                        </div>
                    </div>
            </div>
        </div>
        <div className='hero-image-container'>
            <div>
                <img className='hero-img' src={hero} alt='blockchain'/>
            </div>
        </div>
    </div>
  )
}
