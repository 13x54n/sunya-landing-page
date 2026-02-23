@echo off
setlocal EnableDelayedExpansion
REM Sunya installer for Windows CMD
REM Run: curl -sL -o %TEMP%\sunya-install.cmd https://raw.githubusercontent.com/13x54n/sunya-v1/main/package/bin/install.cmd && %TEMP%\sunya-install.cmd
REM Or: install.cmd

set "VERSION=%SUNYA_VERSION%"
if "%VERSION%"=="" set "VERSION=main"

set "REPO=%SUNYA_REPO%"
if "%REPO%"=="" set "REPO=https://raw.githubusercontent.com/13x54n/sunya-v1"

set "BASE_URL=%REPO%/%VERSION%/package/bin"
set "BIN_DIR=%LOCALAPPDATA%\sunya\bin"
set "INSTALL_DIR=%LOCALAPPDATA%\sunya"
set "SUNYA_JS=%INSTALL_DIR%\sunya.js"

echo Sunya - Static analysis for EVM smart contracts
echo.

REM Check Node.js
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required. Install from https://nodejs.org
  exit /b 1
)

REM Create directories
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"
if not exist "%BIN_DIR%" mkdir "%BIN_DIR%"

REM Download sunya.js
echo Downloading sunya...
curl -sL -o "%SUNYA_JS%" "%BASE_URL%/sunya.js"
if errorlevel 1 (
  echo Failed to download. Try: powershell -ExecutionPolicy Bypass -Command "irm %BASE_URL%/install.ps1 | iex"
  exit /b 1
)

REM Create sunya.cmd launcher
(
  echo @echo off
  echo node "%SUNYA_JS%" %%*
) > "%BIN_DIR%\sunya.cmd"

echo Installed: %BIN_DIR%\sunya.cmd
echo.

REM Add to PATH if needed (tokens=3*: %%b = path value after REG_EXPAND_SZ)
set "USER_PATH="
for /f "skip=2 tokens=3*" %%a in ('reg query "HKCU\Environment" /v Path 2^>nul') do set "USER_PATH=%%b"
set "NEW_PATH=!USER_PATH!"
echo !USER_PATH! | findstr /i /c:"%BIN_DIR%" >nul 2>&1
if errorlevel 1 (
  echo Adding to PATH...
  set "NEW_PATH=!USER_PATH!;%BIN_DIR%"
  set "PATH=!PATH!;%BIN_DIR%"
  echo Added %BIN_DIR% to your PATH.
  echo.
)

REM Check Python
where python >nul 2>&1
set "HAS_PYTHON=%errorlevel%"
where python3 >nul 2>&1
if %errorlevel% equ 0 set "HAS_PYTHON=0"
if %HAS_PYTHON% neq 0 (
  echo Python is required for Slither. Install from https://python.org
  echo Ensure 'Add Python to PATH' is checked during installation.
  goto :finish
)

REM Install Slither
echo Setting up Slither...
set "SLITHER_OK=0"
for %%c in (python python3) do (
  if !SLITHER_OK! equ 0 (
    where %%c >nul 2>&1
    if !errorlevel! equ 0 (
      %%c -m pip install --quiet slither-analyzer 2>nul
      if !errorlevel! equ 0 set "SLITHER_OK=1"
    )
  )
)
if %SLITHER_OK% equ 0 (
  for %%c in (pip3 pip) do (
    if !SLITHER_OK! equ 0 (
      where %%c >nul 2>&1
      if !errorlevel! equ 0 (
        %%c install --quiet slither-analyzer 2>nul
        if !errorlevel! equ 0 set "SLITHER_OK=1"
      )
    )
  )
)
if %SLITHER_OK% equ 0 (
  echo Could not install Slither automatically. Run: python -m pip install slither-analyzer
)

REM Add Python Scripts to PATH
for %%c in (python python3) do (
  where %%c >nul 2>&1
  if !errorlevel! equ 0 (
    for /f "delims=" %%s in ('%%c -c "import sysconfig; print(sysconfig.get_path('scripts'))" 2^>nul') do set "SCRIPTS_DIR=%%s"
    if defined SCRIPTS_DIR (
      if exist "!SCRIPTS_DIR!" (
        echo !NEW_PATH! | findstr /i /c:"!SCRIPTS_DIR!" >nul 2>&1
        if errorlevel 1 (
          set "NEW_PATH=!NEW_PATH!;!SCRIPTS_DIR!"
          set "PATH=!PATH!;!SCRIPTS_DIR!"
          echo Added Python Scripts to PATH: !SCRIPTS_DIR!
        )
        goto :scripts_done
      )
    )
  )
)
:scripts_done

REM Write PATH if we added anything
if "!NEW_PATH!" neq "!USER_PATH!" (
  setx PATH "!NEW_PATH!" >nul 2>&1
  echo Restart your terminal for PATH changes to take effect.
)

:finish
echo.
echo Done! Run: sunya scan
echo.
echo Usage:
echo   cd your-contracts-project
echo   sunya scan
echo   sunya install
echo   sunya uninstall
echo.
endlocal
exit /b 0
