import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss'],
})
export class AddClassComponent {
  data = {
    name: '',
    semester: '',
    brach:''
  };

  semesters = [1, 2, 3, 4, 5, 6, 7, 8]
  branches = ["IT", "EC", "EE", "CE", "ME"]

  // private constructor(private snack:MatSnackBar) {}

  ngOnInit(): void {}

  // formSubmit() {
  //   if (this.data.title == null || this.data.title.trim() == '') {
  //     this.snack.open('Category Name Should not be empty!!', '', {
  //       duration: 2000,
  //     });
  //     return;
  //   }
  //   if (this.data.description == null || this.data.description.trim() == '') {
  //     this.snack.open('Description Should not be empty!!', '', {
  //       duration: 2000,
  //     });
  //     return;
  //   }
  //   this.category.addCategory(this.data).subscribe(
  //     (success: any) => {
  //       Swal.fire(
  //         'Success!!',
  //         'Category was successfully added with id : ' + success.categoryId,
  //         'success'
  //       );
  //     },
  //     (error: any) => {
  //       Swal.fire('Error!!', 'Server Error, Please Try Again Later', error);
  //     }
  //   );
  // }
}
