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

**Trang chi tiết bánh `/san-pham/:slug`** — việc chính của giai đoạn này.
Hiện nút "Đặt món này" trong thực đơn bắn thẳng sang Zalo, người xem chưa kịp biết
bánh có cỡ nào, giá bao nhiêu. Giai đoạn 4 đổi nút đó thành đường dẫn sang trang riêng
của từng bánh, gồm:

| Phần | Nội dung |
|---|---|
| Ảnh | Ảnh lớn của bánh, có thể thêm 2–3 ảnh phụ |
| Mô tả | Mô tả dài hơn dòng `desc` ở thực đơn: cốt bánh, nhân, nguyên liệu |
| Cỡ bánh | Bảng cỡ + giá tương ứng (ví dụ 14cm / 16cm / 20cm) |
| Kiểu bánh | Các biến thể chọn được: vị cốt, vị kem, màu trang trí |
| Ghi chú | Thời gian đặt trước, hạn dùng, cách bảo quản |
| CTA | Nút Zalo — **vẫn là đích đến duy nhất**, kèm sẵn tên bánh trong tin nhắn |

Trang này **không** có giỏ hàng và không lưu lựa chọn của khách. Các ô cỡ và kiểu bánh
chỉ để khách xem và biết mình muốn gì, rồi bấm Zalo nhắn cho tiệm — đúng mục tiêu ở mục 1.

Kéo theo hai thay đổi dữ liệu trong `menu.json`: mỗi món cần thêm `slug`,
`sizes` (mảng cỡ + giá) và `variants` (mảng kiểu bánh). Trường `price` hiện tại
trở thành "giá từ", lấy theo cỡ nhỏ nhất.

## 5. Sửa nội dung ở đâu

| Muốn sửa | Sửa file |
|---|---|
| Tên tiệm, số Zalo, số điện thoại, địa chỉ, giờ mở cửa, mạng xã hội | `src/data/site.json` |
| Danh sách bánh: tên, mô tả, giá, ảnh, nhãn | `src/data/menu.json` |
| Ảnh | Bỏ file mới vào `public/images/`, trỏ tên file trong `menu.json` |
| Màu thương hiệu, phông chữ, màu chiếc bánh | Khối `@theme` trong `src/index.css` |
| Cỡ và kiểu của mọi nút | `src/components/Button.jsx` |

Những chỗ cần thay bằng dữ liệu thật được đánh dấu `TODO` ngay trong `site.json`.

## 6. Bảng màu

| Mã | Tên | Dùng cho |
|---|---|---|
| `#FFF9F6` | Trắng kem | Nền chính |
| `#F6C9C6` | Hồng kem | Màu thương hiệu, mảng nền phụ |
| `#C4576B` | Hồng mâm xôi | Nút bấm, chữ nhấn |
| `#4A2F2A` | Nâu caramel | Chữ (thay cho màu đen) |
| `#F3E3C3` | Vàng bơ | Điểm nhấn phụ |

Chiếc bánh SVG ở hero dùng bảng màu riêng, chọn bằng cách **đo tương phản trước khi vẽ**
(mọi cặp mảng nằm cạnh nhau đều cách nhau ít nhất 1.49:1, thay vì 1.00–1.43 như bản đầu):

| Mã | Mảng | Tương phản với nền |
|---|---|---|
| `#EFA9A7` | Kem hồng bọc tầng trên và tầng đáy | 1.85 |
| `#FFF3E6` | Kem phủ mặt và các lớp kem | 1.05 — tách bằng nét viền |
| `#C98B52` | Cốt bánh vani ở mặt cắt tầng giữa | 2.76 |
| `#A06641` | Cốt bánh cacao | 4.50 |

Vì cả bảng màu đều là pastel nên riêng tương phản nền không đủ; mọi mảng của bánh
có thêm **nét viền** `rgba(74,47,42,0.16)` để tách bạch.

## 6b. Hệ thống nút

Mọi CTA đi qua `src/components/Button.jsx` — **3 cỡ** (`sm` / `md` / `lg`) và
**6 kiểu** (`primary`, `dark`, `outline`, `soft`, `light`, `outlineLight`).
Không đặt class nút thủ công ở bất kỳ đâu khác, nếu không sẽ lặp lại lỗi cũ:
9 nút ra 5 cỡ đệm và 3 cỡ chữ khác nhau.

## 6c. Nhịp màu các khối

Trang đi từ nhạt tới đậm dần về phía nút Zalo cuối trang:
hero và thực đơn nền kem → "Đặt bánh riêng" nền hồng nhạt → "Về tiệm" nền hồng đậm hơn
→ "Ghé tiệm" nền nâu caramel.

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
