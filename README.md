# Note-maker - An [Obsidian.md](https://obsidian.md/) plugin that makes your note-making easier!

The main features (Planned, not implemented):
- [ ] Allows you to define the name of the file *before* the file is created so that templates can more easily utilize the filename.
- [ ] Allows you to select the folder the file should be created in *before* the file is created, so that template-plugins may select an appropriate template based on the location
- [ ] Allows you to select/override the template to use when the file has been created

## Installation
TBA

## Development

This repo is based on the [Obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin).
Also check the [Obsidian API documentation](https://github.com/obsidianmd/obsidian-api).

### Releasing a new version
1. Update `minAppVersion` in `manifest.json` to the earliest version of Obsidian the new release will support.
2. Run `yarn version patch|minor|major`
