# `@bumble/rxjs-log`

A simple console.log operator to use with RxJs. Now includes types!

# Install

```sh
npm i @bumble/rxjs-log -D
```

# Usage

```javascript
import { log } from '@bumble/rxjs-log'

fromEvent(document, 'click')
  .pipe(log('document clicked'))
  .subscribe()

// -> document clicked { MouseEvent... }
```
