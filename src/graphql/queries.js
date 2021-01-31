/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncModules = /* GraphQL */ `
  query SyncModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtmlID
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
      nextToken
      startedAt
    }
  }
`;
export const getModule = /* GraphQL */ `
  query GetModule($id: ID!) {
    getModule(id: $id) {
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
      dynamicHtmlID
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
          dynamicHtmlID
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
export const listModules = /* GraphQL */ `
  query ListModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        slug
        domain
        categories {
          nextToken
          startedAt
        }
        duration
        dynamicHtmlID
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDynamicHtmls = /* GraphQL */ `
  query SyncDynamicHtmls(
    $filter: ModelDynamicHtmlFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDynamicHtmls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          dynamicHtmlID
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
      nextToken
      startedAt
    }
  }
`;
export const getDynamicHtml = /* GraphQL */ `
  query GetDynamicHtml($id: ID!) {
    getDynamicHtml(id: $id) {
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
        dynamicHtmlID
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
export const listDynamicHtmls = /* GraphQL */ `
  query ListDynamicHtmls(
    $filter: ModelDynamicHtmlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDynamicHtmls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dynamicHtmlID
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
      nextToken
      startedAt
    }
  }
`;
export const syncDynamicTables = /* GraphQL */ `
  query SyncDynamicTables(
    $filter: ModelDynamicTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDynamicTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dynamicHtmlID
        slug
        tableTitle
        tableValues {
          nextToken
          startedAt
        }
        dynamicHtml {
          id
          moduleID
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
      nextToken
      startedAt
    }
  }
`;
export const getDynamicTable = /* GraphQL */ `
  query GetDynamicTable($id: ID!) {
    getDynamicTable(id: $id) {
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
          dynamicHtmlID
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
export const listDynamicTables = /* GraphQL */ `
  query ListDynamicTables(
    $filter: ModelDynamicTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDynamicTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dynamicHtmlID
        slug
        tableTitle
        tableValues {
          nextToken
          startedAt
        }
        dynamicHtml {
          id
          moduleID
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
      nextToken
      startedAt
    }
  }
`;
export const syncTableRows = /* GraphQL */ `
  query SyncTableRows(
    $filter: ModelTableRowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTableRows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getTableRow = /* GraphQL */ `
  query GetTableRow($id: ID!) {
    getTableRow(id: $id) {
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
export const listTableRows = /* GraphQL */ `
  query ListTableRows(
    $filter: ModelTableRowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTableRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDynamicChecklists = /* GraphQL */ `
  query SyncDynamicChecklists(
    $filter: ModelDynamicChecklistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDynamicChecklists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getDynamicChecklist = /* GraphQL */ `
  query GetDynamicChecklist($id: ID!) {
    getDynamicChecklist(id: $id) {
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
export const listDynamicChecklists = /* GraphQL */ `
  query ListDynamicChecklists(
    $filter: ModelDynamicChecklistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDynamicChecklists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncSlides = /* GraphQL */ `
  query SyncSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSlides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          dynamicHtmlID
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
      nextToken
      startedAt
    }
  }
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
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
        dynamicHtmlID
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
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dynamicHtmlID
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
      nextToken
      startedAt
    }
  }
`;
export const syncHtmlElements = /* GraphQL */ `
  query SyncHtmlElements(
    $filter: ModelHtmlElementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHtmlElements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHtmlElement = /* GraphQL */ `
  query GetHtmlElement($id: ID!) {
    getHtmlElement(id: $id) {
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
          dynamicHtmlID
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
export const listHtmlElements = /* GraphQL */ `
  query ListHtmlElements(
    $filter: ModelHtmlElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHtmlElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
