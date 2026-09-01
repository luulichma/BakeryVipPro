import site from '../data/site.json'
import menu from '../data/menu.json'

/** Link Zalo: zalo.me/<số điện thoại>, bỏ mọi ký tự không phải chữ số. */
export function zaloLink(message) {
  const digits = String(site.zaloPhone).replace(/\D/g, '')
  // Zalo không nhận tham số điền sẵn nội dung tin nhắn, nên `message`
  // chỉ dùng làm nhãn cho trình đọc màn hình, không gắn vào URL.
  void message
  return `https://zalo.me/${digits}`
}

export function telLink() {
  return `tel:${String(site.phone).replace(/\s/g, '')}`
}

export function formatPrice(value) {
  return value.toLocaleString('vi-VN') + 'đ'
}

export { site, menu }
