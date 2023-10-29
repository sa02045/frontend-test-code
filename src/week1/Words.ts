export interface Word {
  word: string;
  mean: string;
}

export class Words {
  #wordList: Word[] = [];

  public add(word: Word) {
    this.#wordList.push(word);
  }

  public remove(word: Word) {
    this.#wordList = this.#wordList.filter((w) => w.word !== word.word);
  }

  public check(word: Word) {
    return this.#wordList.some((w) => w.word === word.word);
  }

  public length() {
    return this.#wordList.length;
  }
}
