---
title: Hướng Dẫn Tối Ưu Hóa Trải Nghiệm Windows Terminal
description: Một hướng dẫn tối ưu hóa trải nghiệm Windows Terminal, bao gồm cải tiến PowerShell, cấu hình chủ đề Oh My Posh, tích hợp Git Bash và làm đẹp giao diện.
date: 2024-06-16 22:48:57
updated: 2024-11-02 17:55:29
image: https://7.isyangs.cn/24/6671b766a4312-24.jpg
categories: [Chia sẻ kinh nghiệm]
tags: [Hướng dẫn, Hệ thống, Windows, Terminal]
recommend: true
---

## Khởi động

- Nhấn `Win+R` để mở hộp thoại Run, nhập `wt`{lang="sh"}, nhấn Enter để mở Windows Terminal.
- Nhấn `Win+X` để mở menu chuột phải của nút Start, nhấn `I` (hoặc `Alt+I`) để mở Windows Terminal.

## PowerShell

### Cài đặt sudo

Nếu bạn chưa nâng cấp lên Windows 24H2, bạn có thể cài đặt `gsudo` để thêm hỗ trợ sudo.

- Cài đặt `gsudo`
  :copy{prompt="PS>" code="winget install gsudo"}

Trên hệ thống mới, lệnh `sudo` có thể không thực thi đúng các lệnh PowerShell. Để chạy lệnh với quyền admin trong cùng thư mục:

- Mở terminal mới với quyền admin trong thư mục hiện tại:
  :copy{prompt="PS>" code="sudo wt -d $(pwd)"}

### Nếu sử dụng Windows PowerShell

Theo tài liệu chính thức của Microsoft, PowerShell và Windows PowerShell là hai sản phẩm khác nhau.

Module `PSReadLine` cung cấp tính năng tự động hoàn thành. Windows PowerShell sử dụng phiên bản cũ của `PSReadLine`, cần cập nhật thủ công.

- Cài đặt phiên bản mới của `PSReadLine`
  :copy{prompt="PS(Administrator)>" code="Install-Module PSReadLine -Force"}
  Nếu lần đầu chạy lệnh gặp thông báo cần cài đặt `NuGet`, có thể cần chạy lại lệnh trên một lần nữa.

### Bật tính năng tự động hoàn thành

- Tạo thư mục cấu hình PowerShell (nếu chưa có thể bỏ qua bước này)
  :copy{prompt="PS>" code="mkdir $PROFILE/.."}
- Mở file cấu hình PowerShell
  :copy{prompt="PS>" code="notepad $PROFILE"}
  - Hoặc chỉnh sửa cấu hình toàn hệ thống
  :copy{prompt="PS>" code="sudo notepad $PROFILE.AllUsersAllHosts"}
- Thêm nội dung sau vào file cấu hình:
  ```powershell [$PROFILE]
  Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
  Set-PSReadLineOption -PredictionSource History
  Set-PSReadLineKeyHandler -Chord "Ctrl+RightArrow" -Function ForwardWord
  ```

### Mẹo nhỏ

- Chuyển nhanh sang terminal quyền admin (cần bật OpenSSH Service)
  :copy{prompt="PS>" code="ssh localhost"}
- Thêm lệnh chạy Git Bash vào cấu hình PowerShell
  :copy{prompt="$PROFILE" lang="sh" code="Set-Alias bash $env:ProgramFiles\Git\bin\bash"}
- Gán tổ hợp `Ctrl+D` để thoát PowerShell
  :copy{prompt="$PROFILE" lang="sh" code="Set-PSReadlineKeyHandler -Chord Ctrl+d -Function DeleteCharOrExit"}

### Oh My Posh

- Cài đặt `oh-my-posh`
  :copy{prompt="PS>" code="winget install JanDeDobbeleer.OhMyPosh"}
- Thay đổi chính sách thực thi PowerShell
  :copy{prompt="PS>" code="Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"}
- Cấu hình `oh-my-posh`
  - Mở file cấu hình PowerShell
  :copy{prompt="PS>" code="notepad $PROFILE"}
  - Thêm dòng sau vào file
    ```powershell [$PROFILE]
    oh-my-posh init pwsh | Invoke-Expression
    ```
- Cài đặt font từ [Nerd Fonts](https://www.nerdfonts.com/font-downloads)

## Git Bash

Sau khi cài đặt Git for Windows, có thể thêm Git Bash vào Windows Terminal.

- Mở cài đặt Windows Terminal
- Thêm cấu hình mới:
  - :copy{prompt="Tên" code="Git Bash"}
  - :copy{prompt="Lệnh" code="%ProgramFiles%\Git\bin\bash.exe --login -i"}
  - :copy{prompt="Thư mục khởi động" code="%USERPROFILE%"}
  - :copy{prompt="Icon" code="%ProgramFiles%\Git\mingw64\share\git\git-for-windows.ico"}

## Tùy chỉnh giao diện

Chỉnh sửa tại: Windows Terminal Settings - Profile - Defaults - Appearance

- Văn bản
  - Scheme màu: One Half Dark
  - Font: `Cascadia Code, Symbols Nerd Font`
- Độ trong suốt
  - Mức trong suốt: 75%
  - Bật hiệu ứng Acrylic

## Tìm kiếm lịch sử lệnh

Sau khi cập nhật `PSReadLine`, có thể dùng `F2` để chuyển giữa tự động hoàn thành và danh sách gợi ý.

- `Ctrl + R`: Tìm kiếm lệnh đã chạy trước đó.
- `Ctrl + S`: Tìm kiếm xuôi theo lịch sử lệnh.
- `Ctrl + G` hoặc `Esc`: Thoát chế độ tìm kiếm.

## Dùng Fastfetch để hiển thị thông tin hệ thống

Cài đặt bằng `Scoop`:
  :copy{prompt="PS>" code="scoop install fastfetch"}

- Hiển thị thông tin hệ thống
  :copy{prompt="PS>" code="fastfetch"}
- Ẩn logo, hiển thị chi tiết
  :copy{prompt="PS>" code="fastfetch -c all -l none"}

## Một số lệnh hữu ích

- Xem lịch sử lệnh
  :copy{prompt="PS>" code="Get-Content (Get-PSReadlineOption).HistorySavePath"}
- Kiểm tra đường dẫn lệnh
  :copy{prompt="PS>" code="(Get-Command <command>).Definition"}
  :copy{prompt="PS>" code="where.exe <command>"}
- Mở File Explorer trong thư mục hiện tại
  :copy{prompt="PS>" code="explorer ."}
- Bật điểm phát Wi-Fi khi không có mạng
  :copy{prompt="PS>" code="[Windows.Networking.NetworkOperators.NetworkOperatorTetheringManager,...]::CreateFromConnectionProfile([Windows.Networking.Connectivity.NetworkInformation,...]::GetInternetConnectionProfile()).StartTetheringAsync()"}

