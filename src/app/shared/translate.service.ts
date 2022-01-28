import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslationSet {
  public languange: string | undefined;
  public values: { [key: string]: string } = {}
}

export class TranslateService {
  public languages = ['ger', 'eng']

  public language = 'ger'

  private dictionary: { [key: string]: TranslationSet } = {
    ger: {
      languange: 'ger',
      values: {
        example: 'Beispiel',
      },
    },
    eng: {
      languange: 'eng',
      values: {
        example: 'Example',
      },
    },
  }

  constructor() {}

  translate(key: string): any {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[key]
    }
  }

}
