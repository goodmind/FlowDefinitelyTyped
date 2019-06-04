declare module "vssln-parser" {
  import typeof * as fs from "fs";

  declare function parse(
    input: fs.ReadStream | string,
    callback: (solution: parse$VsSolutionFile) => void
  ): void;

  declare type parse$VsSolutionFile = {
    visualStudioVersion?: string,
    minimumVisualStudioVersion?: string,
    projects: parse$VsSolutionProject[],
    solutionConfigurationPlatforms?: parse$VsSolutionSection,
    projectConfigurationPlatforms?: parse$VsSolutionSection,
    solutionProperties?: parse$VsSolutionSection,
    nestedProjects?: parse$VsSolutionSection,
    teamFoundationVersionControl?: parse$VsSolutionSection
  } & parse$VsSolutionSection &
    parse$VsSolutionSectionCollection;

  declare type parse$VsSolutionProject = {
    name: string,
    type: string,
    projectGuid: string,
    typeGuid: string,
    path: string,
    projectDependencies?: parse$VsSolutionSection
  } & parse$VsSolutionSection &
    parse$VsSolutionSectionCollection;

  declare interface parse$VsSolutionSection {
    [index: string]: any;
  }

  declare interface parse$VsSolutionSectionCollection {
    [index: string]: parse$VsSolutionSection;
  }
  declare export default typeof parse;
}
