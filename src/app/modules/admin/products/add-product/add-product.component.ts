import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from '../../../../libs/components/image-upload/image-upload.component';
import { ButtonComponent } from '../../../../libs/components/utilities/button/button.component';
import { BreadcrumbsComponent } from '../../../../libs/components/utilities/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-add-product',
    imports: [BreadcrumbsComponent,ImageUploadComponent,CommonModule, MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,FormsModule,MatAutocompleteModule,MatChipsModule,MatIconModule, ReactiveFormsModule,ButtonComponent],
    standalone:true,
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit{
  form!: FormGroup;

  images:any = [];
  isDragOver = false;
    myFilter = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
      };

      toppings = new FormControl('');

      toppingList: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];

      constructor(private cdr: ChangeDetectorRef) {}

      readonly separatorKeysCodes: number[] = [ENTER, COMMA];
      readonly currentFruit = model('');
      readonly fruits = signal(['Lemon']);
      readonly allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
      readonly filteredFruits = computed(() => {
        const currentFruit = this.currentFruit().toLowerCase();
        return currentFruit
          ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit))
          : this.allFruits.slice();
      });
    
      readonly announcer = inject(LiveAnnouncer);

      ngOnInit(): void {
        this.form = new FormGroup({
          images: new FormControl([])
        });
      }
    
      add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
    
        // Add our fruit
        if (value) {
          this.fruits.update(fruits => [...fruits, value]);
        }
    
        // Clear the input value
        this.currentFruit.set('');
      }
    
      remove(fruit: string): void {
        this.fruits.update(fruits => {
          const index = fruits.indexOf(fruit);
          if (index < 0) {
            return fruits;
          }
    
          fruits.splice(index, 1);
          this.announcer.announce(`Removed ${fruit}`);
          return [...fruits];
        });
      }
    
      selected(event: MatAutocompleteSelectedEvent): void {
        this.fruits.update(fruits => [...fruits, event.option.viewValue]);
        this.currentFruit.set('');
        event.option.deselect();
      }

   
    
      // Handle file input change event
      onFileSelected(event: any): void {
        const files: FileList = event.target.files;
        if (files) {
          this.handleFiles(files);
        }
      }
    


      private handleFiles(files: FileList): void {
        Array.from(files).forEach((file: File) => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              this.images.push(e.target.result);
              console.log('Image loaded. Current images:', [...this.images]);
              // Trigger change detection manually
              this.cdr.detectChanges();
            };
            reader.readAsDataURL(file);
          }
        });
      }
    
      // Prevent default behavior when file is dragged over
      onDragOver(event: DragEvent): void {
        event.preventDefault();
        this.isDragOver = true;
      }
    
      // Remove drag over state when leaving the drop area
      onDragLeave(event: DragEvent): void {
        event.preventDefault();
        this.isDragOver = false;
      }
    
      // Handle drop event for drag-and-drop
      onDrop(event: DragEvent): void {
        event.preventDefault();
        this.isDragOver = false;
        if (event.dataTransfer?.files) {
          this.handleFiles(event.dataTransfer.files);
        }
      }

      onSubmit(): void {
        console.log('Form Value:', this.form.value);
      }


      handleButtonClick(event: Event): void {
        console.log('Button clicked!', event);
      }

      handleCancelClick(event: Event): void {
        console.log('Button clicked!', event);
      }
      
      
}
