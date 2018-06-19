# JavaScript string utils for Mongoose OS

## StringUtils.ltrim
```
let toTrim = '  aaa';
let result = StringUtils.ltrim(toTrim); // result = 'aaa'
```

## StringUtils.rtrim
```
let toTrim = 'aaa  ';
let result = StringUtils.rtrim(toTrim); //result = 'aaa'
```

## StringUtils.trim
```
let toTrim = '  aaa  ;
let result = StringUtils.trim(toTrim); //result = 'aaa'
```

## StringUtils.split
 Splits selected string into array with provided delimeter. Optionaly it can trim all spaces from both sides. Delimeter and trim parameters are optional. Default value for delimeter is ' ' and trim is enabled by default. Usage:
```
let toSplit = 'aaa, bbb , ccc ,ddd';
let result = StringUtils.split(toSplit, ',', true);

result:
result[0]="aaa";
result[1]="bbb";
result[2]="ccc";
result[3]="ddd;
```
