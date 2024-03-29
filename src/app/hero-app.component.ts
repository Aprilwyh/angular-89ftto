import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  // 给 @Component 装饰器添加一个 styles 数组型属性。
  // 只对当前组件生效。 不会作用于模板中嵌入的任何组件，也不会作用于投影进// 来的组件（如 ng-content ）。
  styles: ['h1 { font-weight: normal; }']
})
export class HeroAppComponent {
  hero = new Hero(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/