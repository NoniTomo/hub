import { eslint } from '@nonitomo/eslint'

export default eslint({
  typescript: 'engine',
  ignores: ['**/rules/**'],
})
