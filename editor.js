
(function(){
 const c=JSON.parse(JSON.stringify(window.NRG_CONTENT||{}));
 const root=document.getElementById('editor-fields');
 function field(label,key,value,area=false){return `<label>${label}</label>${area?`<textarea data-key="${key}">${value||''}</textarea>`:`<input data-key="${key}" value="${String(value||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;')}">`}`}
 let html='<div class="editor-group"><h3>Főoldal és bemutatkozás</h3>';
 html+=field('Szlogen','tagline',c.tagline)+field('Főcím','heroTitle',c.heroTitle)+field('Bevezető szöveg','heroText',c.heroText,true)+field('Gomb felirata','heroButton',c.heroButton)+field('Rólunk cím','aboutTitle',c.aboutTitle)+field('Rólunk szöveg','aboutText',c.aboutText,true)+'</div>';
 html+='<div class="editor-group"><h3>Kapcsolati adatok</h3>'+field('Telefon','phone',c.phone)+field('E-mail','email',c.email)+field('Cím','address',c.address)+'</div>';
 html+='<div class="editor-group"><h3>Szolgáltatások</h3>';
 (c.services||[]).forEach((s,i)=>{html+=`<h3 style="font-size:16px;margin-top:20px">Szolgáltatás ${i+1}</h3>`+field('Megnevezés',`services.${i}.title`,s.title)+field('Leírás',`services.${i}.text`,s.text,true)});
 html+='</div><div class="editor-group"><h3>Referenciák</h3>';
 (c.references||[]).forEach((r,i)=>{html+=`<h3 style="font-size:16px;margin-top:20px">Referencia ${i+1}</h3>`+field('Projekt neve',`references.${i}.name`,r.name)+field('Leírás',`references.${i}.text`,r.text,true)});
 html+='</div>'; root.innerHTML=html;
 document.getElementById('download-content').addEventListener('click',()=>{
   document.querySelectorAll('[data-key]').forEach(el=>{const path=el.dataset.key.split('.');let target=c;for(let i=0;i<path.length-1;i++)target=target[path[i]];target[path[path.length-1]]=el.value});
   const blob=new Blob(['window.NRG_CONTENT = '+JSON.stringify(c,null,2)+';\\n'],{type:'text/javascript;charset=utf-8'});
   const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='content.js';a.click();URL.revokeObjectURL(a.href);
 });
})();
