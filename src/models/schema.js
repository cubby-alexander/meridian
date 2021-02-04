export const schema = {
    "models": {
        "Module": {
            "name": "Module",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "slug": {
                    "name": "slug",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "domain": {
                    "name": "domain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "model": "Category"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "moduleID"
                    }
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "dynamicHtml": {
                    "name": "dynamicHtml",
                    "isArray": false,
                    "type": {
                        "model": "DynamicHtml"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "id"
                    }
                },
                "slides": {
                    "name": "slides",
                    "isArray": true,
                    "type": {
                        "model": "Slide"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "module"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Modules",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Category": {
            "name": "Category",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "moduleID": {
                    "name": "moduleID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Categories",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byModule",
                        "fields": [
                            "moduleID",
                            "name"
                        ]
                    }
                }
            ]
        },
        "DynamicHtml": {
            "name": "DynamicHtml",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "dynamicTables": {
                    "name": "dynamicTables",
                    "isArray": true,
                    "type": {
                        "model": "DynamicTable"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "dynamicHtml"
                    }
                },
                "dynamicChecklists": {
                    "name": "dynamicChecklists",
                    "isArray": true,
                    "type": {
                        "model": "DynamicChecklist"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "dynamicChecklistID"
                    }
                },
                "module": {
                    "name": "module",
                    "isArray": false,
                    "type": {
                        "model": "Module"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "moduleID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "DynamicHtmls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byModule",
                        "fields": [
                            "moduleID"
                        ]
                    }
                }
            ]
        },
        "DynamicTable": {
            "name": "DynamicTable",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "slug": {
                    "name": "slug",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "tableTitle": {
                    "name": "tableTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "tableRows": {
                    "name": "tableRows",
                    "isArray": true,
                    "type": {
                        "model": "TableRow"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "dynamicTableID"
                    }
                },
                "dynamicHtml": {
                    "name": "dynamicHtml",
                    "isArray": false,
                    "type": {
                        "model": "DynamicHtml"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "dynamicHtmlID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "DynamicTables",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDynamicHtml",
                        "fields": [
                            "dynamicHtmlID",
                            "slug",
                            "tableTitle"
                        ]
                    }
                }
            ]
        },
        "TableRow": {
            "name": "TableRow",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "dynamicTableID": {
                    "name": "dynamicTableID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "default": {
                    "name": "default",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "current": {
                    "name": "current",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "mutable": {
                    "name": "mutable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "TableRows",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDynamicTable",
                        "fields": [
                            "dynamicTableID",
                            "default",
                            "current"
                        ]
                    }
                }
            ]
        },
        "DynamicChecklist": {
            "name": "DynamicChecklist",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "dynamicChecklistID": {
                    "name": "dynamicChecklistID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "dummy": {
                    "name": "dummy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "DynamicChecklists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDynamicHtml",
                        "fields": [
                            "dynamicChecklistID",
                            "dummy"
                        ]
                    }
                }
            ]
        },
        "Slide": {
            "name": "Slide",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "shortTitle": {
                    "name": "shortTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "whatYouGet": {
                    "name": "whatYouGet",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "htmlElements": {
                    "name": "htmlElements",
                    "isArray": true,
                    "type": {
                        "model": "HtmlElement"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "slide"
                    }
                },
                "module": {
                    "name": "module",
                    "isArray": false,
                    "type": {
                        "model": "Module"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "moduleID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Slides",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byModule",
                        "fields": [
                            "moduleID",
                            "title",
                            "shortTitle",
                            "whatYouGet"
                        ]
                    }
                }
            ]
        },
        "HtmlElement": {
            "name": "HtmlElement",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "typeOfElement": {
                    "name": "typeOfElement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "slide": {
                    "name": "slide",
                    "isArray": false,
                    "type": {
                        "model": "Slide"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "slideID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "HtmlElements",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySlide",
                        "fields": [
                            "slideID",
                            "typeOfElement",
                            "content"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "7b742cfdf519b053f80c7226039cefd8"
};