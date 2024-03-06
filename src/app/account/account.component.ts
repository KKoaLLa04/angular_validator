import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  userForm = new FormGroup({
      firstname: new FormControl('default', Validators.required),
      lastname: new FormControl('default', Validators.required),
      age: new FormControl(10,[Validators.required, Validators.pattern('^[0-9]+$')]),
      email: new FormControl('default', [Validators.required, Validators.email]),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', [Validators.required, Validators.pattern('^[0,1]$')]),
      work: new FormControl('default', Validators.required),
      username: new FormControl('default', Validators.required),
  })

  onSubmit(){
    console.log(this.userForm.value);
  }
}
