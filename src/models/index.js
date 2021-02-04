// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Module, Category, DynamicHtml, DynamicTable, TableRow, DynamicChecklist, Slide, HtmlElement } = initSchema(schema);

export {
  Module,
  Category,
  DynamicHtml,
  DynamicTable,
  TableRow,
  DynamicChecklist,
  Slide,
  HtmlElement
};