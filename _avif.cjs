const sharp=require('sharp'); const fs=require('fs');
// Convert each webp variant to AVIF. Quality 65 + chroma 4:4:4-ish effort
// keeps the "wait a second but see it properly" visual bar; AVIF at this
// setting typically lands 25-40% under the webp equivalent.
const sets = {
  'maya-landing-color': ['-640w','-960w','-1366w','-2048w',''],
  'maya-landing-bw':    ['-640w','-960w','-1366w','-2048w',''],
  'press-hero-street':  ['-640w','-960w','-1366w',''],
  'video-hero-greenvalley': ['-640w','-960w','-1344w',''],
};
(async()=>{
  let total=0, saved=0;
  for(const [base,sufs] of Object.entries(sets)){
    for(const suf of sufs){
      const src=`public/images/${base}${suf}.webp`;
      if(!fs.existsSync(src)){ console.log('MISS',src); continue; }
      const dst=`public/images/${base}${suf}.avif`;
      await sharp(src).avif({quality:65,effort:6}).toFile(dst);
      const a=fs.statSync(src).size, b=fs.statSync(dst).size;
      total+=a; saved+=(a-b);
      console.log(base+suf, Math.round(a/1024)+'K ->', Math.round(b/1024)+'K');
    }
  }
  console.log('TOTAL SAVED', Math.round(saved/1024)+'K of', Math.round(total/1024)+'K');
})();
