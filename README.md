# Simple Javascript CLI for yt-dlp
To download the executable, go to the releases page.

## Build Yourself
To build the executables yourself, you should have deno installed, then run the following commands:

### For Windows:
```bash
git clone https://github.com/nabeel-sadiq/yt-dlp.git
cd yt-dlp
npm install || bun install || deno install
deno compile --allow-read --allow-write --allow-run --allow-env --target x86_64-pc-windows-msvc --icon ./assets/icon.ico --include ./bin/yt-dlp.exe -o downloader.exe ./src/windows.cjs
```

### For Linux/MacOS:
```bash
git clone https://github.com/nabeel-sadiq/yt-dlp.git
cd yt-dlp
npm install || bun install || deno install
deno compile --allow-read --allow-write --allow-run --allow-env --include ./bin/yt-dlp -o downloader ./src/unix.cjs
```

Created and Maintained by [Nabeel_Sadiq](https://github.com/nabeel-sadiq).