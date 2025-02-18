import { ChangeDetectionStrategy, Component, computed, inject, model, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@Component({
    selector: 'app-add-product',
    imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,FormsModule,MatAutocompleteModule,MatChipsModule,MatIconModule, ReactiveFormsModule],
    standalone:true,
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
    myFilter = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
      };

      toppings = new FormControl('');

      toppingList: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];

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
}
