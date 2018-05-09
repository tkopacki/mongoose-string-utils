#JavaScript string utils for Mongoose OS

## string_ltrim
Removes all spaces from the left, usage:
```let toTrim = "  aaa" //result: "aaa"```

## string_rtrim
Removes all spaces from the right, usage:
```let toTrim = "aaa  " //result: "aaa"```

## string_trim
Removes all spaces from left and right, usage:
```let toTrim = "  aaa  " //result: "aaa"```

## string_split
Splits selected string into array with provided delimeter. Optionaly it can trim all spaces from both sides. Delimeter and trim parameters are optional. Default value for delimeter is ' ' and trim is enabled by default. Usage:

    let s6 = "aaa, bbb , ccc ,ddd";
    let r6 = string_split(s6, ",", true);
    /*
    result:
    r6[0]="aaa";
    r6[1]="bbb";
    r6[2]="ccc";
    r6[3]="ddd;
    */

