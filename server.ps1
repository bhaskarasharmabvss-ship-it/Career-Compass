# Career Compass - Lightweight Local HTTP Server
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

$ports = @(8080, 8081, 8000, 3000, 5000)
$listener = $null
$activePort = $null

foreach ($p in $ports) {
    try {
        $tempListener = New-Object System.Net.HttpListener
        $tempListener.Prefixes.Add("http://localhost:$p/")
        $tempListener.Start()
        $listener = $tempListener
        $activePort = $p
        break
    } catch {
        try {
            $tempListener.Close()
        } catch {}
        try {
            $tempListener = New-Object System.Net.HttpListener
            $tempListener.Prefixes.Add("http://127.0.0.1:$p/")
            $tempListener.Start()
            $listener = $tempListener
            $activePort = $p
            break
        } catch {
            try { $tempListener.Close() } catch {}
        }
    }
}

if (-not $listener -or -not $listener.IsListening) {
    Write-Warning "Could not start HTTP listener on standard ports. Opening index.html directly..."
    Start-Process (Join-Path $root "index.html")
    exit 0
}

$url = "http://localhost:$activePort/"
Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Career Compass is RUNNING successfully at:" -ForegroundColor Cyan
Write-Host " $url" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "Opening your browser now... (Keep this window open to serve files)" -ForegroundColor White

# Auto-open browser
Start-Process $url

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8";
    ".css"   = "text/css; charset=utf-8";
    ".js"    = "application/javascript; charset=utf-8";
    ".json"  = "application/json; charset=utf-8";
    ".svg"   = "image/svg+xml";
    ".png"   = "image/png";
    ".jpg"   = "image/jpeg";
    ".jpeg"  = "image/jpeg";
    ".webp"  = "image/webp";
    ".ico"   = "image/x-icon";
    ".woff2" = "font/woff2";
    ".woff"  = "font/woff";
    ".ttf"   = "font/ttf"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath.TrimStart('/'))
        if ([string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "index.html"
        }

        $cleanPath = $rawPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($root, $cleanPath)

        if ([System.IO.File]::Exists($filePath)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }
            $response.ContentType = $contentType
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
            $response.ContentLength64 = $notFoundBytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
            }
        }
        $response.OutputStream.Close()
    }
} catch {
    Write-Host "Server stopped." -ForegroundColor Yellow
} finally {
    if ($listener) {
        $listener.Stop()
        $listener.Close()
    }
}
