SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "visual_json": {
      "format": "esm",
      "main": "main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "hyperscript": "npm:hyperscript@1.4.7",
    "hyperscript-helpers": "npm:hyperscript-helpers@2.1.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "npm:class-list@0.1.1": {
      "map": {
        "indexof": "npm:indexof@0.0.1"
      }
    },
    "npm:html-element@1.3.0": {
      "map": {
        "class-list": "npm:class-list@0.1.1"
      }
    },
    "npm:hyperscript@1.4.7": {
      "map": {
        "browser-split": "npm:browser-split@0.0.0",
        "class-list": "npm:class-list@0.1.1",
        "html-element": "npm:html-element@1.3.0",
        "node-html-element": "npm:html-element@1.3.0"
      }
    }
  }
});
