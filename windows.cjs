const path = require('path');
const YTDlpWrap = require('yt-dlp-wrap').default;
const ytDlpWrap = new YTDlpWrap('yt-dlp.exe');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get Desktop path on Windows
const desktopPath = path.join(process.env.USERPROFILE, 'Desktop', 'output.mp4');

rl.question("Enter video URL: ", function (videoUrl) {
  rl.close();

  let ytDlpEventEmitter = ytDlpWrap
    .exec([
      videoUrl, // Use the user-provided URL
      '-f',
      'bestvideo[height<=1080]+bestaudio/best[height<=1080]',
      '-o',
      desktopPath, // Corrected output path
    ])
    .on('progress', (progress) =>
      console.log(
        progress.percent,
        progress.totalSize,
        progress.currentSpeed,
        progress.eta
      )
    )
    .on('ytDlpEvent', (eventType, eventData) =>
      console.log(eventType, eventData)
    )
    .on('error', (error) => console.error(error))
    .on('close', () => console.log('all done'));

  console.log(`yt-dlp process started with PID: ${ytDlpEventEmitter.ytDlpProcess.pid}`);
});
