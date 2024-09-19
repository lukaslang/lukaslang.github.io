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

I ran into problems on MacOS Ventura 13.6.7. I was able to resolve it using Ruby 3.2.3 with `rbenv` and adding webrick:
```bash
rbenv install 3.2.3
rbenv local 3.2.3
gem install bundler jekyll
bundle install
bundle add webrick
bundle exec jekyll build
bundle exec jekyll serve --force_polling
```
See [Leap Day, 2024](https://www.opsmason.com/2024/02/29/Leap-Day.html) and [Jekyll serve fails on Ruby 3.0](https://github.com/jekyll/jekyll/issues/8523) for details.

Also see:
- [bundle exec jekyll serve not working locally](https://stackoverflow.com/questions/77851863/bundle-exec-jekyll-serve-not-working-locally)
- [Ruby (Versioning) Hell with Jekyll & GitHub Pages](https://ritviknag.com/tech-tips/ruby-versioning-hell-with-jekyll-&-github-pages/)

## To-do

* Adjust logo background to work with dark mode.

## Acknowledgements

This page is based on the [Contrast](https://github.com/niklasbuschmann/contrast) Jekyll theme by Niklas Buschmann, which is [public domain](http://unlicense.org/).
Many thanks, Niklas, for this headstart.
