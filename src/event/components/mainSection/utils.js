import auroraIcon from "../../assets/mainSection/chainSelect/auroraIcon.svg";
import BSCicon from "../../assets/mainSection/chainSelect/BSCicon.svg";
import moonbeamIcon from "../../assets/mainSection/chainSelect/moonbeamIcon.svg";
import avax from "../../assets/mainSection/chainSelect/avax.svg";
//import nearIcon from "../../assets/mainSection/chainSelect/nearIcon.svg";
import polygonIcon from "../../assets/mainSection/chainSelect/polygonIcon.svg";

/*import aurora from "../../assets/mainSection/nfts/XP NFT AURORA (1).gif";
import poly from "../../assets/mainSection/nfts/XP NFT Polygon (1).gif";
import bsc from "../../assets/mainSection/nfts/XP NFT BSC (1).gif";
import moon from "../../assets/mainSection/nfts/XP NFT Moonbeam.gif";
//import near from "../../assets/mainSection/nfts/XP NFT NEAR (1).gif";*/

export const chainData = [
  {
    name: "Aurora",
    image: auroraIcon,
    nft:
      "https://ipfs.io/ipfs/QmZjTpC4NB1fKNa6aRE7ruTbBvw3YmYjT3nkTzsJWnnDuw/Aurora.gif",
    chainNonce: "21",
    chainId: "1313161554",
    creationBlock: 98782777,
    evm: true,
    rpc: "https://mainnet.aurora.dev",
    contract: "0xb7f9a9d17388482d0206C12D32fDeE5231290913",
  },
  /*{
        name: "Near",
        image: nearIcon,
        nft:
            "https://ipfs.io/ipfs/QmZjTpC4NB1fKNa6aRE7ruTbBvw3YmYjT3nkTzsJWnnDuw/Near.gif",
        chainNonce: "31",
        evm: false,
    },*/
  {
    name: "Polygon",
    image: polygonIcon,
    nft:
      "https://ipfs.io/ipfs/QmZjTpC4NB1fKNa6aRE7ruTbBvw3YmYjT3nkTzsJWnnDuw/Polygon.gif",
    chainNonce: "7",
    creationBlock: 46291138,
    chainId: "137",
    evm: true,
    rpc: "https://polygon-rpc.com",
    contract: "0xce715Ab3E0A40Bd718e6C4c9cd9c41D874494054",
  },
  {
    name: "BSC",
    image: BSCicon,
    nft:
      "https://ipfs.io/ipfs/QmZjTpC4NB1fKNa6aRE7ruTbBvw3YmYjT3nkTzsJWnnDuw/BSC.gif",
    chainNonce: "4",
    chainId: "56",
    creationBlock: 30841932,
    evm: true,
    rpc: "https://bsc-dataseed.binance.org",
    contract: "0xf777be29f4691D025C14afeeF9B05352CC94C59c",
  },
  {
    name: "Moonbeam",
    image: moonbeamIcon,
    nft:
      "https://ipfs.io/ipfs/QmZjTpC4NB1fKNa6aRE7ruTbBvw3YmYjT3nkTzsJWnnDuw/BSC.gif",
    chainNonce: "32",
    chainId: "1284",
    creationBlock: 4211259,
    evm: true,
    rpc: "https://rpc.api.moonbeam.network",
    contract: "0xf777be29f4691D025C14afeeF9B05352CC94C59c",
  },
];

export const chainDataMintingPath = [
  {
    name: "Polygon",
    image: polygonIcon,
    nft: "https://ipfs.io/ipfs/QmZMkXd7hm9DPNnQTXbpJfi67kKaasm4EQQQLsVuHjQL7Y",
    chainNonce: "7",
    creationBlock: 46291138,
    chainId: "137",
    evm: true,
    rpc: "https://polygon-rpc.com",
    contract: "0x49AAb026be38c3d72f99945719485Be605539932",
  },
  {
    name: "BSC",
    image: BSCicon,
    nft: "https://ipfs.io/ipfs/QmZEM3mvhvxEjRi2f9wDcvQ2msdX6uR2GTt9ntTrTfiH1q",
    chainNonce: "4",
    chainId: "56",
    creationBlock: 30841932,
    evm: true,
    rpc: "https://bsc-dataseed.binance.org",
    contract: "0x7646786E6bC5C0D2D33B198738a64AdB398531d7", //TODO: NEEDS TO CHANGE FOR MAINNET
  },
  {
    name: "Avalanche",
    image: avax,
    nft: "https://ipfs.io/ipfs/QmRw6udf6Wkqo38kVXekxTCgMu6o1gJigP77ujSi1erVLX",
    chainNonce: "6",
    chainId: "43114",
    creationBlock: 4211259, // TODO: NEEDS TO CHANGE FOR AVAX
    evm: true,
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    contract: "0xa80F3BB9a06065e41369E3d8e11655d91d01D9C9", //TODO: NEEDS TO CHANGE FOR MAINNET
  },
];

export const chainDataUtilityMintingPath = [
  {
    name: "Polygon",
    image: polygonIcon,
    nft: "https://ipfs.io/ipfs/QmZMkXd7hm9DPNnQTXbpJfi67kKaasm4EQQQLsVuHjQL7Y",
    chainNonce: "7",
    creationBlock: 64000199,
    chainId: "137",
    evm: true,
    rpc: "https://polygon-rpc.com",
    contract: "0xB2355d4844361E6E156C9DBf01d95b5e5AAaA354",
  },
  {
    name: "BSC",
    image: BSCicon,
    nft: "https://ipfs.io/ipfs/QmZEM3mvhvxEjRi2f9wDcvQ2msdX6uR2GTt9ntTrTfiH1q",
    chainNonce: "4",
    chainId: "56",
    creationBlock: 43804707,
    evm: true,
    rpc: "https://bsc-dataseed.binance.org",
    contract: "0x7a17dec209ff761c0f3dc09a988125641513fc8b", //TODO: NEEDS TO CHANGE FOR MAINNET
  },
  {
    name: "Avalanche",
    image: avax,
    nft: "https://ipfs.io/ipfs/QmRw6udf6Wkqo38kVXekxTCgMu6o1gJigP77ujSi1erVLX",
    chainNonce: "6",
    chainId: "43114",
    creationBlock: 52777307, // TODO: NEEDS TO CHANGE FOR AVAX
    evm: true,
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    contract: "0xbFDdaF774a3690a44852c70694E05cDaeadae792", //TODO: NEEDS TO CHANGE FOR MAINNET
  },
];

export const chainDataMintingPathTestnet = [
  {
    name: "Polygon Amoy Testnet",
    image: polygonIcon,
    nft: "https://ipfs.io/ipfs/QmZMkXd7hm9DPNnQTXbpJfi67kKaasm4EQQQLsVuHjQL7Y",
    chainNonce: "7",
    creationBlock: 46291138,
    chainId: "80002",
    evm: true,
    rpc: "https://rpc-amoy.polygon.technology/",
    contract: "0xa660A20C6F1CbbF6A618126eA5DEf33dCDB2581c",
  },
  {
    name: "BSC Testnet",
    image: BSCicon,
    nft: "https://ipfs.io/ipfs/QmZEM3mvhvxEjRi2f9wDcvQ2msdX6uR2GTt9ntTrTfiH1q",
    chainNonce: "4",
    chainId: "97",
    creationBlock: 30841932,
    evm: true,
    rpc: "https://data-seed-prebsc-1-s3.bnbchain.org:8545",
    contract: "0x73b3c7B79eE6E71292e45DeCa621e1e8fC2b0D77",
  },
  {
    name: "Fuji AVAX",
    image: avax,
    nft: "https://ipfs.io/ipfs/QmRw6udf6Wkqo38kVXekxTCgMu6o1gJigP77ujSi1erVLX",
    chainNonce: "6",
    chainId: "43113",
    creationBlock: 4211259,
    evm: true,
    rpc: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
    contract: "0xf92057F89B87bad969194877f037E3ff65F3e346",
  },
];

export const REST_API = "https://event-evm-claimed-b73dc04d13d9.herokuapp.com";

export const startDate =
  /*Date.now() + 20_000 ||*/
  new Date("Fri Aug 18 2023 03:00:00 GMT+0300").getTime();
export const endDate = new Date("Fri Sep 1 2023 03:00:00 GMT+0300").getTime();
