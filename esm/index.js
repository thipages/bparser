import {reduceParentheses, combineNArrays, registry, replaceByGhosts} from "./utils.js";
const simplifyAndCheckValidity=(p,regex,reg)=>{
    let s=reduceParentheses(reg)(
        '(' + replaceByGhosts(reg)(p, regex)
            .replace(/\s/g, '')
            .replace(/AND/g, '&')
            .replace(/OR/g, '|') + ')');
    return s?s:false;
};
const has=(s,c)=>s.indexOf(c)!==-1;
const sort=a=>{a.sort();return a;};
export default (p,regex)=> {
    const reg = registry();
    const resolve=(g)=>{
        const [hasOr,hasAnd]=['|','&'].map(v=>has(g,v));
        const isLeaf=!has(g,'$');
        const matrix=hasOr ?g.split('|'): g;
        return isLeaf
            ? matrix
            : hasOr
                ? g.split('|').map(resolve)
                : hasAnd
                    ? combineNArrays(g,...g.split('&').map(resolve))
                    : resolve(reg.get(g))
    };
    let simply=simplifyAndCheckValidity(p,regex,reg);
    return {
        isValid:!!simply,
        results:!simply
            ? []
            : [].concat(...resolve(simply)).map(
                v => sort(v.replace(/&/g, ',').split(','))
            ).map(v => v.map(w => reg.get(w))).map(v=>[...new Set(v)])
    }
};