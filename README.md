# Todo Widget 📝

A beautiful, minimalist desktop todo list widget built with Electron. Stay organized with a floating, always-on-top task manager that sits elegantly on your desktop.



## ✨ Features

- **Always On Top**: Floating widget that stays visible while you work
- **Elegant Design**: Beautiful glassmorphism UI with a warm, handwritten aesthetic
- **Drag and Drop**: Easily reposition the widget anywhere on your screen
- **Real-time Progress**: Visual progress tracking with completion percentages
- **Persistent Storage**: Your todos are saved automatically
- **Keyboard Shortcuts**: Quick refresh with Cmd+R (Mac) or F5
- **Responsive**: Resizable window with sensible minimum and maximum sizes
- **Cross Platform**: Works on macOS, Windows, and Linux

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tsw-codes/todo-list.git
cd todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

## 🛠️ Development

### Available Scripts

- `npm start` - Run the application in development mode
- `npm run build` - Build the application for all platforms
- `npm run build-mac` - Build for macOS (.dmg)
- `npm run build-win` - Build for Windows (.exe)
- `npm run build-linux` - Build for Linux (.AppImage)
- `npm run dist` - Create distribution packages

### Project Structure

```
todo-list/
├── index.html          # Main application UI
├── main.js            # Electron main process
├── setup.js           # Application setup and configuration
├── package.json       # Project dependencies and scripts
├── to-do-list.png     # Application icon/screenshot
└── dist/              # Built application packages
```

## 🎨 Customization

The widget features a customizable design with:
- Glassmorphism effects with backdrop blur
- Warm brown color scheme (`#582b22` background)
- Comic Sans MS font family for a friendly feel
- Rounded corners and subtle shadows
- Transparent and frameless window

You can modify the styling in `index.html` to match your preferences.

## 📦 Building for Distribution

### macOS
```bash
npm run build-mac
```
Creates a `.dmg` installer in the `dist/` folder.

### Windows
```bash
npm run build-win
```
Creates an `.exe` installer in the `dist/` folder.

### Linux
```bash
npm run build-linux
```
Creates an `.AppImage` in the `dist/` folder.

## 🔧 Configuration

The application is configured as a productivity app with the following settings:
- **Window Size**: 500x500px (resizable: 300x400 to 800x1000)
- **Always On Top**: Enabled by default
- **Frame**: Frameless for a modern look
- **Transparency**: Enabled for desktop integration

## 🐛 Troubleshooting

### Common Issues

**App won't start:**
- Ensure Node.js is installed and up to date
- Run `npm install` to install dependencies
- Check the console for error messages

**Widget disappears:**
- Use Cmd+R (Mac) or F5 to refresh the application
- Restart the application if needed

**Build failures:**
- Ensure all dependencies are installed
- Check that electron-builder is properly configured
- Verify you have the necessary permissions for your target platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Styled with modern CSS3 features
- Icons and design inspired by minimalist productivity tools

---

**Made with ❤️ for better productivity**

*Keep your tasks organized and stay focused with Todo Widget!*
