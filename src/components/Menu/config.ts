import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.mustacheswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchance.mustacheswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mustacheswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Club',
    icon: 'FarmIcon',
    href: 'https://www.mustacheswap.com/farms',
  },
  {
    label: 'Barber',
    icon: 'PoolIcon',
    href: 'https://www.mustacheswap.com/barber',
  },
  {
    label: 'Lottery (Soon)',
    icon: 'TicketIcon',
    href: '/lottery',
    disabled: true, 
  },
  {
    label: 'CryptoGents NFT (Soon)',
    icon: 'NftIcon',
    href: '/nft',
    disabled: true, 
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x8D4Fe1B9cAd29A81B15984E5249498219d82d4C9', // Instert mustache address
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/mustacheswap',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/mustacheswap/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x0000000000000000000000000000000000000000', // mustache-busd
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //  label: 'Hacken Audit',
      //  href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
      // },
      {
        label: "Github",
        href: "https://github.com/mustacheswap/",
      },
      {
        label: "Docs",
        href: "https://mustacheswap.gitbook.io/mustacheswap/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@mustacheswap",
      },
    ],
  },
  // {
  //  label: 'Partnerships/IFO',
  //  icon: 'GooseIcon',
  //  href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Hacken Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  //  },
  // {
  // label: 'Audit by CertiK',
  //  icon: 'AuditIcon',
  //  href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
