// ===== 后台管理逻辑 =====

let bookmarks = JSON.parse(JSON.stringify(BOOKMARKS));
let isLoggedIn = false;
let editingId = null;

const loginMask = document.getElementById('loginMask');
const adminWrap = document.getElementById('adminWrap');
const formTitle = document.getElementById('formTitle');
const formTip = document.getElementById('formTip');
const loginPwd = document.getElementById('loginPwd');
const loginTip = document.getElementById('loginTip');
const adminSearch = document.getElementById('adminSearch');

// 为名称生成稳定颜色（与前台一致）
function nameColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 55%, 50%)`;
}

// 检查是否已登录
function checkLogin() {
  if (sessionStorage.getItem('bookmark_admin') === ADMIN_PASSWORD) {
    showAdmin();
  }
}

// 登录
function doLogin() {
  const pwd = loginPwd.value;
  if (!pwd) {
    loginTip.textContent = '请输入密码';
    return;
  }
  if (pwd === ADMIN_PASSWORD) {
    sessionStorage.setItem('bookmark_admin', pwd);
    loginTip.textContent = '';
    showAdmin();
  } else {
    loginTip.textContent = '密码错误';
    loginPwd.value = '';
  }
}

loginPwd.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

// 退出
function doLogout() {
  sessionStorage.removeItem('bookmark_admin');
  loginMask.style.display = 'flex';
  adminWrap.style.display = 'none';
  loginPwd.value = '';
}

// 显示后台
function showAdmin() {
  loginMask.style.display = 'none';
  adminWrap.style.display = 'block';
  isLoggedIn = true;
  populateCategorySelect();
  renderAdminList();
  document.getElementById('totalCount').textContent = `(${bookmarks.length} 个)`;
}

// 填充分类下拉
function populateCategorySelect() {
  const cats = getCategories();
  const sel = document.getElementById('fCat');
  sel.innerHTML = '<option value="">-- 选择分类 --</option>' +
    cats.filter(c => c !== 'all').map(c => `<option value="${c}">${c}</option>`).join('');

  // 填充后台分类筛选
  document.querySelector('.admin-cat-filter').innerHTML =
    cats.map(c => `<button class="cat-btn ${c === 'all' ? 'active' : ''}" onclick="filterAdminCat(this,'${c}')">${c === 'all' ? '全部' : c}</button>`).join('');
}

// 获取分类
function getCategories() {
  const cats = new Set();
  bookmarks.forEach(b => { if (b.category) cats.add(b.category); });
  return ['all', ...Array.from(cats).sort()];
}

// 重置表单
function resetForm() {
  document.getElementById('editId').value = '';
  document.getElementById('fName').value = '';
  document.getElementById('fUrl').value = '';
  document.getElementById('fCat').value = '';
  document.getElementById('fCatNew').value = '';
  document.getElementById('fDesc').value = '';
  editingId = null;
  formTitle.innerHTML = '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> 添加书签';
  formTip.textContent = '';
  formTip.className = 'form-tip';
}

// 保存书签
function saveBookmark() {
  const name = document.getElementById('fName').value.trim();
  const url = document.getElementById('fUrl').value.trim();
  const catSelect = document.getElementById('fCat').value;
  const catNew = document.getElementById('fCatNew').value.trim();
  const desc = document.getElementById('fDesc').value.trim();

  if (!name || !url) {
    formTip.textContent = '请填写名称和网址';
    formTip.className = 'form-tip error';
    return;
  }

  let category = catSelect || catNew || '未分类';
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  const editId = document.getElementById('editId').value;
  if (editId) {
    // 更新
    const idx = bookmarks.findIndex(b => b.id == editId);
    if (idx !== -1) {
      bookmarks[idx].name = name;
      bookmarks[idx].url = url;
      bookmarks[idx].category = category;
      bookmarks[idx].desc = desc;
    }
    formTip.textContent = '✅ 更新成功！记得导出更新 data.js';
    formTip.className = 'form-tip success';
  } else {
    // 新增
    const newId = bookmarks.length > 0 ? Math.max(...bookmarks.map(b => b.id)) + 1 : 1;
    bookmarks.push({ id: newId, name, url, category, desc });
    formTip.textContent = '✅ 添加成功！记得导出更新 data.js';
    formTip.className = 'form-tip success';
  }

  populateCategorySelect();
  renderAdminList();
  document.getElementById('totalCount').textContent = `(${bookmarks.length} 个)`;

  if (!editId) resetForm();
}

// 编辑书签
function editBookmark(id) {
  const b = bookmarks.find(bm => bm.id === id);
  if (!b) return;
  document.getElementById('editId').value = b.id;
  document.getElementById('fName').value = b.name;
  document.getElementById('fUrl').value = b.url;
  document.getElementById('fCat').value = b.category;
  document.getElementById('fDesc').value = b.desc || '';
  editingId = id;
  formTitle.innerHTML = '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> 编辑书签';
  formTip.textContent = '';
  formTip.className = 'form-tip';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 删除书签
function deleteBookmark(id) {
  if (!confirm('确定删除这条书签？')) return;
  bookmarks = bookmarks.filter(b => b.id !== id);
  populateCategorySelect();
  renderAdminList();
  document.getElementById('totalCount').textContent = `(${bookmarks.length} 个)`;
}

// 渲染管理列表
function renderAdminList() {
  const kw = adminSearch.value.trim().toLowerCase();
  const activeCat = document.querySelector('.admin-cat-filter .active').dataset.cat;
  let list = bookmarks;
  if (activeCat !== 'all') {
    list = list.filter(b => b.category === activeCat);
  }
  if (kw) {
    list = list.filter(b =>
      b.name.toLowerCase().includes(kw) ||
      (b.desc && b.desc.toLowerCase().includes(kw)) ||
      b.url.toLowerCase().includes(kw)
    );
  }

  const listEl = document.getElementById('adminList');
  if (list.length === 0) {
    listEl.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px">暂无书签</p>';
    return;
  }

  listEl.innerHTML = list.map(b => {
    const color = nameColor(b.name);
    return `
    <div class="admin-item">
      <div class="admin-item-icon" style="background:${color}">
        <span style="color:#fff">${b.name[0]}</span>
      </div>
      <div class="admin-item-info">
        <div class="admin-item-name">${b.name}</div>
        <div class="admin-item-url">${b.url}</div>
        <span class="admin-item-cat">${b.category}</span>
      </div>
      <div class="admin-item-actions">
        <button class="btn-edit" onclick="editBookmark(${b.id})">✏️</button>
        <button class="btn-del" onclick="deleteBookmark(${b.id})">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

// 分类筛选
function filterAdminCat(btn, cat) {
  document.querySelectorAll('.admin-cat-filter .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAdminList();
}

// 导出数据
function exportData() {
  const content = `// 书签数据 - 修改这个文件来管理书签\n// icon 字段已废弃，图标由名称首字母自动生成彩色方块\nconst BOOKMARKS = ${JSON.stringify(bookmarks, null, 2)};\n\n// 后台管理密码\nconst ADMIN_PASSWORD = "${ADMIN_PASSWORD}";\n`;

  const blob = new Blob([content], { type: 'application/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.js';
  a.click();
  URL.revokeObjectURL(a.href);

  formTip.textContent = '✅ data.js 已下载，替换网站根目录的 data.js 即可更新';
  formTip.className = 'form-tip success';
}

// 导入数据
function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const text = e.target.result;
      const match = text.match(/const BOOKMARKS\s*=\s*(\[[\s\S]*?]);/);
      if (!match) throw new Error('格式错误');
      const imported = JSON.parse(match[1]);
      if (!Array.isArray(imported)) throw new Error('格式错误');
      bookmarks = imported;
      populateCategorySelect();
      renderAdminList();
      document.getElementById('totalCount').textContent = `(${bookmarks.length} 个)`;
      alert(`✅ 成功导入 ${bookmarks.length} 条书签！记得导出 data.js 更新网站`);
    } catch (err) {
      alert('❌ 导入失败：' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// 初始化
checkLogin();
