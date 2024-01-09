# api-integrations

## 1.0.0

### Major Changes

- cc018e9: - Package has been moved to @phase21 organization
  - `logos` package replaced with `@phase21/logos`

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
