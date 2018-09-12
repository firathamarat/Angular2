/*

split nedir?
foeach nedir
charArt : ilk harf almak için kullanılır
upperCase
splşce


*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalLetter' })
export class CapitalLetter implements PipeTransform {

    //Ayrıva başka değişkenler ve parametreler alabilmektedir
    transform(value: any): any {

        //result adında değişken declare edildi
        var result = '';

        //Gelen Value değeriniin uzunluğunun 0 dan büyük olması durumu
        if (value.length > 0) {

            var words = value.split(" ");
            words.forEach((word) => {

                result += word.charAt(0).toUpperCase() + word.slice(1) + " ";

            });

        }

        return result;

    }
}

/*pipe module eklenmelidir.

import { CapitalLetter } from './create-pipe/capitalLetter';

declarations:  CapitalLetter

Artık pipe sisteme entegra çalışabilir.
*/