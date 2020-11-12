This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### First, install and run the json server with data:

```bash
npm i -g json-server
npm run server
# or
yarn server
```

I added delay 2s (`-d 2000`) for json-server, but you can start it without delay between requests:

```bash
json-server -w db.json
```

### Next, install development modules run the development server:

```bash
npm install
# or
yarn
```

### Second, run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
