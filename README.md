# Alto CMS

<img width="966" alt="Captura de Pantalla 2023-01-23 a la(s) 10 00 46 a  m" src="https://slug.vercel.app/s/fsDXGd">

## Alto CMS Repo
 
In this repository you will find the source of the micro-cms project

### Install
```
$ pnpm i
```

### Start project

```
$ pnpm dev
```

## 🔥 TO-DO

- [ ] Extract some molecules and atom components from AddEditPost, Header.jsx organisms and form Search.jsx molecule.
- [ ] debounce blog post search
- [ ] paginate posts list or add virtual scrolling
- [ ] manage server state with react-query


## 🚀 Project Structure
Inside alto cms, you'll see the following folders and files:

``` bash
├───src
│   ├───assets
│   ├───lib
│   └───components
│       ├───molecules
│       │   ├───MainPost
│       │   ├───Search
│       │   └───PostList
│       ├───templates
│       ├───organisms
│       │   ├───Posts
│       │   ├───Header
│       │   ├───Post
│       │   ├───AddEditPost
│       │   └───Hero
│       ├───pages
│       └───atoms
│           ├───ActionLink
│           ├───Logo
│           ├───ButtonOrLink
│           ├───Link
│           └───Button
│───index.css
│───App.css
│───App.jsx
│───.eslintrc
│───vite.config
│───index.html
│───package.json
├───.vscode
└───public

```

`lib` is the folder where we have hooks and helpers to access localStorage for example. This could have been in separate
folders but to mantain the project simple we will keep it there.