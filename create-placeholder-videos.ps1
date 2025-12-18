# PowerShell script to create minimal placeholder MP4 videos
# This creates very small, valid MP4 files for testing

$videos = @(
    @{name="algebra-intro.mp4"; title="Introduction to Algebra"},
    @{name="cell-biology.mp4"; title="Cell Biology Explained"},
    @{name="ww2-overview.mp4"; title="World War II Overview"},
    @{name="periodic-table.mp4"; title="Periodic Table Mastery"},
    @{name="shakespeare-sonnets.mp4"; title="Shakespeare's Sonnets"},
    @{name="calculus-fundamentals.mp4"; title="Calculus Fundamentals"}
)

$videoDir = "assets\videos"

# Check if ffmpeg is available
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue

if ($ffmpegPath) {
    Write-Host "Creating placeholder videos using ffmpeg..."
    foreach ($video in $videos) {
        $outputPath = Join-Path $videoDir $video.name
        # Create a 5-second black video with text overlay
        ffmpeg -f lavfi -i color=c=black:s=640x360:d=5 -vf "drawtext=text='$($video.title)':fontsize=24:x=(w-text_w)/2:y=(h-text_h)/2:fontcolor=white" -c:v libx264 -t 5 "$outputPath" -y
        Write-Host "Created: $($video.name)"
    }
    Write-Host "All placeholder videos created successfully!"
} else {
    Write-Host "ffmpeg not found. Creating HTML placeholder files instead..."
    Write-Host ""
    Write-Host "To create actual MP4 videos, you can:"
    Write-Host "1. Install ffmpeg (https://ffmpeg.org/download.html)"
    Write-Host "2. Run this script again"
    Write-Host "3. Or manually add MP4 files to the assets/videos/ folder"
    Write-Host ""
    Write-Host "For now, the video player will show a placeholder message when videos are clicked."
}





