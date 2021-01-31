/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateModule = /* GraphQL */ `
  subscription OnCreateModule {
    onCreateModule {
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
export const onUpdateModule = /* GraphQL */ `
  subscription OnUpdateModule {
    onUpdateModule {
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
export const onDeleteModule = /* GraphQL */ `
  subscription OnDeleteModule {
    onDeleteModule {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateDynamicHtml = /* GraphQL */ `
  subscription OnCreateDynamicHtml {
    onCreateDynamicHtml {
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
export const onUpdateDynamicHtml = /* GraphQL */ `
  subscription OnUpdateDynamicHtml {
    onUpdateDynamicHtml {
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
export const onDeleteDynamicHtml = /* GraphQL */ `
  subscription OnDeleteDynamicHtml {
    onDeleteDynamicHtml {
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
export const onCreateDynamicTable = /* GraphQL */ `
  subscription OnCreateDynamicTable {
    onCreateDynamicTable {
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
export const onUpdateDynamicTable = /* GraphQL */ `
  subscription OnUpdateDynamicTable {
    onUpdateDynamicTable {
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
export const onDeleteDynamicTable = /* GraphQL */ `
  subscription OnDeleteDynamicTable {
    onDeleteDynamicTable {
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
export const onCreateTableRow = /* GraphQL */ `
  subscription OnCreateTableRow {
    onCreateTableRow {
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
export const onUpdateTableRow = /* GraphQL */ `
  subscription OnUpdateTableRow {
    onUpdateTableRow {
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
export const onDeleteTableRow = /* GraphQL */ `
  subscription OnDeleteTableRow {
    onDeleteTableRow {
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
export const onCreateDynamicChecklist = /* GraphQL */ `
  subscription OnCreateDynamicChecklist {
    onCreateDynamicChecklist {
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
export const onUpdateDynamicChecklist = /* GraphQL */ `
  subscription OnUpdateDynamicChecklist {
    onUpdateDynamicChecklist {
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
export const onDeleteDynamicChecklist = /* GraphQL */ `
  subscription OnDeleteDynamicChecklist {
    onDeleteDynamicChecklist {
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
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide {
    onCreateSlide {
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
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide {
    onUpdateSlide {
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
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide {
    onDeleteSlide {
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
export const onCreateHtmlElement = /* GraphQL */ `
  subscription OnCreateHtmlElement {
    onCreateHtmlElement {
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
export const onUpdateHtmlElement = /* GraphQL */ `
  subscription OnUpdateHtmlElement {
    onUpdateHtmlElement {
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
export const onDeleteHtmlElement = /* GraphQL */ `
  subscription OnDeleteHtmlElement {
    onDeleteHtmlElement {
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
