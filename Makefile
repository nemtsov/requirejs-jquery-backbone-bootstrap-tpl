all: checkDeps clean build

build: checkDeps
	r.js -o ./lib/scripts/app.build.js

clean:
	rm -rf build

checkDeps:
	@command -v r.js >/dev/null 2>&1 || { \
		echo "RequireJS (r.js) is needed to build this project. \
         \nYou can install it using: 'sudo npm -g install requirejs'." \
		>&2; exit 1; \
	}
