# Simple Javascript CLI for yt-dlp
To download executables for amd64 architectures, go to the [releases](https://github.com/nabeel-sadiq/yt-dlp/releases/tag/downloads) page.

## Build for your system
To build the executables yourself, you should have deno installed, then run the following commands:

### On Windows:
```bash
git clone https://github.com/nabeel-sadiq/yt-dlp.git
cd yt-dlp
npm install || bun install || deno install
deno compile --allow-read --allow-write --allow-run --allow-env --icon ./assets/icon.ico --include ./bin/yt-dlp.exe -o downloader.exe ./src/windows.cjs
```

### On Linux/MacOS:
```bash
git clone https://github.com/nabeel-sadiq/yt-dlp.git
cd yt-dlp
npm install || bun install || deno install
deno compile --allow-read --allow-write --allow-run --allow-env --include ./bin/yt-dlp -o downloader ./src/unix.cjs
```

If you wanna target specific systems, check out [deno compile documentation](https://docs.deno.com/runtime/reference/cli/compile/) and use the [--target](https://docs.deno.com/runtime/reference/cli/compile/#cross-compilation) flag.

Created and Maintained by [Nabeel_Sadiq](https://github.com/nabeel-sadiq).