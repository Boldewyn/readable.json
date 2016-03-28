SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "readable.json": {
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
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "aws-sign2": "npm:aws-sign2@0.5.0",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "form-data": "npm:form-data@0.1.4",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "hapi": "npm:hapi@4.1.4",
    "hawk": "npm:hawk@1.0.0",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "http-signature": "npm:http-signature@0.10.1",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "hyperscript": "npm:hyperscript@1.4.7",
    "hyperscript-helpers": "npm:hyperscript-helpers@2.1.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "oauth-sign": "npm:oauth-sign@0.3.0",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text-autolinker": "npm:text-autolinker@0.0.3",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tough-cookie": "npm:tough-cookie@2.2.2",
    "tunnel-agent": "npm:tunnel-agent@0.3.0",
    "uglify-js": "npm:uglify-js@2.3.6",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:asn1.js@4.5.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:boom@0.4.2": {
      "map": {
        "hoek": "npm:hoek@0.9.1"
      }
    },
    "npm:boom@2.4.2": {
      "map": {
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.2.3",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:catbox-memory@1.1.2": {
      "map": {
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:catbox@2.2.1": {
      "map": {
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:combined-stream@0.0.7": {
      "map": {
        "delayed-stream": "npm:delayed-stream@0.0.5"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "elliptic": "npm:elliptic@6.2.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cryptiles@0.2.2": {
      "map": {
        "boom": "npm:boom@0.4.2"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.4.2"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:elliptic@6.2.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:form-data@0.1.4": {
      "map": {
        "async": "npm:async@0.9.2",
        "combined-stream": "npm:combined-stream@0.0.7",
        "mime": "npm:mime@1.2.11"
      }
    },
    "npm:handlebars@1.3.0": {
      "map": {
        "optimist": "npm:optimist@0.3.7"
      }
    },
    "npm:hapi-swagger@0.1.12": {
      "map": {
        "boom": "npm:boom@2.4.2",
        "handlebars": "npm:handlebars@1.3.0",
        "hoek": "npm:hoek@2.0.0",
        "joi": "npm:joi@3.1.0"
      }
    },
    "npm:hapi@4.1.4": {
      "map": {
        "async": "npm:async@0.8.0",
        "boom": "npm:boom@2.4.2",
        "catbox": "npm:catbox@2.2.1",
        "catbox-memory": "npm:catbox-memory@1.1.2",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.4.1",
        "iron": "npm:iron@2.1.3",
        "joi": "npm:joi@3.1.0",
        "lru-cache": "npm:lru-cache@2.5.2",
        "mime": "npm:mime@1.2.11",
        "multiparty": "npm:multiparty@3.2.10",
        "negotiator": "npm:negotiator@0.4.9",
        "nipple": "npm:nipple@2.5.6",
        "optimist": "npm:optimist@0.6.1",
        "qs": "npm:qs@0.6.6",
        "semver": "npm:semver@2.2.1",
        "shot": "npm:shot@1.7.0",
        "topo": "npm:topo@1.1.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:hawk@1.0.0": {
      "map": {
        "boom": "npm:boom@0.4.2",
        "cryptiles": "npm:cryptiles@0.2.2",
        "hoek": "npm:hoek@0.9.1",
        "sntp": "npm:sntp@0.2.4"
      }
    },
    "npm:http-signature@0.10.1": {
      "map": {
        "asn1": "npm:asn1@0.1.11",
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3"
      }
    },
    "npm:iron@2.1.3": {
      "map": {
        "boom": "npm:boom@2.4.2",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:joi@3.1.0": {
      "map": {
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:multiparty@3.2.10": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.13",
        "stream-counter": "npm:stream-counter@0.2.0"
      }
    },
    "npm:nipple@2.5.6": {
      "map": {
        "boom": "npm:boom@2.4.2",
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:optimist@0.3.7": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.3"
      }
    },
    "npm:optimist@0.6.1": {
      "map": {
        "minimist": "npm:minimist@0.0.10",
        "wordwrap": "npm:wordwrap@0.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.5.2",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:readable-stream@1.1.13": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:request@2.33.0": {
      "map": {
        "forever-agent": "npm:forever-agent@0.5.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime": "npm:mime@1.2.11",
        "node-uuid": "npm:node-uuid@1.4.7",
        "qs": "npm:qs@0.6.6"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:shot@1.7.0": {
      "map": {
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:sntp@0.2.4": {
      "map": {
        "hoek": "npm:hoek@0.9.1"
      }
    },
    "npm:source-map@0.1.43": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.13"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-counter@0.2.0": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.13"
      }
    },
    "npm:stream-http@2.2.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:text-autolinker@0.0.3": {
      "map": {
        "async": "npm:async@0.9.2",
        "buffer-concat": "npm:buffer-concat@0.0.1",
        "charset": "npm:charset@0.0.1",
        "chrono-node": "npm:chrono-node@0.1.11",
        "email-addresses": "npm:email-addresses@1.1.2",
        "entities": "npm:entities@0.3.0",
        "handlebars": "npm:handlebars@1.3.0",
        "hapi": "npm:hapi@4.1.4",
        "hapi-swagger": "npm:hapi-swagger@0.1.12",
        "hoek": "npm:hoek@2.4.1",
        "iconv-lite": "npm:iconv-lite@0.2.11",
        "joi": "npm:joi@3.1.0",
        "marked": "npm:marked@0.3.5",
        "moment": "npm:moment@2.8.4",
        "request": "npm:request@2.33.0",
        "valid-url": "npm:valid-url@1.0.9"
      }
    },
    "npm:topo@1.1.0": {
      "map": {
        "hoek": "npm:hoek@2.4.1"
      }
    },
    "npm:uglify-js@2.3.6": {
      "map": {
        "async": "npm:async@0.2.10",
        "optimist": "npm:optimist@0.3.7",
        "source-map": "npm:source-map@0.1.43"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
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
