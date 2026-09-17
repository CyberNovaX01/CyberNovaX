# quick-commit.ps1 - Commit + Push
param(
    [Parameter(Mandatory=$false)]
    [string]$Message = "Update project"
)
$projectRoot = "C:\Users\Kong Kimsrorn\Downloads\gaming-guide-frontend"
Set-Location $projectRoot
Write-Host "Adding..." -ForegroundColor Cyan
git add .
Write-Host "Committing..." -ForegroundColor Cyan
git commit -m "$Message"
Write-Host "Pushing..." -ForegroundColor Cyan
git push
Write-Host "Done! Vercel will deploy in ~2 min" -ForegroundColor Green