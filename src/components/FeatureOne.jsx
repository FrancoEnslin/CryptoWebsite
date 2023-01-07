import React from 'react'
import TokenCard from './TokenCard';

export const FeatureOne = () => {
    const tokens = ['0x', 'gosh-realm'];
    return (

        <div className='feature-container'>
            <div className='swap-token-container'>
                <div className='tokens-container'>
                    {tokens.map((token, index) => {
                        return (
                            <TokenCard id={token} />
                        )
                    })}
                </div>
                <div className='btn-container'>
                    <button className='primary'>Swap</button>
                </div>
            </div>
            <div className='feature-description'>
                <div className='feature-description-title'>
                    <h1>
                        <span className='highlighted'>Swap</span> Any token, any chain
                    </h1>
                </div>
                <p>
                    We&#39;ve created TokenSwap to help you make cross-chain swaps in just
                    few clicks. You'll be able to easily convert your coins from one
                    blockchain to another, or trade them for other cryptocurrencies and
                    token.
                </p>
                <div className='btn-container'>
                    <button className='secondary'>Start Swapping</button>
                </div>
            </div>
        </div>
    )
}
