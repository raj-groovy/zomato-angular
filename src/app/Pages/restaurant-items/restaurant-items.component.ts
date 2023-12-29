import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MasterService } from "../../services/master.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-restaurant-items",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./restaurant-items.component.html",
  styleUrl: "./restaurant-items.component.css",
})
export class RestaurantItemsComponent {
  items: any[] = [];
  constructor(
    private activate: ActivatedRoute,
    private masterSrv: MasterService,
    private router: Router
  ) {
    this.activate.params.subscribe((params: any) => {
      console.log(params);
      this.getItemsByRestaBYCategoryName(params?.categoryname);
    });
  }

  getItemsByRestaBYCategoryName(name: string) {
    this.masterSrv.getItemsByRestaBYCategoryName(name).subscribe((res: any) => {
      this.items = res?.data;
    });
  }

  navigate(item: string) {
    console.log(item);
    const loggedData = localStorage.getItem("zomatoUser");
    console.log("loggedData", loggedData);

    if (!!loggedData) {
      console.log("loggedData");
      this.router.navigate(["/restaurant-items", item]);
    } else {
      console.log("Not loggedData");
      this.router.navigate(["/login"]);
    }
  }
}
