import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service'

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslateService) {}

  transform(value: any, args?: any): any {
    return this.translationService.translate(value)
  }

}
