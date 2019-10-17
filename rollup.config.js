/* eslint-env node */

import typescript from 'rollup-plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/rxjs-log-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'dist/rxjs-log-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external: ['rxjs/operators'],
    plugins: [typescript()],
  },
]
