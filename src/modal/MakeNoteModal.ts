import { App, Modal, SearchComponent, Setting, TextComponent } from 'obsidian';

export class MakeNoteModal extends Modal {
  constructor(app: App, private readonly defaultFileName: string) {
    super(app);
  }

  public onOpen() {
    this.contentEl.empty();

    this.contentEl.createEl('h2', { text: 'Note Maker: Create new note' });

    new Setting(this.contentEl).setName('Filename').addText((t) => {
      t.setPlaceholder(this.defaultFileName).onChange((f) =>
        console.log(`File name changed: ${f}`),
      );
    });

    new TextComponent(this.contentEl)
      .setPlaceholder(this.defaultFileName)
      .onChange((f) => console.log(`File name changed: ${f}`));

    new SearchComponent(this.contentEl)
      .setPlaceholder('Folder')
      .onChange((f) => console.log(`Folder changed: ${f}`));

    new SearchComponent(this.containerEl)
      .setPlaceholder('Template')
      .onChange((t) => console.log(`Template changed: ${t}`));
  }

  public onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}
