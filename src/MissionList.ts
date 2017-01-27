import {CONSTANTS} from "./constants";
export default class MissionList {

  private rows = []
  private hostElement: HTMLElement


  /**
   *
   * @param selector where the component will attach too
   * @param routes
   */
  constructor(public selector: string) {
    this.hostElement = <HTMLElement> document.querySelector(selector)
  }

  attach() {
  }

  addRow(row) {
    this.rows.push(row)
    this.render()
  }

  addRows(rows) {
    this.rows = this.rows.concat(rows)
    this.render()
  }

  render() {
    let rowsHTML = this.rows.map((row) => {
      let tds: string = ""
      for (var prop in row) {
        tds += `<td>${row[prop]}</td>`
      }
      return `<tr>${tds}</tr>`
    }).join("")

    this.hostElement.innerHTML = `<table>${rowsHTML}</table>`
  }
}

