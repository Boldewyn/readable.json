all: js css

js: bundle.js

bundle.js: src/main.js src/*.js
	node_modules/.bin/jspm build "$<" "$@" \
		--format global --global-name readable_json \
		--minify --skip-source-maps

init:
	npm install && node_modules/.bin/jspm install

css: bundle.css

bundle.css: src/sass/main.scss src/sass/*.scss
	node_modules/.bin/node-sass "$<" "$@"
