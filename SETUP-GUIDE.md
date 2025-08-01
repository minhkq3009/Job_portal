# 🚀 HƯỚNG DẪN CÀI ĐẶT JOB PORTAL TRONG VS CODE

## 📋 YÊU CẦU HỆ THỐNG

### Phần mềm cần thiết:
- **Node.js** (v16 trở lên) - [Download tại đây](https://nodejs.org/)
- **VS Code** - [Download tại đây](https://code.visualstudio.com/)
- **Git** (optional) - [Download tại đây](https://git-scm.com/)

## 🔧 CÀI ĐẶT TỪNG BƯỚC

### Bước 1: Mở dự án trong VS Code

```bash
# Mở VS Code và chọn "Open Folder"
# Hoặc sử dụng command line:
code .
```

### Bước 2: Cài đặt Extension khuyến nghị

Mở VS Code Extensions (Ctrl+Shift+X) và cài đặt:

- **ES7+ React/Redux/React-Native snippets** - Snippets cho React
- **Auto Rename Tag** - Tự động rename tag HTML/JSX
- **Prettier - Code formatter** - Format code tự động
- **Tailwind CSS IntelliSense** - Autocomplete cho Tailwind
- **Bracket Pair Colorizer** - Màu sắc cho brackets
- **GitLens** - Git integration (optional)

### Bước 3: Mở Terminal trong VS Code

```
Ctrl + ` (backtick) hoặc View > Terminal
```

### Bước 4: Cài đặt Dependencies

```bash
npm install
```

### Bước 5: Chạy Development Server

```bash
npm run dev
```

Sau khi chạy lệnh này, bạn sẽ thấy:
```
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Bước 6: Mở trình duyệt

Truy cập: **http://localhost:5173/**

## 🎯 CẤU HÌNH VS CODE OPTIMAL

### Settings.json khuyến nghị:

Mở VS Code Settings (Ctrl+,) và thêm:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  }
}
```

### Prettier Configuration (tạo file .prettierrc):

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 📁 CẤU TRÚC PROJECT

```
job-portal/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Header/
│   │   └── ...
│   ├── data/           # Mock data
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🚀 LỆNH THƯỜNG DÙNG

```bash
# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview

# Chạy ESLint
npm run lint
```

## 🎨 LIVE RELOAD

- ✅ **Hot Module Replacement (HMR)** đã được cấu hình
- ✅ Thay đổi code sẽ tự động reload trình duyệt
- ✅ CSS changes apply instantly

## 🛠️ DEBUG TRONG VS CODE

### Cài đặt Launch Configuration:

Tạo file `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

### Breakpoints:
- Click vào số dòng để đặt breakpoint
- F5 để start debugging
- F10/F11 để step through code

## 📝 SHORTCUTS HỮU ÍCH

| Shortcut | Mô tả |
|----------|--------|
| `Ctrl + D` | Select multiple occurrences |
| `Alt + Shift + F` | Format document |
| `Ctrl + /` | Toggle comment |
| `Ctrl + Shift + P` | Command palette |
| `Ctrl + ,` | Open settings |
| `Ctrl + Shift + E` | File explorer |

## 🎯 NEXT STEPS

Sau khi setup xong, bạn có thể:

1. 📖 Đọc code và hiểu cấu trúc
2. 🎨 Customize design system
3. ⚡ Thêm features mới
4. 🧪 Viết tests
5. 🚀 Deploy lên hosting

## 🆘 TROUBLESHOOTING

### Lỗi thường gặp:

**1. Port 5173 bị occupied:**
```bash
npx kill-port 5173
npm run dev
```

**2. Node modules issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**3. Tailwind không work:**
- Check `tailwind.config.js`
- Verify imports trong `index.css`

**4. ESLint errors:**
```bash
npm run lint -- --fix
```

## 📞 HỖ TRỢ

Nếu gặp vấn đề, check:
- 📚 [Vite Documentation](https://vitejs.dev/)
- ⚛️ [React Documentation](https://react.dev/)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/)

---

**Happy Coding! 🎉**