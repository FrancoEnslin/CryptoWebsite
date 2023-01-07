import React from 'react'

const DailyStats = () => {

  return (
   <div className='daily-stats-container gradient-background'>
       <div className='metric-container'>
           <span className='metric-title'>Token Swap Price</span>
           <span className='metric-value'>$0.11 USD</span>
       </div>

       <div className='metric-container'>
           <span className='metric-title'>Supported</span>
           <span className='metric-value'>9 Chains</span>
       </div>

       <div className='metric-container'>
           <span className='metric-title'>Total Liquidity</span>
           <span className='metric-value'>$100M</span>
       </div>

       <div className='metric-container'>
           <span className='metric-title'>Total Trades</span>
           <span className='metric-value'>$9.125M</span>
       </div>

       <div className='metric-container'>
           <span className='metric-title'>Daily Active Users</span>
           <span className='metric-value'> 120 000+ </span>
       </div>
   </div>
  )
}

export default DailyStats;