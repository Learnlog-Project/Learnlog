# Development management facilities
#
# This file specifies useful routines to streamline development management.
# See https://www.gnu.org/software/make/.


# Consume environment variables
ifneq (,$(wildcard .env))
	include .env
endif

# Tool configuration
SHELL := /bin/bash
GNUMAKEFLAGS += --no-print-directory

# Path record
ROOT_DIR ?= $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
DATA_DIR ?= .contentlayer/
CONTENT_DIR ?= content/

# Target files
ENV_FILE ?= .env

EPHEMERAL_ARCHIVES ?= \
	**/$(DATA_DIR)

# Executables definition

# Behavior definition


%: # Treat unrecognized targets
	@ printf "\033[31;1mUnrecognized routine: '$(*)'\033[0m\n"
	$(MAKE) help

help:: ## Show this help
	@ printf '\033[33;1mGNU-Make available routines:\n'
	egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[37;1m%-20s\033[0m %s\n", $$1, $$2}'

init:: veryclean ## Initialize development environment
	npm install

parse:: ## Transpile source code
	npm run parse

clean:: ## Delete project ephemeral archives
	-rm -fr $(EPHEMERAL_ARCHIVES)

veryclean:: clean ## Delete all generated files
	-rm -fr node_modules


.EXPORT_ALL_VARIABLES:
.ONESHELL:
.PHONY: help init parse clean veryclean
