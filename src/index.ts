import { tap } from 'rxjs/operators'
import { MonoTypeOperatorFunction } from 'rxjs/internal/types'

export function log<T>(
  label: string,
): MonoTypeOperatorFunction<T> {
  return tap(
    (x: T) => console.log(label, x),
    (err) => console.error(label, err),
    () => {
      console.log(`%c✔️ ${label}`, 'color: green')
    },
  )
}
