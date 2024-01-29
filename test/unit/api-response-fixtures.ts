export const EXPECTED_PRICE = 10000;

export function getApiResponseFixture(
  oisTitle: string,
  apiCallParameters: Record<string, any>,
  endpointParameters: Record<string, string>
) {
  switch (oisTitle) {
    case 'Coinpaprika': {
      return [
        {
          id: 'kava-kava',
          name: 'Kava',
          symbol: 'KAVA',
          rank: 82,
          circulating_supply: 1043484997,
          total_supply: 1043484996,
          max_supply: 0,
          beta_value: 1.13698,
          first_data_at: '2019-10-31T00:00:00Z',
          last_updated: '2023-12-20T11:45:23Z',
          quotes: {
            USD: {
              price: EXPECTED_PRICE,
              volume_24h: 13357471.16207055,
              volume_24h_change_24h: 5.3,
              market_cap: 812291450,
              market_cap_change_24h: 1.18,
              percent_change_15m: 0.05,
              percent_change_30m: -0.16,
              percent_change_1h: -0.13,
              percent_change_6h: 0.03,
              percent_change_12h: 1.35,
              percent_change_24h: 0.88,
              percent_change_7d: 4.02,
              percent_change_30d: 2.15,
              percent_change_1y: 10.79,
              ath_price: 9.170189504844709,
              ath_date: '2021-08-30T11:05:00Z',
              percent_from_price_ath: -91.52
            }
          }
        }
      ];
    }

    case 'dxFeed': {
      // dxFeed responses includes asset names so fixture response must be modified
      const symbol = apiCallParameters.endpointParameters.symbol;
      const response = JSON.stringify({
        status: 'OK',
        Quote: {
          '<REPLACE>': {
            eventSymbol: 'AMZN',
            eventTime: 0,
            sequence: 0,
            timeNanoPart: 0,
            bidTime: 1703033218000,
            bidExchangeCode: 'X',
            bidPrice: EXPECTED_PRICE,
            bidSize: 'NaN',
            askTime: 1703030201000,
            askExchangeCode: 'X',
            askPrice: EXPECTED_PRICE,
            askSize: 'NaN'
          }
        }
      }).replace('<REPLACE>', symbol);

      return [JSON.parse(response)];
    }

    case 'Finage': {
      return [
        {
          symbol: 'AEDUSD',
          price: EXPECTED_PRICE,
          timestamp: 1703073278231
        }
      ];
    }

    case 'Finnhub': {
      return [
        {
          base: 'EUR',
          quote: {
            AED: EXPECTED_PRICE,
            AFN: EXPECTED_PRICE,
            ALL: EXPECTED_PRICE,
            AMD: EXPECTED_PRICE,
            ANG: EXPECTED_PRICE,
            AOA: EXPECTED_PRICE,
            ARS: EXPECTED_PRICE,
            AUD: EXPECTED_PRICE,
            AWG: EXPECTED_PRICE,
            AZN: EXPECTED_PRICE,
            BAM: EXPECTED_PRICE,
            BBD: EXPECTED_PRICE,
            BDT: EXPECTED_PRICE,
            BGN: EXPECTED_PRICE,
            BHD: EXPECTED_PRICE,
            BIF: EXPECTED_PRICE,
            BMD: EXPECTED_PRICE,
            BND: EXPECTED_PRICE,
            BOB: EXPECTED_PRICE,
            BRL: EXPECTED_PRICE,
            BSD: EXPECTED_PRICE,
            BTN: EXPECTED_PRICE,
            BWP: EXPECTED_PRICE,
            BYN: EXPECTED_PRICE,
            BYR: EXPECTED_PRICE,
            BZD: EXPECTED_PRICE,
            CAD: EXPECTED_PRICE,
            CDF: EXPECTED_PRICE,
            CHF: EXPECTED_PRICE,
            CLF: EXPECTED_PRICE,
            CLP: EXPECTED_PRICE,
            CNY: EXPECTED_PRICE,
            COP: EXPECTED_PRICE,
            CRC: EXPECTED_PRICE,
            CUC: EXPECTED_PRICE,
            CUP: EXPECTED_PRICE,
            CVE: EXPECTED_PRICE,
            CZK: EXPECTED_PRICE,
            DJF: EXPECTED_PRICE,
            DKK: EXPECTED_PRICE,
            DOP: EXPECTED_PRICE,
            DZD: EXPECTED_PRICE,
            EGP: EXPECTED_PRICE,
            ERN: EXPECTED_PRICE,
            ETB: EXPECTED_PRICE,
            EUR: EXPECTED_PRICE,
            FJD: EXPECTED_PRICE,
            FKP: EXPECTED_PRICE,
            GBP: EXPECTED_PRICE,
            GEL: EXPECTED_PRICE,
            GGP: EXPECTED_PRICE,
            GHS: EXPECTED_PRICE,
            GIP: EXPECTED_PRICE,
            GMD: EXPECTED_PRICE,
            GNF: EXPECTED_PRICE,
            GTQ: EXPECTED_PRICE,
            GYD: EXPECTED_PRICE,
            HKD: EXPECTED_PRICE,
            HNL: EXPECTED_PRICE,
            HRK: EXPECTED_PRICE,
            HTG: EXPECTED_PRICE,
            HUF: EXPECTED_PRICE,
            IDR: EXPECTED_PRICE,
            ILS: EXPECTED_PRICE,
            IMP: EXPECTED_PRICE,
            INR: EXPECTED_PRICE,
            IQD: EXPECTED_PRICE,
            IRR: EXPECTED_PRICE,
            ISK: EXPECTED_PRICE,
            JEP: EXPECTED_PRICE,
            JMD: EXPECTED_PRICE,
            JOD: EXPECTED_PRICE,
            JPY: EXPECTED_PRICE,
            KES: EXPECTED_PRICE,
            KGS: EXPECTED_PRICE,
            KHR: EXPECTED_PRICE,
            KMF: EXPECTED_PRICE,
            KPW: EXPECTED_PRICE,
            KRW: EXPECTED_PRICE,
            KWD: EXPECTED_PRICE,
            KYD: EXPECTED_PRICE,
            KZT: EXPECTED_PRICE,
            LAK: EXPECTED_PRICE,
            LBP: EXPECTED_PRICE,
            LKR: EXPECTED_PRICE,
            LRD: EXPECTED_PRICE,
            LSL: EXPECTED_PRICE,
            LTL: EXPECTED_PRICE,
            LVL: EXPECTED_PRICE,
            LYD: EXPECTED_PRICE,
            MAD: EXPECTED_PRICE,
            MDL: EXPECTED_PRICE,
            MGA: EXPECTED_PRICE,
            MKD: EXPECTED_PRICE,
            MMK: EXPECTED_PRICE,
            MNT: EXPECTED_PRICE,
            MOP: EXPECTED_PRICE,
            MRO: EXPECTED_PRICE,
            MRU: EXPECTED_PRICE,
            MUR: EXPECTED_PRICE,
            MVR: EXPECTED_PRICE,
            MWK: EXPECTED_PRICE,
            MXN: EXPECTED_PRICE,
            MYR: EXPECTED_PRICE,
            MZN: EXPECTED_PRICE,
            NAD: EXPECTED_PRICE,
            NGN: EXPECTED_PRICE,
            NIO: EXPECTED_PRICE,
            NOK: EXPECTED_PRICE,
            NPR: EXPECTED_PRICE,
            NZD: EXPECTED_PRICE,
            OMR: EXPECTED_PRICE,
            PAB: EXPECTED_PRICE,
            PEN: EXPECTED_PRICE,
            PGK: EXPECTED_PRICE,
            PHP: EXPECTED_PRICE,
            PKR: EXPECTED_PRICE,
            PLN: EXPECTED_PRICE,
            PYG: EXPECTED_PRICE,
            QAR: EXPECTED_PRICE,
            RON: EXPECTED_PRICE,
            RSD: EXPECTED_PRICE,
            RUB: EXPECTED_PRICE,
            RWF: EXPECTED_PRICE,
            SAR: EXPECTED_PRICE,
            SBD: EXPECTED_PRICE,
            SCR: EXPECTED_PRICE,
            SDG: EXPECTED_PRICE,
            SEK: EXPECTED_PRICE,
            SGD: EXPECTED_PRICE,
            SHP: EXPECTED_PRICE,
            SLE: EXPECTED_PRICE,
            SLL: EXPECTED_PRICE,
            SOS: EXPECTED_PRICE,
            SRD: EXPECTED_PRICE,
            SSP: EXPECTED_PRICE,
            STD: EXPECTED_PRICE,
            SVC: EXPECTED_PRICE,
            SYP: EXPECTED_PRICE,
            SZL: EXPECTED_PRICE,
            THB: EXPECTED_PRICE,
            TJS: EXPECTED_PRICE,
            TMT: EXPECTED_PRICE,
            TND: EXPECTED_PRICE,
            TOP: EXPECTED_PRICE,
            TRY: EXPECTED_PRICE,
            TTD: EXPECTED_PRICE,
            TWD: EXPECTED_PRICE,
            TZS: EXPECTED_PRICE,
            UAH: EXPECTED_PRICE,
            UGX: EXPECTED_PRICE,
            USD: EXPECTED_PRICE,
            UYU: EXPECTED_PRICE,
            UZS: EXPECTED_PRICE,
            VEF: EXPECTED_PRICE,
            VES: EXPECTED_PRICE,
            VND: EXPECTED_PRICE,
            VUV: EXPECTED_PRICE,
            WST: EXPECTED_PRICE,
            XAF: EXPECTED_PRICE,
            XCD: EXPECTED_PRICE,
            XDR: EXPECTED_PRICE,
            XOF: EXPECTED_PRICE,
            XPF: EXPECTED_PRICE,
            YER: EXPECTED_PRICE,
            ZAR: EXPECTED_PRICE,
            ZMK: EXPECTED_PRICE,
            ZMW: EXPECTED_PRICE,
            ZWL: EXPECTED_PRICE
          }
        },
        {
          a: EXPECTED_PRICE,
          av: 2,
          b: EXPECTED_PRICE,
          bv: 1,
          t: 1703073447573
        }
      ];
    }

    case 'IEXCloud': {
      return [
        [
          {
            symbol: 'EURUSD',
            rate: EXPECTED_PRICE,
            timestamp: 1703073418565,
            isDerived: false
          }
        ],
        [
          {
            avgTotalVolume: 52308331,
            calculationPrice: 'close',
            change: 1.05,
            changePercent: 0.00536,
            close: 196.94,
            closeSource: 'official',
            closeTime: 1703019600312,
            companyName: 'Apple Inc',
            currency: 'USD',
            delayedPrice: 196.835,
            delayedPriceTime: 1703019580591,
            extendedChange: null,
            extendedChangePercent: null,
            extendedPrice: null,
            extendedPriceTime: null,
            high: null,
            highSource: null,
            highTime: null,
            iexAskPrice: 196.93,
            iexAskSize: 200,
            iexBidPrice: 99.76,
            iexBidSize: 102,
            iexClose: 196.92,
            iexCloseTime: 1703019599964,
            iexLastUpdated: 1703019599964,
            iexMarketPercent: 10.833599520862448,
            iexOpen: 196.13,
            iexOpenTime: 1702996200939,
            iexRealtimePrice: 196.92,
            iexRealtimeSize: 200,
            iexVolume: 759717,
            lastTradeTime: 1703019599964,
            latestPrice: EXPECTED_PRICE,
            latestSource: 'Close',
            latestTime: 'December 19, 2023',
            latestUpdate: 1703019600312,
            latestVolume: 28852601,
            low: 195.89,
            lowSource: 'IEX real time price',
            lowTime: 1702997354706,
            marketCap: 3062958978880,
            oddLotDelayedPrice: 196.83,
            oddLotDelayedPriceTime: 1703019580584,
            open: 196.08,
            openTime: 1702996200909,
            openSource: 'official',
            peRatio: 32.13,
            previousClose: 195.89,
            previousVolume: 55751861,
            primaryExchange: 'NASDAQ',
            symbol: 'AAPL',
            volume: 0,
            week52High: 199.62,
            week52Low: 123.15,
            ytdChange: 0.533640246275525,
            isUSMarketOpen: false
          }
        ]
      ];
    }

    case 'Kaiko': {
      return [
        {
          query: {
            page_size: 10,
            base_asset: 'kava',
            quote_asset: 'usd',
            interval: '1m',
            sort: 'desc',
            sources: false,
            include_exchanges: [],
            exclude_exchanges: [],
            data_version: 'v1',
            commodity: 'trades',
            request_time: '2023-12-20T12:01:07.723Z',
            instruments: ['bbsp:spot:kava-usdt', 'bfnx:spot:kava-usdt'],
            start_timestamp: 1703073120000,
            end_timestamp: 1703073720000,
            extrapolate_missing_values: false
          },
          time: '2023-12-20T12:01:08.253Z',
          timestamp: 1703073668253,
          data: [
            {
              timestamp: 1703073660000,
              price: EXPECTED_PRICE,
              extrapolated: false
            },
            {
              timestamp: 1703073600000,
              price: -1,
              extrapolated: false
            },
            {
              timestamp: 1703073540000,
              price: -1,
              extrapolated: false
            }
          ],
          result: 'success',
          continuation_token: '...',
          next_url: '...',
          access: {
            access_range: {
              start_timestamp: 1682294400000,
              end_timestamp: 1714003199000
            },
            data_range: {
              start_timestamp: 1682294400000,
              end_timestamp: 1714003199000
            }
          }
        }
      ];
    }

    case 'NewChangeFX-Crypto': {
      // NewChangeFX Crypto API responses includes asset names so fixture response must be modified
      // NewChangeFX Crypto API symbols are formatted like this: ASSET1-ASSET2. Tests will error if this convention is not valid anymore
      const symbol = endpointParameters.name.replace('/', '-');

      const response = JSON.stringify({
        rates: {
          '<REPLACE>': {
            rate: EXPECTED_PRICE,
            timestamp: '2023-12-20 12:10:29.500'
          }
        }
      }).replace('<REPLACE>', symbol);

      return [JSON.parse(response)];
    }

    case 'NewChangeFX-Forex': {
      return [
        {
          rt: '2023-12-20 12:12:01.328',
          p: 'EURUSD',
          tn: 'SPT',
          m: EXPECTED_PRICE,
          ib: 1,
          ic: 0,
          in: 0,
          ix: 0,
          io: 1
        }
      ];
    }

    case 'TraderMade': {
      // TraderMade responses includes asset names so fixture response must be modified
      const [asset1, asset2] = endpointParameters.name.split('/');

      const responseType1 = JSON.stringify({
        endpoint: 'live',
        quotes: [
          {
            ask: 1.0938,
            base_currency: '<REPLACE1>',
            bid: 1.0938,
            mid: EXPECTED_PRICE,
            quote_currency: '<REPLACE2>'
          }
        ],
        requested_time: 'Wed, 20 Dec 2023 12:14:11 GMT',
        timestamp: 1703074452
      })
        .replace('<REPLACE1>', asset1)
        .replace('<REPLACE2>', asset2);

      // This is required because we refer OIL commodity as WTI while TraderMade refer it as OIL. Post processing snippet takes this into account to the "responseType2" is required.
      const responseType2 = {
        endpoint: 'live',
        quotes: [
          {
            ask: 1.0938,
            bid: 1.0938,
            mid: EXPECTED_PRICE,
            instrument: 'OILUSD'
          }
        ],
        requested_time: 'Wed, 20 Dec 2023 12:14:11 GMT',
        timestamp: 1703074452
      };

      return [JSON.parse(responseType1), responseType2];
    }

    case 'TwelveData': {
      return [
        {
          price: EXPECTED_PRICE
        }
      ];
    }

    case 'Nodary': {
      return [
        {
          name: 'stETH/USD',
          value: EXPECTED_PRICE,
          timestamp: 1703074731136,
          category: 'crypto'
        }
      ];
    }
    case 'CoinGecko': {
      const nameMap = {
        'AAVE/USD': 'aave.usd',
        'ADA/USD': 'cardano.usd',
        'ALGO/USD': 'algorand.usd',
        'APE/USD': 'apecoin.usd',
        'API3/USD': 'api3.usd',
        'ATOM/USD': 'cosmos.usd',
        'AVAX/USD': 'avalanche-2.usd',
        'AXS/USD': 'axie-infinity.usd',
        'BAT/USD': 'basic-attention-token.usd',
        'BIT/USD': 'bitdao.usd',
        'BNB/USD': 'binancecoin.usd',
        'BTC/USD': 'bitcoin.usd',
        'BTT/USD': 'bittorrent.usd',
        'CAKE/USD': 'pancakeswap-token.usd',
        'CHZ/USD': 'chiliz.usd',
        'CRO/USD': 'crypto-com-chain.usd',
        'CRV/USD': 'curve-dao-token.usd',
        'DAI/USD': 'dai.usd',
        'DOGE/USD': 'dogecoin.usd',
        'DOT/USD': 'polkadot.usd',
        'ETH/USD': 'ethereum.usd',
        'FIL/USD': 'filecoin.usd',
        'FLOW/USD': 'flow.usd',
        'FTM/USD': 'fantom.usd',
        'GRT/USD': 'the-graph.usd',
        'HBAR/USD': 'hedera-hashgraph.usd',
        'HNT/USD': 'helium.usd',
        'HT/USD': 'huobi-token.usd',
        'ICP/USD': 'internet-computer.usd',
        'JOE/USD': 'joe.usd',
        'LDO/USD': 'lido-dao.usd',
        'LINK/USD': 'chainlink.usd',
        'LTC/USD': 'litecoin.usd',
        'MANA/USD': 'decentraland.usd',
        'MATIC/USD': 'matic-network.usd',
        'MKR/USD': 'maker.usd',
        'NEAR/USD': 'near.usd',
        'OKB/USD': 'okb.usd',
        'PAXG/USD': 'pax-gold.usd',
        'QUICK/USD': 'quick.usd',
        'RUNE/USD': 'thorchain.usd',
        'SAND/USD': 'the-sandbox.usd',
        'SHIB/USD': 'shiba-inu.usd',
        'SNX/USD': 'havven.usd',
        'SOL/USD': 'solana.usd',
        'STETH/USD': 'staked-ether.usd',
        'stETH/USD': 'staked-ether.usd',
        'STG/USD': 'stargate-finance.usd',
        'STX/USD': 'blockstack.usd',
        'TUSD/USD': 'true-usd.usd',
        'UNI/USD': 'uniswap.usd',
        'USDC/USD': 'usd-coin.usd',
        'USDP/USD': 'paxos-standard.usd',
        'USDT/USD': 'tether.usd',
        'WBTC/USD': 'wrapped-bitcoin.usd',
        'XLM/USD': 'stellar.usd',
        'XMR/USD': 'monero.usd',
        'XRP/USD': 'ripple.usd',
        'XTZ/USD': 'tezos.usd',
        'ZIL/USD': 'zilliqa.usd',
        'FXS/USD': 'frax-share.usd',
        'CVX/USD': 'convex-finance.usd',
        'COMP/USD': 'compound-governance-token.usd',
        'CELO/USD': 'celo.usd',
        'IMX/USD': 'immutable-x.usd',
        'KSM/USD': 'kusama.usd',
        'GLMR/USD': 'moonbeam.usd',
        'DYDX/USD': 'dydx.usd',
        'OP/USD': 'optimism.usd',
        'ANKR/USD': 'ankr.usd',
        'BAL/USD': 'balancer.usd',
        'KDA/USD': 'kadena.usd',
        'YFI/USD': 'yearn-finance.usd',
        'RSR/USD': 'reserve-rights-token.usd',
        'GMX/USD': 'gmx.usd',
        'SUSHI/USD': 'sushi.usd',
        'ROSE/USD': 'oasis-network.usd',
        'GNO/USD': 'gnosis.usd',
        'METIS/USD': 'metis-token.usd',
        'MIMATIC/USD': 'mimatic.usd',
        'FRAX/USD': 'frax.usd',
        'LUSD/USD': 'liquity-usd.usd',
        'MOVR/USD': 'moonriver.usd',
        'RPL/USD': 'rocket-pool.usd',
        'SUSD/USD': 'nusd.usd',
        'ZRX/USD': '0x.usd',
        'LQTY/USD': 'liquity.usd',
        'STMATIC/USD': 'lido-staked-matic.usd',
        'EUL/USD': 'euler.usd',
        'ARB/USD': 'arbitrum.usd',
        'RNDR/USD': 'render-token.usd',
        'MASK/USD': 'mask-network.usd',
        'ENS/USD': 'ethereum-name-service.usd',
        'BLUR/USD': 'blur.usd',
        'BAND/USD': 'band-protocol.usd',
        'RBN/USD': 'ribbon-finance.usd',
        'UMA/USD': 'uma.usd',
        'APT/USD': 'aptos.usd',
        'PEPE/USD': 'pepe.usd',
        'SUI/USD': 'sui.usd',
        'OSMO/USD': 'osmosis.usd',
        'GNS/USD': 'gains-network.usd',
        'MNT/USD': 'mantle.usd',
        'KAVA/USD': 'kava.usd',
        'RDNT/USD': 'radiant-capital.usd',
        'RIF/USD': 'rif-token.usd',
        'GHO/USD': 'gho.usd',
        'EURE/USD': 'monerium-eur-money.usd',
        'CRVUSD/USD': 'crvusd.usd',
        'WOO/USD': 'woo-network.usd',
        'PYTH/USD': 'pyth-network.usd',
        'USDe/USD': 'ethena-usde.usd',
        'ASTR/USD': 'astar.usd',
        'PYUSD/USD': 'paypal-usd.usd',
        'WLD/USD': 'worldcoin-wld.usd',
        'EURe/USD': 'monerium-eur-money.usd',
        'crvUSD/USD': 'crvusd.usd',
        'sUSD/USD': 'nusd.usd',
        'stMATIC/USD': 'lido-staked-matic.usd',
        'miMATIC/USD': 'mimatic.usd'
      };
      // CoinGecko responses includes asset names so fixture response must be modified
      const [id, vs_currency] = nameMap[endpointParameters.name].split('.');

      const response: any = {};

      response[id] = {};
      response[id][vs_currency] = EXPECTED_PRICE;

      return [response];
    }
    default: {
      return [];
    }
  }
}
