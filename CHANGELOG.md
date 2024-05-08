# api-integrations

## 1.5.0

### Minor Changes

- 10df6fe: Add new feeds to mock APIs

  - sFRAX/FRAX Exchange Rate
  - MERL/USD
  - ORDI/USD
  - SATS/USD
  - AMD/USD
  - PLTR/USD
  - QCOM/USD

## 1.4.1

### Patch Changes

- 8857ef9: Remove PYUSD/USD feed from finage and add it to finage-mock

## 1.4.0

### Minor Changes

- 3838cd2: Add PYUSD/USD feed to mock APIs

## 1.3.0

### Minor Changes

- 5fc4487: Added new feeds to Nodary

  - AERO/USD
  - JUICE/USD
  - ERN/USD
  - TAO/USD
  - stTAO/TAO Exchange Rate

## 1.2.0

### Minor Changes

- 823f5f3: Added new feeds:

  - AERO/USD
    - coinpaprika
    - coingecko
    - kaiko
    - finage
    - twelvedata
    - nodary
  - JUICE/USD
    - coinpaprika
    - coingecko
    - finage
    - twelvedata
    - nodary
  - ERN/USD
    - coinpaprika
    - coingecko
    - finage
    - kaiko
    - twelvedata
    - nodary
  - TAO/USD
    - coinpaprika
    - coingecko
    - finage
    - kaiko
    - twelvedata
    - nodary
  - stTAO/TAO Exchange Rate
    - nodary
  - USDB/USD
    - coinpaprika
    - nodary
    - coingecko

## 1.1.0

### Minor Changes

- 3426041: - Nodary deployment with new feeds.
  - AR/USD
  - AXL/USD
  - MANTA/USD
  - mpETH/ETH Exchange Rate
  - ONDO/USD
  - PENDLE/USD
  - pufETH/stETH Exchange Rate
  - RON/USD
  - SEI/USD
  - STRK/USD
  - TWT/USD
  - USDB/USD
  - XVS/USD

## 1.0.0

### Major Changes

- 6d7762e: Moves `api-integrations` package to `@api3` domain

## 0.1.0

### Minor Changes

- 10b1710: ##### Bug fixes

  - Fix nodary URLs.

  ##### New feeds

  - PYPL/USD
  - BABA/USD
  - QQQ/USD
  - DIS/USD
  - INTC/USD
  - stMATIC/MATIC Exchange Rate
  - MATICx/MATIC Exchange Rate
  - ETHx/ETH Exchange Rate
  - stETH/USD
  - WOO/USD
  - PYTH/USD
  - USDe/USD
  - ASTR/USD
  - NG/USD
  - HG/USD

  ##### Removed feeds

  - BUSD/USD

  ##### New functions

  - `getSupportedProvidersForDataFeed`
  - `getAllDataFeeds`

  ##### New fields to `apis-data.json`

  - signedApiUrl
  - productionSignedApiUrl
  - stagingSignedApiUrl
