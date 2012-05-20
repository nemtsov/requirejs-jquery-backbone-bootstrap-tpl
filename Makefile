all: clean build

build:
	r.js -o ./project-one/scripts/app.build.js

clean:
	rm -rf project-one-build
