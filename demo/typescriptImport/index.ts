import SpaceTable from "space-table";
import {Row} from "../../src/Row";
import {Column} from "../../src/Column";
var columns:Column[] = [
  new Column("command"),
  new Column("output"),
]
let spaceTable = new SpaceTable(".space-table",columns)
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
