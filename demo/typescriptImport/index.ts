import SpaceTable from "space-table";
import {Row} from "../../src/Row";
let spaceTable = new SpaceTable(".space-table")
let rows = [
  new Row(1, {
    foo: 2,
    foo2: 1,
  }),
  new Row(2, {
    foo: 2,
    foo2: 1,
  })
]
spaceTable.addRows(rows)
