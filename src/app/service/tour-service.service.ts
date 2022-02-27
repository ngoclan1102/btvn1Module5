import { Injectable } from '@angular/core';
import {Tour} from "../model/tour";

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  tours : Tour[] = [
    {id : 1,name : "Sa Pa" , price : 20000000,description : "Thị trấn Sapa xinh đẹp có cảnh quan thiên nhiên hùng vĩ, được ví von là nơi hội tụ giữa đất và trời, thời tiết sapa rất độc đáo với bốn mùa trong một ngày. Đi du lịch Sapa sẽ mang lại cho bạn những trải nghiệm đặc biệt không thể nào quên về cảnh sắc và văn hóa người dân tộc bản địa."},
    {id : 2,name : "Ninh Bình" , price : 16000000,description : "Được mệnh danh là vùng đất Cố Đô hiện nay du lịch Ninh Bình trở thành điểm đến nổi tiếng của Việt Nam. Không chỉ mỗi khách du lịch trong nước đến đây mà hàng năm còn hút cả triệu khách du lịch quốc tế đến tham quan. Mọi người khi đến Ninh Bình đều không khỏi trầm trồ và ngỡ ngàng bởi vẻ đẹp của những danh lam thắng nổi tiếng như Chùa Bái Đính, Tràng An, núi Non NướcTam cốc – Bích động … và còn rất nhiều các địa điểm hút khách nữa."},
    {id : 3,name : "Hà Giang" , price : 19000000,description : "Hà Giang – một miền đất hứa với bao nhiêu tâm hồn của kẻ lãng tử, muốn một lần được ngao du khắp các chốn xinh đẹp như thần tiên ấy. Hà Giang – nơi mà ai cũng muốn đi, muốn ngắm nhìn cho đã sức hút của những bông hoa tam giác mạch, những con đèo ẩn chứa nét hoang dại hay chinh phục đỉnh những đỉnh núi cao vời vợi."}
  ]

  tour : Tour = new Tour(0,"",0,"")

  create (tour : Tour) {
    // let check = true;
    // for (let i = 0; i < this.tours.length; i++) {
    //   if (this.tours[i].id === tour.id){
    //     this.tours[i] = tour
    //     check = false
    //   }
    // } if (check) {
      this.tours.push(new Tour(tour.id,tour.name,tour.price,tour.description))
    // }
  }

  delete (id : number) {
    for (let i = 0; i < this.tours.length; i++) {
      if (this.tours[i].id === id) {
        this.tours.splice(i,1)
      }
    }
  }

  edit (tour : Tour) {
    for (let i = 0; i < this.tours.length; i++) {
      if (this.tours[i].id === tour.id) {
        this.tours[i] = tour
      }
    }
  }

  constructor() { }
}
