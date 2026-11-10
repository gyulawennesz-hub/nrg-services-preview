
(function(){
 const c=window.NRG_CONTENT||{};
 document.querySelectorAll('[data-content]').forEach(el=>{const k=el.getAttribute('data-content');if(c[k]!==undefined)el.textContent=c[k]});
 document.querySelectorAll('[data-content-href]').forEach(el=>{const k=el.getAttribute('data-content-href');if(c[k])el.href=(k==='email'?'mailto:':k==='phone'?'tel:':'')+c[k].replace(/\s/g,'')});
 const serviceCard=(s,i)=>`<article class="service-card"><div class="service-icon">${['⌁','⌂','↗','✳','◌','⌖','⌘','↝'][i%8]}</div><h3>${s.title}</h3><p>${s.text}</p></article>`;
 const refCard=(r,i)=>`<article class="ref-card"><div class="ref-number">NRG / ${String(i+1).padStart(2,'0')}</div><h3>${r.name}</h3><p>${r.text}</p></article>`;
 const homeS=document.getElementById('home-services'); if(homeS)homeS.innerHTML=(c.services||[]).slice(0,4).map(serviceCard).join('');
 const allS=document.getElementById('all-services'); if(allS)allS.innerHTML=(c.services||[]).map(serviceCard).join('');
 const homeR=document.getElementById('home-references'); if(homeR)homeR.innerHTML=(c.references||[]).slice(0,3).map(refCard).join('');
 const allR=document.getElementById('all-references'); if(allR)allR.innerHTML=(c.references||[]).map(refCard).join('');
 const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
 const form=document.getElementById('contact-form'); if(form)form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value,mail=document.getElementById('mail').value,sub=document.getElementById('subject').value||'Weboldali érdeklődés',msg=document.getElementById('message').value;location.href='mailto:'+(c.email||'info@nrgservices.hu')+'?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent('Név: '+name+'\nE-mail: '+mail+'\n\n'+msg)});
})();
