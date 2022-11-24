set dotenv-load := false

default:
  @just --list | grep -v "    default"

run:
  hugo serve --printI18nWarnings --printPathWarnings --buildDrafts

build:
  hugo --gc --minify --cleanDestinationDir