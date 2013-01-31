
build: components
	@component build --dev

components: component.json
	@component install --dev

test:
	@./node_modules/.bin/mocha --reporter dot

clean:
	rm -fr build components template.js

.PHONY: clean test
