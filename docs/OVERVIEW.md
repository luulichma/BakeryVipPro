# Tiệm bánh Mitu — Tổng quan dự án

## 1. Mục tiêu

Website **một trang (one-page)** giới thiệu tiệm bánh ngọt Mitu.

Đây **không phải** website thương mại điện tử. Trang không có giỏ hàng, không đăng nhập,
không thanh toán, không lưu đơn hàng. Việc duy nhất trang này phải làm là:

> **Đưa người xem từ trang web sang Zalo của tiệm.**

Mọi nút kêu gọi hành động (CTA) trên trang đều dẫn về `zalo.me/<số điện thoại>`.
Thành công của trang đo bằng số người bấm nút Zalo, không phải bằng số tính năng.

## 2. Phạm vi

| Có làm | Không làm |
|---|---|
| One-page: Hero, Thực đơn, Đặt bánh riêng, Về tiệm, Liên hệ | Giỏ hàng, thanh toán |
| Mọi CTA dẫn về Zalo, nút gọi `tel:` | Đăng ký / đăng nhập |
| Nút Zalo nổi cố định | Quản lý đơn hàng |
| Responsive điện thoại → desktop | Blog / tin tức |
| Hiệu ứng chuyển động, tôn trọng `prefers-reduced-motion` | Đa ngôn ngữ |

## 3. Công nghệ

| Thành phần | Lựa chọn | Vì sao |
|---|---|---|
| Build | **Vite 7** | Nhanh, xuất ra file tĩnh thuần |
| UI | **React 19** | Chừa đường cho giai đoạn 2 (trang admin) mà không phải viết lại |
| CSS | **Tailwind CSS v4** | Dựng bố cục nhanh, token màu khai báo tập trung trong `src/index.css` |
| Chữ | **Fraunces** (tiêu đề) + **Be Vietnam Pro** (nội dung) | Cả hai đều có subset `vietnamese`, dấu tiếng Việt không vỡ |
| Hosting | **Firebase Hosting** | CLI đã cài sẵn; cùng hệ sinh thái với Firestore ở giai đoạn 2 |
| Dữ liệu | **File JSON tĩnh** | Giai đoạn 1 không có dữ liệu người dùng nên không cần cơ sở dữ liệu |

**Ghi chú về Firebase:** giai đoạn 1 chỉ dùng Firebase **Hosting** (nơi đặt file tĩnh).
Không dùng Firestore, Auth hay Functions — vì trang không lưu bất kỳ dữ liệu nào.

## 4. Lộ trình

### Giai đoạn 1 — Bản trình diễn (đang làm)
- One-page hoàn chỉnh, nội dung đọc từ `src/data/`
- Ảnh tạm lấy từ Unsplash, đặt trong `public/images/`
- Deploy Firebase Hosting

### Giai đoạn 2 — Nội dung thật
- Thay toàn bộ ảnh Unsplash bằng ảnh bánh của tiệm
- Thay số Zalo, số điện thoại, địa chỉ, giờ mở cửa thật
- Thay tên và giá sản phẩm thật

### Giai đoạn 3 — Trang quản trị (khi cần)
- Firestore giữ danh sách sản phẩm thay cho `menu.json`
- Firebase Auth cho một tài khoản chủ tiệm
- Route `/admin`: thêm / sửa / xoá sản phẩm, tải ảnh lên Firebase Storage
- Cấu trúc code giai đoạn 1 đã tách sẵn dữ liệu khỏi giao diện, nên bước này
  chỉ đổi **nguồn dữ liệu**, không phải viết lại giao diện

### Giai đoạn 4 — Tách nhiều trang (nếu nội dung đủ nhiều)
- `/thuc-don`, `/san-pham/:slug`, `/ve-tiem` bằng React Router
- Các section hiện tại đã là component độc lập nên tách được trực tiếp

## 5. Sửa nội dung ở đâu

| Muốn sửa | Sửa file |
|---|---|
| Tên tiệm, số Zalo, số điện thoại, địa chỉ, giờ mở cửa, mạng xã hội | `src/data/site.json` |
| Danh sách bánh: tên, mô tả, giá, ảnh, nhãn | `src/data/menu.json` |
| Ảnh | Bỏ file mới vào `public/images/`, trỏ tên file trong `menu.json` |
| Màu thương hiệu, phông chữ | Khối `@theme` trong `src/index.css` |

Những chỗ cần thay bằng dữ liệu thật được đánh dấu `TODO` ngay trong `site.json`.

## 6. Bảng màu

| Mã | Tên | Dùng cho |
|---|---|---|
| `#FFF9F6` | Trắng kem | Nền chính |
| `#F6C9C6` | Hồng kem | Màu thương hiệu, mảng nền phụ |
| `#C4576B` | Hồng mâm xôi | Nút bấm, chữ nhấn |
| `#4A2F2A` | Nâu caramel | Chữ (thay cho màu đen) |
| `#F3E3C3` | Vàng bơ | Điểm nhấn phụ |

## 7. Chạy và deploy

```bash
npm install       # cài lần đầu
npm run dev       # chạy local, mở http://localhost:5173
npm run build     # xuất file tĩnh ra dist/
npm run preview   # xem thử bản build

firebase login
firebase use --add        # chọn project Firebase
npm run deploy            # build + deploy Hosting
```

## 8. Việc còn nợ

- [ ] Thay 9 ảnh Unsplash bằng ảnh thật của tiệm
- [ ] Thay số Zalo `0900000000` trong `src/data/site.json`
- [ ] Thay địa chỉ, giờ mở cửa, số điện thoại
- [ ] Thay tên và giá 8 sản phẩm mẫu
- [ ] Chọn project Firebase và chạy `firebase use --add`
