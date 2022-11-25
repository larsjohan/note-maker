/**
 * The available settings for this plugin
 */
export interface NoteMakerSettingsModel {
  /**
   * The filename to use if no filename is provided.
   * If left blank, the Obsidian-default ("Undefined") will be used.
   */
  defaultFileName?: string;
  /**
   * Disable the option to select target folder.
   * Useful if other plugins takes care of this.
   * Disabled by default
   */
  disableFolderDiscovery?: boolean;
  /**
   * Disable the option to select template.
   * Useful if other plugins takes care of this.
   * Disabled by default
   */
  disableTemplateDiscovery?: boolean;
}
