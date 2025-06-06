import { useQuery } from '@tanstack/react-query'
import FooterSafeArea from 'components/FooterSafeArea'
import Level1 from 'components/icons/market/Level1'
import Level2 from 'components/icons/market/Level2'
import Level3 from 'components/icons/market/Level3'
import LoaderFullPage from 'components/LoaderFullPage'
import MarketCard from 'components/Market/MarketCard'
import MarketSection from 'components/Market/MarketSection'
import PointsReward from 'components/Market/PointsReward'
import { Header2 } from 'components/Text'
import { getMarketEntries } from 'helpers/api/market'
import handleStarPayment from 'helpers/telegram/handleStarPayment'
import { useCallback } from 'react'

export default function () {
  const query = useQuery({
    queryKey: ['market-data'],
    queryFn: getMarketEntries,
  })

  const onClick = useCallback(
    (id: number) => {
      if (!query.data) return
      void handleStarPayment({ link: query.data[id].buy_link })
    },
    [query.data]
  )

  if (query.status !== 'success') return <LoaderFullPage />

  return (
    <div className="flex flex-col mt-2 px-4 gap-y-10">
      <Header2 className="w-full text-center">Upgrades</Header2>
      <MarketSection
        header="Reward Upgrade"
        subHeader="Unlock higher rewards by upgrading your bet."
      >
        <MarketCard price={100} onClick={() => onClick(0)}>
          <Level1 />
        </MarketCard>
        <MarketCard price={250} bestOffer onClick={() => onClick(1)}>
          <Level2 />
        </MarketCard>
        <MarketCard price={500} onClick={() => onClick(2)}>
          <Level3 />
        </MarketCard>
      </MarketSection>

      <MarketSection
        header="Points Packs"
        subHeader="Get points to to climb to the top."
      >
        <MarketCard
          onClick={() => onClick(3)}
          price={400}
          backgroundImage='url("img/market/points-small.png")'
        >
          <PointsReward amount={500000} />
        </MarketCard>
        <MarketCard
          onClick={() => onClick(4)}
          price={700}
          bestOffer
          backgroundImage='url("img/market/points-mid.png")'
        >
          <PointsReward amount={1000000} />
        </MarketCard>
        <MarketCard
          onClick={() => onClick(5)}
          price={1200}
          backgroundImage='url("img/market/points-large.png")'
        >
          <PointsReward amount={1500000} />
        </MarketCard>
      </MarketSection>

      <FooterSafeArea />
    </div>
  )
}
