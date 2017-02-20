# stylelint-config-axa-base

AXA's base StyleLint RC, extending [standard stylelint config](https://github.com/stylelint/stylelint-config-standard)

# Usage

1. Install from `@axa-ch/stylelint-config-axa-base` by:

  ````sh
  npm i --save-dev @axa-ch/stylelint-config-axa-base
  ````

2. Install peer dependencies of `@axa-ch/stylelint-config-axa-base` and `stylelint-config-standard`

  It requires `styleint`

  Install the correct versions of each package, which are listed by the command:
  
  ```sh
  npm info "@axa-ch/stylelint-config-axa-base@latest" peerDependencies
  npm info "stylelint-config-standard@latest" peerDependencies
  ```

3. Add `"exetnds": "@axa-ch/stylelint-config-axa-base"` to your .stylelintrc
