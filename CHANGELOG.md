# Change Log

All notable changes to the Laravel extension will be documented in this file.

## v1.0.11 - 2025-06-11

### What's Changed

* Improve startup time by [@joetannenbaum](https://github.com/joetannenbaum) in https://github.com/laravel/vs-code-extension/pull/404

**Full Changelog**: https://github.com/laravel/vs-code-extension/compare/v1.0.10...v1.0.11

## [Unreleased]

- Nothing yet

## [v1.0.10]

- Memory improvements ([PR #402](https://github.com/laravel/vs-code-extension/pull/402))

## [v1.0.9]

- Fix False positive "Translation not found" with partial string in Laravel JSON translation ([#375](https://github.com/laravel/vs-code-extension/pull/375))
- Fix Translation detection breaks when there are blank lines in a JSON file ([399](https://github.com/laravel/vs-code-extension/pull/399))
- Fix Translation not found when contains non-standard character ([#401](https://github.com/laravel/vs-code-extension/pull/401))
- Fix a bug with enums in config files ([#390](https://github.com/laravel/vs-code-extension/pull/390))
- Fix SyntaxError: Unexpected end of JSON input ([#391](https://github.com/laravel/vs-code-extension/pull/391))

## [v1.0.8]

- Add the bootstrap/app.php pattern to the middleware repository ([#358](https://github.com/laravel/vs-code-extension/pull/358))
- Add support for @pushIf, @pushOnce, and @use directives in Blade completion ([#378](https://github.com/laravel/vs-code-extension/pull/378))
- Fix Middleware "handle" does not exist on invokable middleware files ([#381](https://github.com/laravel/vs-code-extension/pull/381))
- Fix Cannot access offset of type array on array ([#341](https://github.com/laravel/vs-code-extension/pull/341))

## [v1.0.6]

- Support for Laravel 12 scope attributes ([#357](https://github.com/laravel/vs-code-extension/pull/357))

## [v1.0.5]

- Ability to quickly add `VITE_` env variables from existing ([#332](https://github.com/laravel/vs-code-extension/pull/332))
- Add trans_choice helper ([#331](https://github.com/laravel/vs-code-extension/pull/331))
- Support for locale parameter in translations ([PR #330](https://github.com/laravel/vs-code-extension/pull/330))
- Better resolution for `$request->user()`, `auth()->user()`, and `Auth::user()` ([#333](https://github.com/laravel/vs-code-extension/pull/333))

## [v1.0.4]

- Improve file watcher performance ([#327](https://github.com/laravel/vs-code-extension/pull/327))
- Autocompletion, linking, and diagnostics for Storage Disks ([#328](https://github.com/laravel/vs-code-extension/pull/328))
- Fix relative path when path does not exist ([#322](https://github.com/laravel/vs-code-extension/pull/322))
- Automatically check lowercase Inertia view paths ([#323](https://github.com/laravel/vs-code-extension/pull/323))

## [v1.0.3]

- Basic Folio support ([#319](https://github.com/laravel/vs-code-extension/pull/319))
- Add link to Blade file for MailMessage::markdown/view ([#317](https://github.com/laravel/vs-code-extension/pull/317))
- Fix TypeError: Cannot read properties of undefined (reading 'type') ([#296](https://github.com/laravel/vs-code-extension/pull/296))
- Support for contracts ([#298](https://github.com/laravel/vs-code-extension/pull/298))
- Option to disable model doc block generation + fix doc block extends ([#320](https://github.com/laravel/vs-code-extension/pull/320))

## [v1.0.2]

- Fix fetching Blade component properties when constructor is missing ([#307](https://github.com/laravel/vs-code-extension/pull/307))
- Fix parsing of incomplete or incorrect language files ([#311](https://github.com/laravel/vs-code-extension/pull/311))
- Support for vendor components ([#310](https://github.com/laravel/vs-code-extension/pull/310))

## [v1.0.1]

- Better support for Blade component index files ([#284](https://github.com/laravel/vs-code-extension/pull/284))
- Enable Eloquent Model property auto-complete after sole, find, first, or firstOrFail ([#274](https://github.com/laravel/vs-code-extension/pull/274))
- Added cast custom return type from get method ([#283](https://github.com/laravel/vs-code-extension/pull/283))
- Blade component improvements ([#305](https://github.com/laravel/vs-code-extension/pull/305))
- Add parsing of immutable dates ([#290](https://github.com/laravel/vs-code-extension/pull/290))
- Add auto-spacing for Blade tags ([#273](https://github.com/laravel/vs-code-extension/pull/273))
- Add Lando to list of detectable PHP environments ([#241](https://github.com/laravel/vs-code-extension/pull/241))

## [v1.0.0]

- Stable release!

## [0.1.21]

- Additional Livewire, Volt, and Blade support ([#261](https://github.com/laravel/vs-code-extension/pull/261))
- Translation script fixes ([#266](https://github.com/laravel/vs-code-extension/pull/266))
- Add missing namespace to Gate in auth template ([#265](https://github.com/laravel/vs-code-extension/pull/265))
- Reduce error popups ([#267](https://github.com/laravel/vs-code-extension/pull/267))
- Improvements to Eloquent docblocks ([#258](https://github.com/laravel/vs-code-extension/pull/258))

## [0.1.20]

- Improved Gate/Policy support ([#254](https://github.com/laravel/vs-code-extension/pull/254))
- Translation performance improvements ([#256](https://github.com/laravel/vs-code-extension/pull/256))
- Basic linking to Blade component views ([#257](https://github.com/laravel/vs-code-extension/pull/257))

## [0.1.19]

- Added optional test func to PHP auto detection ([#219](https://github.com/laravel/vs-code-extension/pull/219))
- Use 2MB buffer instead of 1MB ([#211](https://github.com/laravel/vs-code-extension/pull/211))
- Added CONTRIBUTING.md to help people that want to contribute to the extension
- Include debug info when copying error ([#250](https://github.com/laravel/vs-code-extension/pull/250))
- Stop using File::json for JSON translations ([#249](https://github.com/laravel/vs-code-extension/pull/249))
- Fix inertia relative path ([#246](https://github.com/laravel/vs-code-extension/pull/246))
- Fix relative asset paths ([#245](https://github.com/laravel/vs-code-extension/pull/245))
- Don't re-document existing Eloquent docblocks ([#235](https://github.com/laravel/vs-code-extension/pull/235))
- Dispose file watchers on deactivate ([#234](https://github.com/laravel/vs-code-extension/pull/234))
- More Eloquent column mapping types ([#233](https://github.com/laravel/vs-code-extension/pull/233))

## [0.1.18]

### Fixed

- Null logger for mini PHP scripts ([#199](https://github.com/laravel/vs-code-extension/pull/199))
- App Bindings: Make sure reflected class is not null ([#198](https://github.com/laravel/vs-code-extension/pull/198))
- ScopedPropertyAccessExpressionParser improvements ([#8](https://github.com/laravel/vs-code-php-parser-cli/pull/8))
- Check `isAutoCompleting` before firing it ([#7](https://github.com/laravel/vs-code-php-parser-cli/pull/7))
- Make sure `ClosureThis` is not null before we use it in `auth` mini script ([#200](https://github.com/laravel/vs-code-extension/pull/200))
- Handle string concatenation parsing ([#9](https://github.com/laravel/vs-code-php-parser-cli/pull/9))
- Improved Blade autocomplete, linking, hovering, and diagnostics for echo statements ([#10](https://github.com/laravel/vs-code-php-parser-cli/pull/10), [#205](https://github.com/laravel/vs-code-extension/pull/205))

## [0.1.17]

### Added

- Allow configuration of project base path ([#184](https://github.com/laravel/vs-code-extension/pull/184))

### Fixed

- Fix confusing "PHP Command" setting ([#187](https://github.com/laravel/vs-code-extension/pull/187))
- Fix for missing translation "path" property ([#186](https://github.com/laravel/vs-code-extension/pull/186))
- Fix binary permissions cross platform ([#183](https://github.com/laravel/vs-code-extension/pull/183))
- Increase binary download timeout to 60s ([#182](https://github.com/laravel/vs-code-extension/pull/182))

## [0.1.16]

### Added

- PHP Environment setting. Specify your local environment via a list of common local setups.
- Broadened the scope of `config` values to include top level files and top-level array keys

### Fixed

- Auto-detection of Sail and running PHP scripts via Sail
- Bug where second parameter of `config()` was autocompleting, linking, hovering, and validating
- Removed hardcoded `env` values from `launch.json` to allow users to contribute more easily
- File watcher paths as configured by `config/inertia.php`
- Missing Inertia views quick fix now respects the paths as configured by `config/inertia.php`
- Hovering and linking for Windows users with incorrect filepaths
- Removed error popups when the codebase had a parser error (during active editing)

## [0.1.15]

- Fixed issue with executing binary on Windows path with spaces
- Repo file watchers are now debounced to prevent CPU from spiking
- Extension should now output cleaner errors from mini scripts so that future issues will be easier to debug

## [0.1.14]

- Fixed fallback for running PHP code (mentioned in 0.1.13 as a breaking change). The note in the last changelog was incorrect: the new PHP Command setting should just read `php`, meaning the file will just be added to the end of the command.

## [0.1.13]

- Initial Windows support
- Fixed nullable param for translations template for PHP 8.4
- Fixed undefined GLOB_BRACE for translations template
- Fix for Eloquent model info when `phpDocumentor` wasn't installed
- Fix for handling newline characters in JSON response ([#31](https://github.com/laravel/vs-code-extension/pull/31))
- Remove `.github` from bundle ([#29](https://github.com/laravel/vs-code-extension/pull/29))
- Inspired by [#20](https://github.com/laravel/vs-code-extension/pull/20), Inertia paths are now read from the existing PHP config in the project
- **Breaking**: The setting for PHP Command is now changed to run a file, not inline code. Previously this would have looked like this: `php -r "{code}"` but should now look like this `php "{code}"`

## [0.1.12]

- Now fetching OS/arch specific binaries for Mac and Linux (Windows coming soon)
- Fixed translation loading when there were *a lot* of translations
- Fixed an issue regarding full name resolution for scoped property access

## [0.1.11]

- No significant changes

## [0.1.10]

- Updated icon
- Fixed translation file path display
- Fixed detection of helper methods in parser (e.g. `config()`, `redirect()`, etc)
- Made downloaded binary ~30% smaller

## [0.1.9]

- Fixed parsing for `new` anonymous classes (i.e. migrations)
- Fixed parsing for regular function declarations

## [0.1.8]

- Bugfix for (really) large `detect` responses
- Autocomplete for `view` related items orders by non-vendor views first
- Fixed bug for searching for views in non-directories
- Better support for earlier versions of Laravel (fixes for config and translation loading)
- If extension cannot load, give specific reason
- Support for linking in path helpers:
    - `base_path`
    - `resource_path`
    - `config_path`
    - `app_path`
    - `database_path`
    - `lang_path`
    - `public_path`
    - `storage_path`
    

## [0.1.7]

- Facade aliases are now considered
- Blade linking, hovering, and diagnostics are improved
- Fixed an error where variables were not consistently resolved

## [0.1.6]

- Fixed bug where we weren't restricting diagnostics to only PHP files
- Added timeout to parsing processes

## [0.1.5]

- Remove external dependency on file downloader extension
- Removed keybindings and commands for test runner

## [0.1.4]

- Aligned items you can autocomplete with linkable, hoverable, and diagnostic-able items
- Created settings for opting in and out of auto completion

## [0.1.3]

- Performance improvements
- Remove tests integration (for now)
- Added `to_route` completion
- Added `redirect()` helper chaining for hovering, linking, and diagnostics
