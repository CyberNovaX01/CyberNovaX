# backup.ps1 - Backup project before edit
$projectRoot = "C:\Users\Kong Kimsrorn\Downloads\gaming-guide-frontend"
$backupDir = "$projectRoot\_backups"
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupName = "backup_$timestamp"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
New-Item -ItemType Directory -Path "$backupDir\$backupName" -Force | Out-Null
Write-Host "Backing up..." -ForegroundColor Cyan
Copy-Item -Path "$projectRoot\src" -Destination "$backupDir\$backupName\src" -Recurse -Force
Copy-Item -Path "$projectRoot\public\images\mlbb" -Destination "$backupDir\$backupName\mlbb-images" -Recurse -Force
Copy-Item -Path "$projectRoot\package.json" -Destination "$backupDir\$backupName\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "$projectRoot\tsconfig.json" -Destination "$backupDir\$backupName\" -Force -ErrorAction SilentlyContinue
Write-Host "Backup done: $backupName" -ForegroundColor Green
Write-Host "Location: $backupDir\$backupName" -ForegroundColor Yellow
$oldBackups = Get-ChildItem "$backupDir" -Directory | Sort-Object CreationTime -Descending | Select-Object -Skip 10
foreach ($old in $oldBackups) {
    Remove-Item $old.FullName -Recurse -Force
    Write-Host "Removed old backup: $($old.Name)" -ForegroundColor DarkGray
}