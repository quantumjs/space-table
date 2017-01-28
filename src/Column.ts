export class Column {
  private formatFunction: (item: any) => string

  constructor(public field: string) {
  }

  setFormatFunction(formatFunction: (item: any) => string) {
    this.formatFunction(formatFunction)
  }
}

