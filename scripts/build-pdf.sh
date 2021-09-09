#!/usr/bin/env bash

set -e

paths=("content/unnamed/srd.md")

for path in ${paths[@]};
do
    echo "Building $path"
    md=$(mktemp)
    cat "$path" | \
        sed 's${{ get_url(path="$$g'| \
        sed 's$") }}$$g'| \
        sed 's$@/$https://stories.matteojoliveau.com/$g'| \
        sed 's$.md$$g'| \
        sed 's$description:$subtitle:$g'| \
        sed 's$  author:$author:$g' > "$md"
    in=$(echo "$path" | sed 's@.md@@g')
    out=$(echo "$in" | sed 's@content@public@g')
    mkdir -p $(dirname "$out")
    pandoc -s --toc -f markdown -o "$out.pdf" "$md"
    pandoc -s --toc -f markdown -o "$out.html" "$md"
done

