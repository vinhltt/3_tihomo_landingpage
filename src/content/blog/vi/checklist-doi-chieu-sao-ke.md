---
locale: vi
slug: statement-reconciliation-checklist
title: 'Đối chiếu sao kê: kiểm tra giao dịch thiếu, trùng lặp và sai lệch'
description: 'Đối chiếu sao kê ngân hàng với sổ theo dõi: chọn kỳ, kiểm tra số dư, xác định giao dịch thiếu, trùng lặp hoặc sai lệch và xử lý giao dịch cần xác minh.'
updated: 2026-10-12
order: 2
sources:
  - title: Track your spending
    publisher: Moneysmart (ASIC, Úc)
    url: https://moneysmart.gov.au/budgeting/track-your-spending
  - title: How do I get my money back after I discover an unauthorized transaction or money missing from my bank account?
    publisher: Consumer Financial Protection Bureau (Hoa Kỳ)
    url: https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/
tihomo:
  anchor: direction
  note: 'Đối chiếu sao kê có hỗ trợ AI là định hướng phát triển của TiHoMo; tính năng này chưa hoạt động. Ứng dụng chưa phát hành công khai và chưa được kiểm chứng đầu–cuối. Bài viết mô tả phương pháp thủ công, không trình diễn hay cam kết cung cấp tính năng này.'
---

Đối chiếu sao kê là việc so sánh **sao kê ngân hàng** với **sổ theo dõi của bạn** để kiểm tra tính nhất quán giữa hai nguồn. Thực hiện định kỳ giúp phát hiện sớm giao dịch bị bỏ sót, ghi nhận trùng lặp, nhập sai số tiền hoặc chưa xác định được.

Đây là phương pháp thủ công, có thể áp dụng với sổ tay, bảng tính hoặc ứng dụng ghi chép. Bài viết không hướng dẫn sử dụng TiHoMo.

## Chuẩn bị trước khi bắt đầu

- Chọn **một tài khoản** và **một kỳ** (ví dụ một tháng dương lịch). Đối chiếu riêng từng tài khoản.
- Tải sao kê của kỳ đó từ kênh chính thức của ngân hàng (ứng dụng hoặc cổng điện tử).
- Mở sổ theo dõi, lọc đúng tài khoản và đúng kỳ.
- Ghi lại **số dư đầu kỳ** và **số dư cuối kỳ** theo sao kê.
- Chuẩn bị một cột trống bên cạnh để đánh dấu từng dòng đã khớp.

Moneysmart gợi ý xem lại sao kê hoặc giao dịch trong ứng dụng của vài tháng gần nhất để nhận diện cả khoản chi thường xuyên lẫn không thường xuyên. Nếu mới bắt đầu, bạn có thể đối chiếu một tháng gần nhất, rồi tiếp tục với các tháng trước.

## Bước 1: Kiểm tra tính nhất quán của sao kê

Trước khi so sánh với sổ theo dõi, hãy kiểm tra số liệu trên sao kê:

> **Số dư đầu kỳ + tổng tiền vào − tổng tiền ra = số dư cuối kỳ**

Nếu phép tính không khớp, nguyên nhân thường là thiếu trang sao kê hoặc chọn sai kỳ. Hãy kiểm tra và xử lý trước khi tiếp tục.

## Bước 2: So sánh từng dòng và đánh dấu giao dịch khớp

Kiểm tra lần lượt từng dòng trên sao kê. Với mỗi dòng, tìm giao dịch tương ứng trong sổ theo dõi theo thứ tự ưu tiên: **số tiền**, **ngày** (có thể chênh lệch vài ngày), **nội dung hoặc bên nhận**. Đánh dấu cả hai dòng khi đã xác định chúng khớp nhau.

Sau khi hoàn tất, các dòng **chưa được đánh dấu** ở cả hai nguồn là những giao dịch cần kiểm tra tiếp.

## Bước 3: Phân loại các dòng chưa khớp

| Loại | Dấu hiệu | Cách xử lý thông thường |
|---|---|---|
| Thiếu | Có trên sao kê, không có trong sổ theo dõi | Bổ sung vào sổ nếu xác nhận là giao dịch của bạn |
| Trùng lặp | Có hai dòng giống nhau trong sổ theo dõi, sao kê chỉ có một | Xóa dòng thừa |
| Sai lệch | Có ở cả hai nguồn nhưng khác số tiền hoặc ngày | Sửa sổ theo dõi theo chứng từ thực tế |
| Ghi nhận chậm | Đã thực hiện nhưng chưa xuất hiện trên sao kê kỳ này | Ghi chú, kiểm tra kỳ sau |
| Chưa xác định | Có trên sao kê nhưng bạn chưa nhận diện được | Đưa vào danh sách cần xác minh |

Cần xác định nguyên nhân trước khi kết luận nguồn nào sai. Chênh lệch thường xuất phát từ lỗi nhập liệu, giao dịch chưa được ghi lại hoặc khác biệt về ngày ghi nhận.

### Ví dụ minh họa

Số liệu dưới đây chỉ phục vụ mục đích minh họa giáo dục, không phải dữ liệu người dùng hay kết quả từ ứng dụng.

Sao kê tài khoản A trong kỳ: số dư đầu kỳ 20.000.000 đ, tiền vào 15.000.000 đ, tiền ra 12.129.000 đ, số dư cuối kỳ **22.871.000 đ**. Phép kiểm tra ở bước 1 khớp: 20.000.000 + 15.000.000 − 12.129.000 = 22.871.000.

| Dòng trên sao kê | Trong sổ theo dõi | Kết quả |
|---|---|---|
| Lương +15.000.000 | +15.000.000 | Khớp |
| Chuyển tiết kiệm −5.000.000 | −5.000.000 | Khớp |
| Thuê nhà −6.000.000 | −6.000.000 | Khớp |
| Siêu thị −350.000 | Không có | **Thiếu** |
| Cà phê −200.000 (một dòng) | Hai dòng −200.000 cùng ngày | **Trùng lặp** |
| Tiền điện −480.000 | −408.000 | **Sai lệch** (đảo chữ số) |
| “Dịch vụ số” −99.000 | Không có | **Chưa xác định** |

Số dư trong sổ theo dõi lúc này: 20.000.000 + 15.000.000 − 11.808.000 = **23.192.000 đ**, cao hơn sao kê 321.000 đ. Các khoản sau giải thích toàn bộ chênh lệch: +350.000 (thiếu giao dịch siêu thị) − 200.000 (trùng lặp giao dịch cà phê) + 72.000 (sai lệch tiền điện) + 99.000 (giao dịch chưa xác định) = 321.000 đ.

Phép tính giải thích được toàn bộ chênh lệch chưa chứng minh rằng mọi sai sót đã được xác định. Các lỗi có thể bù trừ nhau: ví dụ, bỏ sót một giao dịch 200.000 đ và ghi trùng một giao dịch 200.000 đ khác sẽ không tạo ra chênh lệch. Vì vậy, vẫn cần đánh dấu đầy đủ từng dòng ở bước 2. Nếu phép tính còn chênh lệch chưa giải thích được, vẫn còn giao dịch bị bỏ sót hoặc ghi sai.

## Bước 4: Xử lý từng loại

1. **Thiếu**: bổ sung vào sổ theo dõi với đúng ngày và số tiền trên sao kê, phân vào nhóm phù hợp.
2. **Trùng lặp**: xóa dòng thừa. Trước khi xóa, xác nhận đó không phải hai giao dịch thực tế có cùng số tiền (ví dụ hai lần mua cà phê).
3. **Sai lệch**: sửa theo chứng từ (hóa đơn, tin nhắn giao dịch), không dựa vào trí nhớ.
4. **Ghi nhận chậm**: giữ nguyên và ghi chú; kiểm tra lại khi có sao kê kỳ sau.
5. **Chưa xác định**: không xóa hoặc phân loại dựa trên phỏng đoán. Tiếp tục với bước 5.

## Bước 5: Xử lý giao dịch cần xác minh

Với mỗi giao dịch chưa nhận diện được, lập danh sách riêng gồm ngày, số tiền, nội dung trên sao kê và các bước đã thực hiện để xác minh (kiểm tra lịch sử ứng dụng, email hóa đơn hoặc hỏi thành viên gia đình). Kiểm tra các khả năng sau:

- Một **gói dịch vụ định kỳ** đã đăng ký nhưng quên, hoặc chưa hủy.
- **Phí** của ngân hàng hoặc đơn vị thanh toán.
- Giao dịch của **người cùng sử dụng tài khoản hoặc thẻ**.
- Nếu vẫn chưa xác định được, đó có thể là giao dịch bạn không thực hiện.

Moneysmart nêu các chi phí ẩn có thể phát hiện khi theo dõi chi tiêu, ví dụ phí tài khoản, gói dịch vụ không còn sử dụng hoặc giao dịch nhầm.

### Nếu nghi ngờ giao dịch không do bạn thực hiện

- Liên hệ ngân hàng **qua kênh chính thức** được ghi trên thẻ hoặc trong ứng dụng ngân hàng. Không sử dụng số điện thoại hay đường dẫn từ tin nhắn không rõ nguồn.
- Không chia sẻ OTP, mật khẩu hay mã PIN với bất kỳ ai, kể cả người tự nhận là nhân viên ngân hàng.
- Lưu lại sao kê, ảnh chụp màn hình, mã giao dịch và mọi trao đổi với ngân hàng.
- Hỏi ngân hàng về **thời hạn** và **quy trình** tra soát, khiếu nại, đồng thời thực hiện sớm.

Thời hạn khác nhau tùy quốc gia và loại giao dịch. Ví dụ, cơ quan bảo vệ người tiêu dùng tài chính Hoa Kỳ (CFPB) nêu rằng với giao dịch điện tử trái phép (thẻ ghi nợ, chuyển khoản điện tử) trên tài khoản ngân hàng tại Hoa Kỳ, người dùng cần thông báo cho ngân hàng trong vòng 60 ngày sau khi ngân hàng gửi sao kê có giao dịch đó. Nếu thông báo sau thời hạn này, người dùng có thể phải chịu toàn bộ số tiền của các giao dịch phát sinh sau mốc 60 ngày và trước khi thông báo, với điều kiện ngân hàng chứng minh được rằng các giao dịch ấy đã không xảy ra nếu nhận được thông báo trước thời hạn. Đây là quy định của Hoa Kỳ, **không áp dụng mặc định tại Việt Nam**. Bài viết không tóm tắt quy định pháp luật Việt Nam; hãy đọc điều khoản của ngân hàng bạn sử dụng và hỏi trực tiếp về thời hạn tra soát.

Nguyên tắc chung là **xem lại sao kê định kỳ và hành động sớm** để hỗ trợ việc xử lý vấn đề.

## Bước 6: Hoàn tất kỳ đối chiếu và lưu lại thông tin

Khi mọi dòng đã được xử lý hoặc đưa vào danh sách cần xác minh:

- Số dư trong sổ theo dõi khớp với số dư cuối kỳ trên sao kê, ngoại trừ giao dịch ghi nhận chậm đã có ghi chú và giao dịch đang xác minh.
- Danh sách cần xác minh có ngày, số tiền, nội dung và bước xử lý tiếp theo.
- Ghi ngày hoàn thành đối chiếu và kỳ đã đối chiếu để xác định kỳ bắt đầu cho lần sau.

## Duy trì thói quen đối chiếu

- Đối chiếu **mỗi tháng một lần** vào ngày cố định, tránh tích lũy nhiều tháng chưa kiểm tra.
- Giữ định dạng sổ theo dõi nhất quán: xem hướng dẫn [quản lý thu–chi nhiều tài khoản](../managing-income-and-expenses-across-multiple-accounts/) để tránh ghi nhận trùng lặp chuyển nội bộ và tạo ra chênh lệch không phản ánh giao dịch thực tế.
- Nếu một loại sai sót lặp lại (ví dụ thường xuyên bỏ sót tiền mặt), hãy điều chỉnh quy trình ghi nhận thay vì chỉ sửa từng dòng.
- Sau khi đối chiếu, xem lại các khoản chi định kỳ trong [bài khoản chi định kỳ và ngân sách](../recurring-payments-and-budgeting/) để cập nhật danh sách nghĩa vụ thanh toán.

## Tóm tắt

Chọn một tài khoản và một kỳ, kiểm tra tính nhất quán của sao kê, so sánh từng dòng, rồi phân loại giao dịch chưa khớp thành thiếu, trùng lặp, sai lệch, ghi nhận chậm hoặc chưa xác định. Đưa giao dịch chưa xác định vào danh sách cần xác minh. Nếu nghi ngờ giao dịch không do bạn thực hiện, liên hệ ngân hàng qua kênh chính thức và hỏi sớm về thời hạn tra soát.
