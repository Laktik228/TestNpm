import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-npm-lib',
  template: `
    <p>
      test-npm-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TestNpmLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
