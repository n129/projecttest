import { Plan } from './../store/plan.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { PlanService } from '../store/plan.service';

@Component({
  selector: 'app-upload-plan',
  templateUrl: './upload-plan.component.html'
})
export class UploadPlanComponent implements OnInit {
  plan:Plan;

  @ViewChild('fileInput1') fileInput1;
  @ViewChild('fileInput2') fileInput2;
  @ViewChild('fileInput3') fileInput3;

  constructor(private planService:PlanService) {
   this.plan = new Plan();
   }

  ngOnInit() {

  }

  onSubmit(){
    let temp:FormData[] = [];
    let fileBrowser1 = this.fileInput1.nativeElement;
    let fileBrowser2 = this.fileInput2.nativeElement;
    let fileBrowser3 = this.fileInput3.nativeElement;
    const formData = new FormData();
    if (fileBrowser1.files && fileBrowser1.files[0]) {
      formData.append("image", fileBrowser1.files[0]);
    }
    if (fileBrowser2.files && fileBrowser2.files[0]) {
      formData.append("image", fileBrowser2.files[0]);
    }
    if (fileBrowser3.files && fileBrowser3.files[0]) {
      formData.append("image", fileBrowser3.files[0]);
    }
    this.planService.savePlan(this.plan, formData);
  }

}
