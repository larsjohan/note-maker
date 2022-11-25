import { App, PluginSettingTab, Plugin_2, Setting } from 'obsidian';
import { NoteMakerSettingsModel } from './NoteMakerSettingsModel';

export class SettingsManager extends PluginSettingTab {
  private static fallbackFileName = 'Undefined';

  private readonly settings: NoteMakerSettingsModel = {
    defaultFileName: SettingsManager.fallbackFileName,
    disableFolderDiscovery: false,
    disableTemplateDiscovery: false,
  };

  constructor(public readonly app: App, private readonly plugin: Plugin_2) {
    super(app, plugin);
  }

  public get defaultFileName(): string {
    return this.settings.defaultFileName || SettingsManager.fallbackFileName;
  }

  public display() {
    this.containerEl.empty();
    this.makeHeadline('Settings for Note Maker');

    new Setting(this.containerEl)
      .setName('Default filename')
      .setDesc(
        "This name will be used if you don't provide a name when creating a new note",
      )
      .addText((text) =>
        text
          .setPlaceholder(SettingsManager.fallbackFileName)
          .setValue(this.settings.defaultFileName || '')
          .onChange(async (value) => {
            this.settings.defaultFileName = value || '';
            await this.saveSettings();
          }),
      );
  }

  public async loadSettings() {
    const storedSettings: NoteMakerSettingsModel | null =
      await this.plugin.loadData();
    if (!storedSettings) {
      return;
    }
    this.settings.defaultFileName = storedSettings.defaultFileName || '';
    this.settings.disableFolderDiscovery =
      !!storedSettings?.disableFolderDiscovery;
    this.settings.disableTemplateDiscovery =
      !!storedSettings?.disableTemplateDiscovery;
  }

  public async saveSettings() {
    await this.plugin.saveData(this.settings);
  }

  private makeHeadline(headline: string): void {
    this.containerEl.createEl('h2', { text: headline });
  }
}
