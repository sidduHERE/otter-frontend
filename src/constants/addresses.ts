import { Networks } from './blockchain';

const POLYGON_MAINNET = {
  sCLAM_ADDRESS: '0xAAc144Dc08cE39Ed92182dd85ded60E5000C9e67',
  CLAM_ADDRESS: '0xC250e9987A032ACAC293d838726C511E6E1C029d',
  PEARL_ADDRESS: '0x52A7F40BB6e9BD9183071cdBdd3A977D713F2e34',
  OLD_CLAM_ADDRESS: '0x4d6A30EFBE2e9D7A9C143Fce1C5Bb30d9312A465',
  OLD_SCLAM_ADDRESS: '0x3949F058238563803b5971711Ad19551930C8209',
  MAI_ADDRESS: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
  TREASURY_ADDRESS: '0x8ce47D56EAa1299d3e06FF3E04637449fFb01C9C',
  OLD_TREASURY: '0xab328Ca61599974b0f577d1F8AB0129f2842d765',
  CLAM_BONDING_CALC_ADDRESS: '0x651125e097D7e691f3Df5F9e5224f0181E3A4a0E',
  STAKING_ADDRESS: '0xC8B0243F350AA5F8B979b228fAe522DAFC61221a',
  OLD_STAKING_ADDRESS: '0xcF2A11937A906e09EbCb8B638309Ae8612850dBf',
  STAKING_HELPER_ADDRESS: '0x76B38319483b570B4BCFeD2D35d191d3c9E01691',
  MIGRATOR: '0xDaa1f5036eC158fca9E5ce791ab3e213cD1c41df',
  RESERVES: {
    MAI: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    OLD_MAI_CLAM: '0x8094f4C9a4C8AD1FF4c6688d07Bd90f996C7CA21',
    MAI_CLAM: '0x1581802317f32A2665005109444233ca6E3e2D68',
  },
  BONDS: {
    MAI: '0x603A74Fd527b85E0A1e205517c1f24aC71f5C263',
    MAI_CLAM: '0x706587BD39322A6a78ddD5491cDbb783F8FD983E',
    OLD_MAI: '0x28077992bFA9609Ae27458A766470b03D43dEe8A',
    OLD_MAI_CLAM: '0x79B47c03B02019Af78Ee0de9B0b3Ac0786338a0d',
    OLD_MAI_CLAM_V2: '0x64c766f9A4936c3a4b51C55Ea5C4854E19766035',
  },
  NFTS: {
    SAFE_HAND: '0xaAd62438fB1Bf9560d93dD7D691c528CB087C2F6',
    FURRY_HAND: '0x2A6c8531F8a125098b2f2beeaBb2705FE348474A',
    STONE_HAND: '0xE93740Df02471aD89B4E1DF7C2aC0BC575519BC5',
    DIAMOND_HAND: '0x812ae364659B3c7C47322e8Acfbde2eca2c4c439',
  },
  CLAM_CIRCULATING_SUPPLY: '0x99ee91871cf39A44E3Fc842541274d7eA05AE4b3',
  IDO: '0x7f637ea843405dff10592f894292a8f1188166f9',
  PEARL_VAULT: '0xAaC7D4A36DAb95955ef3c641c23F1fA46416CF71',
};

const POLYGON_MUMBAI = {
  sCLAM_ADDRESS: '0x7A663e1BF34cB44D1aa0Ee29CE53D2D0c4Ab97De',
  CLAM_ADDRESS: '0x3059fa18F6b339D630d06963839FAf1513eE2E9E',
  PEARL_ADDRESS: '0x0Ac85d55ebFc7f7b0cF4c13bb3BD6Eaf3909d62d',
  OLD_CLAM_ADDRESS: '0x437D943931903057673618FCA772E8Ff21069D66',
  OLD_SCLAM_ADDRESS: '0x19a41AdAB9b1D1febCC27Fc278847efd013c28c2',
  MAI_ADDRESS: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
  TREASURY_ADDRESS: '0xD20691b96a12EB03d4fB18Ed24b2244393bC7e27',
  OLD_TREASURY: '0xD20691b96a12EB03d4fB18Ed24b2244393bC7e27',
  CLAM_BONDING_CALC_ADDRESS: '0x08476c31903baa1A41069eDcc7a1B00502d2bD05',
  STAKING_ADDRESS: '0x2A0AFb64c1A5F69D585478700ad6dDA0A5dFB68a',
  OLD_STAKING_ADDRESS: '0x96df4a396b11BDEc19dB90A239cf51ce4D582268',
  STAKING_HELPER_ADDRESS: '0x9Af525C1AEc87ec829cF1683FF277B827783359f',
  MIGRATOR: '0xDaa1f5036eC158fca9E5ce791ab3e213cD1c41df',
  RESERVES: {
    MAI: '0x19907af68A173080c3e05bb53932B0ED541f6d20',
    OLD_MAI_CLAM: '0x578cEa575734D4d3A3Fb68872e41535746E375bE',
    MAI_CLAM: '0xfe474FEd876CA34c523F6027Bbb70e763a349A4B',
  },
  BONDS: {
    MAI: '0xB0885261B7f25B6F95F79Dc8FdaD49240a580F11',
    MAI_CLAM: '0x79d963D5Bf809FfAa4e1c1268fD552d4E3982bC6',
    OLD_MAI: '0x049bf8be5033624aFA213F821116a4E80445864c',
    OLD_MAI_CLAM: '0x7091cEEB04A1574eBBA2B75F7E78b16aa39CA9b8',
    OLD_MAI_CLAM_V2: '0x79d963D5Bf809FfAa4e1c1268fD552d4E3982bC6',
  },
  NFTS: {
    SAFE_HAND: '0xd931E5224451aE5aC8bbdcB2C8d6D04a56f5076B',
    FURRY_HAND: '0x9Bef5a4b15E5f50727763442BA05dD24495a3e6b',
    STONE_HAND: '0xcd80FF8E51052F1f4b944fFD5Fd96a7440667EE7',
    DIAMOND_HAND: '0x588A88003D7B0024EC577Cec2bBc66aCa07ab0d4',
  },
  IDO: '0x7f637ea843405dff10592f894292a8f1188166f9',
  CLAM_CIRCULATING_SUPPLY: '0xba38Ad83a35e125cB7F3Be54A020822054aA99d0',
  PEARL_VAULT: '0xAaC7D4A36DAb95955ef3c641c23F1fA46416CF71',
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.POLYGON_MAINNET) return POLYGON_MAINNET;
  if (networkID === Networks.POLYGON_MUMBAI) return POLYGON_MUMBAI;
  if (networkID === Networks.HARDHAT) return POLYGON_MAINNET;

  throw new Error("Network don't support");
};
