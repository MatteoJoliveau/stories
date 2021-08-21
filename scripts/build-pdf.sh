#!/usr/bin/env bash

set -e

paths=("content/unnamed/srd.md")

for path in ${paths[@]};
do
    echo "Building $path"
    md=$(mktemp)
    cat "$path" > "$md"
    sed -i 's$@$https://stories.matteojoliveau.com$g' "$md"
    sed -i 's$.md$$g' "$md"
    sed -i 's$description:$subtitle:$g' "$md"
    sed -i 's$  author:$author:$g' "$md"
    in=$(echo "$path" | sed 's@.md@@g')
    out=$(echo "$in" | sed 's@content@public@g')
    mkdir -p $(dirname "$out")
    pandoc -s --toc -f markdown -o "$out.pdf" "$md"
    pandoc -s --toc -f markdown -o "$out.html" "$md"
done

