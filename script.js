const messages={
 message:{title:'A Message From Baby 💌',body:`Sayang, baby buat little place ni bukan sebab baby nak buat benda yang perfect. Baby cuma nak ada satu tempat yang simpan benda-benda yang baby susah nak cakap kadang-kadang. Baby sayang sayang, and baby masih nak belajar jadi lelaki yang lebih baik untuk sayang. Thank you sebab masih ada dengan baby.`},
 memories:{title:'Our Little Memories 📸',body:`Nanti kita isi gambar dan cerita sebenar kita dekat sini. Setiap gambar akan ada cerita pendek tentang kenapa moment tu bermakna untuk baby.`},
 songs:{title:'Our Songs 🎧',body:`Nanti kita letak playlist kita dekat sini. Lagu yang bila baby dengar, baby terus teringat sayang.`},
 choose:{title:'Why I Choose You 💗',body:`Baby pilih sayang sebab sayang adalah sayang. Sebab cara sayang hadir dalam hidup baby, cara sayang cuba faham baby, dan semua little things yang buat baby rasa bersyukur kenal sayang. Baby tak cari hubungan yang sempurna. Baby nak kita belajar jadi lebih baik bersama.`}
};
const whenMessages={
 sad:{title:'Open When You’re Sad 🥺',body:`Sayang, tarik nafas kejap. Tak apa kalau hari ni sayang tak okay. Sayang tak perlu kuat every second. Kalau baby ada depan sayang sekarang, baby nak peluk sayang lama-lama. Remember, bad day doesn't mean bad life. Baby ada untuk sayang.`},
 miss:{title:'Open When You Miss Me 🌙',body:`Kalau sayang rindu baby, tengok langit kejap. Walaupun kita jauh, kita masih tengok langit yang sama. Jarak ni cuma sementara. Sampai masa kita boleh duduk sebelah-sebelah balik. I miss you too, sayang.`},
 blame:{title:'Open When You Blame Yourself 😔',body:`Sayang, kalau sayang tengah rasa semua benda salah sayang, please stop and breathe. Masalah dalam relationship bukan tanggungjawab seorang. Baby pun ada salah baby, baby pun ada benda yang baby perlu belajar. Baby tak nak sayang lawan diri sayang sendiri. Kalau ada masalah, kita hadap sama-sama. Kita satu team.`},
 fight:{title:'Open When We’re Fighting 🤍',body:`Kalau kita tengah gaduh, baby nak kita ingat satu benda: kita lawan masalah, bukan lawan satu sama lain. Baby mungkin marah, sayang mungkin marah, tapi itu tak bermaksud kita berhenti sayang. Bila dah tenang, kita bincang. Jangan buat keputusan besar ketika hati tengah panas.`},
 reassurance:{title:'Open When You Need Reassurance ❤️',body:`Yes, baby still choose you. Yes, baby still care. Yes, baby masih nak usaha untuk hubungan ni. Sayang tak perlu compete dengan sesiapa. Baby nak kita bina sesuatu yang real, perlahan-lahan, dengan usaha daripada dua-dua orang.`},
 loved:{title:'Open When You Need To Feel Loved 🫶🏻',body:`You are loved. You are important. You are not a burden. And you don't have to earn my love by being perfect. Baby sayang sayang for who you are, while we both keep growing into better versions of ourselves.`}
};
function openModal(type){document.getElementById('modal-content').innerHTML=`<h3>${messages[type].title}</h3><p>${messages[type].body}</p>`;document.getElementById('modal').classList.add('show')}
function openWhen(type){document.getElementById('modal-content').innerHTML=`<h3>${whenMessages[type].title}</h3><p class="quote">${whenMessages[type].body}</p>`;document.getElementById('modal').classList.add('show')}
function closeModal(e){if(!e||e.target.id==='modal')document.getElementById('modal').classList.remove('show')}
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
for(let i=0;i<12;i++){const h=document.createElement('span');h.className='heart';h.textContent='♡';h.style.left=Math.random()*100+'%';h.style.animationDelay=Math.random()*6+'s';h.style.fontSize=(12+Math.random()*14)+'px';document.querySelector('.hearts').appendChild(h)}
