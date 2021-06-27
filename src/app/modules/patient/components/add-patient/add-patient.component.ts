import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  @Output() addPatient = new EventEmitter();
  @Output() close = new EventEmitter();

  addPatientForm: FormGroup;
  
  constructor(private fb: FormBuilder,private patientsServce:PatientsService) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.addPatientForm = this.fb.group({
      name:  ['', [Validators.required]],
      contactNumber:['',[Validators.required]]
    });
  }

  addPatientDetails(patientDetails){
   this.patientsServce.addPatient(patientDetails.value.name,patientDetails.value.contactNumber).subscribe(res => {
      console.log("res",res);
      this.addPatient.emit();
   },err => {
     console.log("Err",err);
   })
    // this.addPatient.emit();
  }

  cancel() {
    this.close.emit();
  }

}
