import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  dataLoaded:boolean=false;
  currentCategory:Category={categoryId:0,categoryName:""};

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategory().subscribe(response=>{
      this.categories=response.data;
      this.dataLoaded=true;
    })
  }

  resetCurrentCategory(){
    this.currentCategory={categoryId:0,categoryName:""};
  }

  setCurrentCategory(category:Category){
      this.currentCategory=category;
  }

  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

}
