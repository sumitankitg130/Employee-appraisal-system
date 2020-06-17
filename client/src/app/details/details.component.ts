import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { Detail } from '../detail'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DetailService]
})
export class DetailsComponent implements OnInit {
  details: Detail[];
  detail: Detail;
  emp_id: string;
  first_name: string;
  last_name: string;
  mark1: number;
  mark2: number;
  mark3: number;
  mark4: number;
  mark5: number;

  constructor(private detailService: DetailService) { }

  addDetail()
  {
    const newDetail={
      emp_id:this.emp_id,
      first_name:this.first_name,
      last_name:this.last_name,
      mark1:this.mark1,
      mark2:this.mark2,
      mark3:this.mark3,
      mark4:this.mark4,
      mark5:this.mark5,

    }

    this.detailService.addDetail(newDetail)
    .subscribe(detail => {
      this.details.push(detail)
      this.detailService.getDetails()
      .subscribe(details =>
        this.details = details);
    });
    
  }

  deleteDetail(id: any) {
    var details = this.details;

    this.detailService.deleteDetail(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < details.length; i++) {
            if (details[i]._id == id) {
              details.splice(i, 1);
            }
          }
        }

      });
  }

  ngOnInit(): void {
    this.detailService.getDetails()
      .subscribe(details =>
        this.details = details);
  }

}
