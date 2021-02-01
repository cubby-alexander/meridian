/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createModule = /* GraphQL */ `
  mutation CreateModule(
    $input: CreateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    createModule(input: $input, condition: $condition) {
      id
      title
      slug
      domain
      categories {
        items {
          id
          moduleID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      duration
      dynamicHtml {
        id
        moduleID
        tables {
          nextToken
          startedAt
        }
        checklists {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      slides {
        items {
          id
          moduleID
          title
          shortTitle
          whatYouGet
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
      id
      title
      slug
      domain
      categories {
        items {
          id
          moduleID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      duration
      dynamicHtml {
        id
        moduleID
        tables {
          nextToken
          startedAt
        }
        checklists {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      slides {
        items {
          id
          moduleID
          title
          shortTitle
          whatYouGet
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
      id
      title
      slug
      domain
      categories {
        items {
          id
          moduleID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      duration
      dynamicHtml {
        id
        moduleID
        tables {
          nextToken
          startedAt
        }
        checklists {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      slides {
        items {
          id
          moduleID
          title
          shortTitle
          whatYouGet
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      moduleID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      moduleID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      moduleID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDynamicHtml = /* GraphQL */ `
  mutation CreateDynamicHtml(
    $input: CreateDynamicHtmlInput!
    $condition: ModelDynamicHtmlConditionInput
  ) {
    createDynamicHtml(input: $input, condition: $condition) {
      id
      moduleID
      tables {
        items {
          id
          dynamicHtmlID
          slug
          tableTitle
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      checklists {
        items {
          id
          dynamicChecklistID
          dummy
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      module {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtml {
          id
          moduleID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        slides {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDynamicHtml = /* GraphQL */ `
  mutation UpdateDynamicHtml(
    $input: UpdateDynamicHtmlInput!
    $condition: ModelDynamicHtmlConditionInput
  ) {
    updateDynamicHtml(input: $input, condition: $condition) {
      id
      moduleID
      tables {
        items {
          id
          dynamicHtmlID
          slug
          tableTitle
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      checklists {
        items {
          id
          dynamicChecklistID
          dummy
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      module {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtml {
          id
          moduleID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        slides {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDynamicHtml = /* GraphQL */ `
  mutation DeleteDynamicHtml(
    $input: DeleteDynamicHtmlInput!
    $condition: ModelDynamicHtmlConditionInput
  ) {
    deleteDynamicHtml(input: $input, condition: $condition) {
      id
      moduleID
      tables {
        items {
          id
          dynamicHtmlID
          slug
          tableTitle
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      checklists {
        items {
          id
          dynamicChecklistID
          dummy
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      module {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtml {
          id
          moduleID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        slides {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDynamicTable = /* GraphQL */ `
  mutation CreateDynamicTable(
    $input: CreateDynamicTableInput!
    $condition: ModelDynamicTableConditionInput
  ) {
    createDynamicTable(input: $input, condition: $condition) {
      id
      dynamicHtmlID
      slug
      tableTitle
      tableValues {
        items {
          id
          dynamicTableID
          default
          current
          mutable
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      dynamicHtml {
        id
        moduleID
        tables {
          nextToken
          startedAt
        }
        checklists {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDynamicTable = /* GraphQL */ `
  mutation UpdateDynamicTable(
    $input: UpdateDynamicTableInput!
    $condition: ModelDynamicTableConditionInput
  ) {
    updateDynamicTable(input: $input, condition: $condition) {
      id
      dynamicHtmlID
      slug
      tableTitle
      tableValues {
        items {
          id
          dynamicTableID
          default
          current
          mutable
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      dynamicHtml {
        id
        moduleID
        tables {
          nextToken
          startedAt
        }
        checklists {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDynamicTable = /* GraphQL */ `
  mutation DeleteDynamicTable(
    $input: DeleteDynamicTableInput!
    $condition: ModelDynamicTableConditionInput
  ) {
    deleteDynamicTable(input: $input, condition: $condition) {
      id
      dynamicHtmlID
      slug
      tableTitle
      tableValues {
        items {
          id
          dynamicTableID
          default
          current
          mutable
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      dynamicHtml {
        id
        moduleID
        tables {
          nextToken
          startedAt
        }
        checklists {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTableRow = /* GraphQL */ `
  mutation CreateTableRow(
    $input: CreateTableRowInput!
    $condition: ModelTableRowConditionInput
  ) {
    createTableRow(input: $input, condition: $condition) {
      id
      dynamicTableID
      default
      current
      mutable
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTableRow = /* GraphQL */ `
  mutation UpdateTableRow(
    $input: UpdateTableRowInput!
    $condition: ModelTableRowConditionInput
  ) {
    updateTableRow(input: $input, condition: $condition) {
      id
      dynamicTableID
      default
      current
      mutable
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTableRow = /* GraphQL */ `
  mutation DeleteTableRow(
    $input: DeleteTableRowInput!
    $condition: ModelTableRowConditionInput
  ) {
    deleteTableRow(input: $input, condition: $condition) {
      id
      dynamicTableID
      default
      current
      mutable
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDynamicChecklist = /* GraphQL */ `
  mutation CreateDynamicChecklist(
    $input: CreateDynamicChecklistInput!
    $condition: ModelDynamicChecklistConditionInput
  ) {
    createDynamicChecklist(input: $input, condition: $condition) {
      id
      dynamicChecklistID
      dummy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDynamicChecklist = /* GraphQL */ `
  mutation UpdateDynamicChecklist(
    $input: UpdateDynamicChecklistInput!
    $condition: ModelDynamicChecklistConditionInput
  ) {
    updateDynamicChecklist(input: $input, condition: $condition) {
      id
      dynamicChecklistID
      dummy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDynamicChecklist = /* GraphQL */ `
  mutation DeleteDynamicChecklist(
    $input: DeleteDynamicChecklistInput!
    $condition: ModelDynamicChecklistConditionInput
  ) {
    deleteDynamicChecklist(input: $input, condition: $condition) {
      id
      dynamicChecklistID
      dummy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
      id
      moduleID
      title
      shortTitle
      whatYouGet
      htmlElements {
        items {
          id
          slideID
          typeOfElement
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      module {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtml {
          id
          moduleID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        slides {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
      id
      moduleID
      title
      shortTitle
      whatYouGet
      htmlElements {
        items {
          id
          slideID
          typeOfElement
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      module {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtml {
          id
          moduleID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        slides {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
      id
      moduleID
      title
      shortTitle
      whatYouGet
      htmlElements {
        items {
          id
          slideID
          typeOfElement
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      module {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtml {
          id
          moduleID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        slides {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createHtmlElement = /* GraphQL */ `
  mutation CreateHtmlElement(
    $input: CreateHtmlElementInput!
    $condition: ModelHtmlElementConditionInput
  ) {
    createHtmlElement(input: $input, condition: $condition) {
      id
      slideID
      typeOfElement
      content
      slide {
        id
        moduleID
        title
        shortTitle
        whatYouGet
        htmlElements {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateHtmlElement = /* GraphQL */ `
  mutation UpdateHtmlElement(
    $input: UpdateHtmlElementInput!
    $condition: ModelHtmlElementConditionInput
  ) {
    updateHtmlElement(input: $input, condition: $condition) {
      id
      slideID
      typeOfElement
      content
      slide {
        id
        moduleID
        title
        shortTitle
        whatYouGet
        htmlElements {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteHtmlElement = /* GraphQL */ `
  mutation DeleteHtmlElement(
    $input: DeleteHtmlElementInput!
    $condition: ModelHtmlElementConditionInput
  ) {
    deleteHtmlElement(input: $input, condition: $condition) {
      id
      slideID
      typeOfElement
      content
      slide {
        id
        moduleID
        title
        shortTitle
        whatYouGet
        htmlElements {
          nextToken
          startedAt
        }
        module {
          id
          title
          slug
          domain
          duration
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
