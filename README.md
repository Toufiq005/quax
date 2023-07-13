# Introduction

Welcome to the Quata documentation!

### Supported Platforms For Local Development

```    
Compatible Browsers (Firefox, Safari, Chrome, Edge)
Server(Node.js 16.14.0)
MacOS, Windows, and Linux are supported
```

### Requirements

```
node(16.14.0)
yarn
editor: Visual Studio Code(recommended)
```

### Tech We Have Used

```
NextJs
React-Query
Axios
Typescript
Bootstrap
React Hook Form
```

### Getting Started & Installation

>Make sure you moved the quata-react folder to a generic folder like Desktop, Document, or your
specific code folder. Otherwise, the top folder name causes several path issues in generating the
schema or installing npm packages

For getting started with the template you have to follow the below procedure. First navigate to the root
directory. Then run below command for getting started with specific part

# on root directory

```
yarn
yarn build
yarn start
```

Available Scripts: You can run below commands in the root folder for your need.

```
"clean": "rimraf \"{.next,dist,build,out,node_modules}\"",
"dev": "next dev",
"build": "next build",
"start": "next start"
```

For customizing the template's default site settings:

### Header Part

```
src\settings\site-settings.tsx
src\utils\routes.ts
```
### Blog API Part

```
public\data\blogs.json
```

### Integration API Part

```
public\data\integration.json
```
### For static data

#### For static data

```
src\framework\basic-rest\static
about
banner
client
contact
features
footer
home
integration
section
and many more...
```

# Deployment

## Vercel

>[your-frontend-project]

[Vercel](https://vercel.com)

If you want to host the template in vercel.com then follow the below command

#### Step 1:

```
After deploying the api you will get the api endpoint url. Put that url in the
[your-frontend-project]/.env and vercel.json file.
NEXT_PUBLIC_REST_API_ENDPOINT= '{put_your_api_url_here}'
```
#### Step 2:

```
Navigate to [your-frontend-project]
```

#### Step 3:

Now run below command

```
"build": "next build",
"start": "next start"
```

#### Step 4:

Now run below command

```
vercel
NOTE: for deploying to vercel you need to install vercel-cli on your machine for
more information please visit here
```

New Static Page

We are built using React NextJS framework. So all the existing pages are available to this location.

```
src/pages
```

You can use the NextJS routing feature for the new pages. Check these official NextJS docs for pages and
routing,


[https://nextjs.org/docs/basic-features/pages](https://nextjs.org/docs/basic-features/pages)

[https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)

## FAQ

Can I export this template as HTML?

>NextJS scripts require a server to handle its build process and deliver its content. It's not possible to
export the template as raw HTML.