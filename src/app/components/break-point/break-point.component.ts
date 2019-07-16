import { Component, OnInit } from '@angular/core';
import { BreakPoint } from 'src/app/models/BreakPoint';

@Component({
  selector: 'app-break-point',
  template: '',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BreakPointComponent implements OnInit {

  private breakPoints: BreakPoint[];
  private value: string;
  private size: number;
  constructor() {
    this.breakPoints = [{
      value: 576,
      alias: 'sm',
      longAlias: 'small'
    },
    {
      value: 768,
      alias: 'md',
      longAlias: 'medium'
    },
    {
      value: 992,
      alias: 'lg',
      longAlias: 'large'
    },
    {
      value: Infinity,
      alias: 'xl',
      longAlias: 'extraLarge'
    }
    ]
  }

  ngOnInit() {
    this.onResize()
  }

  onResize() {
    const clientWidth = window.innerWidth
    this.size = clientWidth
    this.value = this.breakPoints.find(bp => clientWidth <= bp.value)
  }

  gte(reqBp: string): boolean {
    let reqBpObj = this.breakPoints.find(bp => bp.alias === reqBp)
    return this.size >= reqBpObj.value
  }

  gt(reqBp: string): boolean {
    let reqBpObj = this.breakPoints.find(bp => bp.alias === reqBp)
    return this.size > reqBpObj.value
  }

  lt(reqBp: string): boolean {
    let reqBpObj = this.breakPoints.find(bp => bp.alias === reqBp)
    return this.size < reqBpObj.value
  }

  lte(reqBp: string): boolean {
    let reqBpObj = this.breakPoints.find(bp => bp.alias === reqBp)
    return this.size <= reqBpObj.value
  }

}
