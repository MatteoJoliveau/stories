set dotenv-load := false

default:
  @just --list | grep -v "    default"

run:
    hugo serve