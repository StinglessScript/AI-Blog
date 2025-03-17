---
title: Hướng Dẫn Streaming Moonlight
description: Cấu hình Sunshine trên server, điều chỉnh độ phân giải trên client, kích hoạt chế độ màn hình riêng tư và tối ưu hóa cảm ứng.
date: 2024-01-18 18:58:55
updated: 2024-07-08 12:51:35
image: https://7.isyangs.cn/24/6664009b8f999-24.jpg
categories: [Chia sẻ kinh nghiệm]
tags: [tailscale, moonlight, sunshine, mạng, điều khiển từ xa, hướng dẫn]
references:
  - title: Sử dụng Sunshine + Moonlight để tạo dịch vụ stream game với "chế độ riêng tư"
    link: https://www.xkww3n.cyou/2023/09/18/sunshine-moonlight-game-streaming-privately/
recommend: 50
---

## Môi Trường

Nếu thiết bị bạn muốn stream cùng một mạng LAN, bạn có thể kết nối trực tiếp. Nếu không, hãy sử dụng Tailscale hoặc Zerotier để tạo mạng ảo, tham khảo hướng dẫn sau:

::link-banner
---
title: Hướng dẫn sử dụng Tailscale
banner: https://7.isyangs.cn/24/6664009cce512-24.jpg
link: /2023/tailscale-incomplete-guide
---
::

Bạn cũng có thể sử dụng IPv6 để stream qua Internet, nhưng hãy lưu ý rằng "Địa chỉ tạm thời IPv6" hoặc tường lửa có thể gây cản trở kết nối.

## Server (Máy Chủ)

Nếu sử dụng card đồ họa NVIDIA, bạn có thể bật tính năng NVIDIA SHIELD trong GeForce Experience.

Tuy nhiên, Sunshine là lựa chọn tốt hơn cho server. Cấu hình mặc định của Sunshine hoạt động rất tốt mà không cần điều chỉnh nhiều.

::link-card
---
icon: https://docs.lizardbyte.dev/projects/sunshine/en/latest/_static/sunshine.png
title: Trang chủ Sunshine
link: https://app.lizardbyte.dev/Sunshine/?lng=zh-CN
---
::

## Client (Máy Khách)

Sử dụng Moonlight làm client để nhận stream. Bạn có thể tham khảo các hướng dẫn trên Bilibili của Axixi.

::link-card
---
icon: https://moonlight-stream.org/images/moonlight.svg
title: Trang chủ Moonlight
link: https://moonlight-stream.org/
---
::

::link-card
---
icon: https://github.githubassets.com/favicons/favicon.svg
title: Phiên bản Moonlight Android sửa đổi của Axixi
link: https://github.com/Axixi2233/moonlight-android
---
::

::link-card
---
icon: https://i1.hdslb.com/bfs/face/b41566f47ea0d0f1e35ed54521c849c68c026892.jpg@120w
mirror: true
title: Kênh Axixi trên Bilibili
link: https://space.bilibili.com/16893379/video
---
::

Khi mở Moonlight, bạn sẽ thấy danh sách máy chủ. Nhập mã PIN trong bảng điều khiển Sunshine để kết nối. Trong phần cài đặt, hãy chọn độ phân giải và FPS phù hợp.

## Chế Độ Màn Hình Riêng Tư / Màn Hình Ảo

Dùng chức năng "màn hình ảo" để tắt màn hình thật khi stream, giúp bảo mật quyền riêng tư.

::link-card
---
icon: https://www.amyuni.com//images/favicon.png
title: Driver màn hình ảo USB
link: https://www.amyuni.com/forum/viewtopic.php?t=3030
---
::

### Cài Đặt Độ Phân Giải Tùy Chỉnh

Mở Registry Editor, vào đường dẫn `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WUDF\Services\usbmmIdd\Parameters\Monitors` để chỉnh độ phân giải màn hình ảo.

### Cấu Hình Ứng Dụng Ẩn Màn Hình

Trong bảng điều khiển Sunshine, vào "Ứng dụng" → "Thêm mới" và thiết lập như sau:

- **Tên ứng dụng**: `Chế độ riêng tư`
- **Lệnh khi khởi động/tắt:**
  - `deviceinstaller64 enableidd 0`
  - `deviceinstaller64 enableidd 1`
  - `rundll32 user32.dll,LockWorkStation`
  - `DisplaySwitch /external`
- **Thư mục làm việc**: Thư mục chứa driver usbmmidd
  :copy{prompt code="D:\Software\usbmmidd_v2\"}

Lưu lại và kiểm tra trong danh sách ứng dụng trên Sunshine.

## Cải Tiến Cảm Ứng

### Hỗ Trợ Cảm Ứng Đa Điểm

Phiên bản Moonlight sửa đổi (link trong phần trên) hỗ trợ cảm ứng đa điểm trên Windows.

::link-card
---
icon: https://www.bilibili.com/favicon.ico
title: Stream Genshin Impact bằng cảm ứng
link: https://www.bilibili.com/video/BV1Si4y1Y7Jb/
---
::

- Bật quyền truy cập bàn phím vật lý Moonlight trong cài đặt trợ năng Android.
- Kích hoạt "Tùy chọn nhanh" trong cài đặt Moonlight để bật bàn phím ảo khi cần.

#### Tránh Cử Chỉ Cảm Ứng Bị Cản Trở

Trong MIUI / HyperOS, vào `Cài đặt > Màn hình chính > Cách điều hướng hệ thống` để tắt cử chỉ ba hoặc bốn ngón tay. Thêm Moonlight vào danh sách ứng dụng game và vô hiệu hóa cảm ứng cạnh màn hình.

### Gọi Menu Start, Trung Tâm Điều Khiển, Thanh Taskbar Khi Chơi Toàn Màn Hình

- Vuốt từ giữa cạnh dưới: **Menu Start**
- Vuốt từ phải cạnh dưới: **Trung tâm điều khiển**
- Vuốt nhanh từ cạnh dưới: **Thanh taskbar**

### Hỗ Trợ Stream Dọc Màn Hình

Dùng phiên bản Sunshine Nightly.

### Bàn Phím Ảo

#### Bật Bàn Phím Cảm Ứng Windows Tự Động

Vào `Cài đặt Windows > Thời gian & ngôn ngữ > Nhập > Bàn phím cảm ứng` và chọn `Luôn hiển thị`.

#### Hiện Biểu Tượng Bàn Phím Cảm Ứng Trên Thanh Taskbar

Vào `Cài đặt Windows > Cá nhân hóa > Thanh tác vụ > Biểu tượng hệ thống > Bàn phím cảm ứng` và bật `Luôn hiển thị`.

#### Bật Bàn Phím Moonlight

Nhấn ba ngón tay lên màn hình để hiển thị bàn phím thiết bị.

#### Bàn Phím Đầy Đủ Chức Năng

Phiên bản Moonlight sửa đổi hỗ trợ bàn phím đầy đủ.

😆 Chúc bạn có trải nghiệm streaming tuyệt vời!

