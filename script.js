const menuItems=[
{id:"F01",cat:"food",jp:"フォー・ボー",vn:"Phở Bò",desc:"牛肉のフォー",price:"980円",image:""},
{id:"F02",cat:"food",jp:"フォー・ガー",vn:"Phở Gà",desc:"鶏肉のフォー",price:"900円",image:""},
{id:"F03",cat:"food",jp:"ブンボーフエ",vn:"Bún Bò Huế",desc:"フエ名物・辛味のある牛肉麺",price:"1,080円",image:""},
{id:"F04",cat:"food",jp:"バインミー",vn:"Bánh Mì",desc:"ベトナム風サンドイッチ",price:"680円",image:""},
{id:"F05",cat:"food",jp:"生春巻き",vn:"Gỏi Cuốn",desc:"新鮮な野菜とハーブの生春巻き",price:"580円",image:""},
{id:"F06",cat:"food",jp:"揚げ春巻き",vn:"Chả Giò",desc:"ベトナム風揚げ春巻き",price:"680円",image:""},
{id:"F07",cat:"food",jp:"バインセオ",vn:"Bánh Xèo",desc:"ベトナム風料理",price:"980円",image:""},
{id:"F08",cat:"food",jp:"鶏肉料理",vn:"Món Gà",desc:"ベトナム風チキン料理",price:"980円",image:""},
{id:"S01",cat:"set",jp:"フォーセット",vn:"Set Phở",desc:"フォー＋サイドメニュー",price:"1,280円",image:""},
{id:"S02",cat:"set",jp:"バインミーセット",vn:"Set Bánh Mì",desc:"バインミー＋ドリンクなど",price:"980円",image:""},
{id:"S03",cat:"set",jp:"おすすめセット",vn:"Set Đặc Biệt",desc:"人気メニューセット",price:"1,480円",image:""},
{id:"D01",cat:"drink",jp:"ベトナムコーヒー",vn:"Cà Phê Việt Nam",desc:"練乳入りベトナムコーヒー",price:"450円",image:""},
{id:"D02",cat:"drink",jp:"アイスコーヒー",vn:"Cà Phê Đá",desc:"ベトナムスタイル",price:"450円",image:""},
{id:"D03",cat:"drink",jp:"ココナッツジュース",vn:"Nước Dừa",desc:"さっぱりしたドリンク",price:"500円",image:""},
{id:"D04",cat:"drink",jp:"ベトナムソフトドリンク",vn:"Nước Ngọt",desc:"ベトナムの人気ドリンク",price:"350円",image:""}
];
const grid=document.getElementById("menu-grid");
function renderMenu(filter="all"){
 const list=filter==="all"?menuItems:menuItems.filter(x=>x.cat===filter);
 grid.innerHTML=list.map(x=>`<article class="card"><div class="card-img ${x.image?"":"placeholder"}" ${x.image?`style="background-image:url('${x.image}')"`:""}>${x.image?"":`<div class="photo-note">📷 写真を追加<br><small>images/${x.id.toLowerCase()}.jpg</small></div>`}</div><div class="card-body"><div class="code">${x.id}</div><div class="jp">${x.jp}</div><div class="vn-name">${x.vn}</div><div class="desc">${x.desc}</div><div class="price">${x.price}<small>（税込）</small></div></div></article>`).join("");
}
document.querySelectorAll(".category-nav button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".category-nav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderMenu(b.dataset.filter)});
renderMenu();
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
toggle?.addEventListener("click",()=>{const open=nav.style.display==="flex";nav.style.display=open?"":"flex";if(!open){nav.style.position="absolute";nav.style.top="70px";nav.style.left="0";nav.style.right="0";nav.style.background="#fff";nav.style.padding="15px 20px";nav.style.flexDirection="column";nav.style.gap="2px";nav.style.boxShadow="0 15px 25px #0001"}});
