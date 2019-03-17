# Site Variables

###### [Reference]

## .Site.Menus.Navigation

Menu navigation.

- `name`
- `url`

**Example**

`config.toml`

``` toml
[menu]

  [[menu.navigation]]
    name = "Blog"
    url = "/blog"

  [[menu.navigation]]
    name = "Projects"
    url = "https://github.com/alexherbo2?tab=repositories"
```

## .Site.Menus.Social

Social links.

- `name`
- `url`

**Example**

`config.toml`

``` toml
[menu]

  [[menu.social]]
    name = "GitHub"
    url = "https://github.com/alexherbo2"

  [[menu.social]]
    name = "YouTube"
    url = "https://youtube.com/channel/UCv9nzkds34PnGOu6u_QvVBQ"
```

## .Site.Params.CSS

Custom CSS files.

**Example**

`config.toml`

``` toml
[params]
  css = ["css/custom.css"]
```

## .Site.Params.dateForm

Date format using [Go Time Layout].

**Example**

`config.toml`

``` toml
[params]
  dateForm = "January 2, 2006"
```

## .Site.Params.Host

Host informations.

- `name`
- `repository`

**Example**

`config.toml`

``` toml
[params.host]
  name = "GitHub"
  repository = "https://github.com/alexherbo2/site"
```

## .Site.Params.Icon

Favorite icon.

**Example**

`config.toml`

``` toml
[params]
  icon = "https://github.com/favicon.ico"
```

## .Site.Params.JS

Custom JavaScript files.

**Example**

`config.toml`

``` toml
[params]
  js = ["js/custom.js"]
```

## .Site.Params.Pages.Edit

Link to page edit.

**Example**

`config.toml`

``` toml
[params.pages]
  edit = "https://github.com/alexherbo2/site/blob/master/content/%s"
```

## .Site.Params.Pages.History

Link to page history.

**Example**

`config.toml`

``` toml
[params.pages]
  history = "https://github.com/alexherbo2/site/commits/master/content/%s"
```

## .Site.Params.Pages.Raw

Link to the document.

**Example**

`config.toml`

``` toml
[params.pages]
  raw = "https://github.com/alexherbo2/site/raw/master/content/%s"
```

[Reference]: https://gohugo.io/variables/site
[Go Time Layout]: https://golang.org/pkg/time#pkg-constants
