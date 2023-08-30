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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Oracle {
  export type PriceReportStruct = {
    chainId: BigNumberish;
    asset: string;
    price: BigNumberish;
  };

  export type PriceReportStructOutput = [BigNumber, string, BigNumber] & {
    chainId: BigNumber;
    asset: string;
    price: BigNumber;
  };
}

export interface OracleInterface extends utils.Interface {
  functions: {
    "PRICE_COOLDOWN()": FunctionFragment;
    "PRICE_EXPIRY()": FunctionFragment;
    "admin()": FunctionFragment;
    "getStablecoinValue(uint256,address,uint256)": FunctionFragment;
    "grantReporter(address)": FunctionFragment;
    "initializePrice(uint256,address,uint256)": FunctionFragment;
    "isReporter(address)": FunctionFragment;
    "lastReport(uint256,address)": FunctionFragment;
    "latestPrice(uint256,address)": FunctionFragment;
    "manager()": FunctionFragment;
    "report(uint256,address,uint256,bool)": FunctionFragment;
    "reportPrices((uint256,address,uint256)[])": FunctionFragment;
    "revokeReporter(address)": FunctionFragment;
    "stablecoinToProtocol(uint256)": FunctionFragment;
    "tokenPrecision(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PRICE_COOLDOWN"
      | "PRICE_EXPIRY"
      | "admin"
      | "getStablecoinValue"
      | "grantReporter"
      | "initializePrice"
      | "isReporter"
      | "lastReport"
      | "latestPrice"
      | "manager"
      | "report"
      | "reportPrices"
      | "revokeReporter"
      | "stablecoinToProtocol"
      | "tokenPrecision"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PRICE_COOLDOWN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_EXPIRY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getStablecoinValue",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "grantReporter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePrice",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isReporter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastReport",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestPrice",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "report",
    values: [BigNumberish, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "reportPrices",
    values: [Oracle.PriceReportStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeReporter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoinToProtocol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPrecision",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "PRICE_COOLDOWN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_EXPIRY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStablecoinValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantReporter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReporter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastReport", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reportPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeReporter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stablecoinToProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPrecision",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Oracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleInterface;

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
    PRICE_COOLDOWN(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRICE_EXPIRY(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    getStablecoinValue(
      _chainId: BigNumberish,
      _asset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantReporter(
      _reporter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initializePrice(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isReporter(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    lastReport(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    latestPrice(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    report(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      _modulo: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    reportPrices(
      _prices: Oracle.PriceReportStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeReporter(
      _reporter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    stablecoinToProtocol(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenPrecision(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  PRICE_COOLDOWN(overrides?: CallOverrides): Promise<BigNumber>;

  PRICE_EXPIRY(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  getStablecoinValue(
    _chainId: BigNumberish,
    _asset: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantReporter(
    _reporter: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initializePrice(
    _chainId: BigNumberish,
    _asset: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isReporter(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  lastReport(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestPrice(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  manager(overrides?: CallOverrides): Promise<string>;

  report(
    _chainId: BigNumberish,
    _asset: string,
    _price: BigNumberish,
    _modulo: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  reportPrices(
    _prices: Oracle.PriceReportStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeReporter(
    _reporter: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  stablecoinToProtocol(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenPrecision(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    PRICE_COOLDOWN(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_EXPIRY(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    getStablecoinValue(
      _chainId: BigNumberish,
      _asset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantReporter(_reporter: string, overrides?: CallOverrides): Promise<void>;

    initializePrice(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isReporter(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    lastReport(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestPrice(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<string>;

    report(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      _modulo: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    reportPrices(
      _prices: Oracle.PriceReportStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    revokeReporter(_reporter: string, overrides?: CallOverrides): Promise<void>;

    stablecoinToProtocol(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenPrecision(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    PRICE_COOLDOWN(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_EXPIRY(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    getStablecoinValue(
      _chainId: BigNumberish,
      _asset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantReporter(
      _reporter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initializePrice(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isReporter(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lastReport(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestPrice(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    report(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      _modulo: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    reportPrices(
      _prices: Oracle.PriceReportStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeReporter(
      _reporter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    stablecoinToProtocol(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenPrecision(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRICE_COOLDOWN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRICE_EXPIRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStablecoinValue(
      _chainId: BigNumberish,
      _asset: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantReporter(
      _reporter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initializePrice(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isReporter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastReport(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestPrice(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    report(
      _chainId: BigNumberish,
      _asset: string,
      _price: BigNumberish,
      _modulo: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    reportPrices(
      _prices: Oracle.PriceReportStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeReporter(
      _reporter: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    stablecoinToProtocol(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenPrecision(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
