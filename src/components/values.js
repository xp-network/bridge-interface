import Ethereum from "../assets/img/chain/Etherium.svg";
import Ton from "../assets/img/chain/ton.svg";
import Elrond from "../assets/img/chain/multiverseX.png";
import Binance from "../assets/img/chain/Binance.svg";
import Cardano from "../assets/img/chain/Cardano.svg";
import Algorand from "../assets/img/chain/Algarand.svg";
import Tron from "../assets/img/chain/Tron.svg";
import Polygon from "../assets/img/chain/Polygon.svg";
import Avalanche from "../assets/img/chain/Avalanche.svg";
import Fantom from "../assets/img/chain/Fantom.svg";
import Gnosis from "../assets/img/chain/Gnosis.png";
import Solana from "../assets/img/chain/Solana.svg";
import Fuse from "../assets/img/chain/Fuse.svg";
import Velas from "../assets/img/chain/velas.svg";
import Tezos from "../assets/img/chain/Tezos.svg";
import Iotex from "../assets/img/chain/iotx.svg";
import One from "../assets/img/chain/One.svg";
import Aurora from "../assets/img/chain/aurora.svg";
import GT from "../assets/img/chain/GateChain.svg";
import VET from "../assets/img/chain/Vechain.png";
import SCRT from "../assets/img/chain/secret.svg";
import CKB from "../assets/img/chain/godwoken.svg";
import HBAR from "../assets/img/chain/Hedera.svg";
import SKL from "../assets/img/chain/SFUEL.svg";
import Moon from "../assets/img/chain/Moonbeam.svg";
import Abey from "../assets/img/chain/Abey.svg";
import Caduceus from "../assets/img/chain/caduceus.svg";
import Aptos from "../assets/img/chain/aptos.svg";
import InternetComputer from "../assets/img/chain/InternetComputer.svg";
import near from "../assets/img/wallet/NearWallet.svg";
import okx from "../assets/img/chain/okx.svg";
import arbitrum from "../assets/img/chain/arbitrum.svg";
import arbitrumTestNet from "../assets/img/chain/arbitrumTN.svg";
import brise from "../assets/img/chain/brise.png";
import casper from "../assets/img/chain/casper.svg";

export const bridgeUrl = "https://bridge.walletconnect.org";

export const EVM = "EVM";
export const ELROND = "MultiversX";
export const TEZOS = "TEZOS";

export const stagingWNFT = "https://staging-nft.xp.network";
export const wnft = ["https://wnfts.xp.network", "https://nft.xp.network"];

export const wnftPattern =
    "(wnfts.xp.network|nft.xp.network|staging-nft.xp.network|bridge-wnftapi)";

export const dev = /(localhost|dev|10\.0\.0|trycloudflare)/.test(
    window.location.hostname
);
export const biz = dev || /(staging)/.test(window.location.hostname);

export const BridgeModes = {
    Staging: "staging",
    TestNet: "testnet",
    CheckWallet: "checkWallet",
};

export const sockets = {
    mainnet: "wss://dev-explorer-api.herokuapp.com", //wss://dest-scraper.herokuapp.com/
    scraper: "wss://dest-scraper.herokuapp.com",
    staging: "wss://tools.xp.network/explorer",
    testnet: "wss://testnet-bridge-explorer.herokuapp.com/",
};

export const getChainObject = (nonce) =>
    chains.find((chain) => chain.nonce === nonce);

export const secretnodes = "https://secretnodes.com/secret/accounts";
export const tonAuth = "tonkeeper.xp.network";

export const chains = [
    {
        type: "EVM",
        key: "Ethereum",
        text: "Ethereum",
        value: "Ethereum",
        wagmi: "mainnet",
        nonce: 5,
        chainId: 1,
        tnChainId: 5,
        order: -6,
        image: { avatar: true, src: Ethereum },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "BSC",
        text: "BSC",
        value: "BSC",
        nonce: 4,
        chainId: 56,
        tnChainId: 97,
        order: 2,
        image: { avatar: true, src: Binance },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "Tron",
        key: "Tron",
        text: "Tron",
        value: "Tron",
        nonce: 9,
        order: 12,
        image: { avatar: true, src: Tron },
        maintenance: false,
        testNet: true,
        mainnet: true,
        updated: false,
    },
    {
        type: "Elrond",
        key: "Elrond",
        text: ELROND,
        value: "Elrond",
        nonce: 2,
        order: 15,
        image: { avatar: true, src: Elrond },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Polygon",
        text: "Polygon",
        value: "Polygon",
        nonce: 7,
        chainId: 137,
        tnChainId: 80001,
        order: 3,
        image: { avatar: true, src: Polygon },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Avalanche",
        text: "Avalanche",
        value: "Avalanche",
        nonce: 6,
        chainId: 43114,
        tnChainId: 43113,
        order: 11,
        image: { avatar: true, src: Avalanche },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Fantom",
        text: "Fantom",
        value: "Fantom",
        nonce: 8,
        chainId: 250,
        order: 16,
        image: { avatar: true, src: Fantom },
        maintenance: false,
        testNet: false,
        mainnet: true,
    },
    {
        type: "Algorand",
        key: "Algorand",
        text: "Algorand",
        value: "Algorand",
        nonce: 15,
        order: 13,
        image: { avatar: true, src: Algorand },
        maintenance: false,
        testNet: true,
        mainnet: true,
        updated: false,
    },
    {
        type: "EVM",
        key: "xDAI",
        wagmi: "gnosis",
        text: "Gnosis",
        value: "xDAI",
        nonce: 14,
        chainId: 100,
        order: 17,
        image: { avatar: true, src: Gnosis },
        maintenance: false,
        testNet: false,
        mainnet: true,
    },
    {
        type: "Solana",
        key: "Solana",
        text: "Solana",
        value: "Solana",
        chainId: undefined,
        order: -2,
        nonce: 26,
        coming: false,
        image: { avatar: true, src: Solana },
        maintenance: false,
        testNet: true,
        mainnet: true,
        newChain: true,
    },
    {
        type: "",
        key: "Cardano",
        text: "Cardano",
        value: "Cardano",

        order: -2,

        image: { avatar: true, src: Cardano },
        testNet: true,
        mainnet: true,
        coming: true,
        newChain: false,
        //chainId: ,
        //tnChainId: ,
    },
    {
        type: "TON",
        key: "TON",
        text: "TON",
        value: "TON",
        chainId: undefined,
        order: -1,
        nonce: 27,
        coming: false,
        image: { avatar: true, src: Ton },
        maintenance: false,
        testNet: true,
        mainnet: true,
        newChain: true,
    },
    {
        type: "EVM",
        key: "Fuse",
        text: "Fuse",
        value: "Fuse",
        nonce: 16,
        chainId: 122,
        order: 21,
        image: { avatar: true, src: Fuse },
        maintenance: false,
        testNet: false,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Velas",
        text: "Velas",
        value: "Velas",
        nonce: 19,
        chainId: 106,
        tnChainId: 0x6f,
        order: 20,
        image: { avatar: true, src: Velas },
        newChain: false,
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "Tezos",
        key: "Tezos",
        text: "Tezos",
        value: "Tezos",
        nonce: 18,
        order: 12,
        image: { avatar: true, src: Tezos },
        newChain: false,
        coming: false,
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Iotex",
        text: "Iotex",
        value: "Iotex",
        nonce: 20,
        chainId: 4689,
        tnChainId: 0x1252,
        order: 20,
        image: { avatar: true, src: Iotex },
        coming: false,
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Harmony",
        text: "Harmony",
        value: "Harmony",
        wagmi: "harmonyOne",
        nonce: 12,
        chainId: 1666600000,
        tnChainId: 1666700000,
        order: 6,
        image: { avatar: true, src: One },
        maintenance: false,
        testNet: false,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Aurora",
        text: "Aurora",
        value: "Aurora",
        nonce: 21,
        chainId: 1313161554,
        tnChainId: 1313161555,
        order: 7,
        image: { avatar: true, src: Aurora },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Godwoken",
        text: "Godwoken",
        value: "Godwoken",
        nonce: 22,
        chainId: 71402,
        tnChainId: 71401,
        order: 4,
        image: { avatar: true, src: CKB },
        maintenance: false,
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "GateChain",
        text: "GateChain",
        value: "GateChain",
        nonce: 23,
        tnChainId: 85,
        chainId: 86,
        order: 19,
        image: { avatar: true, src: GT },
        maintenance: false,
        testNet: false,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Moonbeam",
        text: "Moonbeam",
        value: "Moonbeam",
        nonce: 32,
        order: 3,
        chainId: 1284,
        tnChainId: 1287,
        image: { avatar: true, src: Moon },
        testNet: true,
        mainnet: true,
    },
    {
        type: "EVM",
        key: "Abeychain",
        text: "ABEY",
        value: "Abeychain",
        nonce: 33,
        order: 54,
        chainId: 179,
        tnChainId: 178,
        image: { avatar: true, src: Abey },
        testNet: true,
        mainnet: true,
        newChain: false,
        coming: false,
    },
    {
        type: "VeChain",
        key: "VeChain",
        text: "VeChain",
        value: "VeChain",
        nonce: 25,
        tnChainId: 39,
        chainId: undefined,
        order: 5,
        image: { avatar: true, src: VET },
        maintenance: false,
        mainnet: true,
        testNet: false,
    },
    {
        type: "Cosmos",
        key: "Secret",
        text: "Secret",
        value: "Secret",
        nonce: 24,
        order: -3,
        tnChainId: "pulsar-2",
        chainId: "secret-4",
        image: { avatar: true, src: SCRT },
        mainnet: true,
        testNet: true,
        test: false,
        newChain: false,
        coming: false,
    },
    {
        type: "Hedera",
        key: "Hedera",
        text: "Hedera",
        nonce: 29,
        order: -6,
        image: { avatar: true, src: HBAR },
        testNet: biz,
        mainnet: biz,
        newChain: biz,
        coming: !biz,
    },
    {
        type: "EVM",
        key: "Skale",
        text: "SKALE",
        nonce: 30,
        order: 3,
        chainId: 1564830818,
        tnChainId: 344106930,
        image: { avatar: true, src: SKL },
        testNet: true,
        mainnet: true,
        newChain: false,
    },
    {
        type: "EVM",
        key: "Caduceus",
        text: "Caduceus",
        value: "Caduceus",
        nonce: 35,
        order: 6,
        chainId: 256256,
        tnChainId: 512512,
        image: { avatar: true, src: Caduceus },
        testNet: true,
        mainnet: true,
        newChain: false,
    },
    {
        type: "ICP",
        key: "ICP",
        text: "ICP",
        nonce: 28,
        order: -5,
        // chainId: 1564830818,
        //tnChainId: 1305754875840118,
        image: { avatar: true, src: InternetComputer },
        testNet: dev,
        mainnet: dev,
        newChain: dev,
        coming: !biz,
    },
    {
        type: "APTOS",
        key: "Aptos",
        text: "Aptos",
        nonce: 0x22,
        order: 0,
        image: { avatar: true, src: Aptos },
        testNet: dev,
        mainnet: dev,
        coming: !dev,
    },
    {
        type: "NEAR",
        key: "NEAR",
        text: "NEAR",
        value: "NEAR",
        nonce: 31,
        order: -4,
        image: { avatar: true, src: near },
        testNet: true,
        mainnet: true,
        newChain: true,
        coming: false,
    },
    {
        type: "EVM",
        key: "OKC",
        text: "OKC",
        value: "OKC",
        nonce: 0x24,
        order: 5,
        image: { avatar: true, src: okx },
        testNet: true,
        mainnet: true,
        coming: false,
        newChain: false,
        chainId: 66,
        tnChainId: 65,
    },
    {
        type: "EVM",
        key: "Arbitrum",
        text: window.location.href.includes("testnet")
            ? "Arbitrum"
            : "Arbitrum Nova",
        value: "Arbitrum",
        nonce: 0x25,
        order: 4,
        image: {
            avatar: true,
            src: window.location.href.includes("testnet")
                ? arbitrumTestNet
                : arbitrum,
        },
        testNet: true,
        mainnet: true,
        coming: false,
        newChain: false,
        chainId: 42170,
        tnChainId: 421613,
    },
    {
        type: "EVM",
        key: "Bitgert",
        text: "Bitgert",
        value: "Bitgert",
        nonce: 0x26,
        order: -1,
        image: { avatar: true, src: brise },
        testNet: true,
        mainnet: true,
        coming: true,
        newChain: false,
        chainId: 32520,
        tnChainId: 64668,
    },
    {
        type: "",
        key: "Casper",
        text: "Casper",
        value: "Casper",
        nonce: 0x26,
        order: -1,
        image: { avatar: true, src: casper },
        testNet: true,
        mainnet: true,
        coming: true,
        newChain: false,
        chainId: 32520,
        tnChainId: 64668,
    },
];
