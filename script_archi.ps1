# 1. Création des fichiers de la racine (Sauf index.html)
$filesRacine = @("style.css", "script.js", "README.md")
foreach ($file in $filesRacine) {
    if (-not (Test-Path $file)) {
        New-Item -Path $file -ItemType "file" | Out-Null
        Write-Host "Créé : $file" -ForegroundColor Green
    }
}

# 2. Création du dossier projects/ et de ses fichiers HTML
if (-not (Test-Path "projects")) { New-Item -Path "projects" -ItemType "directory" | Out-Null }
$projectsFiles = @(
    "mini-datacenter.html", "vpn-ipsec.html", "glpi.html", 
    "active-directory.html", "framework-pentest-python.html", 
    "it-asset-manager.html", "money-minder.html"
)
foreach ($file in $projectsFiles) {
    $path = "projects/$file"
    if (-not (Test-Path $path)) {
        New-Item -Path $path -ItemType "file" | Out-Null
        Write-Host "Créé : $path" -ForegroundColor Green
    }
}

# 3. Création de l'arborescence dans assets/img/projects/
$imgProjectsDirs = @(
    "mini-datacenter", "vpn-ipsec", "glpi", 
    "active-directory", "framework-pentest-python", 
    "it-asset-manager", "money-minder"
)
foreach ($dir in $imgProjectsDirs) {
    $path = "assets/img/projects/$dir"
    if (-not (Test-Path $path)) {
        New-Item -Path $path -ItemType "directory" -Force | Out-Null
        Write-Host "Dossier créé : $path" -ForegroundColor Cyan
    }
}

# 4. Création des dossiers de profil
if (-not (Test-Path "assets/img/profile")) { New-Item -Path "assets/img/profile" -ItemType "directory" -Force | Out-Null }

# 5. Création du dossier assets/reports/ et de ses fichiers PDF
if (-not (Test-Path "assets/reports")) { New-Item -Path "assets/reports" -ItemType "directory" -Force | Out-Null }
$reportsFiles = @("mini-datacenter.pdf", "vpn-ipsec.pdf", "glpi.pdf", "active-directory.pdf")
foreach ($file in $reportsFiles) {
    $path = "assets/reports/$file"
    if (-not (Test-Path $path)) {
        New-Item -Path $path -ItemType "file" | Out-Null
        Write-Host "Créé : $path" -ForegroundColor Green
    }
}

# 6. Création du dossier assets/cv/ et du fichier PDF
if (-not (Test-Path "assets/cv")) { New-Item -Path "assets/cv" -ItemType "directory" -Force | Out-Null }
$cvPath = "assets/cv/cv-akrou-franck-olivier.pdf"
if (-not (Test-Path $cvPath)) {
    New-Item -Path $cvPath -ItemType "file" | Out-Null
    Write-Host "Créé : $cvPath" -ForegroundColor Green
}

Write-Host "`nArchitecture générée avec succès !" -ForegroundColor Yellow -BackgroundColor Black