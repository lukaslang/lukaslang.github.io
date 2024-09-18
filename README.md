Professional website and blog of Lukas F Lang.

All material, including texts, images, and layouts, are subject to copyright.

## Setup and development on MacOS

1. Install [prerequisites](https://jekyllrb.com/docs/installation/macos/) using Homebrew
2. Install jekyll and bundler gems
3. If jekyll plugins are missing, install them (see ```_config.yml```) via
```bash
gem install jekyll-paginate
```
4. Check out the git repository
5. Run
```bash
bundle exec jekyll serve --force_polling
```
6. Browse to [http://localhost:4000](http://localhost:4000)

If you're running into problems on MacOS, see
- [bundle exec jekyll serve not working locally](https://stackoverflow.com/questions/77851863/bundle-exec-jekyll-serve-not-working-locally)
- [Ruby (Versioning) Hell with Jekyll & GitHub Pages](https://ritviknag.com/tech-tips/ruby-versioning-hell-with-jekyll-&-github-pages/)

## To-do

* Adjust logo background to work with dark mode.

## Acknowledgements

This page is based on the [Contrast](https://github.com/niklasbuschmann/contrast) Jekyll theme by Niklas Buschmann, which is [public domain](http://unlicense.org/).
Many thanks, Niklas, for this headstart.
