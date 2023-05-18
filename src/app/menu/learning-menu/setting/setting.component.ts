import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ColorSchemesService } from '../../../color-schemes.service';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  public global = [{ 'id': 'global', 'name': 'Company' }];

  public course = [
    { 'id': 2, 'name': 'Course Classification' },
    { 'id': 3, 'name': 'Vendor' },
    { 'id': 4, 'name': 'Subsidy' },
    { 'id': 5, 'name': 'Absent Remarks' },
    { 'id': 6, 'name': 'Course Expenses' },
    { 'id': 7, 'name': 'Bond Enquiry Leave Code' },
    { 'id': 8, 'name': 'Feedback Form Template' },
    { 'id': 9, 'name': 'CPD Hours Target' },
    { 'id': 10, 'name': 'Maximum Course' },
    { 'id': 11, 'name': 'Announcements' }
  ];

  public competency = [
    { 'id': 12, 'name': 'Competency Mapping' },
    { 'id': 13, 'name': 'Competency' },
    { 'id': 'lna-content', 'name': 'Learning Needs' },
    { 'id': 'lna-content-kendo', 'name': 'Learning Needs - K' },
    { 'id': 15, 'name': 'Job Grade Matrix' }
  ];

  public currency = [
    { 'id': 16, 'name': 'Currency' },
    { 'id': 17, 'name': 'Currency Rate' },
  ];

  public budget = [
    { 'id': 18, 'name': 'Budget Control Setup' },
    { 'id': 19, 'name': 'Manage Budget' },
  ];

  public access = [
    { 'id': 20, 'name': 'Training Access Rights' },
    { 'id': 21, 'name': 'Course Type' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private colorSchemes: ColorSchemesService
  ) { }

  public selectedId;
  runTheme = 'Blue';
  themeFilters: any;
  

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

      this.colorSchemes.data$.subscribe(data => {
        this.runTheme = data;
        this.changeTheme();
      })
    });
  }

  onSelect(selection) {
    this.router.navigate(['homepage', selection.id], { relativeTo: this.route });
  }
  isSelected(selection) {
    return selection.id === this.selectedId
  }

  changeTheme() {
    this.themeFilters = {
      "blue-filter": this.runTheme === 'Blue',
      "green-filter": this.runTheme === 'Green',
      "red-filter": this.runTheme === 'Red',
      "hydrangea-filter": this.runTheme === 'Hydrangea',
      "sakura-filter": this.runTheme === 'Sakura',
      "lavender-filter": this.runTheme === 'Lavender',
      "mediterranean-filter": this.runTheme === 'Mediterranean',
      "industrial-filter": this.runTheme === 'Industrial',
      "minimalist-filter": this.runTheme === 'Minimalist',
      "bohemian-filter": this.runTheme === 'Bohemian',
      "forest-filter": this.runTheme === 'Forest',
      "beach-filter": this.runTheme === 'Beach',
      "sea-filter": this.runTheme === 'Sea',
      "spring-filter": this.runTheme === 'Spring',
      "winter-filter": this.runTheme === 'Winter',
      "summer-filter": this.runTheme === 'Summer',
      "autumn-filter": this.runTheme === 'Autumn'
    }
  }
}
