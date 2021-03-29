import bParser from "../esm/index.js";
const regex=[/[a-z]/g,/'.+?'/g];
const tests= [
    [
        '',
        false,regex[0]
    ],[
        'a AND b OR c',
        [
            ["a","b"],
            ["c"]
        ],regex[0]
    ],
    [
        "'a' AND 'b' OR 'c'",
        [
            ["'a'","'b'"],
            ["'c'"]
        ],regex[1]
    ],
    [
        '((a AND (b OR c)) AND (d AND e) AND (f OR g OR h)) OR i OR j',
        [
            ['a','b','d','e','f'],
            ['a','b','d','e','g'],
            ['a','b','d','e','h'],
            ['a','c','d','e','f'],
            ['a','c','d','e','g'],
            ['a','c','d','e','h'],
            ['i'],
            ['j']
        ],regex[0]
    ],
    [
        '(a OR b',
        false,regex[0]
    ],
    [
        '((a AND b) OR e)    (c OR d)',
        false,regex[0]
    ],
    [
        '((a AND b)    e) OR (c OR d)',
        false,regex[0]
    ],
    [
        '((a AND b) OR e)   or    (c OR d)',
        false,regex[0]
    ]
];
const JS=JSON.stringify;
let res=tests.map(
    test=>{
        const {isValid,results}=bParser(test[0],test[2]);
        let success,obs;
        if (isValid) {
            obs=JS(results);
            success=obs===JS(test[1]);
        } else {
            success= !test[1];
        }
        return [success?'OK':'NOK : ',success?'': results];
    }
)
console.log(res,res.map(v=>v[0]).join(','));
