import {Row} from "./Row";
import {Column} from "./Column";
export class SpaceTable {

  private rows: Row[] = []
  private hostElement: HTMLElement


  /**
   *
   * @param selector where the component will attach too
   * @param routes
   */
  constructor(public selector: string, public columns: Column[]) {
    this.hostElement = <HTMLElement> document.querySelector(selector)
  }

  attach() {
  }

  push(row: Row) {
    this.rows.push(row)
    this.render()
  }

  addRows(rows: Row[]) {
    this.rows = this.rows.concat(rows)
    this.render()
  }
  pop() {
    this.rows.pop()
    this.render()
  }

  render() {
    let rowsHTML = this.rows.map((row: Row) => {
      let tds: string = ""
      this.columns.forEach((column) => {
        tds += `<td>${row.fields[column.field]}</td>`
      })
      return `<tr>${tds}</tr>`
    }).join("")

    this.hostElement.innerHTML = `<table>${rowsHTML}</table>`
  }
}


