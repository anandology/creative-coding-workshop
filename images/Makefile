
SOURCES=$(wildcard *.js)
TARGETS=$(SOURCES:%.js=%.svg)

default: $(TARGETS)

%.svg: %.js
	node ../make-image.js $< $@

clean:
	-rm $(TARGETS)