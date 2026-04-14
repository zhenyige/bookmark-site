// ===== 前台页面逻辑 =====

const grid = document.getElementById('bookmarkGrid');
const catBar = document.getElementById('categoryBar');
const searchInput = document.getElementById('searchInput');
const emptyTip = document.getElementById('emptyTip');

let currentCat = 'all';
let bookmarks = BOOKMARKS;

// 为每个书签生成稳定的颜色（基于名称哈希）
function nameColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 55%, 50%)`;
}

// 获取所有分类
function getCategories() {
  const cats = new Set();
  bookmarks.forEach(b => { if (b.category) cats.add(b.category); });
  return ['all', ...Array.from(cats).sort()];
}

// 渲染分类栏
function renderCategoryBar() {
  const cats = getCategories();
  catBar.innerHTML = cats.map(cat =>
    `<button class="cat-btn ${cat === currentCat ? 'active' : ''}" data-cat="${cat}" onclick="filterByCat('${cat}')">${cat === 'all' ? '全部' : cat}</button>`
  ).join('');
}

// 渲染书签网格
function renderBookmarks() {
  // 过滤
  let filtered = bookmarks;
  if (currentCat !== 'all') {
    filtered = filtered.filter(b => b.category === currentCat);
  }
  const kw = searchInput.value.trim().toLowerCase();
  if (kw) {
    filtered = filtered.filter(b =>
      b.name.toLowerCase().includes(kw) ||
      (b.desc && b.desc.toLowerCase().includes(kw)) ||
      b.url.toLowerCase().includes(kw)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyTip.style.display = 'block';
    return;
  }
  emptyTip.style.display = 'none';

  grid.innerHTML = filtered.map(b => {
    const color = nameColor(b.name);
    const letter = b.name[0];
    return `
    <a class="bookmark-card" href="${b.url}" target="_blank">
      <div class="bookmark-icon" style="background:${color}">
        <span class="letter">${letter}</span>
      </div>
      <div class="bookmark-name">${b.name}</div>
      ${b.desc ? `<div class="bookmark-desc">${b.desc}</div>` : ''}
      ${b.category && currentCat === 'all' ? `<span class="bookmark-cat-tag">${b.category}</span>` : ''}
    </a>`;
  }).join('');
}

// 按分类筛选
function filterByCat(cat) {
  currentCat = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderBookmarks();
}

// 搜索
searchInput.addEventListener('input', renderBookmarks);

// 初始化
renderCategoryBar();
renderBookmarks();
