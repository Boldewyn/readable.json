js: bundle.js

bundle.js: src/main.js src/*.js
	node_modules/.bin/jspm build src/main.js bundle.js \
		--format global --global-name visj \
		--minify --skip-source-maps

init:
	npm install && node_modules/.bin/jspm install
