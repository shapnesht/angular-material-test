import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.scss'],
})
export class LibraryDashboardComponent {
  data: any = {};
  getSelectedYear = 2029;
  public constructor(private authService: AuthService) {
    this.data = authService.getUserDetails();
    this.getSelectedYear = new Date().getFullYear();
  }
  // Pie Chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Book Left', 'Issued Book'];
  public pieChartTeacherDatasets = [
    {
      data: [70, 273],
    },
  ];
}
