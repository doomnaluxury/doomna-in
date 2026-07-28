# DOOMNA LUXURY - Zero-Dependency PowerShell Local HTTP Server (Port 3000)
$port = 3000
$root = "C:\Users\GCS\.gemini\antigravity\scratch\doomna-luxury\public"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "=================================================" -ForegroundColor Green
Write-Host "⚡ DOOMNA LUXURY PRODUCTION PLATFORM STARTED" -ForegroundColor Yellow
Write-Host "   Storefront: http://localhost:$port/" -ForegroundColor Cyan
Write-Host "   Admin Panel: http://localhost:$port/admin/" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Green

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $urlPath = $request.Url.LocalPath
    if ($urlPath -eq "/") { $urlPath = "/index.html" }
    if ($urlPath -eq "/admin" -or $urlPath -eq "/admin/") { $urlPath = "/admin/index.html" }

    $localFilePath = Join-Path $root $urlPath.TrimStart('/')

    if (Test-Path $localFilePath -PathType Leaf) {
        $content = [System.IO.File]::ReadAllBytes($localFilePath)
        $ext = [System.IO.Path]::GetExtension($localFilePath).ToLower()
        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css"  { $response.ContentType = "text/css" }
            ".js"   { $response.ContentType = "application/javascript" }
            ".jpg"  { $response.ContentType = "image/jpeg" }
            ".jpeg" { $response.ContentType = "image/jpeg" }
            ".png"  { $response.ContentType = "image/png" }
            ".mp4"  { $response.ContentType = "video/mp4" }
            ".json" { $response.ContentType = "application/json" }
            default { $response.ContentType = "application/octet-stream" }
        }
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $response.Close()
}
