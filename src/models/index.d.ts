import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Module {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly domain: string;
  readonly duration: string;
  readonly categories?: string;
  readonly dynamicHtml?: string;
  readonly slides?: string;
  constructor(init: ModelInit<Module>);
  static copyOf(source: Module, mutator: (draft: MutableModel<Module>) => MutableModel<Module> | void): Module;
}