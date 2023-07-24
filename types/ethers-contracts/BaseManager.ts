/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface BaseManagerInterface extends utils.Interface {
  functions: {
    "BASE()": FunctionFragment;
    "DENOMINATOR()": FunctionFragment;
    "FEE_TIMEOUT()": FunctionFragment;
    "MAX_FEE_NUMERATOR()": FunctionFragment;
    "MIN_FEE_NUMERATOR()": FunctionFragment;
    "ONE_BPS_NUMERATOR()": FunctionFragment;
    "ONE_PERCENT_NUMERATOR()": FunctionFragment;
    "addSupportedAsset(uint256,address,uint8)": FunctionFragment;
    "addSupportedChain(uint256)": FunctionFragment;
    "admin()": FunctionFragment;
    "calculateInsuranceFee(uint256)": FunctionFragment;
    "calculateSettlementFees(uint256)": FunctionFragment;
    "calculateStakingRewards(uint256)": FunctionFragment;
    "collateral()": FunctionFragment;
    "currentFees()": FunctionFragment;
    "deployOracle(address,uint256,uint256)": FunctionFragment;
    "deployRelayer(address)": FunctionFragment;
    "feeHistory(uint256)": FunctionFragment;
    "feeSequenceId()": FunctionFragment;
    "fraudEngine()": FunctionFragment;
    "fraudPeriod()": FunctionFragment;
    "getReceiverAddress(uint256)": FunctionFragment;
    "insuranceFundFee()": FunctionFragment;
    "isSupportedAsset(uint256,address)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "participatingInterface()": FunctionFragment;
    "proposeFees(uint256,uint256)": FunctionFragment;
    "proposedFees()": FunctionFragment;
    "protocolFee()": FunctionFragment;
    "protocolToken()": FunctionFragment;
    "receivers(uint256)": FunctionFragment;
    "relayer()": FunctionFragment;
    "rollup()": FunctionFragment;
    "setCollateral(address)": FunctionFragment;
    "setFraudEngine(address)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setReceivers(uint256[],address[])": FunctionFragment;
    "settlementFeeNumerator()": FunctionFragment;
    "stablePoolPortion()": FunctionFragment;
    "stablecoin()": FunctionFragment;
    "supportedAsset(uint256,address)": FunctionFragment;
    "supportedChains(uint256)": FunctionFragment;
    "updateFees()": FunctionFragment;
    "validator()": FunctionFragment;
    "walletDelegation()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASE"
      | "DENOMINATOR"
      | "FEE_TIMEOUT"
      | "MAX_FEE_NUMERATOR"
      | "MIN_FEE_NUMERATOR"
      | "ONE_BPS_NUMERATOR"
      | "ONE_PERCENT_NUMERATOR"
      | "addSupportedAsset"
      | "addSupportedChain"
      | "admin"
      | "calculateInsuranceFee"
      | "calculateSettlementFees"
      | "calculateStakingRewards"
      | "collateral"
      | "currentFees"
      | "deployOracle"
      | "deployRelayer"
      | "feeHistory"
      | "feeSequenceId"
      | "fraudEngine"
      | "fraudPeriod"
      | "getReceiverAddress"
      | "insuranceFundFee"
      | "isSupportedAsset"
      | "isValidator"
      | "oracle"
      | "participatingInterface"
      | "proposeFees"
      | "proposedFees"
      | "protocolFee"
      | "protocolToken"
      | "receivers"
      | "relayer"
      | "rollup"
      | "setCollateral"
      | "setFraudEngine"
      | "setOracle"
      | "setReceivers"
      | "settlementFeeNumerator"
      | "stablePoolPortion"
      | "stablecoin"
      | "supportedAsset"
      | "supportedChains"
      | "updateFees"
      | "validator"
      | "walletDelegation"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_FEE_NUMERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_FEE_NUMERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ONE_BPS_NUMERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ONE_PERCENT_NUMERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addSupportedAsset",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addSupportedChain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateInsuranceFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSettlementFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateStakingRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployOracle",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deployRelayer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "feeHistory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeSequenceId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fraudEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fraudPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiverAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insuranceFundFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedAsset",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "isValidator", values: [string]): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participatingInterface",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposeFees",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposedFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "relayer", values?: undefined): string;
  encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFraudEngine",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setReceivers",
    values: [BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "settlementFeeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stablePoolPortion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportedAsset",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedChains",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFees",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "validator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "walletDelegation",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "BASE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_FEE_NUMERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_FEE_NUMERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ONE_BPS_NUMERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ONE_PERCENT_NUMERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSupportedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSupportedChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateInsuranceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSettlementFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateStakingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeHistory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeSequenceId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fraudEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fraudPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiverAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insuranceFundFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participatingInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposedFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receivers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFraudEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceivers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlementFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stablePoolPortion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedChains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "walletDelegation",
    data: BytesLike
  ): Result;

  events: {
    "TradingFeesProposed(uint256,uint256)": EventFragment;
    "TradingFeesUpdated(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TradingFeesProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradingFeesUpdated"): EventFragment;
}

export interface TradingFeesProposedEventObject {
  makerFee: BigNumber;
  takerFee: BigNumber;
}
export type TradingFeesProposedEvent = TypedEvent<
  [BigNumber, BigNumber],
  TradingFeesProposedEventObject
>;

export type TradingFeesProposedEventFilter =
  TypedEventFilter<TradingFeesProposedEvent>;

export interface TradingFeesUpdatedEventObject {
  feeSequenceId: BigNumber;
  makerFee: BigNumber;
  takerFee: BigNumber;
}
export type TradingFeesUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  TradingFeesUpdatedEventObject
>;

export type TradingFeesUpdatedEventFilter =
  TypedEventFilter<TradingFeesUpdatedEvent>;

export interface BaseManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    FEE_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_FEE_NUMERATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_FEE_NUMERATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE_BPS_NUMERATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE_PERCENT_NUMERATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    addSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      _precision: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addSupportedChain(
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    calculateInsuranceFee(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSettlementFees(
      settlementAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        insuranceFee: BigNumber;
        stakerReward: BigNumber;
      }
    >;

    calculateStakingRewards(
      stakingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stablePoolReward: BigNumber;
        protocolPoolReward: BigNumber;
      }
    >;

    collateral(overrides?: CallOverrides): Promise<[string]>;

    currentFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
    >;

    deployOracle(
      _stablecoinAssetChain: string,
      _stablecoinAssetChainId: BigNumberish,
      _protocolTokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deployRelayer(
      _lzEndpoint: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    feeHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
    >;

    feeSequenceId(overrides?: CallOverrides): Promise<[BigNumber]>;

    fraudEngine(overrides?: CallOverrides): Promise<[string]>;

    fraudPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReceiverAddress(
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    insuranceFundFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    isSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    participatingInterface(overrides?: CallOverrides): Promise<[string]>;

    proposeFees(
      _makerFee: BigNumberish,
      _takerFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    proposedFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
    >;

    protocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    protocolToken(overrides?: CallOverrides): Promise<[string]>;

    receivers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    relayer(overrides?: CallOverrides): Promise<[string]>;

    rollup(overrides?: CallOverrides): Promise<[string]>;

    setCollateral(
      _collateral: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setFraudEngine(
      _fraudEngine: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setReceivers(
      _chainIds: BigNumberish[],
      _receivers: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    settlementFeeNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    stablePoolPortion(overrides?: CallOverrides): Promise<[BigNumber]>;

    stablecoin(overrides?: CallOverrides): Promise<[string]>;

    supportedAsset(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    supportedChains(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateFees(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    validator(overrides?: CallOverrides): Promise<[string]>;

    walletDelegation(overrides?: CallOverrides): Promise<[string]>;
  };

  BASE(overrides?: CallOverrides): Promise<BigNumber>;

  DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  FEE_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

  ONE_BPS_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

  ONE_PERCENT_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

  addSupportedAsset(
    _chainId: BigNumberish,
    _asset: string,
    _precision: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addSupportedChain(
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  calculateInsuranceFee(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSettlementFees(
    settlementAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      insuranceFee: BigNumber;
      stakerReward: BigNumber;
    }
  >;

  calculateStakingRewards(
    stakingReward: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      stablePoolReward: BigNumber;
      protocolPoolReward: BigNumber;
    }
  >;

  collateral(overrides?: CallOverrides): Promise<string>;

  currentFees(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
  >;

  deployOracle(
    _stablecoinAssetChain: string,
    _stablecoinAssetChainId: BigNumberish,
    _protocolTokenPrice: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deployRelayer(
    _lzEndpoint: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  feeHistory(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
  >;

  feeSequenceId(overrides?: CallOverrides): Promise<BigNumber>;

  fraudEngine(overrides?: CallOverrides): Promise<string>;

  fraudPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getReceiverAddress(
    _chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  insuranceFundFee(overrides?: CallOverrides): Promise<BigNumber>;

  isSupportedAsset(
    _chainId: BigNumberish,
    _asset: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidator(_validator: string, overrides?: CallOverrides): Promise<boolean>;

  oracle(overrides?: CallOverrides): Promise<string>;

  participatingInterface(overrides?: CallOverrides): Promise<string>;

  proposeFees(
    _makerFee: BigNumberish,
    _takerFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  proposedFees(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
  >;

  protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  protocolToken(overrides?: CallOverrides): Promise<string>;

  receivers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  relayer(overrides?: CallOverrides): Promise<string>;

  rollup(overrides?: CallOverrides): Promise<string>;

  setCollateral(
    _collateral: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setFraudEngine(
    _fraudEngine: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOracle(
    _oracle: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setReceivers(
    _chainIds: BigNumberish[],
    _receivers: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  settlementFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  stablePoolPortion(overrides?: CallOverrides): Promise<BigNumber>;

  stablecoin(overrides?: CallOverrides): Promise<string>;

  supportedAsset(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<number>;

  supportedChains(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateFees(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  validator(overrides?: CallOverrides): Promise<string>;

  walletDelegation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_BPS_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_PERCENT_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      _precision: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addSupportedChain(
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    calculateInsuranceFee(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSettlementFees(
      settlementAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        insuranceFee: BigNumber;
        stakerReward: BigNumber;
      }
    >;

    calculateStakingRewards(
      stakingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        stablePoolReward: BigNumber;
        protocolPoolReward: BigNumber;
      }
    >;

    collateral(overrides?: CallOverrides): Promise<string>;

    currentFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
    >;

    deployOracle(
      _stablecoinAssetChain: string,
      _stablecoinAssetChainId: BigNumberish,
      _protocolTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deployRelayer(
      _lzEndpoint: string,
      overrides?: CallOverrides
    ): Promise<void>;

    feeHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
    >;

    feeSequenceId(overrides?: CallOverrides): Promise<BigNumber>;

    fraudEngine(overrides?: CallOverrides): Promise<string>;

    fraudPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getReceiverAddress(
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    insuranceFundFee(overrides?: CallOverrides): Promise<BigNumber>;

    isSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracle(overrides?: CallOverrides): Promise<string>;

    participatingInterface(overrides?: CallOverrides): Promise<string>;

    proposeFees(
      _makerFee: BigNumberish,
      _takerFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proposedFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { makerFee: BigNumber; takerFee: BigNumber }
    >;

    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocolToken(overrides?: CallOverrides): Promise<string>;

    receivers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    relayer(overrides?: CallOverrides): Promise<string>;

    rollup(overrides?: CallOverrides): Promise<string>;

    setCollateral(
      _collateral: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFraudEngine(
      _fraudEngine: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(_oracle: string, overrides?: CallOverrides): Promise<void>;

    setReceivers(
      _chainIds: BigNumberish[],
      _receivers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    settlementFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    stablePoolPortion(overrides?: CallOverrides): Promise<BigNumber>;

    stablecoin(overrides?: CallOverrides): Promise<string>;

    supportedAsset(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<number>;

    supportedChains(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateFees(overrides?: CallOverrides): Promise<void>;

    validator(overrides?: CallOverrides): Promise<string>;

    walletDelegation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "TradingFeesProposed(uint256,uint256)"(
      makerFee?: null,
      takerFee?: null
    ): TradingFeesProposedEventFilter;
    TradingFeesProposed(
      makerFee?: null,
      takerFee?: null
    ): TradingFeesProposedEventFilter;

    "TradingFeesUpdated(uint256,uint256,uint256)"(
      feeSequenceId?: BigNumberish | null,
      makerFee?: null,
      takerFee?: null
    ): TradingFeesUpdatedEventFilter;
    TradingFeesUpdated(
      feeSequenceId?: BigNumberish | null,
      makerFee?: null,
      takerFee?: null
    ): TradingFeesUpdatedEventFilter;
  };

  estimateGas: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_BPS_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_PERCENT_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      _precision: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addSupportedChain(
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    calculateInsuranceFee(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSettlementFees(
      settlementAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateStakingRewards(
      stakingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateral(overrides?: CallOverrides): Promise<BigNumber>;

    currentFees(overrides?: CallOverrides): Promise<BigNumber>;

    deployOracle(
      _stablecoinAssetChain: string,
      _stablecoinAssetChainId: BigNumberish,
      _protocolTokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deployRelayer(
      _lzEndpoint: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    feeHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeSequenceId(overrides?: CallOverrides): Promise<BigNumber>;

    fraudEngine(overrides?: CallOverrides): Promise<BigNumber>;

    fraudPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getReceiverAddress(
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insuranceFundFee(overrides?: CallOverrides): Promise<BigNumber>;

    isSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    participatingInterface(overrides?: CallOverrides): Promise<BigNumber>;

    proposeFees(
      _makerFee: BigNumberish,
      _takerFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    proposedFees(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocolToken(overrides?: CallOverrides): Promise<BigNumber>;

    receivers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relayer(overrides?: CallOverrides): Promise<BigNumber>;

    rollup(overrides?: CallOverrides): Promise<BigNumber>;

    setCollateral(
      _collateral: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setFraudEngine(
      _fraudEngine: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setReceivers(
      _chainIds: BigNumberish[],
      _receivers: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    settlementFeeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    stablePoolPortion(overrides?: CallOverrides): Promise<BigNumber>;

    stablecoin(overrides?: CallOverrides): Promise<BigNumber>;

    supportedAsset(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportedChains(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateFees(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    validator(overrides?: CallOverrides): Promise<BigNumber>;

    walletDelegation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_FEE_NUMERATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_FEE_NUMERATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ONE_BPS_NUMERATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ONE_PERCENT_NUMERATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      _precision: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addSupportedChain(
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateInsuranceFee(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSettlementFees(
      settlementAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateStakingRewards(
      stakingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployOracle(
      _stablecoinAssetChain: string,
      _stablecoinAssetChainId: BigNumberish,
      _protocolTokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deployRelayer(
      _lzEndpoint: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    feeHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeSequenceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fraudEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fraudPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReceiverAddress(
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insuranceFundFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSupportedAsset(
      _chainId: BigNumberish,
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participatingInterface(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposeFees(
      _makerFee: BigNumberish,
      _takerFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    proposedFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receivers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCollateral(
      _collateral: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setFraudEngine(
      _fraudEngine: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOracle(
      _oracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setReceivers(
      _chainIds: BigNumberish[],
      _receivers: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    settlementFeeNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stablePoolPortion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportedAsset(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedChains(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateFees(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    validator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    walletDelegation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
