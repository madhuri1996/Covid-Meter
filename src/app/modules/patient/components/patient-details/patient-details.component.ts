import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientsService } from 'src/app/services/patients.service';
export interface UserDetails {
  id: string,
  name: string,
  mobileNumber: string
}
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  displayedColumns : Array<string>= ['Name','Mobile Number' ];
  searchName:string;
  modalRef:NgbModalRef;
  dataSource: Array<UserDetails> = [
    {
      id:'1',
      name: 'Steve ',
      mobileNumber: '87654323456',
    },
    {
      id:'1',
      name: 'Morgon',
      mobileNumber: '98765435655',
    },
    {
      id:'1',
      name: 'Steve Morgon',
      mobileNumber: '98765433456',
    }
  ];

  constructor(private modalService: NgbModal,private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientsService.getPatients().subscribe(res => {
      const data:any = res;
      this.dataSource = data;
    },err => {
      console.log("err",err);
    })
  }

  openModal(add:NgbModal) {
    this.modalRef = this.modalService.open(add, { centered: true, size: 'md', backdrop: 'static', keyboard : false });
  }

  search() {
    console.log(this.searchName);
  }

  addedPatient() {
    this.getPatients();
  }

  closeModal() {
    this.modalRef.close();
  }

}
