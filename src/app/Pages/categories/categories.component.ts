import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  imports: [CommonModule],
})
export class CategoriesComponent implements OnInit {
  categoryList: any[] = [];
  loader: boolean = false;

  constructor(private masterSrv: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllFoodCategories();
  }

  loadAllFoodCategories() {
    this.loader = true;
    this.masterSrv.getAllFoodCategory().subscribe((res: any) => {
      let newList = res.data.filter(
        (item: any) => item.categoryName !== 'string'
      );

      console.log(newList);
      console.log(res.data, 'data');
      this.loader = false;
      this.categoryList = newList;
    });
  }

  navigate(item: string) {
    this.router.navigate(['/restaurant-items', item]);
  }
}
