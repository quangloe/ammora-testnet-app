# Ammora Testnet App (GIWA Sepolia) — community, experimental

Ứng dụng web tối giản dùng [`@ammora-protocol/sdk`](https://www.npmjs.com/package/@ammora-protocol/sdk) để thử tương tác với Ammora trên testnet GIWA Sepolia (chain ID 91342).

> **Không chính thức.** Đây là công cụ cộng đồng, không do đội ngũ Ammora làm ra hay bảo trợ. Trạng thái: **thử nghiệm**, mua thẳng trên curve đã chạy được, một số chức năng khác có thể lỗi (xem "Tình trạng đã biết").
> *Unofficial community tool, experimental. Some features may fail.*

## Chức năng
1. Kết nối MetaMask, tự thêm/chuyển sang GIWA Sepolia.
2. Xem số dư ETH testnet.
3. Quét các launch (bonding curve) trực tiếp từ chuỗi, không phụ thuộc Data API.
4. Kiểm tra token có được router Ammora hỗ trợ và có đường mua đã đăng ký hay không.
5. Báo giá và mua qua router (`AmmoraRouteClient`).
6. Mua thẳng trên bonding curve bằng WETH (`AmmoraSwapClient`), dùng khi token chưa có route.

## Chạy
Cần Node.js 18+.

```bash
npm install
npm run dev
```

Mở http://localhost:5173 bằng trình duyệt có MetaMask. Chỉ dùng ví riêng chứa ETH testnet. App không bao giờ hỏi hay lưu private key; mọi giao dịch ký trong ví của bạn.

## Tình trạng đã biết
- **Mua thẳng trên curve (qua WETH) đã mua thử thành công** một giao dịch trên GIWA Sepolia. Các phần khác chưa được kiểm tra kỹ.
- **Mua qua router** báo `no reviewed exact-input route is currently available` với các token chúng tôi thử. Theo tài liệu SDK, mỗi curve phải được worker của Ammora đăng ký vào registry (có timelock) mới mua được qua router.
- **Data API** (`ammora-giwa-sepolia-data.fly.dev`) trả lỗi 503 và chặn CORS từ localhost khi chúng tôi thử, nên app không dùng nó (nút "Tải từ Data API" chỉ để tham khảo).
- RPC công khai của GIWA giới hạn tốc độ (429); app đã gộp request và tự thử lại, nhưng quét lần đầu có thể mất vài phút. Có thể dán RPC riêng vào ô "RPC tuỳ chọn".
- SDK đang ở 0.3.x, API có thể thay đổi.

## Lưu ý
- App không tính điểm chiến dịch. Nhiệm vụ (waitlist, X, supply...) làm trên website chính thức của Ammora.
- Chỉ dùng cho testnet. Mua/bán chỉ tốn ETH testnet và gas.
- Cấp phép: MIT.
