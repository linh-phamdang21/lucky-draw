import {Injectable, OnInit} from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

export const accounts = [
  {
    email: 'tranglt73@fpt.com',
    account: 'tranglt73',
    name: 'Lê Thị Trang',
    background: 'background_1.png',
    wish: 'Chúc bạn mạnh khỏe, đẹp lên mỗi ngày và biến thành phiên bản siêu nữ của chính mình!'
  },
  {
    email: 'anhltn43@fpt.com',
    account: 'anhltn43',
    name: 'Lê Thị Ngọc Ánh',
    background: 'background_2.png',
    wish: 'Dù ngày hôm nay là ngày của phụ nữ, nhưng hãy để bạn luôn làm bà chúa cả năm!'
  },
  {
    email: 'giangcth3@fpt.com',
    account: 'giangcth3',
    name: 'Chu Thị Hương Giang',
    background: 'background_3.png',
    wish: '20-10 này, bạn hãy xem mình như một chai rượu ngon cùng với tuổi đời, càng lớn càng thơm ngon!'
  },
  {
    email: 'hangntt41@fpt.com',
    account: 'hangntt41',
    name: 'Nguyễn Thị Thu Hằng',
    background: 'background_4.png',
    wish: 'Chúc bạn thêm một năm xinh đẹp và tràn đầy niềm vui, để nụ cười mãi luôn rạng ngời trên môi!'
  },
  {
    email: 'huongdt111@fpt.com',
    account: 'huongdt111',
    name: 'Đỗ Thị Hương',
    background: 'background_5.png',
    wish: 'Hãy để mỗi nụ cười của bạn làm cho thế giới trở nên tươi đẹp hơn! Chúc mừng ngày của bạn!'
  },
  {
    email: 'liennt67@fpt.com',
    account: 'liennt67',
    name: 'Nguyễn Thị Liên',
    background: 'background_3.png',
    wish: 'Bạn là nhà điều hành tài năng, dẫn đầu thế giới, và luôn kiểm soát đôi giày và túi xách!'
  },
  {
    email: 'ngadt45@fpt.com',
    account: 'ngadt45',
    name: 'Đinh Thị Nga',
    background: 'background_2.png',
    wish: 'Chúc bạn mỗi ngày đều tìm thấy niềm vui trong việc mua sắm mà không bị cảm thấy tội lỗi!'
  },
  {
    email: 'ngannth20@fpt.com',
    account: 'ngannth20',
    name: 'Nguyễn Thị Hồng Ngân',
    background: 'background_4.png',
    wish: 'Bạn hãy làm một cú lùi vào tuổi 18 để nhớ những thời kỳ đáng nhớ, nhưng vẫn có sức mạnh của một người phụ nữ trưởng thành!'
  },
  {
    email: 'ngocdt48@fpt.com',
    account: 'ngocdt48',
    name: 'Đặng Thị Ngọc',
    background: 'background_5.png',
    wish: 'Ngày 20/10, hãy thả lỏng và thư giãn. Nhớ rằng bạn xứng đáng với những khoảnh khắc đáng nhớ!'
  },
  {
    email: 'nhienht3@fpt.com',
    account: 'nhienht3',
    name: 'Hà Thị Nhiên',
    background: 'background_1.png',
    wish: 'Chúc bạn luôn tìm thấy "hoàng tử" của mình, hoặc ít nhất là một ly cocktail ngon!'
  },
  {
    email: 'phuongltm12@fpt.com',
    account: 'phuongltm12',
    name: 'Lê Thị Mai Phương',
    background: 'background_4.png',
    wish: 'Đừng bao giờ quên, nụ cười của bạn là vũ khí mạnh mẽ nhất để đối phó với mọi thách thức!'
  },
  {
    email: 'phuongnt353@fpt.com',
    account: 'phuongnt353',
    name: 'Nguyễn Thị Phượng',
    background: 'background_2.png',
    wish: 'Chúc bạn có một ngày đẹp và rạng ngời như lớp makeup mới, không phai, không trôi!'
  },
  {
    email: 'thaoctt6@fpt.com',
    account: 'thaoctt6',
    name: 'Cao Thị Thu Thảo',
    background: 'background_3.png',
    wish: 'Chúc mừng bạn như một bức tranh nghệ thuật - xinh đẹp và đầy sáng tạo!'
  },
  {
    email: 'thudq@fpt.com',
    account: 'thudq',
    name: 'Đào Quỳnh Thu',
    background: 'background_1.png',
    wish: 'Chúc bạn luôn tìm thấy niềm vui trong việc tạo ra sự cân bằng giữa cuộc sống và công việc, giữa thời trang và tiền bạc!'
  },
  {
    email: 'uyenptt11@fpt.com',
    account: 'uyenptt11',
    name: 'Phạm Thị Thu Uyên',
    background: 'background_5.png',
    wish: 'Chúc mừng ngày của bạn! Hãy nhớ rằng bạn là những nữ siêu nhân thực thụ, có khả năng hoàn thành mọi nhiệm vụ!'
  },
  {
    email: 'ngadtt@fpt.com',
    account: 'ngadtt',
    name: 'Đỗ Thị Thanh Nga',
    background: 'background_2.png',
    wish: 'Chúc bạn luôn tìm thấy niềm vui trong những điều đơn giản và xinh đẹp trong cuộc sống!'
  }
  ,
  {
    email: 'vanpt18@fpt.com',
    account: 'vanpt18',
    name: 'Phạm Thị Vân',
    background: 'background_4.png',
    wish: 'Chúc bạn luôn tràn đầy năng lượng và tự tin, đối mặt mọi thách thức trong cuộc sống!'
  }
  ,
  {
    email: 'huent115@fpt.com',
    account: 'huent115',
    name: 'Nguyễn Thị Huệ',
    background: 'background_5.png',
    wish: 'Ngày của bạn! Hãy nghĩ về những thứ bạn muốn, sau đó đi và lấy chúng. Bạn xứng đáng với điều tốt đẹp'
  },
  {
    email: 'thaotp33@fpt.com',
    account: 'thaotp33',
    name: 'Tô Phương Thảo',
    background: 'background_3.png',
    wish: 'Bạn làm cho cuộc sống trở nên đẹp hơn, vui vẻ hơn, và đầy ý nghĩa hơn. Chúc bạn luôn hạnh phúc!'
  }
  ,
  {
    email: 'linhdm12@fpt.com',
    account: 'linhdm12',
    name: 'Đặng Mỹ Linh',
    background: 'background_1.png',
    wish: 'Hãy luôn thể hiện sự thông minh và mạnh mẽ của mình, bất kể bạn đang đối mặt với gì. Chúc mừng ngày của bạn!'
  },
  {
    email: 'anhltm11@fpt.com',
    account: 'anhltm11',
    name: 'Lê Thị Mai Anh',
    background: 'background_1.png',
    wish: 'Chúc mừng Ngày Phụ nữ! Mong bạn luôn có nụ cười rạng ngời và tâm hồn nhẹ nhàng như bong bóng xà phòng!'
  }
];

@Injectable()
export class DataService implements OnInit{
  defaultOpts = accounts.map(account => account.account);
  //
  // optionSource: BehaviorSubject<string[]>;
  optionSource: BehaviorSubject<string[]>;
  option$;

  winnersSource: BehaviorSubject<string[]>;
  winner$: Observable<string[]>;

  constructor() {
    this.optionSource = new BehaviorSubject(this.getOptions());
    this.option$ = this.optionSource.asObservable();

    this.winnersSource = new BehaviorSubject([]);
    this.winner$ = this.winnersSource.asObservable();
  }

  ngOnInit() {
    console.log('total: ', accounts.length);
  }

  addNewOption(value) {
    const currentOpts = [...this.optionSource.getValue()];
    currentOpts.push(value);
    this.optionSource.next(currentOpts);
    this.persistOptions();
  }

  deleteNewOption(value) {
    const currentOpts = this.optionSource.getValue();
    this.optionSource.next(currentOpts.filter(opts => opts !== value));
    this.persistOptions();
  }

  addWinner(value) {
    let winners = this.winnersSource.getValue();
    winners = [...winners, value];
    this.winnersSource.next(winners);
  }

  restartWinners() {
    this.winnersSource.next([]);
  }

  persistOptions() {
    localStorage.setItem("OPTS", JSON.stringify(this.optionSource.getValue()));
  }

  getOptions(): string[] {
    const value = localStorage.getItem("OPTS");
    return value ? JSON.parse(value) : this.defaultOpts;
  }

  resetToDefault() {
    this.optionSource.next(this.defaultOpts);
  }
}
