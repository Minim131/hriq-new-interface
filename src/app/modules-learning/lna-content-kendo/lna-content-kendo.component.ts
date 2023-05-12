import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridComponent, FilterableSettings } from "@progress/kendo-angular-grid";
import { Router, ActivatedRoute } from '@angular/router'
import { ColorSchemesService } from "../../color-schemes.service";
import { CustomersService } from "./customers.service";
import { Customers } from "./customers";
import { Model } from "./model";

@Component({
    selector: "app-lna-content-kendo",
    templateUrl: "./lna-content-kendo.component.html",
    styleUrls: ["./lna-content-kendo.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class LnaContentKendoComponent{
    public gridData: Model[] = Customers;
    public data = Customers;
    public filterMode: FilterableSettings = "menu";

    @ViewChild(GridComponent)
    public grid: GridComponent;



    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorSchemes: ColorSchemesService,
      private customerService: CustomersService,
    ) {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
    })
/*      const data = this.customerService.getCustomerData();
      data.subscribe({
        next: (data: string)=> {
          this.dataCustomer=data
      },
      error: (err: any) => {
        console.log(err);
      }
        })
      })*/
}

    public isCollapsed = false;

    textShow = false;

    public value = 5;
    public autoCorrect = false
  
  coursesInterested() {
      this.router.navigate(['courses-interested'], { relativeTo: this.route })
    }


/*  customerData: Customers[];

  getCustomers() {
    this.customerService.getCustomers().then(data => this.customerData = data)
  }
  ngOnInit() {
    this.getCustomers();
  }
  public gap = this.customerData.Gap;*/


  /*  customerData: any;*/
  public customerData = Customers


  runTheme: any;

/*  assignRed(gap) {
    if (gap < 0)
      return true;
  console.log(gap)
    }*/



/*  function changeTemplate(value) {
  console.log(value < 0);
  if (value < 0)
    return true;
  else
      return false;

}*/
}
