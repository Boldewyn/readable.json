js: bundle.js

bundle.js: src/main.js
	jspm build src/main.js bundle.js --format global --global-name visj # --minify --skip-source-maps
