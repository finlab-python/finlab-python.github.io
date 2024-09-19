/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{453:function(t,n,o){var e,r,E;r=[o(413),o(546)],void 0===(E="function"==typeof(e=function(t,n){"use strict";return t.Python=n,n})?e.apply(n,r):e)||(t.exports=E)},546:function(t,n,o){var e,r,E;r=[o(427)],void 0===(E="function"==typeof(e=function(t){"use strict";return t.Python=new t.Generator("Python"),t.Python.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip"),t.Python.ORDER_ATOMIC=0,t.Python.ORDER_COLLECTION=1,t.Python.ORDER_STRING_CONVERSION=1,t.Python.ORDER_MEMBER=2.1,t.Python.ORDER_FUNCTION_CALL=2.2,t.Python.ORDER_EXPONENTIATION=3,t.Python.ORDER_UNARY_SIGN=4,t.Python.ORDER_BITWISE_NOT=4,t.Python.ORDER_MULTIPLICATIVE=5,t.Python.ORDER_ADDITIVE=6,t.Python.ORDER_BITWISE_SHIFT=7,t.Python.ORDER_BITWISE_AND=8,t.Python.ORDER_BITWISE_XOR=9,t.Python.ORDER_BITWISE_OR=10,t.Python.ORDER_RELATIONAL=11,t.Python.ORDER_LOGICAL_NOT=12,t.Python.ORDER_LOGICAL_AND=13,t.Python.ORDER_LOGICAL_OR=14,t.Python.ORDER_CONDITIONAL=15,t.Python.ORDER_LAMBDA=16,t.Python.ORDER_NONE=99,t.Python.ORDER_OVERRIDES=[[t.Python.ORDER_FUNCTION_CALL,t.Python.ORDER_MEMBER],[t.Python.ORDER_FUNCTION_CALL,t.Python.ORDER_FUNCTION_CALL],[t.Python.ORDER_MEMBER,t.Python.ORDER_MEMBER],[t.Python.ORDER_MEMBER,t.Python.ORDER_FUNCTION_CALL],[t.Python.ORDER_LOGICAL_NOT,t.Python.ORDER_LOGICAL_NOT],[t.Python.ORDER_LOGICAL_AND,t.Python.ORDER_LOGICAL_AND],[t.Python.ORDER_LOGICAL_OR,t.Python.ORDER_LOGICAL_OR]],t.Python.isInitialized=!1,t.Python.init=function(a){t.Python.PASS=this.INDENT+"pass\n",t.Python.definitions_=Object.create(null),t.Python.functionNames_=Object.create(null),t.Python.variableDB_?t.Python.variableDB_.reset():t.Python.variableDB_=new t.Names(t.Python.RESERVED_WORDS_),t.Python.variableDB_.setVariableMap(a.getVariableMap());for(var b=[],n=t.Variables.allDeveloperVariables(a),o=0;o<n.length;o++)b.push(t.Python.variableDB_.getName(n[o],t.Names.DEVELOPER_VARIABLE_TYPE)+" = None");for(a=t.Variables.allUsedVarModels(a),o=0;o<a.length;o++)b.push(t.Python.variableDB_.getName(a[o].getId(),t.VARIABLE_CATEGORY_NAME)+" = None");t.Python.definitions_.variables=b.join("\n"),this.isInitialized=!0},t.Python.finish=function(a){var n,b=[],o=[];for(n in t.Python.definitions_){var e=t.Python.definitions_[n];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?b.push(e):o.push(e)}return delete t.Python.definitions_,delete t.Python.functionNames_,t.Python.variableDB_.reset(),(b.join("\n")+"\n\n"+o.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a},t.Python.scrubNakedValue=function(a){return a+"\n"},t.Python.quote_=function(a){var b="'";return-1!==(a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n")).indexOf("'")&&(-1===a.indexOf('"')?b='"':a=a.replace(/'/g,"\\'")),b+a+b},t.Python.multiline_quote_=function(a){return a.split(/\n/g).map(t.Python.quote_).join(" + '\\n' + \n")},t.Python.scrub_=function(a,b,n){var o="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(e=t.utils.string.wrap(e,t.Python.COMMENT_WRAP-3),o+=t.Python.prefixLines(e+"\n","# "));for(var r=0;r<a.inputList.length;r++)a.inputList[r].type==t.inputTypes.VALUE&&(e=a.inputList[r].connection.targetBlock())&&(e=t.Python.allNestedComments(e))&&(o+=t.Python.prefixLines(e,"# "))}return a=a.nextConnection&&a.nextConnection.targetBlock(),o+b+(n=n?"":t.Python.blockToCode(a))},t.Python.getAdjustedInt=function(a,b,n,o){n=n||0,a.workspace.options.oneBasedIndex&&n--;var e=a.workspace.options.oneBasedIndex?"1":"0";return a=t.Python.valueToCode(a,b,n?t.Python.ORDER_ADDITIVE:t.Python.ORDER_NONE)||e,t.isNumber(a)?(a=parseInt(a,10)+n,o&&(a=-a)):(a=0<n?"int("+a+" + "+n+")":0>n?"int("+a+" - "+-n+")":"int("+a+")",o&&(a="-"+a)),a},t.Python.colour={},t.Python.colour_picker=function(a){return[t.Python.quote_(a.getFieldValue("COLOUR")),t.Python.ORDER_ATOMIC]},t.Python.colour_random=function(a){return t.Python.definitions_.import_random="import random",["'#%06x' % random.randint(0, 2**24 - 1)",t.Python.ORDER_FUNCTION_CALL]},t.Python.colour_rgb=function(a){return[t.Python.provideFunction_("colour_rgb",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b):","  r = round(min(100, max(0, r)) * 2.55)","  g = round(min(100, max(0, g)) * 2.55)","  b = round(min(100, max(0, b)) * 2.55)","  return '#%02x%02x%02x' % (r, g, b)"])+"("+(t.Python.valueToCode(a,"RED",t.Python.ORDER_NONE)||0)+", "+(t.Python.valueToCode(a,"GREEN",t.Python.ORDER_NONE)||0)+", "+(a=t.Python.valueToCode(a,"BLUE",t.Python.ORDER_NONE)||0)+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.colour_blend=function(a){return[t.Python.provideFunction_("colour_blend",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(colour1, colour2, ratio):","  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)","  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)","  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)","  ratio = min(1, max(0, ratio))","  r = round(r1 * (1 - ratio) + r2 * ratio)","  g = round(g1 * (1 - ratio) + g2 * ratio)","  b = round(b1 * (1 - ratio) + b2 * ratio)","  return '#%02x%02x%02x' % (r, g, b)"])+"("+(t.Python.valueToCode(a,"COLOUR1",t.Python.ORDER_NONE)||"'#000000'")+", "+(t.Python.valueToCode(a,"COLOUR2",t.Python.ORDER_NONE)||"'#000000'")+", "+(a=t.Python.valueToCode(a,"RATIO",t.Python.ORDER_NONE)||0)+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.lists={},t.Python.lists_create_empty=function(a){return["[]",t.Python.ORDER_ATOMIC]},t.Python.lists_create_with=function(a){for(var b=Array(a.itemCount_),n=0;n<a.itemCount_;n++)b[n]=t.Python.valueToCode(a,"ADD"+n,t.Python.ORDER_NONE)||"None";return["["+b.join(", ")+"]",t.Python.ORDER_ATOMIC]},t.Python.lists_repeat=function(a){return["["+(t.Python.valueToCode(a,"ITEM",t.Python.ORDER_NONE)||"None")+"] * "+(a=t.Python.valueToCode(a,"NUM",t.Python.ORDER_MULTIPLICATIVE)||"0"),t.Python.ORDER_MULTIPLICATIVE]},t.Python.lists_length=function(a){return["len("+(t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"[]")+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.lists_isEmpty=function(a){return["not len("+(t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"[]")+")",t.Python.ORDER_LOGICAL_NOT]},t.Python.lists_indexOf=function(a){var b=t.Python.valueToCode(a,"FIND",t.Python.ORDER_NONE)||"[]",n=t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"''";if(a.workspace.options.oneBasedIndex)var o=" 0",e=" + 1",r="";else o=" -1",e="",r=" - 1";return"FIRST"==a.getFieldValue("END")?[(a=t.Python.provideFunction_("first_index",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(my_list, elem):","  try: index = my_list.index(elem)"+e,"  except: index ="+o,"  return index"]))+"("+n+", "+b+")",t.Python.ORDER_FUNCTION_CALL]:[(a=t.Python.provideFunction_("last_index",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(my_list, elem):","  try: index = len(my_list) - my_list[::-1].index(elem)"+r,"  except: index ="+o,"  return index"]))+"("+n+", "+b+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",n=a.getFieldValue("WHERE")||"FROM_START",o=t.Python.valueToCode(a,"VALUE","RANDOM"==n?t.Python.ORDER_NONE:t.Python.ORDER_MEMBER)||"[]";switch(n){case"FIRST":if("GET"==b)return[o+"[0]",t.Python.ORDER_MEMBER];if("GET_REMOVE"==b)return[o+".pop(0)",t.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return o+".pop(0)\n";break;case"LAST":if("GET"==b)return[o+"[-1]",t.Python.ORDER_MEMBER];if("GET_REMOVE"==b)return[o+".pop()",t.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return o+".pop()\n";break;case"FROM_START":if(a=t.Python.getAdjustedInt(a,"AT"),"GET"==b)return[o+"["+a+"]",t.Python.ORDER_MEMBER];if("GET_REMOVE"==b)return[o+".pop("+a+")",t.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return o+".pop("+a+")\n";break;case"FROM_END":if(a=t.Python.getAdjustedInt(a,"AT",1,!0),"GET"==b)return[o+"["+a+"]",t.Python.ORDER_MEMBER];if("GET_REMOVE"==b)return[o+".pop("+a+")",t.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return o+".pop("+a+")\n";break;case"RANDOM":if(t.Python.definitions_.import_random="import random","GET"==b)return["random.choice("+o+")",t.Python.ORDER_FUNCTION_CALL];if(o=t.Python.provideFunction_("lists_remove_random_item",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  x = int(random.random() * len(myList))","  return myList.pop(x)"])+"("+o+")","GET_REMOVE"==b)return[o,t.Python.ORDER_FUNCTION_CALL];if("REMOVE"==b)return o+"\n"}throw Error("Unhandled combination (lists_getIndex).")},t.Python.lists_setIndex=function(a){var b=t.Python.valueToCode(a,"LIST",t.Python.ORDER_MEMBER)||"[]",n=a.getFieldValue("MODE")||"GET",o=a.getFieldValue("WHERE")||"FROM_START",e=t.Python.valueToCode(a,"TO",t.Python.ORDER_NONE)||"None";switch(o){case"FIRST":if("SET"==n)return b+"[0] = "+e+"\n";if("INSERT"==n)return b+".insert(0, "+e+")\n";break;case"LAST":if("SET"==n)return b+"[-1] = "+e+"\n";if("INSERT"==n)return b+".append("+e+")\n";break;case"FROM_START":if(a=t.Python.getAdjustedInt(a,"AT"),"SET"==n)return b+"["+a+"] = "+e+"\n";if("INSERT"==n)return b+".insert("+a+", "+e+")\n";break;case"FROM_END":if(a=t.Python.getAdjustedInt(a,"AT",1,!0),"SET"==n)return b+"["+a+"] = "+e+"\n";if("INSERT"==n)return b+".insert("+a+", "+e+")\n";break;case"RANDOM":if(t.Python.definitions_.import_random="import random",b.match(/^\w+$/)?a="":(o=(a=t.Python.variableDB_.getDistinctName("tmp_list",t.VARIABLE_CATEGORY_NAME))+" = "+b+"\n",b=a,a=o),a+=(o=t.Python.variableDB_.getDistinctName("tmp_x",t.VARIABLE_CATEGORY_NAME))+" = int(random.random() * len("+b+"))\n","SET"==n)return a+(b+"[")+o+"] = "+e+"\n";if("INSERT"==n)return a+(b+".insert(")+o+", "+e+")\n"}throw Error("Unhandled combination (lists_setIndex).")},t.Python.lists_getSublist=function(a){var b=t.Python.valueToCode(a,"LIST",t.Python.ORDER_MEMBER)||"[]",n=a.getFieldValue("WHERE1"),o=a.getFieldValue("WHERE2");switch(n){case"FROM_START":"0"==(n=t.Python.getAdjustedInt(a,"AT1"))&&(n="");break;case"FROM_END":n=t.Python.getAdjustedInt(a,"AT1",1,!0);break;case"FIRST":n="";break;default:throw Error("Unhandled option (lists_getSublist)")}switch(o){case"FROM_START":a=t.Python.getAdjustedInt(a,"AT2",1);break;case"FROM_END":a=t.Python.getAdjustedInt(a,"AT2",0,!0),t.isNumber(String(a))?"0"==a&&(a=""):(t.Python.definitions_.import_sys="import sys",a+=" or sys.maxsize");break;case"LAST":a="";break;default:throw Error("Unhandled option (lists_getSublist)")}return[b+"["+n+" : "+a+"]",t.Python.ORDER_MEMBER]},t.Python.lists_sort=function(a){var b=t.Python.valueToCode(a,"LIST",t.Python.ORDER_NONE)||"[]",n=a.getFieldValue("TYPE");return a="1"===a.getFieldValue("DIRECTION")?"False":"True",[t.Python.provideFunction_("lists_sort",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(my_list, type, reverse):","  def try_float(s):","    try:","      return float(s)","    except:","      return 0","  key_funcs = {",'    "NUMERIC": try_float,','    "TEXT": str,','    "IGNORE_CASE": lambda s: str(s).lower()',"  }","  key_func = key_funcs[type]","  list_cpy = list(my_list)","  return sorted(list_cpy, key=key_func, reverse=reverse)"])+"("+b+', "'+n+'", '+a+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.lists_split=function(a){var b=a.getFieldValue("MODE");if("SPLIT"==b)a=(b=t.Python.valueToCode(a,"INPUT",t.Python.ORDER_MEMBER)||"''")+".split("+(a=t.Python.valueToCode(a,"DELIM",t.Python.ORDER_NONE))+")";else{if("JOIN"!=b)throw Error("Unknown mode: "+b);b=t.Python.valueToCode(a,"INPUT",t.Python.ORDER_NONE)||"[]",a=(a=t.Python.valueToCode(a,"DELIM",t.Python.ORDER_MEMBER)||"''")+".join("+b+")"}return[a,t.Python.ORDER_FUNCTION_CALL]},t.Python.lists_reverse=function(a){return["list(reversed("+(t.Python.valueToCode(a,"LIST",t.Python.ORDER_NONE)||"[]")+"))",t.Python.ORDER_FUNCTION_CALL]},t.Python.logic={},t.Python.controls_if=function(a){var b=0,n="";t.Python.STATEMENT_PREFIX&&(n+=t.Python.injectId(t.Python.STATEMENT_PREFIX,a));do{var o=t.Python.valueToCode(a,"IF"+b,t.Python.ORDER_NONE)||"False",e=t.Python.statementToCode(a,"DO"+b)||t.Python.PASS;t.Python.STATEMENT_SUFFIX&&(e=t.Python.prefixLines(t.Python.injectId(t.Python.STATEMENT_SUFFIX,a),t.Python.INDENT)+e),n+=(0==b?"if ":"elif ")+o+":\n"+e,++b}while(a.getInput("IF"+b));return(a.getInput("ELSE")||t.Python.STATEMENT_SUFFIX)&&(e=t.Python.statementToCode(a,"ELSE")||t.Python.PASS,t.Python.STATEMENT_SUFFIX&&(e=t.Python.prefixLines(t.Python.injectId(t.Python.STATEMENT_SUFFIX,a),t.Python.INDENT)+e),n+="else:\n"+e),n},t.Python.controls_ifelse=t.Python.controls_if,t.Python.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],n=t.Python.ORDER_RELATIONAL;return[(t.Python.valueToCode(a,"A",n)||"0")+" "+b+" "+(a=t.Python.valueToCode(a,"B",n)||"0"),n]},t.Python.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"and":"or",n="and"==b?t.Python.ORDER_LOGICAL_AND:t.Python.ORDER_LOGICAL_OR,o=t.Python.valueToCode(a,"A",n);if(a=t.Python.valueToCode(a,"B",n),o||a){var e="and"==b?"True":"False";o||(o=e),a||(a=e)}else a=o="False";return[o+" "+b+" "+a,n]},t.Python.logic_negate=function(a){return["not "+(t.Python.valueToCode(a,"BOOL",t.Python.ORDER_LOGICAL_NOT)||"True"),t.Python.ORDER_LOGICAL_NOT]},t.Python.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"True":"False",t.Python.ORDER_ATOMIC]},t.Python.logic_null=function(a){return["None",t.Python.ORDER_ATOMIC]},t.Python.logic_ternary=function(a){var b=t.Python.valueToCode(a,"IF",t.Python.ORDER_CONDITIONAL)||"False";return[(t.Python.valueToCode(a,"THEN",t.Python.ORDER_CONDITIONAL)||"None")+" if "+b+" else "+(a=t.Python.valueToCode(a,"ELSE",t.Python.ORDER_CONDITIONAL)||"None"),t.Python.ORDER_CONDITIONAL]},t.Python.loops={},t.Python.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(parseInt(a.getFieldValue("TIMES"),10)):t.Python.valueToCode(a,"TIMES",t.Python.ORDER_NONE)||"0";b=t.isNumber(b)?parseInt(b,10):"int("+b+")";var n=t.Python.statementToCode(a,"DO");return n=t.Python.addLoopTrap(n,a)||t.Python.PASS,"for "+t.Python.variableDB_.getDistinctName("count",t.VARIABLE_CATEGORY_NAME)+" in range("+b+"):\n"+n},t.Python.controls_repeat=t.Python.controls_repeat_ext,t.Python.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),n=t.Python.valueToCode(a,"BOOL",b?t.Python.ORDER_LOGICAL_NOT:t.Python.ORDER_NONE)||"False",o=t.Python.statementToCode(a,"DO");return b&&(n="not "+n),"while "+n+":\n"+(o=t.Python.addLoopTrap(o,a)||t.Python.PASS)},t.Python.controls_for=function(a){var b=t.Python.variableDB_.getName(a.getFieldValue("VAR"),t.VARIABLE_CATEGORY_NAME),n=t.Python.valueToCode(a,"FROM",t.Python.ORDER_NONE)||"0",o=t.Python.valueToCode(a,"TO",t.Python.ORDER_NONE)||"0",e=t.Python.valueToCode(a,"BY",t.Python.ORDER_NONE)||"1",r=t.Python.statementToCode(a,"DO");r=t.Python.addLoopTrap(r,a)||t.Python.PASS;var E="",h=function(){return t.Python.provideFunction_("upRange",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(start, stop, step):","  while start <= stop:","    yield start","    start += abs(step)"])},_=function(){return t.Python.provideFunction_("downRange",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(start, stop, step):","  while start >= stop:","    yield start","    start -= abs(step)"])};if(a=function(g,t,p){return"("+g+" <= "+t+") and "+h()+"("+g+", "+t+", "+p+") or "+_()+"("+g+", "+t+", "+p+")"},t.isNumber(n)&&t.isNumber(o)&&t.isNumber(e))n=Number(n),o=Number(o),e=Math.abs(Number(e)),0==n%1&&0==o%1&&0==e%1?(n<=o?(o++,a=0==n&&1==e?o:n+", "+o,1!=e&&(a+=", "+e)):a=n+", "+--o+", -"+e,a="range("+a+")"):(a=n<o?h():_(),a+="("+n+", "+o+", "+e+")");else{var P=function(g,n){return t.isNumber(g)?g=Number(g):g.match(/^\w+$/)?g="float("+g+")":(n=t.Python.variableDB_.getDistinctName(b+n,t.VARIABLE_CATEGORY_NAME),E+=n+" = float("+g+")\n",g=n),g};n=P(n,"_start"),o=P(o,"_end"),e=P(e,"_inc"),"number"==typeof n&&"number"==typeof o?(a=n<o?h():_(),a+="("+n+", "+o+", "+e+")"):a=a(n,o,e)}return E+="for "+b+" in "+a+":\n"+r},t.Python.controls_forEach=function(a){var b=t.Python.variableDB_.getName(a.getFieldValue("VAR"),t.VARIABLE_CATEGORY_NAME),n=t.Python.valueToCode(a,"LIST",t.Python.ORDER_RELATIONAL)||"[]",o=t.Python.statementToCode(a,"DO");return"for "+b+" in "+n+":\n"+(o=t.Python.addLoopTrap(o,a)||t.Python.PASS)},t.Python.controls_flow_statements=function(a){var b="";if(t.Python.STATEMENT_PREFIX&&(b+=t.Python.injectId(t.Python.STATEMENT_PREFIX,a)),t.Python.STATEMENT_SUFFIX&&(b+=t.Python.injectId(t.Python.STATEMENT_SUFFIX,a)),t.Python.STATEMENT_PREFIX){var n=t.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.getSurroundLoop(a);n&&!n.suppressPrefixSuffix&&(b+=t.Python.injectId(t.Python.STATEMENT_PREFIX,n))}switch(a.getFieldValue("FLOW")){case"BREAK":return b+"break\n";case"CONTINUE":return b+"continue\n"}throw Error("Unknown flow statement.")},t.Python.math={},t.Python.addReservedWords("math,random,Number"),t.Python.math_number=function(a){if(1/0==(a=Number(a.getFieldValue("NUM")))){a='float("inf")';var b=t.Python.ORDER_FUNCTION_CALL}else-1/0==a?(a='-float("inf")',b=t.Python.ORDER_UNARY_SIGN):b=0>a?t.Python.ORDER_UNARY_SIGN:t.Python.ORDER_ATOMIC;return[a,b]},t.Python.math_arithmetic=function(a){var b={ADD:[" + ",t.Python.ORDER_ADDITIVE],MINUS:[" - ",t.Python.ORDER_ADDITIVE],MULTIPLY:[" * ",t.Python.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",t.Python.ORDER_MULTIPLICATIVE],POWER:[" ** ",t.Python.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],n=b[0];return b=b[1],[(t.Python.valueToCode(a,"A",b)||"0")+n+(a=t.Python.valueToCode(a,"B",b)||"0"),b]},t.Python.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"==b){var n=t.Python.valueToCode(a,"NUM",t.Python.ORDER_UNARY_SIGN)||"0";return["-"+n,t.Python.ORDER_UNARY_SIGN]}switch(t.Python.definitions_.import_math="import math",a="SIN"==b||"COS"==b||"TAN"==b?t.Python.valueToCode(a,"NUM",t.Python.ORDER_MULTIPLICATIVE)||"0":t.Python.valueToCode(a,"NUM",t.Python.ORDER_NONE)||"0",b){case"ABS":n="math.fabs("+a+")";break;case"ROOT":n="math.sqrt("+a+")";break;case"LN":n="math.log("+a+")";break;case"LOG10":n="math.log10("+a+")";break;case"EXP":n="math.exp("+a+")";break;case"POW10":n="math.pow(10,"+a+")";break;case"ROUND":n="round("+a+")";break;case"ROUNDUP":n="math.ceil("+a+")";break;case"ROUNDDOWN":n="math.floor("+a+")";break;case"SIN":n="math.sin("+a+" / 180.0 * math.pi)";break;case"COS":n="math.cos("+a+" / 180.0 * math.pi)";break;case"TAN":n="math.tan("+a+" / 180.0 * math.pi)"}if(n)return[n,t.Python.ORDER_FUNCTION_CALL];switch(b){case"ASIN":n="math.asin("+a+") / math.pi * 180";break;case"ACOS":n="math.acos("+a+") / math.pi * 180";break;case"ATAN":n="math.atan("+a+") / math.pi * 180";break;default:throw Error("Unknown math operator: "+b)}return[n,t.Python.ORDER_MULTIPLICATIVE]},t.Python.math_constant=function(a){var b={PI:["math.pi",t.Python.ORDER_MEMBER],E:["math.e",t.Python.ORDER_MEMBER],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",t.Python.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",t.Python.ORDER_MEMBER],SQRT1_2:["math.sqrt(1.0 / 2)",t.Python.ORDER_MEMBER],INFINITY:["float('inf')",t.Python.ORDER_ATOMIC]};return"INFINITY"!=(a=a.getFieldValue("CONSTANT"))&&(t.Python.definitions_.import_math="import math"),b[a]},t.Python.math_number_property=function(a){var b=t.Python.valueToCode(a,"NUMBER_TO_CHECK",t.Python.ORDER_MULTIPLICATIVE)||"0",n=a.getFieldValue("PROPERTY");if("PRIME"==n)return t.Python.definitions_.import_math="import math",t.Python.definitions_.from_numbers_import_Number="from numbers import Number",[t.Python.provideFunction_("math_isPrime",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(n):","  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  # If n is not a number but a string, try parsing it.","  if not isinstance(n, Number):","    try:","      n = float(n)","    except:","      return False","  if n == 2 or n == 3:","    return True","  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.","  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:","    return False","  # Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for x in range(6, int(math.sqrt(n)) + 2, 6):","    if n % (x - 1) == 0 or n % (x + 1) == 0:","      return False","  return True"])+"("+b+")",t.Python.ORDER_FUNCTION_CALL];switch(n){case"EVEN":var o=b+" % 2 == 0";break;case"ODD":o=b+" % 2 == 1";break;case"WHOLE":o=b+" % 1 == 0";break;case"POSITIVE":o=b+" > 0";break;case"NEGATIVE":o=b+" < 0";break;case"DIVISIBLE_BY":if(!(a=t.Python.valueToCode(a,"DIVISOR",t.Python.ORDER_MULTIPLICATIVE))||"0"==a)return["False",t.Python.ORDER_ATOMIC];o=b+" % "+a+" == 0"}return[o,t.Python.ORDER_RELATIONAL]},t.Python.math_change=function(a){t.Python.definitions_.from_numbers_import_Number="from numbers import Number";var b=t.Python.valueToCode(a,"DELTA",t.Python.ORDER_ADDITIVE)||"0";return(a=t.Python.variableDB_.getName(a.getFieldValue("VAR"),t.VARIABLE_CATEGORY_NAME))+" = ("+a+" if isinstance("+a+", Number) else 0) + "+b+"\n"},t.Python.math_round=t.Python.math_single,t.Python.math_trig=t.Python.math_single,t.Python.math_on_list=function(a){var b=a.getFieldValue("OP");switch(a=t.Python.valueToCode(a,"LIST",t.Python.ORDER_NONE)||"[]",b){case"SUM":b="sum("+a+")";break;case"MIN":b="min("+a+")";break;case"MAX":b="max("+a+")";break;case"AVERAGE":t.Python.definitions_.from_numbers_import_Number="from numbers import Number",b=(b=t.Python.provideFunction_("math_mean",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = [e for e in myList if isinstance(e, Number)]","  if not localList: return","  return float(sum(localList)) / len(localList)"]))+"("+a+")";break;case"MEDIAN":t.Python.definitions_.from_numbers_import_Number="from numbers import Number",b=(b=t.Python.provideFunction_("math_median",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = sorted([e for e in myList if isinstance(e, Number)])","  if not localList: return","  if len(localList) % 2 == 0:","    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0","  else:","    return localList[(len(localList) - 1) // 2]"]))+"("+a+")";break;case"MODE":b=(b=t.Python.provideFunction_("math_modes",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(some_list):","  modes = []","  # Using a lists of [item, count] to keep count rather than dict",'  # to avoid "unhashable" errors when the counted item is itself a list or dict.',"  counts = []","  maxCount = 1","  for item in some_list:","    found = False","    for count in counts:","      if count[0] == item:","        count[1] += 1","        maxCount = max(maxCount, count[1])","        found = True","    if not found:","      counts.append([item, 1])","  for counted_item, item_count in counts:","    if item_count == maxCount:","      modes.append(counted_item)","  return modes"]))+"("+a+")";break;case"STD_DEV":t.Python.definitions_.import_math="import math",b=(b=t.Python.provideFunction_("math_standard_deviation",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(numbers):","  n = len(numbers)","  if n == 0: return","  mean = float(sum(numbers)) / n","  variance = sum((x - mean) ** 2 for x in numbers) / n","  return math.sqrt(variance)"]))+"("+a+")";break;case"RANDOM":t.Python.definitions_.import_random="import random",b="random.choice("+a+")";break;default:throw Error("Unknown operator: "+b)}return[b,t.Python.ORDER_FUNCTION_CALL]},t.Python.math_modulo=function(a){return[(t.Python.valueToCode(a,"DIVIDEND",t.Python.ORDER_MULTIPLICATIVE)||"0")+" % "+(a=t.Python.valueToCode(a,"DIVISOR",t.Python.ORDER_MULTIPLICATIVE)||"0"),t.Python.ORDER_MULTIPLICATIVE]},t.Python.math_constrain=function(a){return["min(max("+(t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"0")+", "+(t.Python.valueToCode(a,"LOW",t.Python.ORDER_NONE)||"0")+"), "+(a=t.Python.valueToCode(a,"HIGH",t.Python.ORDER_NONE)||"float('inf')")+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.math_random_int=function(a){return t.Python.definitions_.import_random="import random",["random.randint("+(t.Python.valueToCode(a,"FROM",t.Python.ORDER_NONE)||"0")+", "+(a=t.Python.valueToCode(a,"TO",t.Python.ORDER_NONE)||"0")+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.math_random_float=function(a){return t.Python.definitions_.import_random="import random",["random.random()",t.Python.ORDER_FUNCTION_CALL]},t.Python.math_atan2=function(a){t.Python.definitions_.import_math="import math";var b=t.Python.valueToCode(a,"X",t.Python.ORDER_NONE)||"0";return["math.atan2("+(t.Python.valueToCode(a,"Y",t.Python.ORDER_NONE)||"0")+", "+b+") / math.pi * 180",t.Python.ORDER_MULTIPLICATIVE]},t.Python.procedures={},t.Python.procedures_defreturn=function(a){for(var n,b=[],o=a.workspace,e=t.Variables.allUsedVarModels(o)||[],r=0;n=e[r];r++)n=n.name,-1==a.getVars().indexOf(n)&&b.push(t.Python.variableDB_.getName(n,t.VARIABLE_CATEGORY_NAME));for(e=t.Variables.allDeveloperVariables(o),r=0;r<e.length;r++)b.push(t.Python.variableDB_.getName(e[r],t.Names.DEVELOPER_VARIABLE_TYPE));b=b.length?t.Python.INDENT+"global "+b.join(", ")+"\n":"",o=t.Python.variableDB_.getName(a.getFieldValue("NAME"),t.PROCEDURE_CATEGORY_NAME),n="",t.Python.STATEMENT_PREFIX&&(n+=t.Python.injectId(t.Python.STATEMENT_PREFIX,a)),t.Python.STATEMENT_SUFFIX&&(n+=t.Python.injectId(t.Python.STATEMENT_SUFFIX,a)),n&&(n=t.Python.prefixLines(n,t.Python.INDENT));var E="";t.Python.INFINITE_LOOP_TRAP&&(E=t.Python.prefixLines(t.Python.injectId(t.Python.INFINITE_LOOP_TRAP,a),t.Python.INDENT));var h=t.Python.statementToCode(a,"STACK"),_=t.Python.valueToCode(a,"RETURN",t.Python.ORDER_NONE)||"",P="";h&&_&&(P=n),_?_=t.Python.INDENT+"return "+_+"\n":h||(h=t.Python.PASS);var g=[];for(e=a.getVars(),r=0;r<e.length;r++)g[r]=t.Python.variableDB_.getName(e[r],t.VARIABLE_CATEGORY_NAME);return b="def "+o+"("+g.join(", ")+"):\n"+b+n+E+h+P+_,b=t.Python.scrub_(a,b),t.Python.definitions_["%"+o]=b,null},t.Python.procedures_defnoreturn=t.Python.procedures_defreturn,t.Python.procedures_callreturn=function(a){for(var b=t.Python.variableDB_.getName(a.getFieldValue("NAME"),t.PROCEDURE_CATEGORY_NAME),n=[],o=a.getVars(),e=0;e<o.length;e++)n[e]=t.Python.valueToCode(a,"ARG"+e,t.Python.ORDER_NONE)||"None";return[b+"("+n.join(", ")+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.procedures_callnoreturn=function(a){return t.Python.procedures_callreturn(a)[0]+"\n"},t.Python.procedures_ifreturn=function(a){var b="if "+(t.Python.valueToCode(a,"CONDITION",t.Python.ORDER_NONE)||"False")+":\n";return t.Python.STATEMENT_SUFFIX&&(b+=t.Python.prefixLines(t.Python.injectId(t.Python.STATEMENT_SUFFIX,a),t.Python.INDENT)),a.hasReturnValue_?(a=t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"None",b+=t.Python.INDENT+"return "+a+"\n"):b+=t.Python.INDENT+"return\n",b},t.Python.texts={},t.Python.text=function(a){return[t.Python.quote_(a.getFieldValue("TEXT")),t.Python.ORDER_ATOMIC]},t.Python.text_multiline=function(a){var b=-1!=(a=t.Python.multiline_quote_(a.getFieldValue("TEXT"))).indexOf("+")?t.Python.ORDER_ADDITIVE:t.Python.ORDER_ATOMIC;return[a,b]},t.Python.text.forceString_=function(a){return t.Python.text.forceString_.strRegExp.test(a)?[a,t.Python.ORDER_ATOMIC]:["str("+a+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.text.forceString_.strRegExp=/^\s*'([^']|\\')*'\s*$/,t.Python.text_join=function(a){switch(a.itemCount_){case 0:return["''",t.Python.ORDER_ATOMIC];case 1:return a=t.Python.valueToCode(a,"ADD0",t.Python.ORDER_NONE)||"''",t.Python.text.forceString_(a);case 2:var b=t.Python.valueToCode(a,"ADD0",t.Python.ORDER_NONE)||"''";return a=t.Python.valueToCode(a,"ADD1",t.Python.ORDER_NONE)||"''",[a=t.Python.text.forceString_(b)[0]+" + "+t.Python.text.forceString_(a)[0],t.Python.ORDER_ADDITIVE];default:b=[];for(var n=0;n<a.itemCount_;n++)b[n]=t.Python.valueToCode(a,"ADD"+n,t.Python.ORDER_NONE)||"''";return[a="''.join([str("+(a=t.Python.variableDB_.getDistinctName("x",t.VARIABLE_CATEGORY_NAME))+") for "+a+" in ["+b.join(", ")+"]])",t.Python.ORDER_FUNCTION_CALL]}},t.Python.text_append=function(a){var b=t.Python.variableDB_.getName(a.getFieldValue("VAR"),t.VARIABLE_CATEGORY_NAME);return a=t.Python.valueToCode(a,"TEXT",t.Python.ORDER_NONE)||"''",b+" = str("+b+") + "+t.Python.text.forceString_(a)[0]+"\n"},t.Python.text_length=function(a){return["len("+(t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"''")+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.text_isEmpty=function(a){return["not len("+(t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"''")+")",t.Python.ORDER_LOGICAL_NOT]},t.Python.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"find":"rfind",n=t.Python.valueToCode(a,"FIND",t.Python.ORDER_NONE)||"''";return b=(t.Python.valueToCode(a,"VALUE",t.Python.ORDER_MEMBER)||"''")+"."+b+"("+n+")",a.workspace.options.oneBasedIndex?[b+" + 1",t.Python.ORDER_ADDITIVE]:[b,t.Python.ORDER_FUNCTION_CALL]},t.Python.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",n=t.Python.valueToCode(a,"VALUE","RANDOM"==b?t.Python.ORDER_NONE:t.Python.ORDER_MEMBER)||"''";switch(b){case"FIRST":return[n+"[0]",t.Python.ORDER_MEMBER];case"LAST":return[n+"[-1]",t.Python.ORDER_MEMBER];case"FROM_START":return[n+"["+(a=t.Python.getAdjustedInt(a,"AT"))+"]",t.Python.ORDER_MEMBER];case"FROM_END":return[n+"["+(a=t.Python.getAdjustedInt(a,"AT",1,!0))+"]",t.Python.ORDER_MEMBER];case"RANDOM":return t.Python.definitions_.import_random="import random",[t.Python.provideFunction_("text_random_letter",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(text):","  x = int(random.random() * len(text))","  return text[x];"])+"("+n+")",t.Python.ORDER_FUNCTION_CALL]}throw Error("Unhandled option (text_charAt).")},t.Python.text_getSubstring=function(a){var b=a.getFieldValue("WHERE1"),n=a.getFieldValue("WHERE2"),o=t.Python.valueToCode(a,"STRING",t.Python.ORDER_MEMBER)||"''";switch(b){case"FROM_START":"0"==(b=t.Python.getAdjustedInt(a,"AT1"))&&(b="");break;case"FROM_END":b=t.Python.getAdjustedInt(a,"AT1",1,!0);break;case"FIRST":b="";break;default:throw Error("Unhandled option (text_getSubstring)")}switch(n){case"FROM_START":a=t.Python.getAdjustedInt(a,"AT2",1);break;case"FROM_END":a=t.Python.getAdjustedInt(a,"AT2",0,!0),t.isNumber(String(a))?"0"==a&&(a=""):(t.Python.definitions_.import_sys="import sys",a+=" or sys.maxsize");break;case"LAST":a="";break;default:throw Error("Unhandled option (text_getSubstring)")}return[o+"["+b+" : "+a+"]",t.Python.ORDER_MEMBER]},t.Python.text_changeCase=function(a){var b={UPPERCASE:".upper()",LOWERCASE:".lower()",TITLECASE:".title()"}[a.getFieldValue("CASE")];return[(t.Python.valueToCode(a,"TEXT",t.Python.ORDER_MEMBER)||"''")+b,t.Python.ORDER_FUNCTION_CALL]},t.Python.text_trim=function(a){var b={LEFT:".lstrip()",RIGHT:".rstrip()",BOTH:".strip()"}[a.getFieldValue("MODE")];return[(t.Python.valueToCode(a,"TEXT",t.Python.ORDER_MEMBER)||"''")+b,t.Python.ORDER_FUNCTION_CALL]},t.Python.text_print=function(a){return"print("+(t.Python.valueToCode(a,"TEXT",t.Python.ORDER_NONE)||"''")+")\n"},t.Python.text_prompt_ext=function(a){var b=t.Python.provideFunction_("text_prompt",["def "+t.Python.FUNCTION_NAME_PLACEHOLDER_+"(msg):","  try:","    return raw_input(msg)","  except NameError:","    return input(msg)"]);return b=b+"("+(a.getField("TEXT")?t.Python.quote_(a.getFieldValue("TEXT")):t.Python.valueToCode(a,"TEXT",t.Python.ORDER_NONE)||"''")+")","NUMBER"==a.getFieldValue("TYPE")&&(b="float("+b+")"),[b,t.Python.ORDER_FUNCTION_CALL]},t.Python.text_prompt=t.Python.text_prompt_ext,t.Python.text_count=function(a){return[(t.Python.valueToCode(a,"TEXT",t.Python.ORDER_MEMBER)||"''")+".count("+(a=t.Python.valueToCode(a,"SUB",t.Python.ORDER_NONE)||"''")+")",t.Python.ORDER_FUNCTION_CALL]},t.Python.text_replace=function(a){return[(t.Python.valueToCode(a,"TEXT",t.Python.ORDER_MEMBER)||"''")+".replace("+(t.Python.valueToCode(a,"FROM",t.Python.ORDER_NONE)||"''")+", "+(a=t.Python.valueToCode(a,"TO",t.Python.ORDER_NONE)||"''")+")",t.Python.ORDER_MEMBER]},t.Python.text_reverse=function(a){return[(t.Python.valueToCode(a,"TEXT",t.Python.ORDER_MEMBER)||"''")+"[::-1]",t.Python.ORDER_MEMBER]},t.Python.variables={},t.Python.variables_get=function(a){return[t.Python.variableDB_.getName(a.getFieldValue("VAR"),t.VARIABLE_CATEGORY_NAME),t.Python.ORDER_ATOMIC]},t.Python.variables_set=function(a){var b=t.Python.valueToCode(a,"VALUE",t.Python.ORDER_NONE)||"0";return t.Python.variableDB_.getName(a.getFieldValue("VAR"),t.VARIABLE_CATEGORY_NAME)+" = "+b+"\n"},t.Python.variablesDynamic={},t.Python.variables_get_dynamic=t.Python.variables_get,t.Python.variables_set_dynamic=t.Python.variables_set,t.Python})?e.apply(n,r):e)||(t.exports=E)}}]);