# test-routes.ps1 - Test all routes
$routes = @(
    "/",
    "/mlbb",
    "/mlbb/tier",
    "/mlbb/heroes",
    "/mlbb/stats",
    "/mlbb/counters",
    "/mlbb/builds",
    "/mlbb/emblems",
    "/ff-hub",
    "/news",
    "/patch"
)
$pass = 0
$fail = 0
foreach ($r in $routes) {
    try {
        $res = Invoke-WebRequest -Uri "http://localhost:3000$r" -UseBasicParsing -TimeoutSec 60
        Write-Host "OK $($res.StatusCode) $r" -ForegroundColor Green
        $pass++
    } catch {
        Write-Host "FAIL $r" -ForegroundColor Red
        $fail++
    }
}
Write-Host ""
Write-Host "Done: $pass passed, $fail failed" -ForegroundColor Cyan