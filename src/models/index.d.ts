import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Module {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly domain: string;
  readonly duration: string;
  readonly test: string;
  readonly categories?: string;
  readonly dynamicHtml?: string;
  readonly slides?: string;
  constructor(init: ModelInit<Module>);
  static copyOf(source: Module, mutator: (draft: MutableModel<Module>) => MutableModel<Module> | void): Module;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly workbooks?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Client {
  readonly id: string;
  readonly name: string;
  readonly adminUser: string;
  readonly allottedSeats: number;
  readonly invitedUsers?: string;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}