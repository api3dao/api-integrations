# api-integrations

## 1.1.0

### Minor Changes

- Adds
  - [Nodary STONE/ETH Exchange Rate feed](https://github.com/api3dao/api-integrations/commit/f448c2b5622cb7d4d5fbd5b92a99d3c10297dec7)
  - [Nodary uniETH/ETH Exchange Rate](https://github.com/api3dao/api-integrations/commit/081a183581cf189350320af36f36ce5320d30bef#diff-9c460aeebfc7ce077854a25c29d28205b90f5d2db5b79f0fb2a67c745676a817)
  - [Nodary osETH/ETH Exchange Rate](https://github.com/api3dao/api-integrations/commit/081a183581cf189350320af36f36ce5320d30bef#diff-9c460aeebfc7ce077854a25c29d28205b90f5d2db5b79f0fb2a67c745676a817)
  - [Nodary weETH/ETH Exchange Rate](https://github.com/api3dao/api-integrations/commit/081a183581cf189350320af36f36ce5320d30bef#diff-9c460aeebfc7ce077854a25c29d28205b90f5d2db5b79f0fb2a67c745676a817)
  - [dxFeed DIS/USD](https://github.com/api3dao/api-integrations/commit/ef3896c6a57aa33dc982132d93d97a5ce361cb6e)
  - [dxFeed ASTR/USD](https://github.com/api3dao/api-integrations/commit/ef3896c6a57aa33dc982132d93d97a5ce361cb6e)
  - [NewChangeFX ASTR/USD](https://github.com/api3dao/api-integrations/commit/ef3896c6a57aa33dc982132d93d97a5ce361cb6e)
- [Removes Kaiko METIS/USD feed](https://github.com/api3dao/api-integrations/commit/ef3896c6a57aa33dc982132d93d97a5ce361cb6e)
- [Adds official API3 Signed API URL](https://github.com/api3dao/api-integrations/commit/590aba96b180d77a20a02e74cdaf3e8f649b0b97)
- [Changes officialUrl ve verifiedUrl keys in api-data](https://github.com/api3dao/api-integrations/commit/a771e79b0c36cdf96564feb0644547c16e7f6af5).
- [Renames EURE/USD to EURe/USD](https://github.com/api3dao/api-integrations/commit/081a183581cf189350320af36f36ce5320d30bef#diff-9c460aeebfc7ce077854a25c29d28205b90f5d2db5b79f0fb2a67c745676a817)

## 1.0.0

### Major Changes

- Package has been moved to @phase21 organization
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
