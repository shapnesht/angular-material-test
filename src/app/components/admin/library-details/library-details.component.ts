import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent {
  data: any = {}
  getSelectedYear = 2029
  public constructor(private authService: AuthService) {
    this.data = authService.getUserDetails();
    this.getSelectedYear = new Date().getFullYear()
  }
  // Pie Chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Book Left', 'Issued Book', 'Most Borrowed Book'];
  public pieChartTeacherDatasets = [{
    data: [70, 273, 133]
  }];

}
