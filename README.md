# NextJSv14 App Router + PandaCSS + RadixUI by Franrey Saycon

## Let the magic begin~
You technically just need node+pnpm (used Node v18 LTS) and a good internet ;)

**To make all the nice things work properly, (installs everything you need and prepares commmit automations)**
```
pnpm install
pnpm prepare (if prepare wasn't ran properly)
```

**To turn on everything,**
```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The port maybe different if 3000 is occupied.

**To run tests,**
```
pnpm test
```

**To commit and trigger commitizen / lint staging,**
```
pnpm commit
```
TIP: I highly suggest you check your lint stage first with `pnpm lint-staged` since you might need to redo everything if a check failed. (sorta a punishment >:P).

**To release something and update the CHANGELOG automatically complete with tags,**
```
pnpm release
```
