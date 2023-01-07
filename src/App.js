import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureOne } from './components/FeatureOne';
import DailyStats from './components/DailyStats';
import { Card } from './components/Card';
import wallet from './assets/wallet.svg';
import profit from './assets/profit.svg';
import insurance from './assets/insurance.svg';
import { SocialMediaPromotion } from './components/SocialMediaPromotion';
import { DevSection } from './components/DevSection';
import { BlogSection } from './components/BlogSection';
import {Footer} from './components/Footer'

export default function App() {

  const features = [
    {
      src: wallet,
      title: "Value",
      description:
        "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
    },
    {
      src: profit,
      title: "Yield",
      description:
        "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
    {
      src: insurance,
      title: "Insurance",
      description: "Get Impermanent Loss Protection on your Liquidity Pools",
    },
    {
      src: wallet,
      title: "Staking",
      description:
        "Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
  ];

  return (
    <div className="home">
      <Header />
      <HeroSection />
      <FeatureOne />
      <DailyStats />
      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imgUrl={feature.src}>{<p>{feature.description}</p>}</Card>
            )
          })
        }
      </div>
      <DevSection />
      <SocialMediaPromotion />
      <BlogSection />
      <Footer />
    </div>
  );
}

