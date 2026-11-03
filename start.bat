@echo off
title Career Compass Server
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -NoProfile -File ".\server.ps1"
pause

