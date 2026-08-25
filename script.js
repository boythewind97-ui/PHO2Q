const menuItems = [
/* ================= SET MENU ================= */
{id:"S01",cat:"set",jp:"牛肉フォーセット",vn:"Set Phở bò",desc:"牛肉フォー + ハーフバインミー + 揚げ春巻き1本",price:1350,image:"set-01.jpg"},
{id:"S02",cat:"set",jp:"ブンボーフエセット",vn:"Set Bún bò Huế",desc:"ブンボーフエ + ハーフバインミー + 揚げベトナムソーセージ1本",price:1350,image:"set-02.jpg"},
{id:"S03",cat:"set",jp:"牛肉フォーおすすめセット",vn:"Set Phở bò đặc biệt",desc:"牛肉フォー + ハーフバインミー + 揚げ春巻き1本 + 生春巻き1本",price:1450,image:"set-03.jpg"},
{id:"S04",cat:"set",jp:"ブンボーフエセット",vn:"Set Bún bò Huế",desc:"ブンボーフエ + 揚げ春巻き2本",price:1400,image:"set-04.jpg"},

/* ================= FOOD ================= */
{id:"F01",cat:"food",jp:"牛肉フォー（生）",vn:"PHỞ BÒ TÁI",desc:"やわらかな牛肉と香り豊かなスープ",price:980,image:"pho-bo-tai.jpg"},
{id:"F02",cat:"food",jp:"牛肉フォー（煮込み）",vn:"PHỞ BÒ CHÍN",desc:"じっくり煮込んだ牛肉のフォー",price:980,image:"pho-bo-chin.jpg"},
{id:"F03",cat:"food",jp:"牛肉フォー（生＋煮込み）",vn:"PHỞ BÒ TÁI BẮP",desc:"牛肉を2種類楽しめる人気メニュー",price:980,image:"pho-bo-tai-bap.jpg"},
{id:"F04",cat:"food",jp:"ブンボーフエ",vn:"BÚN BÒ HUẾ",desc:"フエ名物、コクと香りのあるピリ辛スープ麺",price:1080,image:"bun-bo-hue.jpg"},
{id:"F05",cat:"food",jp:"チャーシュー・バインミー",vn:"BÁNH MÌ XÁ XÍU",desc:"ベトナム風チャーシューのバインミー",price:750,image:"banh-mi-xa-xiu.jpg"},
{id:"F06",cat:"food",jp:"焼き肉バインミー",vn:"BÁNH MÌ THỊT NƯỚNG",desc:"香ばしい焼き肉のバインミー",price:750,image:"banh-mi-thit-nuong.jpg"},
{id:"F07",cat:"food",jp:"ハム・揚げ春巻きバインミー",vn:"BÁNH MÌ GIÒ CHẢ",desc:"ベトナムハムと具材を楽しむバインミー",price:700,image:"banh-mi-gio-cha.jpg"},
{id:"F08",cat:"food",jp:"ミックスバインミー",vn:"BÁNH MÌ THẬP CẨM",desc:"いろいろな具材を楽しむバインミー",price:800,image:"banh-mi-thap-cam.jpg"},
{id:"F09",cat:"food",jp:"鶏唐揚げ（カラゲ）",vn:"GÀ CHIÊN KARAAGE",desc:"ベトナム風に楽しむカラゲ",price:580,image:"ga-karage.jpg"},
{id:"F10",cat:"food",jp:"ピーナッツ炒め",vn:"LẠC RANG",desc:"香ばしく炒ったピーナッツ",price:380,image:"lac-rang.jpg"},
{id:"F11",cat:"food",jp:"焼きバインダー",vn:"BÁNH ĐA NƯỚNG",desc:"香ばしく焼き上げたベトナムのおつまみ",price:380,image:"banh-da-nuong.jpg"},
{id:"F12",cat:"food",jp:"ベトナムハム",vn:"GIÒ LỤA",desc:"ベトナムの定番ハム",price:550,image:"gio-lua.jpg"},
{id:"F13",cat:"food",jp:"揚げベトナムソーセージ",vn:"NEM CHUA RÁN",desc:"香ばしいベトナム風揚げソーセージ",price:650,image:"nem-chua-ran.jpg"},
{id:"F14",cat:"food",jp:"漬けきゅうり",vn:"DƯA CHUỘT CHÈ",desc:"さっぱりした副菜",price:500,image:"dua-chuot-che.jpg"},
{id:"F15",cat:"food",jp:"茹で豆",vn:"ĐẬU LUỘC",desc:"シンプルなベトナムのおつまみ",price:500,image:"dau-luoc.jpg"},
{id:"F16",cat:"food",jp:"海老と豚肉の生春巻き（3本）",vn:"GỎI CUỐN TÔM THỊT 3 CÁI",desc:"海老・豚肉・野菜の生春巻き",price:750,image:"goi-cuon.jpg"},
{id:"F17",cat:"food",jp:"フォー・ブン用 麺追加",vn:"THÊM BÚN / PHỞ",desc:"フォー・ブンの麺を追加",price:110,image:"them-bun-pho.jpg"},
{id:"F18",cat:"food",jp:"半熟卵",vn:"TRỨNG CHẦN",desc:"トッピング用の半熟卵",price:110,image:"trung-chan.jpg"},
{id:"F19",cat:"food",jp:"お子様フォー",vn:"PHỞ CHO BÉ",desc:"お子様向けの食べやすいフォー",price:650,image:"pho-cho-be.jpg"},
{id:"F20",cat:"food",jp:"フォー・トッピング盛り合わせ",vn:"PHỞ THẬP CẨM",desc:"いろいろな具材を楽しむフォー",price:980,image:"pho-thap-cam.jpg"},

/* ================= DRINK ================= */
{id:"D01",cat:"drink",jp:"アサヒビール 633ml",vn:"Bia Asahi 633ml",desc:"",price:650,image:"bia-asahi-633.jpg"},
{id:"D02",cat:"drink",jp:"ココナッツジュース",vn:"Nước Dừa",desc:"",price:350,image:"nuoc-dua.jpg"},
{id:"D03",cat:"drink",jp:"サトウキビジュース",vn:"Nước Mía",desc:"",price:350,image:"nuoc-mia.jpg"},
{id:"D04",cat:"drink",jp:"Sting 赤",vn:"Nước Sting đỏ",desc:"",price:380,image:"sting-do.jpg"},
{id:"D05",cat:"drink",jp:"ハイネケン",vn:"Bia Heineken",desc:"",price:600,image:"bia-heineken.jpg"},
{id:"D06",cat:"drink",jp:"アサヒ 0.0%",vn:"Bia Asahi 0 độ",desc:"",price:550,image:"bia-asahi-zero.jpg"},
{id:"D07",cat:"drink",jp:"コカ・コーラ",vn:"Coca Cola",desc:"",price:350,image:"coca-cola.jpg"},
{id:"D08",cat:"drink",jp:"レッドブル",vn:"Bò Húc",desc:"",price:480,image:"bo-huc.jpg"},
{id:"D09",cat:"drink",jp:"緑茶 0%",vn:"Trà xanh 0 độ",desc:"",price:350,image:"tra-xanh-zero.jpg"},
{id:"D10",cat:"drink",jp:"Nuber One",vn:"Nước Nuber One",desc:"",price:460,image:"nuber-one.jpg"},
{id:"D11",cat:"drink",jp:"冬瓜茶",vn:"TRÀ BÍ ĐAO",desc:"",price:350,image:"tra-bi-dao.jpg"},
{id:"D12",cat:"drink",jp:"C2 レモンティー",vn:"Trà chanh C2",desc:"",price:380,image:"tra-chanh-c2.jpg"},
{id:"D13",cat:"drink",jp:"C2 ピーチティー",vn:"Trà đào C2",desc:"",price:380,image:"tra-dao-c2.jpg"},
{id:"D14",cat:"drink",jp:"梅ジュース",vn:"Nước Me",desc:"",price:350,image:"nuoc-me.jpg"},
{id:"D15",cat:"drink",jp:"パッションフルーツジュース",vn:"Nước Chanh dây",desc:"",price:350,image:"nuoc-chanh-day.jpg"},
{id:"D16",cat:"drink",jp:"Dr Thanh",vn:"Trà Dr Thanh",desc:"",price:380,image:"tra-dr-thanh.jpg"}
];

const grid=document.getElementById("menu-grid");
const buttons=document.querySelectorAll(".category-nav button");

function formatPrice(n){ return Number(n).toLocaleString("ja-JP") + "円"; }

function renderMenu(filter="all"){
  const list=filter==="all" ? menuItems : menuItems.filter(x=>x.cat===filter);

  grid.innerHTML=list.map(x=>`
    <article class="menu-card ${x.cat}">
      <div class="card-image">
        <img src="${x.image}" alt="${x.jp}" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="cat-pill">${x.cat==="set"?"SET":x.cat==="drink"?"DRINK":"FOOD"}</span>
      </div>
      <div class="card-body">
        <span class="code">${x.id}</span>
        <h3>${x.jp}</h3>
        <div class="vn-name">${x.vn}</div>
        ${x.desc ? `<p>${x.desc}</p>` : ""}
        <div class="price">${formatPrice(x.price)} <small>（税込）</small></div>
      </div>
    </article>
  `).join("");
}

buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.filter);
    document.getElementById("menu").scrollIntoView({behavior:"smooth",block:"start"});
  });
});

renderMenu();

const toggle=document.querySelector(".menu-toggle");
const nav=document.getElementById("mainNav");
toggle?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded",open);
});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
// --- MÃ CHO HIỆU ỨNG PHÓNG TO VÀ LƯỚT ẢNH ---
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <span class="lb-close">&times;</span>
  <button class="lb-btn lb-prev">&#10094;</button>
  <img class="lb-img" src="">
  <button class="lb-btn lb-next">&#10095;</button>
`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('.lb-img');
const btnPrev = lightbox.querySelector('.lb-prev');
const btnNext = lightbox.querySelector('.lb-next');
const btnClose = lightbox.querySelector('.lb-close');

let currentIndex = 0;
let imagesArray = [];

// Khi click vào bất kỳ ảnh nào
document.querySelectorAll('.zoom-img').forEach((img, index) => {
  img.addEventListener('click', () => {
    imagesArray = Array.from(document.querySelectorAll('.zoom-img')).map(i => i.src);
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
  });
});

function updateLightboxImage() {
  if (currentIndex < 0) currentIndex = imagesArray.length - 1;
  if (currentIndex >= imagesArray.length) currentIndex = 0;
  lbImg.src = imagesArray[currentIndex];
}

btnPrev.addEventListener('click', (e) => { e.stopPropagation(); currentIndex--; updateLightboxImage(); });
btnNext.addEventListener('click', (e) => { e.stopPropagation(); currentIndex++; updateLightboxImage(); });

// Đóng khung khi click ra ngoài hoặc click nút X
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === btnClose) {
    lightbox.classList.remove('active');
  }
});
// Mở ảnh to khi click
document.querySelectorAll('.zoom-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

// Đóng ảnh to khi click vào nền đen
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});
