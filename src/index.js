import { tap } from 'rxjs/operators'

export default function log(label) {
  return tap(
    x => console.log(label, x),
    err => console.error(label, err),
    () => {
      console.log(`%c${label}complete`, 'color: green')
    },
  )
}
