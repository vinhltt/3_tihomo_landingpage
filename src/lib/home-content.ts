import type { Locale } from './locale';

export type StatusKind = 'have' | 'partial' | 'direction' | 'idea';

interface CardCopy {
  title: string;
  body: string;
}

interface FeatureCopy extends CardCopy {
  kind: StatusKind;
}

interface HomeCopy {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  hero: {
    prelaunch: string;
    headline: string;
    lead: string;
    note: string;
    caption: string;
  };
  bridge: string;
  problem: {
    title: string;
    intro: string;
    cards: CardCopy[];
    // Labels for the educational example in the statement-reconciliation guide; amounts live in HomePage.
    chart: {
      title: string;
      rows: string[];
      totalLabel: string;
      captionBefore: string;
      captionLink: string;
      captionAfter: string;
    };
  };
  platform: {
    title: string;
    intro: string;
    caption: string;
    legend: { kind: StatusKind; meaning: string }[];
    stages: { label: string; cards: FeatureCopy[] }[];
  };
  aiNative: {
    title: string;
    intro: string;
    caption: string;
    cards: CardCopy[];
    ledger: { label: string; detail: string };
    outOfScope: { title: string; items: string[] };
    note: string;
  };
  direction: {
    title: string;
    intro: string;
    caption: string;
    steps: { label: string; detail: string }[];
    definitions: { term: string; meaning: string }[];
    cards: FeatureCopy[];
  };
  extensions: {
    title: string;
    hub: string;
    caption: string;
    cards: FeatureCopy[];
  };
  vision: {
    title: string;
    intro: string;
    compare: {
      caption: string;
      columns: string[];
      rows: { label: string; cells: string[] }[];
    };
    caption: string;
    measureLabel: string;
    gates: (CardCopy & { measures: string[] })[];
    note: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  closing: CardCopy;
}

export const homeCopy: Record<Locale, HomeCopy> = {
  vi: {
    title: 'TiHoMo — Tài chính cá nhân AI-native, bạn giữ quyền kiểm soát',
    description:
      'TiHoMo đang phát triển theo hướng tài chính cá nhân AI-native: AI hỗ trợ dựa trên nguồn dữ liệu, bạn duyệt thay đổi. Ứng dụng chưa phát hành; AI chưa triển khai.',
    primaryCta: 'Tìm hiểu định hướng tính năng',
    secondaryCta: 'Đọc hướng dẫn quản lý tài chính',
    hero: {
      prelaunch: 'Đang phát triển · Chưa phát hành',
      headline: 'Tài chính cá nhân. AI hỗ trợ, bạn kiểm soát.',
      lead: 'TiHoMo đang phát triển theo hướng AI-native cho người có nhiều tài khoản. Ứng dụng chưa phát hành; AI mới là định hướng.',
      note: 'Ứng dụng chưa phát hành công khai và chưa có lịch ra mắt. Nội dung trên trang được cung cấp mà không yêu cầu tài khoản hoặc thông tin đăng ký.',
      caption: 'Minh họa định hướng phát triển, không phải giao diện ứng dụng đang hoạt động.',
    },
    bridge: 'AI hỗ trợ từ dữ liệu tài chính, không thay bạn quyết định.',
    problem: {
      title: 'Quản lý nhiều tài khoản đòi hỏi dữ liệu nhất quán',
      intro: 'Thu–chi phân tán giữa tài khoản, ví điện tử và thẻ làm tăng công nhập liệu và khó nhận ra sai sót.',
      cards: [
        { title: 'Nhập liệu thủ công mất thời gian', body: 'Tổng hợp, nhập lại từ nhiều nguồn mỗi kỳ.' },
        { title: 'Dữ liệu thiếu, trùng lặp hoặc sai lệch', body: 'Làm sai số dư và báo cáo.' },
        { title: 'Chuyển khoản nội bộ bị ghi nhận là chi phí', body: 'Chuyển giữa tài khoản của chính bạn không phải khoản chi.' },
        { title: 'Phí và khoản chi định kỳ khó theo dõi', body: 'Dễ bị bỏ sót nếu không kiểm tra theo kỳ.' },
      ],
      chart: {
        title: 'Vì sao sổ cao hơn sao kê?',
        rows: ['Thiếu: siêu thị', 'Trùng lặp: cà phê', 'Sai lệch: tiền điện', 'Chưa xác định: “Dịch vụ số”'],
        totalLabel: 'Sổ trừ sao kê',
        captionBefore: 'Minh họa bằng số liệu giáo dục từ bài',
        captionLink: 'Đối chiếu sao kê',
        captionAfter: '; không phải dữ liệu người dùng hay kết quả từ ứng dụng.',
      },
    },
    platform: {
      title: 'Nền tảng hiện có — chưa phát hành',
      intro: 'Đã có mã nguồn; chưa xác nhận luồng sử dụng hoàn chỉnh hay kiểm chứng đầu–cuối.',
      caption: 'Minh họa quan hệ dữ liệu giữa các hạng mục; viền đứt: một phần.',
      legend: [
        { kind: 'have', meaning: 'Đã có mã nguồn, chưa kiểm chứng đầu–cuối.' },
        { kind: 'partial', meaning: 'Có một phần xử lý, chưa đủ luồng sử dụng.' },
        { kind: 'direction', meaning: 'Chưa triển khai, chưa kiểm chứng.' },
        { kind: 'idea', meaning: 'Chưa được chọn, không phải cam kết.' },
      ],
      stages: [
        {
          label: 'Nhập',
          cards: [
            { kind: 'have', title: 'Nhập dữ liệu từ tệp Excel', body: 'Nhập giao dịch theo cấu hình. Chưa đọc PDF, mọi định dạng sao kê hoặc kết nối n8n hoàn chỉnh.' },
          ],
        },
        {
          label: 'Ghi nhận',
          cards: [
            { kind: 'have', title: 'Quản lý thu–chi và nhiều tài khoản', body: 'Ghi nhận, tra cứu giao dịch trên nhiều tài khoản. Chưa kết nối ngân hàng tự động hay bảo đảm số dư theo thời gian thực.' },
            { kind: 'have', title: 'Giao dịch định kỳ và khoản dự kiến', body: 'Theo dõi nghĩa vụ sắp đến hạn. Dự kiến tính từ dữ liệu khai báo, không phải dự đoán bằng AI.' },
          ],
        },
        {
          label: 'Lập kế hoạch',
          cards: [
            { kind: 'partial', title: 'Ngân sách và cảnh báo vượt hạn mức', body: 'Có xử lý phía máy chủ, chưa có luồng sử dụng hoàn chỉnh. Cảnh báo email, đẩy và tự động chưa được xác nhận là đang hoạt động.' },
            { kind: 'partial', title: 'Lập kế hoạch chi tiêu', body: 'Dựa trên giao dịch định kỳ và khoản dự kiến. Chưa hình thành quy trình lập kế hoạch toàn diện.' },
          ],
        },
      ],
    },
    aiNative: {
      title: 'AI-native: hiểu ngữ cảnh, làm việc có giới hạn',
      intro: 'Đưa tác nhân AI vào quy trình tài chính, không chỉ thêm khung trò chuyện — nguyên tắc thiết kế đề xuất, chưa phải năng lực đang hoạt động.',
      caption: 'Minh họa nguyên tắc đề xuất: chỉ bạn duyệt thay đổi vào sổ.',
      cards: [
        { title: 'Ngữ cảnh có nguồn để kiểm tra', body: 'Chỉ dùng dữ liệu được cho phép; mỗi nhận định nêu nguồn và phần còn thiếu, không tự suy ra số dư đã xác nhận.' },
        { title: 'Tác nhân có phạm vi công việc', body: 'Tìm giao dịch thiếu, trùng, gợi ý phân loại bằng công cụ được cấp; thiếu căn cứ thì yêu cầu kiểm tra, không tự mở rộng quyền.' },
        { title: 'Đề xuất rõ ràng, bạn duyệt thay đổi', body: 'Căn cứ, lý do và điểm chưa chắc để bạn chấp thuận, sửa hoặc từ chối. Quyền đọc không phải quyền ghi.' },
      ],
      ledger: { label: 'Sổ thu–chi', detail: 'Chỉ ghi sau khi bạn duyệt.' },
      outOfScope: { title: 'Ngoài phạm vi tác nhân', items: ['Thanh toán', 'Chuyển tiền', 'Giao dịch đầu tư', 'Lưu giữ tài sản'] },
      note: 'Không hướng tới tự động thanh toán, chuyển tiền, giao dịch đầu tư hoặc lưu giữ tài sản. AI chưa được triển khai hay đánh giá độ chính xác; đây không phải cam kết an toàn hoặc lợi nhuận.',
    },
    direction: {
      title: 'Định hướng đối chiếu và kiểm soát quy trình tự động',
      intro: 'Ưu tiên đầu tiên là chất lượng dữ liệu: đối chiếu sổ với sao kê, kèm căn cứ để bạn xác nhận.',
      caption: 'Minh họa định hướng — không phải tính năng đang hoạt động.',
      steps: [
        { label: 'Sao kê trong kỳ', detail: 'Nguồn đối chiếu do bạn cung cấp.' },
        { label: 'So với sổ theo dõi', detail: 'Cùng tài khoản, cùng kỳ.' },
        { label: 'Danh sách cần kiểm tra', detail: 'Mỗi dòng kèm lý do.' },
        { label: 'Bạn quyết định', detail: 'Giữ, điều chỉnh hoặc bỏ qua.' },
      ],
      definitions: [
        { term: 'Thiếu', meaning: 'Có trên sao kê, không có trong sổ.' },
        { term: 'Trùng lặp', meaning: 'Ghi hai lần trong sổ.' },
        { term: 'Sai lệch', meaning: 'Khác số tiền hoặc ngày.' },
      ],
      cards: [
        { kind: 'direction', title: 'Đối chiếu sao kê', body: 'Danh sách cần kiểm tra kèm căn cứ. Thiếu dữ liệu không chứng minh giao dịch không tồn tại.' },
        { kind: 'direction', title: 'Kiểm tra sai lệch trong quy trình tự động', body: 'Chỉ cảnh báo khi có nguồn đối chiếu và kỳ xác định; dữ liệu thiếu không chứng minh được độ chính xác và vẫn có thể bỏ sót.' },
        { kind: 'direction', title: 'Giao dịch cần xác minh', body: 'Phí tăng, chi lặp lại hoặc bất thường — gợi ý xác minh, không kết luận gian lận.' },
      ],
    },
    extensions: {
      title: 'Các định hướng mở rộng',
      hub: 'Sổ thu–chi TiHoMo',
      caption: 'Minh họa: nét đứt là kết nối đề xuất, chưa có lịch phát hành.',
      cards: [
        { kind: 'direction', title: 'MCP cho tác nhân AI', body: 'Truy vấn dữ liệu trong phạm vi được cấp. Chưa có máy chủ MCP.' },
        { kind: 'direction', title: 'Sự kiện kích hoạt n8n và quy trình tự động', body: 'Sự kiện khi có giao dịch, sai lệch, vượt ngân sách. Chưa có cơ chế tích hợp công bố.' },
        { kind: 'direction', title: 'Kết nối công cụ quản lý thu–chi bên thứ ba', body: 'Kết nối công cụ như MISA để hạn chế nhập lặp. Chưa có tích hợp; không xác nhận quan hệ đối tác.' },
        { kind: 'direction', title: 'Theo dõi vàng, tài sản mã hóa và chứng khoán', body: 'Giá vốn, danh mục và lãi/lỗ. Không đặt lệnh hoặc lưu giữ tài sản.' },
        { kind: 'direction', title: 'Báo cáo tùy chỉnh', body: 'Theo kỳ, tài khoản hoặc nhóm chi tiêu. Chưa có công cụ.' },
        { kind: 'idea', title: 'Ý tưởng đang được xem xét', body: 'Ưu tiên nghiên cứu: danh sách kiểm tra dữ liệu, rồi gợi ý phân loại và rà soát khoản định kỳ, gồm tăng phí. Kịch bản ngân sách chỉ sau khi dữ liệu đủ tin cậy; mục tiêu tiết kiệm vẫn là ý tưởng.' },
      ],
    },
    vision: {
      title: 'Tầm nhìn sản phẩm và bằng chứng cần xây dựng',
      intro: 'Cách đánh giá từng giả thuyết trước khi xây tiếp, không phải kết quả hay cam kết.',
      compare: {
        caption: 'Khác biệt đề xuất — giả thuyết giá trị, chưa phải lợi thế cạnh tranh đã được chứng minh.',
        columns: ['Chỉ trò chuyện', 'Tác nhân có giám sát (hướng chọn)', 'Thực thi tự chủ (loại trừ)'],
        rows: [
          { label: 'Cách làm việc', cells: ['Trả lời chung, tách khỏi sổ', 'Ngữ cảnh có nguồn → đề xuất → bạn duyệt', 'AI tự ghi sổ, tự thanh toán'] },
          { label: 'Đánh đổi', cells: ['Dễ dùng; việc kiểm tra vẫn còn đó', 'Cần thiết kế quyền và công duyệt', 'Sai khó thu hồi; vượt mục tiêu kiểm soát'] },
        ],
      },
      caption: 'Minh họa thứ tự cổng bằng chứng: cổng sau chỉ mở khi cổng trước đạt. Không có ngày hay cam kết.',
      measureLabel: 'Đo',
      gates: [
        { title: 'Kiểm chứng chất lượng dữ liệu', body: 'Trên dữ liệu có quyền sử dụng và kết quả chuẩn; công bố phạm vi trước khi kết luận độ chính xác.', measures: ['Phát hiện đúng', 'Bỏ sót', 'Báo sai'] },
        { title: 'Đánh giá gợi ý và quyền phê duyệt', body: 'So với làm thủ công; thay đổi sổ chỉ trong phạm vi đã duyệt.', measures: ['Chấp thuận', 'Sửa', 'Từ chối', 'Thời gian'] },
        { title: 'Thử kịch bản ngân sách có căn cứ', body: 'Chỉ khi dữ liệu đủ tin cậy; giả định nêu rõ, không phải dự đoán hay lời khuyên đầu tư.', measures: ['Hiểu giả định', 'Hoàn thành kế hoạch'] },
      ],
      note: 'Chưa có kết quả đo cho các giả thuyết AI này, bằng chứng nhu cầu thị trường hoặc số liệu tăng trưởng được công bố trên trang. Các mốc không có thời hạn cam kết; cần chính sách dữ liệu được phê duyệt trước khi thử nghiệm với dữ liệu tài chính người dùng.',
    },
    faq: {
      title: 'Câu hỏi thường gặp và thông tin minh bạch',
      items: [
        {
          question: 'TiHoMo đã được phát hành chưa?',
          answer:
            'Chưa. Ứng dụng đang được phát triển, chưa phát hành công khai và chưa có lịch ra mắt. Trang này giới thiệu bối cảnh, nền tảng mã nguồn hiện có và các định hướng đang được xem xét.',
        },
        {
          question: '“Nền tảng hiện có” có đồng nghĩa với sẵn sàng sử dụng?',
          answer:
            'Không. Nhãn này xác nhận hạng mục đã có mã nguồn, không xác nhận kết quả kiểm chứng đầu–cuối hoặc khả năng sử dụng cho người dùng bên ngoài. Vì vậy, nhãn luôn kèm trạng thái “chưa phát hành”.',
        },
        {
          question: '“Định hướng phát triển” có phải cam kết ra mắt tính năng?',
          answer:
            'Không. Đây là các khả năng được đề xuất, chưa có cam kết về thời điểm hoặc phạm vi triển khai. Định hướng có thể thay đổi hoặc không được thực hiện.',
        },
        {
          question: 'Đối chiếu sao kê bằng AI đã được triển khai hoặc kiểm chứng chưa?',
          answer:
            'Chưa. Đối chiếu bằng AI và các năng lực tác nhân AI được mô tả trên trang chưa được triển khai hoặc kiểm chứng, nên chưa có số liệu đánh giá độ chính xác. TiHoMo không cam kết chính xác tuyệt đối. Định hướng là trình bày giao dịch cần kiểm tra kèm lý do để người dùng xác nhận, không tự điều chỉnh dữ liệu thay người dùng.',
        },
        {
          question: 'TiHoMo có kết nối với ngân hàng, MISA hoặc n8n không?',
          answer:
            'Chưa. Hạng mục đã có mã nguồn là nhập dữ liệu từ tệp Excel. Kết nối tự động với ngân hàng, công cụ quản lý thu–chi bên thứ ba hoặc công cụ tự động hóa mới là định hướng phát triển.',
        },
        {
          question: 'Trang này có thu thập thông tin cá nhân không?',
          answer:
            'Không. Trang không có biểu mẫu, không yêu cầu tài khoản hoặc email và không sử dụng công cụ phân tích truy cập, quảng cáo hoặc cookie theo dõi.',
        },
        {
          question: 'Có thể đăng ký nhận thông báo khi ứng dụng ra mắt không?',
          answer:
            'Hiện chưa mở kênh đăng ký hoặc liên hệ để nhận thông báo. Khi có kênh chính thức, thông tin sẽ được cập nhật tại đây.',
        },
        {
          question: 'Ứng dụng sẽ xử lý dữ liệu tài chính như thế nào?',
          answer:
            'Chưa có chính sách dữ liệu được phê duyệt để công bố. Vì vậy, trang này không đưa ra cam kết về cách ứng dụng sẽ xử lý dữ liệu. Không cung cấp sao kê hoặc thông tin đăng nhập ngân hàng dựa trên nội dung giới thiệu này.',
        },
        {
          question: 'Các bài hướng dẫn có mô tả cách sử dụng TiHoMo không?',
          answer:
            'Không. Các bài trình bày phương pháp thủ công áp dụng với sổ theo dõi, bảng tính hoặc ứng dụng bất kỳ. Mỗi bài có nguồn tham khảo và ngày cập nhật riêng.',
        },
        {
          question: 'AI-native có nghĩa là gì với TiHoMo?',
          answer:
            'Đây là định hướng thiết kế AI như một phần của quy trình tài chính: dùng ngữ cảnh có nguồn, thực hiện công việc qua công cụ có giới hạn và giải thích đề xuất để người dùng duyệt. Không chỉ là khung trò chuyện hoặc kết nối AI bổ sung, và không có nghĩa TiHoMo hiện đã có AI hoạt động.',
        },
        {
          question: 'Tác nhân AI có được tự sửa sổ, chuyển tiền hoặc giao dịch đầu tư không?',
          answer:
            'Không theo định hướng này. Quyền đọc hoặc phân tích không cho phép tự sửa sổ thu–chi: người dùng cần xem thay đổi dự kiến và căn cứ, rồi chấp thuận, sửa hoặc từ chối trước khi ghi nhận. Thanh toán, chuyển tiền, đặt lệnh đầu tư và lưu giữ tài sản không thuộc phạm vi tác nhân được đề xuất. Cơ chế phê duyệt này cũng chưa được triển khai hoặc kiểm chứng.',
        },
      ],
    },
    closing: {
      title: 'Tìm hiểu hướng AI hỗ trợ, bạn kiểm soát',
      body: 'Khám phá định hướng AI-native hoặc bắt đầu từ các hướng dẫn quản lý thu–chi nhiều tài khoản.',
    },
  },
  en: {
    title: 'TiHoMo — AI-native personal finance, controlled by you',
    description:
      'TiHoMo is developing AI-native personal finance: source-grounded assistance, with changes approved by you. Not publicly available; AI is not yet implemented.',
    primaryCta: 'Explore product direction',
    secondaryCta: 'Read financial management guides',
    hero: {
      prelaunch: 'In development · Not publicly available',
      headline: 'Personal finance, assisted by AI. Controlled by you.',
      lead: 'TiHoMo is developing an AI-native approach for people with multiple accounts. Not publicly available; AI remains a proposed direction.',
      note: 'The application is not publicly available and has no announced launch date. All content can be read without an account or registration details.',
      caption: 'Illustration of a development direction, not an operational application interface.',
    },
    bridge: 'AI grounded in your finances, not making decisions for you.',
    problem: {
      title: 'Multiple accounts require consistent financial records',
      intro: 'Records spread across accounts, e-wallets and cards add data entry and make errors harder to see.',
      cards: [
        { title: 'Manual data entry is time-consuming', body: 'Gathered and re-entered from several sources each period.' },
        { title: 'Missing, duplicate or mismatched records', body: 'They distort balances and reports.' },
        { title: 'Internal transfers misclassified as expenses', body: 'Moving money between your own accounts is not spending.' },
        { title: 'Fees and recurring payments are difficult to track', body: 'Easy to miss without a periodic review.' },
      ],
      chart: {
        title: 'Why is the ledger higher than the statement?',
        rows: ['Missing: supermarket', 'Duplicate: coffee', 'Mismatched: electricity', 'Unknown: “Digital service”'],
        totalLabel: 'Ledger minus statement',
        captionBefore: 'Illustration with educational figures from the guide',
        captionLink: 'Statement reconciliation',
        captionAfter: '. Not user data or application output.',
      },
    },
    platform: {
      title: 'Existing foundation — not publicly available',
      intro: 'Source code exists; complete user workflows and end-to-end verification are not established.',
      caption: 'Illustration of data relationships between areas; dashed outline: partial.',
      legend: [
        { kind: 'have', meaning: 'Source code exists; not verified end to end.' },
        { kind: 'partial', meaning: 'Some processing exists; no complete workflow.' },
        { kind: 'direction', meaning: 'Not implemented or verified.' },
        { kind: 'idea', meaning: 'Not selected; not a commitment.' },
      ],
      stages: [
        {
          label: 'Import',
          cards: [
            { kind: 'have', title: 'Data import from Excel files', body: 'Import transactions with a configured format. No PDF, every statement format or complete n8n connection.' },
          ],
        },
        {
          label: 'Record',
          cards: [
            { kind: 'have', title: 'Income, expenses and multiple accounts', body: 'Record and retrieve transactions across accounts. No automatic bank connection or guaranteed real-time balance.' },
            { kind: 'have', title: 'Recurring transactions and planned entries', body: 'Track upcoming obligations. Projections come from entered data, not AI predictions.' },
          ],
        },
        {
          label: 'Plan',
          cards: [
            { kind: 'partial', title: 'Budgets and overspending alerts', body: 'A server-side foundation exists without complete user workflows. Email, push and automated alerts have not been verified as operational.' },
            { kind: 'partial', title: 'Spending plans', body: 'Builds on recurring and planned entries. A comprehensive spending-planning workflow has not been implemented.' },
          ],
        },
      ],
    },
    aiNative: {
      title: 'AI-native: financial context, bounded assistance',
      intro: 'Make AI agents part of financial workflows, not just add a chat box — proposed design principles, not operational capabilities.',
      caption: 'Illustration of a proposed principle: only you approve ledger changes.',
      cards: [
        { title: 'Context with sources you can check', body: 'Uses only permitted data; each finding names its sources and missing data rather than inferring a confirmed balance.' },
        { title: 'Agents with a defined scope', body: 'Finds missing or duplicate entries and suggests categories with permitted tools; asks for review instead of expanding its own permissions.' },
        { title: 'Explain proposals, approve changes', body: 'Evidence, reasoning and uncertainty so you can approve, amend or reject. Read access is not permission to write.' },
      ],
      ledger: { label: 'Ledger', detail: 'Written only after your approval.' },
      outOfScope: { title: 'Outside agent scope', items: ['Payments', 'Transfers', 'Investment trades', 'Asset custody'] },
      note: 'Automatic payments, transfers, investment trades and asset custody are not part of this direction. AI has not been implemented or assessed for accuracy; this is not a safety or investment-return guarantee.',
    },
    direction: {
      title: 'Development direction: reconciliation and automation oversight',
      intro: 'The first priority is data quality: reconcile the ledger with statements, with evidence for your confirmation.',
      caption: 'Development illustration — not an operational feature.',
      steps: [
        { label: 'Period statement', detail: 'The source you supply.' },
        { label: 'Compare with the ledger', detail: 'Same account, same period.' },
        { label: 'Review list', detail: 'Each entry with its reason.' },
        { label: 'You decide', detail: 'Retain, adjust or disregard.' },
      ],
      definitions: [
        { term: 'Missing', meaning: 'On the statement, not in the ledger.' },
        { term: 'Duplicate', meaning: 'Recorded twice.' },
        { term: 'Mismatched', meaning: 'Different amount or date.' },
      ],
      cards: [
        { kind: 'direction', title: 'Statement reconciliation', body: 'A review list with evidence. Missing data does not prove a transaction does not exist.' },
        { kind: 'direction', title: 'Discrepancy checks for automated workflows', body: 'Alerts only with a reconciliation source and defined period; incomplete data cannot establish accuracy, and issues may be missed.' },
        { kind: 'direction', title: 'Transactions requiring verification', body: 'Fee increases, repeated or unusual spending — prompts to verify, not findings of fraud.' },
      ],
    },
    extensions: {
      title: 'Additional development directions',
      hub: 'TiHoMo ledger',
      caption: 'Illustration: dashed links are proposed connections with no release schedule.',
      cards: [
        { kind: 'direction', title: 'MCP for AI agents', body: 'Query data within granted permissions. No MCP server yet.' },
        { kind: 'direction', title: 'Events for n8n and automated workflows', body: 'Events on transactions, discrepancies or overruns. No public integration.' },
        { kind: 'direction', title: 'Third-party financial record integrations', body: 'Connect tools such as MISA to reduce re-entry. No integration exists; no partnership is confirmed.' },
        { kind: 'direction', title: 'Gold, cryptoasset and securities tracking', body: 'Cost basis, portfolio and profit or loss. No order placement or asset custody.' },
        { kind: 'direction', title: 'Custom reports', body: 'By period, account or category. No report builder yet.' },
        { kind: 'idea', title: 'Concepts under consideration', body: 'Research priority: a data-review list, then category suggestions and recurring-item reviews, including fee increases. Budget scenarios only after reliable data; savings goals remain an idea.' },
      ],
    },
    vision: {
      title: 'Product vision and the evidence still to build',
      intro: 'How each hypothesis could be evaluated before further building, not results or commitments.',
      compare: {
        caption: 'Proposed distinction — a value hypothesis, not a proven competitive advantage.',
        columns: ['Chat only', 'Supervised agent (chosen)', 'Autonomous execution (excluded)'],
        rows: [
          { label: 'How it works', cells: ['General answers, separate from records', 'Sourced context → proposal → your approval', 'AI writes records and pays on its own'] },
          { label: 'Trade-off', cells: ['Easy to use; the review work remains', 'Needs permission design and review effort', 'Hard-to-reverse errors; beyond user control'] },
        ],
      },
      caption: 'Illustration of evidence gates in order: a gate opens only after the previous one passes. No dates or commitments.',
      measureLabel: 'Measure',
      gates: [
        { title: 'Validate data quality', body: 'Reconcile authorised, labelled data; report scope and limits before any accuracy claim.', measures: ['Correct detections', 'Missed issues', 'False alerts'] },
        { title: 'Evaluate suggestions and approval', body: 'Test category suggestions and recurring reviews against manual work; ledger changes only within approved scope.', measures: ['Accepted', 'Corrected', 'Rejected', 'Review time'] },
        { title: 'Test source-grounded budget scenarios', body: 'Only after reliable data: scenarios from recurring obligations and explicit assumptions, not predictions or investment advice.', measures: ['Understands assumptions', 'Completes a plan'] },
      ],
      note: 'This site reports no measured results for these AI hypotheses, market-demand evidence or growth figures. The milestones have no committed dates; an approved data policy is needed before trials with users’ financial data.',
    },
    faq: {
      title: 'Frequently asked questions and transparency',
      items: [
        {
          question: 'Has TiHoMo been released?',
          answer:
            'No. The application is in development, is not publicly available and has no announced launch date. This site describes the context, existing source-code foundations and development directions under consideration.',
        },
        {
          question: 'Does “Existing foundation” mean the application is ready to use?',
          answer:
            'No. This label confirms that source code exists for an area, not end-to-end verification or availability to external users. It is therefore always accompanied by “not publicly available”.',
        },
        {
          question: 'Does “Development direction” represent a release commitment?',
          answer:
            'No. These are proposed capabilities without committed implementation dates or scope. Development directions may change or may not be implemented.',
        },
        {
          question: 'Has AI-assisted statement reconciliation been implemented or validated?',
          answer:
            'No. AI reconciliation and the agent capabilities described here have not been implemented or validated, so no accuracy assessment is available. TiHoMo does not claim perfect accuracy. The proposed approach presents entries requiring review with supporting reasons for user confirmation, rather than modifying records on the user’s behalf.',
        },
        {
          question: 'Does TiHoMo connect to banks, MISA or n8n?',
          answer:
            'Not currently. Source code exists for data import from Excel files. Automatic connections to banks, third-party financial record tools or automation tools remain development directions.',
        },
        {
          question: 'Does this site collect personal information?',
          answer:
            'No. The site has no forms, does not require an account or email address, and does not use analytics, advertising or tracking cookies.',
        },
        {
          question: 'Can I register for launch notifications?',
          answer:
            'No registration or contact channel has been opened for launch notifications. Details will be provided here when an official channel is available.',
        },
        {
          question: 'How will the application process financial data?',
          answer:
            'No data policy has been approved for publication. This site therefore makes no commitments about how the application will process data. Do not provide statements or bank login details based on this introductory material.',
        },
        {
          question: 'Do the guides explain how to use TiHoMo?',
          answer:
            'No. The articles explain manual methods that can be applied with a ledger, spreadsheet or any application. Each article includes its own references and update date.',
        },
        {
          question: 'What does AI-native mean for TiHoMo?',
          answer:
            'It is a design direction that makes AI part of financial workflows: use source-grounded context, perform tasks through bounded tools and explain proposals for user approval. It means more than a chat box or an additional AI integration, and does not mean TiHoMo already has operational AI.',
        },
        {
          question: 'Can AI agents change records, transfer money or trade investments on their own?',
          answer:
            'Not under this proposed direction. Permission to read or analyse would not permit independent ledger changes: users would review intended changes and evidence, then approve, amend or reject them before they are recorded. Payments, transfers, investment orders and asset custody are outside the proposed agent scope. This approval mechanism has not been implemented or validated either.',
        },
      ],
    },
    closing: {
      title: 'Explore AI assistance under your control',
      body: 'Explore TiHoMo’s AI-native direction or start with practical methods for managing finances across accounts. All content can be read without registration.',
    },
  },
};
