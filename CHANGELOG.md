# api-integrations

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
