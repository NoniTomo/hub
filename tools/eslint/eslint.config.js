import { eslint } from '@nonitomo/eslint';

export default eslint({
  typescript: 'engine',
  stylistic: false,
  ignores: ['**/rules/**']
});
