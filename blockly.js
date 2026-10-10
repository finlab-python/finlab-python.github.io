/* eslint-disable no-use-before-define */

import * as Blockly from 'blockly/core'
import 'blockly/python'

const dataColor = 230
const simpleOperatorColor = 200
const complexOperatorColor = 200
const structureColor = 50
const simulationColor = 0

Blockly.HSV_SATURATION = 0.3 // 0 (inclusive) to 1 (exclusive), defaulting to 0.45
Blockly.HSV_VALUE = 0.8 // 0 (inclusive) to 1 (exclusive), defaulting to 0.65
Blockly.defineBlocksWithJsonArray([{
  "type": "data_type",
  "message0": "資料 %1",
  "args0": [
    {
      "type": "field_input",
      "name": "dataName",
      "text": "price:收盤價"
    }
  ],
  "output": null,
  "colour": dataColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "indicator",
  "message0": "技術指標 %1",
  "args0": [
    {
      "type": "field_input",
      "name": "dataName",
      "text": "RSI(timeperiod=20)"
    }
  ],
  "output": null,
  "colour": dataColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "df_rolling",
  "message0": "近 %1 筆 %2 的 %3",
  "args0": [
    {
      "type": "field_number",
      "name": "window",
      "value": 10
    },
    {
      "type": "input_value",
      "name": "df"
    },
    {
      "type": "field_dropdown",
      "name": "operation",
      "options": [
        [
          "平均",
          "mean"
        ],
        [
          "總和",
          "sum"
        ],
        [
          "最大值",
          "max"
        ],
        [
          "最小值",
          "min"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": (simpleOperatorColor + complexOperatorColor) / 2,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "backtest",
  "message0": "回測條件 %1 %2  %3 換股頻率 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "operator",
      "options": [
        [
          "and",
          "&"
        ],
        [
          "or",
          "|"
        ]
      ]
    }, {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "total_conditions"
    },
    {
      "type": "field_dropdown",
      "name": "rebalance_frequency",
      "options": [
        [
          "每日",
          "D"
        ],
        [
          "每週",
          "W"
        ],
        [
          "每月",
          "M"
        ],
        [
          "每季",
          "Q"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "colour": simulationColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "numerical_operator",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "val_1"
    },
    {
      "type": "field_dropdown",
      "name": "operations",
      "options": [
        [
          "+",
          "+"
        ],
        [
          "-",
          "-"
        ],
        [
          "x",
          "*"
        ],
        [
          "/",
          "/"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "val_2"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": simpleOperatorColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "inequality",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "val_1"
    },
    {
      "type": "field_dropdown",
      "name": "inequality",
      "options": [
        [
          ">",
          ">"
        ],
        [
          "≥",
          ">="
        ],
        [
          "<",
          "<"
        ],
        [
          "≤",
          "<="
        ],
        [
          "=",
          "="
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "val_2"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": simpleOperatorColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "logic_conditions",
  "message0": "%1 條件: %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "operator",
      "options": [
        [
          "and",
          "&&"
        ],
        [
          "or",
          "||"
        ]
      ]
    }, {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "Condition"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": structureColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sort",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "前",
          "nlargest"
        ],
        [
          "後",
          "nsmallest"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "threshold",
      "value": 10
    },
    {
      "type": "field_dropdown",
      "name": "unit",
      "options": [
        [
          "名",
          "n"
        ],
        [
          "%",
          "percent"
        ]
      ]
    }
  ],
  "message1": "%1",
  "args1": [
    {
      "type": "input_value",
      "name": "value"
    }],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": (simpleOperatorColor + complexOperatorColor) / 2,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sort_condition",
  "message0": "符合條件 %1 %2 %3",
  "args0": [{
    "type": "field_dropdown",
    "name": "operator",
    "options": [
      [
        "And",
        "&"
      ],
      [
        "Or",
        "|"
      ]
    ]
  },
  {
    "type": "input_dummy",
    "name": "dummy"
  },
  {
    "type": "input_statement",
    "name": "statements"
  },
  ],
  "message1": "的股票中，數值 %1 排名 %2 %3 %4",
  "args1": [
    {
      "type": "input_value",
      "name": "value"
    },
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "前",
          "nlargest"
        ],
        [
          "後",
          "nsmallest"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "threshold",
      "value": 10
    },
    {
      "type": "field_dropdown",
      "name": "unit",
      "options": [
        [
          "名",
          "n"
        ],
        [
          "%",
          "percent"
        ]
      ]
    }],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": structureColor,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "shift",
  "message0": "前 %1 筆 %2",
  "args0": [
    {
      "type": "field_number",
      "name": "nshift",
      "value": 1,
      "min": 0
    },
    {
      "type": "input_value",
      "name": "df"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": simpleOperatorColor,
  "tooltip": "",
  "helpUrl": ""
}])

function concatConditions(logic, statements) {
  statements = statements.split('#$')
  if (statements[statements.length - 1] === '') {
    statements.pop()
  }
  statements = statements.join('\n###' + logic)
  let code = statements
  code = code.replace(/ /g, '')
  code = code.replace(/#/g, ' ')

  return '(' + code + ')'
}

Blockly.Python.sort_condition = function (block) {
  const dropdownoption = block.getFieldValue('option')
  const numberthreshold = block.getFieldValue('threshold')
  const dropdownunit = block.getFieldValue('unit')
  const valuevalue = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC)
  let statements = Blockly.Python.statementToCode(block, 'statements')
  const dropdownoperator = block.getFieldValue('operator')
  statements = concatConditions(dropdownoperator, statements)

  let code = `(((${valuevalue}) * (${statements}))`
  // TODO: Assemble Python into code variable.
  if (dropdownoption === 'nlargest' && dropdownunit === 'n') {
    code += '.astype(float).is_largest(' + numberthreshold + '))'
  } else if (dropdownoption === 'nsmallest' && dropdownunit === 'n') {
    code += '.astype(float).is_smallest(' + numberthreshold + '))'
  } else if (dropdownoption === 'nlargest' && dropdownunit === 'percent') {
    code += `.rank(pct=True) > ${numberthreshold / 100}))`
  } else if (dropdownoption === 'nsmallest' && dropdownunit === 'percent') {
    code += `.rank(pct=True) < ${numberthreshold / 100}))`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return code
}

Blockly.Python.sort = function (block) {
  const dropdownoption = block.getFieldValue('option')
  const numberthreshold = block.getFieldValue('threshold')
  const dropdownunit = block.getFieldValue('unit')
  const valuevalue = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC)
  let code = ''
  // TODO: Assemble Python into code variable.
  if (dropdownoption === 'nlargest' && dropdownunit === 'n') {
    code = valuevalue + '.is_largest(' + numberthreshold + ')'
  } else if (dropdownoption === 'nsmallest' && dropdownunit === 'n') {
    code = valuevalue + '.is_smallest(' + numberthreshold + ')'
  } else if (dropdownoption === 'nlargest' && dropdownunit === 'percent') {
    code = '(' + valuevalue + `.rank(pct=True) > ${numberthreshold / 100})`
  } else if (dropdownoption === 'nsmallest' && dropdownunit === 'percent') {
    code = '(' + valuevalue + `.rank(pct=True) < ${numberthreshold / 100})`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return code
}

Blockly.Python.backtest = function (block) {
  const dropdownoperator = block.getFieldValue('operator')
  const valuetotalconditions = Blockly.Python.statementToCode(block, 'total_conditions')
  const valueweight = Blockly.Python.valueToCode(block, 'weight', Blockly.Python.ORDER_ATOMIC)
  const dropdownrebalancefrequency = block.getFieldValue('rebalance_frequency')
  // TODO: Assemble Python into code variable.
  let code = 'from finlab import backtest\n'
  code += 'from finlab import data\n\n'
  code += 'buy = ' + concatConditions(dropdownoperator, valuetotalconditions) + '\n\n'

  code += 'backtest.sim(buy, resample="' + dropdownrebalancefrequency + '")\n'
  return code // [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python.df_rolling = function (block) {
  const numberWindow = block.getFieldValue('window')
  const valuedf = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC)
  const dropdownoperation = block.getFieldValue('operation')
  // TODO: Assemble Python into code variable.
  const code = `(${valuedf}).rolling(${numberWindow}).${dropdownoperation}()`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]
}


Blockly.Python.logic_conditions = function (block) {
  const dropdownoperator = block.getFieldValue('operator')
  const statementscondition = Blockly.Python.statementToCode(block, 'Condition')

  // TODO: Assemble Python into code variable.
  const code = concatConditions(dropdownoperator, statementscondition)

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]
}

Blockly.Python.data_type = function (block) {
  const textdataname = block.getFieldValue('dataName')
  // TODO: Assemble Python into code variable.
  const code = `data.get("${textdataname}")`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]
}

Blockly.Python.indicator = function (block) {
  const textDataname = block.getFieldValue('dataName')

  const indicatorName = textDataname.split('(')[0]
  const indicatorVariables = textDataname.split('(')[1].replace(')', '')

  // TODO: Assemble Python into code variable.
  const code = `data.indicator("${indicatorName}", ${indicatorVariables})`

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]
}

Blockly.Python.numerical_operator = function (block) {
  const valueval1 = Blockly.Python.valueToCode(block, 'val_1', Blockly.Python.ORDER_ATOMIC)
  const dropdownoperations = block.getFieldValue('operations')
  const valueval2 = Blockly.Python.valueToCode(block, 'val_2', Blockly.Python.ORDER_ATOMIC)
  // TODO: Assemble Python into code variable.
  const code = `(${valueval1}${dropdownoperations}${valueval2})`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]
}

Blockly.Python.inequality = function (block) {
  const valueval1 = Blockly.Python.valueToCode(block, 'val_1', Blockly.Python.ORDER_ATOMIC)
  const dropdowninequality = block.getFieldValue('inequality')
  const valueval2 = Blockly.Python.valueToCode(block, 'val_2', Blockly.Python.ORDER_ATOMIC)
  const code = `(${valueval1}${dropdowninequality}${valueval2})`

  return code + '#$'
}

Blockly.Python.shift = function (block) {
  const numberNshift = block.getFieldValue('nshift')
  const valuedf = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC)
  // TODO: Assemble Python into code variable.
  const code = `(${valuedf}).shift(${numberNshift})`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]
}

export const BlocklyConfig = Blockly

