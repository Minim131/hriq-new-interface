import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  public selectedId;

  onSelect(selection) {
    this.router.navigate(['homepage', selection.id], { relativeTo: this.route });
  }
  isSelected(selection) {
    return selection.id === this.selectedId
  }

}
