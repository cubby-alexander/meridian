import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Module {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly domain: string;
  readonly categories?: (Category | null)[];
  readonly duration: string;
  readonly dynamicHtml?: DynamicHtml;
  readonly slides?: (Slide | null)[];
  constructor(init: ModelInit<Module>);
  static copyOf(source: Module, mutator: (draft: MutableModel<Module>) => MutableModel<Module> | void): Module;
}

export declare class Category {
  readonly id: string;
  readonly moduleID: string;
  readonly name: string;
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class DynamicHtml {
  readonly id: string;
  readonly dynamicTables?: (DynamicTable | null)[];
  readonly dynamicChecklists?: (DynamicChecklist | null)[];
  readonly module?: Module;
  constructor(init: ModelInit<DynamicHtml>);
  static copyOf(source: DynamicHtml, mutator: (draft: MutableModel<DynamicHtml>) => MutableModel<DynamicHtml> | void): DynamicHtml;
}

export declare class DynamicTable {
  readonly id: string;
  readonly slug: string;
  readonly tableTitle: string;
  readonly tableRows?: (TableRow | null)[];
  readonly dynamicHtml?: DynamicHtml;
  constructor(init: ModelInit<DynamicTable>);
  static copyOf(source: DynamicTable, mutator: (draft: MutableModel<DynamicTable>) => MutableModel<DynamicTable> | void): DynamicTable;
}

export declare class TableRow {
  readonly id: string;
  readonly dynamicTableID: string;
  readonly default: string;
  readonly current: string;
  readonly mutable: boolean;
  constructor(init: ModelInit<TableRow>);
  static copyOf(source: TableRow, mutator: (draft: MutableModel<TableRow>) => MutableModel<TableRow> | void): TableRow;
}

export declare class DynamicChecklist {
  readonly id: string;
  readonly dynamicChecklistID: string;
  readonly dummy: string;
  constructor(init: ModelInit<DynamicChecklist>);
  static copyOf(source: DynamicChecklist, mutator: (draft: MutableModel<DynamicChecklist>) => MutableModel<DynamicChecklist> | void): DynamicChecklist;
}

export declare class Slide {
  readonly id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly whatYouGet: string;
  readonly htmlElements?: (HtmlElement | null)[];
  readonly module?: Module;
  constructor(init: ModelInit<Slide>);
  static copyOf(source: Slide, mutator: (draft: MutableModel<Slide>) => MutableModel<Slide> | void): Slide;
}

export declare class HtmlElement {
  readonly id: string;
  readonly typeOfElement: string;
  readonly content: string;
  readonly slide?: Slide;
  constructor(init: ModelInit<HtmlElement>);
  static copyOf(source: HtmlElement, mutator: (draft: MutableModel<HtmlElement>) => MutableModel<HtmlElement> | void): HtmlElement;
}