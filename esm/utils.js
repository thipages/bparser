const castArray=a=>Array.isArray(a)?a:[a];
const combine2Arrays=(g,m1,m2)=> {
    let h1=castArray(m1),h2=castArray(m2);
    return (h1.length === 0 || h2.length === 0)
        ? h1.concat(h2)
        : h1.reduce(
            (acc, v) => {
                acc.push(...h2.map(w => w + "," + v));
                return acc;
            }, []
        )
};
const hInc=i=>i.toString(16);
export const registry=(m=hInc)=>{
    let inc=0, ref={}, last;
    return {
        add:(k,p)=>{
            last=p+m(++inc);
            ref[last]=k;
            return last;
        },
        //all:()=>ref,
        get:(k)=>ref[k]
    };
};
export const combineNArrays= (g,...m)=>m.reduce((acc,v)=>combine2Arrays(g,acc,v),[]);
const checkInside=(v,reg)=>v.replace(/(&|\|)/g, ',').split(',').every(reg.get);
export const reduceParentheses= registry=>(s)=>{
    let r,valid=false;
    while (r=s.match(/\([^\(]+?\)/g)) {
        for (let i=0,len=r.length;i<len;i++) {
            let v=r[i],vs=v.substr(1,v.length-2);
            valid=checkInside(vs,registry);
            if (!valid) break;
            s=s.replace(v, registry.add(vs,'$'));
        }
        if (!valid) break;
    }
    return valid && checkInside(s,registry)?s:false;
};
export const replaceByGhosts=registry=>(s,regex)=>s.replace(regex,(v)=>registry.add(v,'#'));