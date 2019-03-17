declare module "aws-param-store" {
  import type { SSM } from "aws-sdk";

  declare export function getParameter(
    name: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration
  ): Promise<SSM.Types.Parameter>;

  declare export function getParameterSync(
    name: SSM.Types.PSParameterName,
    options?: SSM.Types.ClientConfiguration
  ): SSM.Types.Parameter;

  declare export function getParameters(
    names: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration
  ): Promise<SSM.Types.GetParametersResult>;

  declare export function getParametersSync(
    names: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration
  ): SSM.Types.GetParametersResult;

  declare export function getParametersByPath(
    path: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration
  ): Promise<SSM.Types.ParameterList>;

  declare export function getParametersByPathSync(
    path: SSM.Types.ParameterNameList,
    options?: SSM.Types.ClientConfiguration
  ): SSM.Types.ParameterList;

  declare export interface ParameterQuery {
    path(path: SSM.Types.PSParameterName): ParameterQuery;
    named(
      nameOrNames: SSM.Types.PSParameterName | SSM.Types.ParameterNameList
    ): ParameterQuery;
    decryption(enabled: boolean): ParameterQuery;
    recursive(enabled: boolean): ParameterQuery;
    execute(): Promise<
      | SSM.Types.ParameterList
      | SSM.Types.Parameter
      | SSM.Types.GetParametersResult
    >;
    executeSync():
      | SSM.Types.ParameterList
      | SSM.Types.Parameter
      | SSM.Types.GetParametersResult;
  }
  declare export function parameterQuery(
    options?: SSM.Types.ClientConfiguration
  ): ParameterQuery;
}
