import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
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
  public pieChartLabels = ['IT', 'EC', 'ME', 'CE', 'EE'];
  public pieChartStudentDatasets = [{
    data: [300, 273, 213, 224, 199]
  }];
  public pieChartTeacherDatasets = [{
    data: [5, 12, 13, 9, 4]
  }];

}
