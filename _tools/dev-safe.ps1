# dev-safe.ps1 - Start dev mode safely
$projectRoot = "C:\Users\Kong Kimsrorn\Downloads\gaming-guide-frontend"
Set-Location $projectRoot
Write-Host "Killing old Node..." -ForegroundColor Cyan
taskkill /F /IM node.exe 2>$null
Write-Host "Removing .next..." -ForegroundColor Cyan
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Write-Host "Starting Dev Server..." -ForegroundColor Cyan
npm run dev